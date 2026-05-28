import { SlideIntroducao, SlideConceito, SlideModelagemDiscreta, SlideAplicacaoNaAreaContinua, SlideModelagemContinua, SlideAplicacaoNaArea, SlideResolucaoDiscreta, SlideResolucaoContinua, SlideLeiGrandesNumeros, SlideFontes } from "./files.js";

const BODY = document.querySelector("body");
export const Canvas = document.createElement("canvas");
Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;
export const ctx = Canvas.getContext("2d");

export let slide = 33;
let canPress = true;



let maxslide = 40;
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

    if (slide == 39) {

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
        case 1:
        case 2:// Fundo 5
            SlideConceito(slide - 1);
            break;
        case 3:
        case 4:
        case 5: // Fundo 2
            SlideModelagemDiscreta(slide - 3);
            break;
        case 6:
        case 7:
        case 8:
        case 9: // Fundo 8
            SlideResolucaoDiscreta(slide - 6);
            break;

            break;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18: // Fundo 1
            SlideAplicacaoNaArea(slide - 10);
            break;
        case 19:
        case 20:
        case 21:
        case 22:
        case 23: // Fundo 2
            SlideModelagemContinua(slide - 19);
            break;
        case 24:
        case 25:
        case 26:
        case 27: // Fundo 8
            SlideResolucaoContinua(slide - 24);
            break
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
            SlideAplicacaoNaAreaContinua(slide - 28)
            break
        case 35:
        case 36:
        case 37:
        case 38:
        case 39: // Fundo 4
            SlideLeiGrandesNumeros(slide - 35);
            break;
        case 40: // Fundo 7
            SlideFontes(slide - 40);
            break;
    }
    requestAnimationFrame(Update);
}