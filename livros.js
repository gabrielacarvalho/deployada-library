// ============================================================
//  LISTA DE LIVROS DA DEPLOYADA
//  Para adicionar um livro: copie um bloco { ... }, cole abaixo
//  e troque as informações. Os arquivos ficam na pasta /livros.
// ============================================================
//
//  slug   → nome dos arquivos, sem extensão.
//           Ex.: "git-sem-medo" usa livros/git-sem-medo.pdf
//           e livros/git-sem-medo.epub
//  titulo → nome do livro
//  desc   → uma frase curta sobre o livro
//  tags   → etiquetas que aparecem embaixo (páginas, nível, tema)
//  versao → versão do livro, aparece na capa
//  selo   → texto do adesivo redondo da capa (use <br> pra quebrar linha)
//  cor    → cor da capa desenhada: "rosa", "menta" ou "amarelo"
//  capa   → (opcional) imagem de capa em /capas, ex.: "capas/git.jpg"
//           Se tiver capa, ela substitui a capa desenhada.
//  pdf / epub → true se aquele formato existe, false se não
//
//  ATENÇÃO: os 3 livros abaixo são EXEMPLOS. Troque pelos seus.
// ============================================================

window.LIVROS = [
  {
    slug: "primeiro-deploy",
    titulo: "Meu Primeiro Deploy",
    desc: "Do localhost ao link no ar: hospedagem, domínio e CI explicados sem drama.",
    tags: ["112 págs", "iniciante", "devops"],
    versao: "v1.0",
    selo: "pra<br>iniciantes",
    cor: "rosa",
    capa: "",
    pdf: true,
    epub: true
  },
  {
    slug: "git-sem-medo",
    titulo: "Git Sem Medo",
    desc: "Branch, merge, rebase e como desfazer aquele commit sem entrar em pânico.",
    tags: ["86 págs", "intermediário", "git"],
    versao: "v2.1",
    selo: "zero<br>conflito",
    cor: "menta",
    capa: "",
    pdf: true,
    epub: true
  },
  {
    slug: "sudo-sou-eu",
    titulo: "Sudo Sou Eu",
    desc: "Negociar salário, pedir promoção e ocupar espaço em time técnico.",
    tags: ["140 págs", "carreira", "liderança"],
    versao: "v1.3",
    selo: "carreira<br>& voz",
    cor: "amarelo",
    capa: "",
    pdf: true,
    epub: true
  }
];
