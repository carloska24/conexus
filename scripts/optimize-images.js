const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const QUALITY = 80;
const MAX_WIDTH = 1920;

// Lista de arquivos críticos identificados
const TARGET_FILES = [
  'public/videos/fitec/foto3.jpg',
  'public/videos/cadservice/foto4.jpg',
  'public/videos/fitec/foto2.jpg',
  'public/videos/cadservice/foto2.jpg',
  'public/videos/fitec/Nova pasta/foto1.jpg',
  'public/videos/fitec/Nova pasta/foto2.jpg',
  'public/videos/fitec/foto1.jpg'
];

async function optimizeImage(filePath) {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const tempPath = absolutePath + '.tmp';
  
  if (!fs.existsSync(absolutePath)) {
    console.warn(`⚠️ Arquivo não encontrado: ${filePath}`);
    return;
  }

  const fileInfo = fs.statSync(absolutePath);
  const sizeMB = fileInfo.size / (1024 * 1024);
  
  console.log(`\n📷 Otimizando: ${path.basename(filePath)} (${sizeMB.toFixed(2)} MB)`);

  try {
    // Usar uma instância sharp diretamente do arquivo para evitar carregar tudo em memória buffer
    await sharp(absolutePath)
        .resize({ 
            width: MAX_WIDTH, 
            withoutEnlargement: true,
            fit: 'inside'
        })
        .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
        .toFile(tempPath); // Salva em temp primeiro

    // Verificar se o arquivo temporário foi criado e tem tamanho > 0
    if (fs.existsSync(tempPath) && fs.statSync(tempPath).size > 0) {
        // Tentar substituir o original
        try {
            fs.unlinkSync(absolutePath); // Tenta deletar o original
            fs.renameSync(tempPath, absolutePath); // Move o novo para o lugar do antigo
            
            const newInfo = fs.statSync(absolutePath);
            const newSizeMB = newInfo.size / (1024 * 1024);
            const reduction = ((sizeMB - newSizeMB) / sizeMB * 100).toFixed(1);

            console.log(`✅ Sucesso! Novo tamanho: ${newSizeMB.toFixed(2)} MB (Redução de ${reduction}%)`);
        } catch (moveError) {
             console.error(`❌ Erro ao substituir arquivo (possível lock):`, moveError.message);
             // Tentar limpar o temp se falhou
             if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
    } else {
        console.error(`❌ Falha na compressão: Arquivo temporário vazio ou não criado.`);
    }

  } catch (error) {
    console.error(`❌ Erro sharp ao processar ${filePath}:`, error.message);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

async function main() {
  console.log('🚀 Iniciando otimização de imagens críticas...');
  for (const file of TARGET_FILES) {
    await optimizeImage(file);
  }
  console.log('\n✨ Otimização concluída!');
}

main();
