import fs from 'fs';
import path from 'path';

export type MediaType = 'image' | 'video';

export interface MediaItem {
  type: MediaType;
  url: string;
}

/**
 * Lê arquivos de mídia de qualquer pasta dentro de /public
 * @param relativePath Caminho relativo a partir de public (ex: 'backgrounds/modelo' ou 'videos/icape')
 */
export function getMediaFromFolder(relativePath: string): MediaItem[] {
  const publicDir = path.join(process.cwd(), 'public');
  const mediaDir = path.join(publicDir, relativePath);

  if (!fs.existsSync(mediaDir)) {
    return [];
  }

  const files = fs.readdirSync(mediaDir);
  
  const mediaItems: MediaItem[] = files
    .filter(file => /\.(mp4|webm|jpg|jpeg|png|webp|svg)$/i.test(file))
    .sort((a, b) => {
      // Tenta ordenar numericamente se tiver números (video1, video2, foto1...)
      const numA = parseInt(a.match(/\d+/)?.[0] || '999');
      const numB = parseInt(b.match(/\d+/)?.[0] || '999');
      
      if (numA !== numB) return numA - numB;

      // Se números iguais, prioriza vídeo
      const isVideoA = /\.(mp4|webm)$/i.test(a);
      const isVideoB = /\.(mp4|webm)$/i.test(b);
      
      if (isVideoA && !isVideoB) return -1;
      if (!isVideoA && isVideoB) return 1;

      return a.localeCompare(b);
    })
    .map(file => {
      const ext = path.extname(file).toLowerCase();
      const isVideo = ['.mp4', '.webm'].includes(ext);
      
      // Normaliza o caminho para URL (substitui backslashes em Windows se necessário, embora urls geralmente usem /)
      const urlPath = path.posix.join('/', relativePath.split(path.sep).join('/'), file);
      
      return {
        type: isVideo ? 'video' : 'image',
        url: urlPath
      };
    });

  return mediaItems;
}

/**
 * Wrapper para manter retrocompatibilidade e facilidade de uso para parceiros antigo
 * @param partnerSlug Nome da pasta dentro de public/videos
 */
export function getPartnerMedia(partnerSlug: string): MediaItem[] {
  return getMediaFromFolder(`videos/${partnerSlug}`);
}
