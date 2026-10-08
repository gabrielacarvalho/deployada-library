# Deployada · Livros

Site da Deployada para ler e baixar livros grátis (PDF e EPUB), feito para mulheres em tecnologia.

É um site estático: sem banco de dados, sem build e sem dependências.

## Estrutura

```
deployada-site/
├── index.html     → a página (visual e funcionamento)
├── livros.js      → a lista de livros (é aqui que você edita)
├── livros/        → os arquivos PDF e EPUB
├── capas/         → imagens de capa (opcional)
├── favicon.svg    → o coraçãozinho da aba
└── vercel.json    → configuração da Vercel
```

## Como trocar ou adicionar um livro

1. Coloque os arquivos em `livros/`, usando o mesmo nome para os dois formatos, com letras minúsculas e hífen no lugar de espaço:
   ```
   livros/meu-livro.pdf
   livros/meu-livro.epub
   ```
2. Abra `livros.js`, copie um bloco `{ ... }` e preencha:
   ```js
   {
     slug: "meu-livro",          // nome dos arquivos, sem extensão
     titulo: "Meu Livro",
     desc: "Uma frase sobre o livro.",
     tags: ["120 págs", "iniciante", "python"],
     versao: "v1.0",
     selo: "novo<br>livro",      // adesivo redondo da capa
     cor: "rosa",                // "rosa", "menta" ou "amarelo"
     capa: "",                   // ou "capas/meu-livro.jpg"
     pdf: true,
     epub: true
   }
   ```
3. Apague os 3 livros de exemplo (e os arquivos deles em `livros/`).

O tamanho de cada arquivo aparece sozinho nos botões, e o contador "livros publicados" do terminal também se atualiza sozinho.

**Capa própria:** coloque a imagem em `capas/` (de preferência na proporção 3:4, por exemplo 900×1200 px) e preencha o campo `capa`. Sem imagem, o site desenha uma capa no estilo da Deployada.

**Só um formato:** se o livro não tiver EPUB, use `epub: false`. O botão "Ler online" abre o PDF numa aba nova.

## Ver no computador antes de subir

Na pasta do projeto, rode:

```bash
npx serve .
```

e abra o endereço que aparecer (geralmente http://localhost:3000). Abrir o `index.html` direto com dois cliques também funciona, mas o tamanho dos arquivos não aparece nos botões.

## Subir no GitHub

```bash
git init
git add .
git commit -m "Site da Deployada"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/deployada-site.git
git push -u origin main
```

Crie o repositório vazio no GitHub antes (sem README) e troque `SEU-USUARIO` pelo seu usuário.

> O GitHub recusa arquivos acima de 100 MB. Livros costumam ficar bem abaixo disso.

## Publicar na Vercel

1. Entre em vercel.com com sua conta do GitHub.
2. Clique em **Add New → Project** e escolha o repositório `deployada-site`.
3. Em **Framework Preset**, deixe **Other**. Não precisa de comando de build.
4. Clique em **Deploy**.

A partir daí, todo `git push` na `main` publica o site de novo sozinho.

**Domínio próprio:** no projeto da Vercel, vá em **Settings → Domains**, adicione o domínio (ex.: `deployada.com.br`) e siga as instruções de DNS que aparecerem.

**Contar visitas:** no painel do projeto, abra **Analytics** e ative o Vercel Analytics. Depois, cole esta linha no `index.html`, logo antes de `</body>`, e faça o push:

```html
<script defer src="/_vercel/insights/script.js"></script>
```

Assim você vê as visitas sem precisar de banco de dados.
