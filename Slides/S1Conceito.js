import { Canvas, Cores, Fontes, fundo, Texto, FontSizes, ctx, Moeda, VS } from "../files.js";

let exI = null;
function ResetFundo() {
    Fundo = null;
}
var Fundo = null;
export function SlideConceito(i) {
    Fundo = fundo(5, Fundo);
    ctx.save()
    ctx.scale(VS,VS)
    if (i == 0) {
        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "O que é Distribuição Uniforme?",
            [Canvas.width / 2, Canvas.height / 10]
        );

        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "center",
            "Todos    os    resultados    possuem    a   mesma    probabilidade   de   ocorrer.",
            [Canvas.width / 2, Canvas.height / 10 * 3]
        );

        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "center",
            "Ela também pode ser separada em Distribuição Uniforme Discreta e Contínua.",
            [Canvas.width / 2, Canvas.height / 10 * 4],

        );
    }
    else if (i == 1) {
         Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Exemplo Simples",
            [Canvas.width / 2, Canvas.height / 10]
        );
        ctx.drawImage(Moeda, (Canvas.width/2-(75*4))/ VS, (Canvas.height/2-(50*4))/ VS, (150*4)/ VS, (100*4)/ VS)
    }
    ctx.restore()
}