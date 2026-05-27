import { Canvas,  Cores, Fontes, fundo, Texto, FontSizes } from "../files.js";
let exI = null;
function ResetFundo() {
    Fundo = null;
}
var Fundo = null;
export function SlideFontes(i) {
    if (exI != i) {
            exI = i
            ResetFundo();
        }
    Fundo = fundo(0, Fundo);

    Texto(
        Cores.Titulo, FontSizes.Titulo,
        Fontes.Titulo, "left",
        "Fontes",
        [0, Canvas.height / 10]
    );
}