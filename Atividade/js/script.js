trocaTema = () => {
  // alert("Mudei o tema e você não viu.")
  // const html = document.documentElement;

  // document.querySelector("body").style.background = "Pink";

  document.documentElement.classList.toggle("light");

const isLight = document.documentElement.classList.contains("light");
 
const imagem = isLight ? "./img/gabicolorida.jpg" : "./img/gabipretoe.jpg";

document.querySelector("#perfil img").setAttribute("src", imagem);
};
