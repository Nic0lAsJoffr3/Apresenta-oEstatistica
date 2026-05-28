import {
    SlideIntroducao,
    SlideConceito,
    SlideModelagemDiscreta,
    SlideAplicacaoNaAreaContinua,
    SlideModelagemContinua,
    SlideAplicacaoNaArea,
    SlideResolucaoDiscreta,
    SlideResolucaoContinua,
    SlideLeiGrandesNumeros,
    SlideFontes
} from "./files.js";

const BODY = document.querySelector("body");

export const Canvas = document.createElement("canvas");
export const ctx = Canvas.getContext("2d");

// RESOLUÇÃO FIXA INTERNA
Canvas.width = 1920;
Canvas.height = 1080;

// RESPONSIVIDADE
function ResizeCanvas() {

    const scale = Math.min(
        window.innerWidth / 1920,
        window.innerHeight / 1080
    );

    Canvas.style.width = `${1920 * scale}px`;
    Canvas.style.height = `${1080 * scale}px`;

    Canvas.style.position = "absolute";
    Canvas.style.left = "50%";
    Canvas.style.top = "50%";
    Canvas.style.transform = "translate(-50%, -50%)";

    Canvas.style.imageRendering = "auto";
}

// Atualiza ao redimensionar
window.addEventListener("resize", ResizeCanvas);

// Inicializa
ResizeCanvas();

export let slide = 0;
let canPress = true;

let maxslide = 41;

function PassarSlide(direction) {

    if (direction == 1 && slide < maxslide) {
        slide++;
    }

    else if (direction == -1 && slide > 0) {
        slide--;
    }
}

// BOTÕES
const BUTTONLEFT = document.createElement("button");

BUTTONLEFT.classList.add("buttonLeft");

BUTTONLEFT.addEventListener("click", () => {
    PassarSlide(-1);
});

const BUTTONRIGHT = document.createElement("button");

BUTTONRIGHT.classList.add("buttonRight");

BUTTONRIGHT.addEventListener("click", () => {
    PassarSlide(1);
});

// ADICIONA ELEMENTOS
BODY.appendChild(Canvas);
BODY.appendChild(BUTTONLEFT);
BODY.appendChild(BUTTONRIGHT);

// ESCALA GLOBAL
export function getScreenScale() {

    const baseWidth = 1920;
    const baseHeight = 1080;

    const targetWidth = window.innerWidth;
    const targetHeight = window.innerHeight;

    const scaleW = targetWidth / baseWidth;
    const scaleH = targetHeight / baseHeight;

    return Math.min(scaleW, scaleH);
}

export let VS = getScreenScale();

window.addEventListener("resize", () => {

    VS = getScreenScale();
});

// START
export function Start() {

    Update();
}

// CONTROLES
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

    if (
        e.code === "ArrowRight" ||
        e.code === "ArrowLeft"
    ) {
        canPress = true;
    }
});

// LOOP
function Update() {

    ctx.clearRect(0, 0, Canvas.width, Canvas.height);

    // SLIDE DO IFRAME
    if (slide == 40) {

        if (!document.getElementById("iframeSimulador")) {

            const iframe = document.createElement("iframe");

            iframe.id = "iframeSimulador";

            iframe.src =
                "https://nic0lasjoffr3.github.io/Apresenta-oEstatistica/Simulador/index.html";

            iframe.style.position = "fixed";
            iframe.style.top = "0";
            iframe.style.left = "0";
            iframe.style.width = "100vw";
            iframe.style.height = "100vh";
            iframe.style.border = "none";

            document.body.appendChild(iframe);

            window.__iframeCreated = true;
        }

        document
            .querySelectorAll(".buttonLeft, .buttonRight")
            .forEach(element => {

                element.classList.add("MeioBtn");
            });

    } else {

        document
            .querySelectorAll(".buttonLeft, .buttonRight")
            .forEach(element => {

                element.classList.remove("MeioBtn");
            });

        const iframe =
            document.getElementById("iframeSimulador");

        if (iframe) {

            iframe.remove();
        }

        window.__iframeCreated = false;
    }

    // SLIDES
    switch (slide) {

        case 0:

            SlideIntroducao(slide);
            break;

        case 1:
        case 2:

            SlideConceito(slide - 1);
            break;

        case 3:
        case 4:
        case 5:

            SlideModelagemDiscreta(slide - 3);
            break;

        case 6:
        case 7:
        case 8:
        case 9:

            SlideResolucaoDiscreta(slide - 6);
            break;

        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:

            SlideAplicacaoNaArea(slide - 10);
            break;

        case 19:
        case 20:
        case 21:
        case 22:
        case 23:

            SlideModelagemContinua(slide - 19);
            break;

        case 24:
        case 25:
        case 26:
        case 27:

            SlideResolucaoContinua(slide - 24);
            break;

        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:

            SlideAplicacaoNaAreaContinua(slide - 28);
            break;

        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:

            SlideLeiGrandesNumeros(slide - 35);
            break;

        case 41:

            SlideFontes(slide - 41);
            break;
    }

    requestAnimationFrame(Update);
}
