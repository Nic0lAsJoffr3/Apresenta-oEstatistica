import { Canvas,  Cores, Fontes, fundo, Texto, FontSizes } from "../files.js";
let exI = null;
function ResetFundo() {
    Fundo = null;
}
var Fundo = null;
export function SlideConceito(i) {
    Fundo = fundo(0, Fundo);

    Texto(
        Cores.Titulo, FontSizes.Titulo,
        Fontes.Titulo, "left",
        "Conceito",
        [0, Canvas.height / 10]
    );
}