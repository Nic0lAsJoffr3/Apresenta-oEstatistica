import { Canvas, Cores, Fontes, fundo, Texto, FontSizes, ctx } from "../files.js";
let exI = null;
function ResetFundo() {
    Fundo = null;
}
var Fundo = null;
export function SlideModelagemDiscreta(i) {

    Fundo = fundo(2, Fundo);
    Texto(
        Cores.Titulo, FontSizes.Titulo,
        Fontes.Titulo, "center",
        "Modelagem (Uniforme Discreta)",
        [Canvas.width / 2, Canvas.height / 10]
    );

}
