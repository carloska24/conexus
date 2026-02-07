# 📖 Manual Premium: Criação de Conteúdo - Blog Conexus

Este guia técnico e estratégico foi desenvolvido para garantir que o **Blog Conexus** mantenha sua autoridade visual e performance de elite. Siga estas diretrizes para publicar artigos que se integrem perfeitamente ao novo design executivo.

---

## 🏗️ Estrutura do Ecossistema

O blog utiliza um sistema de **Static Site Generation (SSG)** e **Filtros em Tempo Real**.

> [!NOTE]
> Você não precisa mexer em nada no código para que um novo post apareça. Basta salvar o arquivo `.mdx` no local correto e o sistema se encarrega da renderização e do SEO.

### O Fluxo da Informação:

1. **Escrita**: Você cria um arquivo em `src/content/blog/meu-post.mdx`.
2. **Processamento**: O sistema lê o cabeçalho (_Frontmatter_) para montar os cards de Destaque e Filtros.
3. **Publicação**: No ambiente de produção, o post aparece instantaneamente após a build. No seu `dev`, ele aparece assim que você salva.

---

## 📋 Anatomia do Arquivo `.mdx`

Todo arquivo deve conter o cabeçalho de metadados entre linhas `---`.

```markdown
---
title: "Título Executivo do Artigo"
date: "2026-02-07"
category: "Inovação"
author: "Nome do Especialista"
image: "/images/blog/foto-artigo.png"
excerpt: "Um resumo provocativo que convida o leitor para a jornada técnica."
---

Aqui começa o seu conteúdo em Markdown...
```

### 💎 Regras de Ouro dos Campos:

- **Título:** Use sentenças afirmativas e curtas.
- **Categoria:** Escolha palavras únicas (Ex: `Manufatura`, `Indústria 4.0`). Elas aparecerão automaticamente na **Barra de Conhecimento**.
- **Imagem:** Use o formato **16:9** (Ex: 1920x1080px). Imagens de alta resolução são essenciais para o **Artigo em Destaque**.
- **Excerpt:** Pense nisso como a "capa do livro". Use tom executive.

---

## 🎨 Formatação Visual Premium

Para que seu texto "brilhe" no tema dark da Conexus, utilize os seguintes padrões:

### 1. Sistema de Brilho (Destaques)

Use `**termo técnico**` para palavras que você quer que saltem aos olhos.

> [!TIP]
> O nosso sistema aplica um efeito de `brightness-125` no negrito, fazendo com que os termos técnicos pareçam retroiluminados contra o fundo escuro.

### 2. Cabeçalhos de Seção

Evite o título de nível 1 (#) no corpo, pois o sistema já usa o título do cabeçalho.

- Use `## Subtítulo` para grandes seções.
- Use `### Tópico` para detalhamentos internos.

### 3. Citações de Autoridade

Para enfatizar uma visão estratégica ou frase de impacto:

```markdown
> "A conectividade profunda é o sistema operacional da nova indústria."
```

---

## 🖼️ Gerenciamento de Imagens

> [!IMPORTANT]
> **Qualidade é soberana.** Imagens embaçadas ou com baixa resolução comprometem a percepção de valor da marca Conexus.

1. **Local:** Salve as imagens em `public/images/blog/`.
2. **Nomenclatura:** Evite espaços. Use `imagem-do-meu-post.png` em vez de `imagem do meu post.png`.
3. **Otimização:** O sistema já aplica `quality={100}` e filtros de nitidez via CSS, mas a imagem original deve ser nítida.

### Visualização Projetada:

```text
+---------------------------------------+
|        [ IMAGEM HERO 16:9 ]           | <-- Alta Definição
+---------------------------------------+
|  [ CATEGORIA ]  [ DATA ]  [ LEITURA ] |
+---------------------------------------+
|          TÍTULO DO ARTIGO             |
+---------------------------------------+
|  Texto fluído com negritos que brilham|
+---------------------------------------+
```

---

## 🚀 Checklist de Lançamento

- [ ] O arquivo termina em `.mdx`?
- [ ] O nome do arquivo não tem espaços (Ex: `meu-artigo-tecnico.mdx`)?
- [ ] A categoria está escrita exatamente como você quer que apareça no filtro?
- [ ] A imagem está na pasta `public/images/blog/`?

**Parabéns!** O seu ecossistema Conexus está pronto para receber seu conhecimento.
