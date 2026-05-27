import { SlideIntroducao, SlideConceito, SlideModelagemDiscreta, SlideModelagemContinua, SlideAplicacaoNaArea, SlideResolucaoDiscreta, SlideResolucaoContinua, SlideLeiGrandesNumeros, SlideFontes } from "./files.js";

const BODY = document.querySelector("body");
export const Canvas = document.createElement("canvas");
Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;
export const ctx = Canvas.getContext("2d");

export let slide = 0;
let canPress = true;



let maxslide = 23;
function PassarSlide(direction) {
    if (direction == 1 && slide < maxslide) slide++;
    else if (direction == -1 && slide > 0) slide--;
}

const BUTTONLEFT = document.createElement("button");
BUTTONLEFT.classList.add("buttonLeft");
BUTTONLEFT.addEventListener("click", () => { PassarSlide(-1) });
const BUTTONRIGHT = document.createElement("button");
BUTTONRIGHT.classList.add("buttonRight");
BUTTONRIGHT.addEventListener("click", () => { PassarSlide(1) });

BODY.appendChild(Canvas);
BODY.appendChild(BUTTONLEFT);
BODY.appendChild(BUTTONRIGHT);




export function Start() {

    Update();
}

window.addEventListener("keydown", (e) => {
    if (!canPress) return;

    if (e.code === "ArrowRight") {
        PassarSlide(1);
        canPress = false;
    }

    if (e.code === "ArrowLeft") {
        PassarSlide(-1);
        canPress = false;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
        canPress = true;
    }
});

function Update() {

    ctx.clearRect(0, 0, Canvas.width, Canvas.height);

    if (slide == 22) {

        if (!document.getElementById("iframeSimulador")) {

            const iframe = document.createElement("iframe");

            iframe.id = "iframeSimulador";
            iframe.src = "https://nic0lasjoffr3.github.io/Apresenta-oEstatistica/Simulador/index.html";

            iframe.style.position = "fixed";
            iframe.style.top = "0";
            iframe.style.left = "0";
            iframe.style.width = "100vw";
            iframe.style.height = "100vh";
            iframe.style.border = "none";

            document.body.appendChild(iframe);

            window.__iframeCreated = true;
        }
        document.querySelectorAll(".buttonLeft, .buttonRight").forEach(element => {
            element.classList.add("MeioBtn")
        })
    } else {

        document.querySelectorAll(".buttonLeft, .buttonRight").forEach(element => {
            element.classList.remove("MeioBtn")
        })
        const iframe = document.getElementById("iframeSimulador");

        if (iframe) {
            iframe.remove();
        }

        window.__iframeCreated = false;
    }
    switch (slide) {
        case 0: //Fundo 6
            SlideIntroducao(slide);
            break;
        case 1: // Fundo 5
            SlideConceito(slide - 1);
            break;
        case 2:
        case 3: // Fundo 2
            SlideModelagemDiscreta(slide - 2);
            break;
        case 4:
        case 5:
        case 6:
        case 7: // Fundo 8
            SlideResolucaoDiscreta(slide - 4);
            break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12: // Fundo 2
            SlideModelagemContinua(slide - 8);
            break;
        case 13:
        case 14:
        case 15:
        case 16: // Fundo 8
            SlideResolucaoContinua(slide - 13);
            break;
        case 17: // Fundo 1
            SlideAplicacaoNaArea(slide - 17);
            break;
        case 18:
        case 19:
        case 20:
        case 21:
        case 22: // Fundo 4
            SlideLeiGrandesNumeros(slide - 18);
            break;
        case 23: // Fundo 7
            SlideFontes(slide - 23);
            break;
    }
    requestAnimationFrame(Update);
}