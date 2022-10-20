// MUDANÇA DE TEMA
function switchTheme() {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    const src = document.body.classList.contains("light-theme") ? "assets/img/moon.svg" : "assets/img/sun.svg";
    document.getElementById("moon").setAttribute("src", src);
}
// DIALOG TECH STACKS
const html = document.querySelector("#html");
const css = document.querySelector("#css");
const js = document.querySelector("#js");
const php = document.querySelector("#php");
const git = document.querySelector("#git");
const vscode = document.querySelector("#vscode");

const modalHtml = document.querySelector("#modalhtml");
const modalCss = document.querySelector("#modalcss");
const modalJs = document.querySelector("#modaljs");
const modalPhp = document.querySelector("#modalphp");
const modalGit = document.querySelector("#modalgit");
const modalVscode = document.querySelector("#modalvscode");

const buttonCloseHtml = document.querySelector("#modalhtml button");
const buttonCloseCss = document.querySelector("#modalcss button");
const buttonCloseJs = document.querySelector("#modaljs button");
const buttonClosePhp = document.querySelector("#modalphp button");
const buttonCloseGit = document.querySelector("#modalgit button");
const buttonCloseVscode = document.querySelector("#modalvscode button");


html.style.cursor = "pointer";
css.style.cursor = "pointer";
js.style.cursor = "pointer";
php.style.cursor = "pointer";
git.style.cursor = "pointer";
vscode.style.cursor = "pointer";
buttonCloseHtml.style.cursor = "pointer";
buttonCloseCss.style.cursor = "pointer";
buttonCloseJs.style.cursor = "pointer";
buttonClosePhp.style.cursor = "pointer";
buttonCloseGit.style.cursor = "pointer";
buttonCloseVscode.style.cursor = "pointer";

html.onclick = () => {
    modalHtml.showModal()
}
css.onclick = () => {
    modalCss.showModal()
}
js.onclick = () => {
    modalJs.showModal()
}
php.onclick = () => {
    modalPhp.showModal()
}
git.onclick = () => {
    modalGit.showModal()
}
vscode.onclick = () => {
    modalVscode.showModal()
}


function closeModal() {
    modalHtml.close();
    modalCss.close();
    modalJs.close();
    modalPhp.close();
    modalGit.close();
    modalVscode.close();
}
