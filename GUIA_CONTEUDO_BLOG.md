# 📖 Guia de Criação de Conteúdo - Blog Conexus

Este guia explica o passo a passo para você criar e publicar novos artigos no seu blog com a estrutura correta para garantir performance, SEO e visual premium.

---

## 1. Localização e Formato do Arquivo

- **Onde salvar:** Os arquivos devem ser criados na pasta: `src/content/blog/`
- **Extensão:** Utilize sempre a extensão `.mdx`
- **Nome do arquivo (Slug):** O nome do arquivo será a URL do seu post. Use letras minúsculas e hífens.
  - Exemplo: `tendencias-eletronica-2026.mdx` -> renderiza em `conexus.com.br/blog/tendencias-eletronica-2026`

---

## 2. Estrutura do Cabeçalho (Frontmatter)

Todo artigo **deve** começar com um bloco entre três hífens (`---`). É aqui que o site busca as informações da página.

```markdown
---
title: "Título Impactante do Seu Artigo"
date: "2026-02-07"
category: "Tecnologia"
author: "Nome do Autor"
image: "/images/blog/nome-da-sua-imagem.png"
excerpt: "Um resumo curto (2 linhas) que aparece no card da página inicial do blog."
---
```

### Campos obrigatórios:

- **title:** O título principal que aparece no topo.
- **date:** No formato `AAAA-MM-DD`.
- **category:** Ex: "Inovação", "Indústria 4.0", "Cases".
- **author:** Nome de quem escreveu.
- **image:** Caminho da imagem. **Atenção:** Salve suas imagens em `/public/images/blog/`.
- **excerpt:** O texto "isca" para atrair o leitor na lista de posts.

---

## 3. Formatação do Conteúdo (Markdown)

Logo após o segundo `---`, você começa a escrever seu texto.

### Títulos

Use `#` para títulos. (Dica: o título principal já é o `title` do cabeçalho, então use apenas `##` e `###` no corpo do texto).

```markdown
## Subtítulo de Seção

### Detalhamento Interno
```

### Ênfase e Listas

- **Negrito:** Use `**texto**` para destacar palavras-chave (elas terão brilho especial no nosso tema).
- **Listas:** Use `-` ou `1.` para listas. Elas já estão configuradas com as "bolinhas" na cor da marca.

### Citações (Blockquotes)

Para frases de efeito ou depoimentos:

```markdown
> "A inovação é o que distingue um líder de um seguidor."
```

---

## 4. Dicas de Ouro para Lançamento

1. **Imagens:** Use imagens horizontais (aspect ratio 16:9). Elas ficam mais bonitas no layout.
2. **SEO:** Use palavras-chave importantes nos primeiros dois parágrafos.
3. **Pausas:** Não escreva blocos de texto muito grandes. Use subtítulos para "quebrar" a leitura e deixá-la menos cansativa.

---

**Pronto!** Agora você tem total autonomia para escalar sua comunicação. 🚀📡
