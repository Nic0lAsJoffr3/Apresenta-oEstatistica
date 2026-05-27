import { SlideIntroducao, SlideConceito, SlideModelagemDiscreta, SlideModelagemContinua, SlideAplicacaoNaArea, SlideResolucaoDiscreta, SlideResolucaoContinua, SlideLeiGrandesNumeros, SlideFontes } from "./files.js";

const BODY = document.querySelector("body");
export const Canvas = document.createElement("canvas");
Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;
export const ctx = Canvas.getContext("2d");

export let slide = 0;
let canPress = true;



let maxslide = 17;
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

    if (slide == 16) {

    if (!document.getElementById("iframeSimulador")) {

        const iframe = document.createElement("iframe");

        iframe.id = "iframeSimulador";
        iframe.src = window.location.origin + "/Simulador/index.html";

        iframe.style.position = "fixed";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "100vw";
        iframe.style.height = "100vh";
        iframe.style.border = "none";

        document.body.appendChild(iframe);

        window.__iframeCreated = true;
    }
    document.querySelectorAll(".buttonLeft, .buttonRight").forEach(element =>{
        element.classList.add("MeioBtn")
    })
} else {

    document.querySelectorAll(".buttonLeft, .buttonRight").forEach(element =>{
        element.classList.remove("MeioBtn")
    })
    const iframe = document.getElementById("iframeSimulador");

    if (iframe) {
        iframe.remove();
    }

    window.__iframeCreated = false;
}
    switch (slide) {
        case 0:
            SlideIntroducao(slide);
            break;
        case 1:
            SlideConceito(slide - 1);
            break;
        case 2:
        case 3:
        case 4:
            SlideModelagemDiscreta(slide - 2);
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            SlideResolucaoDiscreta(slide - 5);
            break;
        case 9:
            SlideAplicacaoNaArea(slide - 9);
            break;
        case 10:
            SlideModelagemContinua(slide - 10);
            break;
        case 11:
            SlideResolucaoContinua(slide - 11);
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
            SlideLeiGrandesNumeros(slide - 12);
            break;
        case 17:
            SlideFontes(slide - 17);
            break;
    }
    requestAnimationFrame(Update);
}