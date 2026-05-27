import { Canvas,  Cores, Fontes, fundo, Texto, FontSizes } from "../files.js";
let exI = null;
function ResetFundo() {
    Fundo = null;
}
var Fundo = null;
export function SlideResolucaoContinua(i) {
    if (exI != i) {
            exI = i
            ResetFundo();
        }
    Fundo = fundo(0, Fundo);

    Texto(
        Cores.Titulo, FontSizes.Titulo,
        Fontes.Titulo, "left",
        "Resolução de problema (Contínua)",
        [0, Canvas.height / 10]
    );
}