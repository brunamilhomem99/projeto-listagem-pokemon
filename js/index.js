const imgLua = document.querySelector(".img-btt")
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        imgLua.setAttribute("src", "/src/imagens/sun.png");
    } else {
        imgLua.setAttribute("src", "/src/imagens/moon.png");
    }
});