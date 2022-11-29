// MUDANÇA DE TEMA
function switchTheme() {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    const srcButton = document.body.classList.contains("light-theme") ? "assets/img/moon.svg" : "assets/img/sun.svg";
    document.getElementById("moon").setAttribute("src", srcButton);

    const srcHtml = document.body.classList.contains("light-theme") ? "assets/img/html5.svg" : "assets/img/html5-dark.svg";
    document.getElementById("html").setAttribute("src", srcHtml);

    const srcCss = document.body.classList.contains("light-theme") ? "assets/img/css3.svg" : "assets/img/css3-dark.svg";
    document.getElementById("css").setAttribute("src", srcCss);

    const srcGit = document.body.classList.contains("light-theme") ? "assets/img/git.svg" : "assets/img/git-dark.svg";
    document.getElementById("git").setAttribute("src", srcGit);
}

// PREFERÊNCIAS DO USUÁRIO EM RELAÇÃO AO TEMA
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Altera o tema
function changeTheme(event) {
  if( event.matches ) {
    // O tema é o dark
  } else {
    // O tema é o light
  }
}

// Escuta a mudança de tema no sistema
prefersColorScheme.addListener(changeTheme);

// Altera o tema conforme o tema do usuário
changeTheme(prefersColorScheme);

// ATUALIZAÇÃO DA PÁGINA AO CLICAR NA LOGO
const logo = document.querySelector("header nav p:first-child");
logo.style.cursor = "pointer";

logo.addEventListener("click", () => {
    window.location.reload();
})

// DIALOG TECH STACKS
const modal = {
    html: document.querySelector("#html"),
    css: document.querySelector("#css"),
    js: document.querySelector("#js"),
    node: document.querySelector("#node"),
    git: document.querySelector("#git"),
    vscode: document.querySelector("#vscode")
};

modal.html.onclick = () => {
    document.querySelector("#modalhtml").showModal()
}

modal.css.onclick = () => {
    document.querySelector("#modalcss").showModal()
}

modal.js.onclick = () => {
    document.querySelector("#modaljs").showModal()
}

modal.node.onclick = () => {
    document.querySelector("#modalnode").showModal()
}

modal.git.onclick = () => {
    document.querySelector("#modalgit").showModal()
}

modal.vscode.onclick = () => {
    document.querySelector("#modalvscode").showModal()
}

function closeModal() {
    document.querySelector("#modalhtml").close()
    document.querySelector("#modalcss").close()
    document.querySelector("#modaljs").close()
    document.querySelector("#modalnode").close()
    document.querySelector("#modalgit").close()
    document.querySelector("#modalvscode").close()
}

// ANIMAÇÃO SCROLL
const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animationScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3 / 4));
    target.forEach((element) => {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}
animationScroll();

if (target.length) {
    window.addEventListener("scroll", () => {
        animationScroll();
    });
}
