trocaTema = () => {
  // alert("Mudei o tema e você não viu.")
  // const html = document.documentElement;

  // document.querySelector("body").style.background = "Pink";

  document.documentElement.classList.toggle("light");

const isLight = document.documentElement.classList.contains("light");

const imagem = isLight ? "./img/gabicolorida.jpg" : "./img/gabipretoe.jpg";

const trocaalt = isLight ? "Selfie tirada por uma menina com o cabelo castanho escuro ondulado, regata verde, colar dourado, com o rosto inclinado, na frente de um fundo amadeirado." : "Selfie em preto e branco tirada por uma menina com o cabelo ondulado, regata, colar, com o rosto inclinado, na frente de um fundo amadeirado.";

document.querySelector("#perfil img").setAttribute("src", imagem);
document.querySelector("#perfil img").setAttribute("alt", trocaalt);

};
