import { ctx, Cores, Fontes, Canvas, Texto, fundo, FontSizes } from "../files.js";

let animBarNames = new Array(7).fill(0);
let animTextNames = [
    "Airton José",
    "Alex Farias Gmach",
    "Felipe Bueno Mota",
    "Gabriel Sarubi",
    "Gustavo Soares Zuin ",
    "Nicolas Joffre de Souza",
    "Renan Fernandes Neves"
]
let exI = null;

var Fundo = null;
let sorteios = 0;
function ResetFundo() {
    Fundo = null;
    animBarNames = new Array(7).fill(0);
    sorteios = 0;
}
ResetFundo()
export function SlideIntroducao(i) {
    if (exI != i) {
        exI = i
        ResetFundo();
    }
    Fundo = fundo(6, Fundo);

    Texto(
        Cores.Titulo, FontSizes.Titulo,
        Fontes.Titulo, "center",
        "Distribuição Uniforme",
        [Canvas.width / 2, Canvas.height / 10]
    );

    // Desenhar as Barras Dos Nomes
    for (var i = 0; i < 7; i++) {
        ctx.fillStyle = Cores.CianoClaro;
        var y0 = Canvas.height / 4 + i * 70 + (i * 15)
        ctx.fillRect(0, y0, 20 + animBarNames[i], 70)
        ctx.font = " 50px " + Fontes.NormalText
        ctx.textAlign = "left"
        ctx.fillText(animTextNames[i], 25 + animBarNames[i], 45 + y0);
    }
    if (sorteios < 1500) {
        for (var i = 0; i < 20; i++) {
            animBarNames[Math.floor(Math.random() * 7)]++;
            sorteios++;
        }
    }
    else {
        for (var i = 0; i < 7; i++) {
            if (animBarNames[i] < animBarNames[i == 6 ? 0 : i + 1]) {
                animBarNames[i]++;
            }
        }
    }
}
