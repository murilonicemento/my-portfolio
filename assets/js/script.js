// MUDANÇA DE TEMA
function switchTheme() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
    const src = document.body.classList.contains("light-theme") ? "assets/img/moon.svg" : "assets/img/sun.svg";
    document.getElementById("moon").setAttribute("src", src);
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