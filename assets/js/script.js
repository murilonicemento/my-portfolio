// MUDANÇA DE TEMA
function switchTheme() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
}
// EFEITO MÁQUINA DE ESCREVER
const presentation = document.querySelector("#presentation p");

function typeWrite(element) {
    const textArray = element.textContent.split("");
    element.textContent = "";
    textArray.forEach((word, i) => {
        setTimeout(() => {
            element.textContent += word;
        }, 75 * i)
    })
}
typeWrite(presentation);