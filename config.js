/* =====================================================================
   CONFIGURAÇÕES DA PÁGINA — EDITE AQUI
   =====================================================================
   Este é o único arquivo que você precisa abrir para editar coisas
   importantes da página. Veja o TUTORIAL.md para instruções passo a passo.
   ===================================================================== */

window.SITE_CONFIG = {
  // -------------------------------------------------------------------
  // 1) LINK DO WHATSAPP (redirecionador)
  //    Cole aqui o link redirecionador que você vai me mandar depois.
  //    Exemplo: "https://meusite.com/grupo" ou "https://wa.me/55..."
  // -------------------------------------------------------------------
  whatsappLink: "https://promocoesdodia.promos.app.br/r/grupos",

  // -------------------------------------------------------------------
  // 2) META PIXEL ID
  //    Cole aqui o número do seu Pixel do Facebook/Meta.
  //    Exemplo: "1234567890123456"
  //    Deixe como "" (vazio) se ainda não tiver.
  // -------------------------------------------------------------------
  metaPixelId: "2159079971554057",

  // -------------------------------------------------------------------
  // 3) FRASES PRINCIPAIS DA PÁGINA
  // -------------------------------------------------------------------
  textos: {
    titulo: "Promoções do Dia",
    subtitulo: "Milhares de cupons e promoções exclusivas — em primeira mão, só no grupo!",
    botaoCta: "ENTRAR NO GRUPO EXCLUSIVO",
    selo: "100% Gratuito • Vagas limitadas",
    rodape: "© 2026 Promoções do Dia — Todos os direitos reservados.",
  },

  // -------------------------------------------------------------------
  // 4) NOMES QUE APARECEM NO POP-UP "FULANO ACABOU DE ENTRAR NO GRUPO"
  //    Você pode adicionar/remover nomes à vontade.
  // -------------------------------------------------------------------
  nomesPopup: [
    "Rafael", "Mariana", "João", "Aline", "Bruno", "Carla", "Diego", "Eduarda",
    "Felipe", "Gabriela", "Henrique", "Isabela", "Júlia", "Kaique", "Larissa",
    "Matheus", "Natália", "Otávio", "Patrícia", "Quésia", "Rodrigo", "Sabrina",
    "Thiago", "Ursula", "Vinícius", "Wagner", "Yasmin", "Zilda", "Amanda", "Bianca",
    "Caio", "Daniela", "Erick", "Fernanda", "Gustavo", "Helena", "Igor", "Joana",
    "Lucas", "Michele", "Nicolas", "Olívia", "Paulo", "Renata", "Sérgio", "Tatiane",
    "Vanessa", "André", "Beatriz", "Camila", "Douglas", "Elaine", "Fábio", "Giovana",
    "Hugo", "Ivone", "Jefferson", "Karina", "Leandro", "Marina", "Nathan", "Priscila",
  ],

  // -------------------------------------------------------------------
  // 5) MARKETPLACES (lojas) — adicione os nomes que vão aparecer
  //    Para adicionar a logo de cada loja, coloque o arquivo de imagem
  //    na pasta assets/marketplaces/ com o mesmo nome que está em "arquivo".
  //    Se a imagem não existir, aparece o nome em texto bonito (fallback).
  // -------------------------------------------------------------------
  marketplaces: [
    { nome: "Shopee",         arquivo: "shopee.png" },
    { nome: "Amazon",         arquivo: "amazon.png" },
    { nome: "Mercado Livre",  arquivo: "mercadolivre.png" },
  ],

  // -------------------------------------------------------------------
  // 6) IMAGENS DA PÁGINA
  //    Coloque os arquivos na pasta assets/ com o nome indicado.
  // -------------------------------------------------------------------
  imagens: {
    // A foto da Aline (fundo desfocado) é controlada via CSS — veja styles.css.
    // Substitua o arquivo assets/aline-background.jpg pela foto real.
    fundo: "assets/aline-background.jpg",
    // Logo do grupo no topo. Substitua por logo-grupo.png quando enviar a logo real.
    logo:  "assets/logo-grupo.svg",
  },
};
