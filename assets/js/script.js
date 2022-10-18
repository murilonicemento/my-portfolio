// MUDANÇA DE TEMA
function switchTheme() {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    const src = document.body.classList.contains("light-theme") ? "assets/img/moon.svg" : "assets/img/sun.svg";
    document.getElementById("moon").setAttribute("src", src);
}
// EFEITO MÁQUINA DE ESCREVER
