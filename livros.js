// ============================================================
//  LISTA DE LIVROS DA DEPLOYADA
//  Para adicionar um livro: copie um bloco { ... }, cole abaixo
//  e troque as informações. Os arquivos ficam na pasta /livros.
// ============================================================
//
//  slug   → nome dos arquivos, sem extensão.
//           Ex.: "docker-para-devs-deployada" usa
//           livros/docker-para-devs-deployada.pdf e .epub
//  titulo → nome do livro
//  desc   → uma frase curta sobre o livro
//  tags   → etiquetas que aparecem embaixo (idioma, tema, páginas)
//  versao → versão do livro, aparece na capa
//  selo   → texto do adesivo redondo da capa (use <br> pra quebrar linha)
//  cor    → cor da capa desenhada: "rosa", "menta" ou "amarelo"
//  capa   → (opcional) imagem de capa em /capas, ex.: "capas/docker.jpg"
//  pdf / epub → true se aquele formato existe, false se não
//
//  Cada bloco termina com "}," (com vírgula).
// ============================================================

window.LIVROS = [
  {
    slug: "terminal-para-devs-deployada",
    titulo: "Terminal Para Devs",
    desc: "Perca o medo da tela preta: os comandos que você vai usar todo dia, explicados com calma.",
    tags: ["português", "terminal", "linux"],
    versao: "v1.0",
    selo: "em<br>português",
    cor: "rosa",
    capa: "",
    pdf: true,
    epub: false
  },
  {
    slug: "docker-para-devs-deployada",
    titulo: "Docker Para Devs",
    desc: "Imagens, containers e volumes do zero, com exemplos do dia a dia.",
    tags: ["português", "docker", "devops"],
    versao: "v1.0",
    selo: "em<br>português",
    cor: "menta",
    capa: "",
    pdf: true,
    epub: true
  },
  {
    slug: "docker-for-devs-deployada",
    titulo: "Docker for Devs",
    desc: "Images, containers and volumes from scratch, with everyday examples.",
    tags: ["english", "docker", "devops"],
    versao: "v1.0",
    selo: "in<br>english",
    cor: "menta",
    capa: "",
    pdf: true,
    epub: true
  },
  {
    slug: "docker-compose-para-devs-deployada",
    titulo: "Docker Compose Para Devs",
    desc: "Suba a aplicação, o banco e tudo mais com um único comando.",
    tags: ["português", "docker compose", "devops"],
    versao: "v1.0",
    selo: "em<br>português",
    cor: "amarelo",
    capa: "",
    pdf: true,
    epub: true
  },
  {
    slug: "docker-compose-for-devs-deployada",
    titulo: "Docker Compose for Devs",
    desc: "Run your app, your database and everything else with a single command.",
    tags: ["english", "docker compose", "devops"],
    versao: "v1.0",
    selo: "in<br>english",
    cor: "amarelo",
    capa: "",
    pdf: true,
    epub: true
  },
];
