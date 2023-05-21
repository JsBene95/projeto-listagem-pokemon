
const botaoAlterarTema = document.getElementById("botao-alterar-tema")


const body = document.querySelector("body");

const ImagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")


botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    
    if (modoEscuroEstaAtivo) {

        body.classList.remove("modo-escuro");


        ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sunpokemon.png")

    } else {
        body.classList.add("modo-escuro");

        ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }




});

