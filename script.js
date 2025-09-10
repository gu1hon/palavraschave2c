import {PALAVRAS_RUINS} from "./palavrasruins.js";

const botaoMostraPalavras = document.querySelector (#botao-palavraschave);

botaoMostraPalavras.addEventListener('click',mostraPalavrasChave);

function mostraPalavrasChave () {
    const texto = document.querySelector ('#entrada-de-texto').value;
    const campoResultado = document.querySelector
    const palavrasChave = processaTexto (texto) ;

    campoResultado.textContent = palavrasChave.join (",");
}
