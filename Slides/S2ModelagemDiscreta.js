import { Canvas, Cores, Fontes, fundo, Texto, FontSizes, ctx } from "../files.js";
let exI = null;
function ResetFundo() {
    Fundo = null;
}
var Fundo = null;
export function SlideModelagemDiscreta(i) {
    if (i == 0) {
        if (exI != i) {
            exI = i
            ResetFundo();
        }
        Fundo = fundo(2, Fundo);

        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Modelagem (Uniforme Discreta)",
            [Canvas.width / 2, Canvas.height / 10]
        );
        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "center",
            "Usada quando os resultados possíveis são contáveis e todos têm a mesma chance.",
            [Canvas.width / 2, Canvas.height / 10 * 2]
        );

        Texto(
            Cores.SubTitulo, FontSizes.SubTitulo,
            Fontes.SubTitulo, "center",
            "Ideia principal: ",
            [Canvas.width / 10 * 2, Canvas.height / 10 * 6]
        );

        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "center",
            "Listar os resultados possíveis -> dividir a probabilidade igualmente",
            [Canvas.width / 2, Canvas.height / 10 * 7]
        );
    }
    else if (i == 1) {
        if (exI != i) {
            exI = i
            ResetFundo();
        }
        Fundo = fundo(3, Fundo);
        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Como modelar?",
            [Canvas.width / 2, Canvas.height / 10]
        );
        formula(0);

        Texto(
            Cores.SubTitulo, FontSizes.SubTitulo,
            Fontes.SubTitulo, "center",
            "Onde:",
            [Canvas.width / 10 * 2, Canvas.height / 10 * 7]
        );
        formula(1)
    }
    else if (i == 2) {

        if (exI != i) {
            exI = i
            ResetFundo();
        }
        Fundo = fundo(1, Fundo);
        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Exemplo: dado justo",
            [Canvas.width / 2, Canvas.height / 10]
        );
        
        Texto(
            Cores.SubTitulo, FontSizes.SubTitulo,
            Fontes.SubTitulo, "center",
            "1    2    3    4    5    6",
            [Canvas.width / 2, Canvas.height / 10*3]
        );

        
        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "center",
            "Como o dado possui 6 resultados cada face tem:",
            [Canvas.width / 2, Canvas.height / 10*5]
        );
        formula(2)
        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "center",
            "Portanto nenhum resultado é favorecido.",
            [Canvas.width / 2, Canvas.height / 10*7.5]
        );
    }
}

function formula(i) {
    if (i == 0) {
        let scale = 2;
        let [xF, yF] = [Canvas.width / (2 * scale), Canvas.height / (10 * scale) * 4]
        ctx.save();
        ctx.scale(scale, scale);
        ctx.font = "30px arial"
        ctx.fillStyle = "white"
        ctx.strokeStyle = "white"
        ctx.textAlign = "center"
        ctx.lineWidth = 2

        ctx.fillText("P(X = x) =   ", xF, yF)
        ctx.fillText("1", xF + 85, yF - 15)
        ctx.fillText("n", xF + 85, yF + 15)

        ctx.beginPath()
        ctx.moveTo(xF + 70, yF - 8)
        ctx.lineTo(xF + 100, yF - 8)
        ctx.stroke()

        ctx.restore();
    }
    else if (i == 1) {
        let scale = 1;
        let [xF, yF] = [Canvas.width / (10 * scale) * 2, Canvas.height / (10 * scale) * 8]
        ctx.save();
        ctx.scale(scale, scale);
        ctx.font = FontSizes.NormalText + Fontes.NormalText

        ctx.textAlign = "left"
        ctx.lineWidth = 2
        ctx.fillStyle = Cores.CianoClaro
        ctx.fillText("P(X = x)", xF, yF)
        ctx.fillText("N", xF, yF + (Canvas.height / 15))
        ctx.fillStyle = Cores.NormalText
        ctx.fillText("é a probabilidade de um resultado acontecer", xF + 150, yF)
        ctx.fillText("é a quantidade total de resultados possíveis", xF + 40, yF + (Canvas.height / 15))


        ctx.restore();
    }
    else if (i == 2) {
        let scale = 1.6;
        let [xF, yF] = [Canvas.width / (2 * scale)-90, Canvas.height / (10 * scale) * 6.25]
        ctx.save();
        ctx.scale(scale, scale);
        ctx.font = "30px arial"
        ctx.fillStyle = "white"
        ctx.strokeStyle = "white"
        ctx.textAlign = "center"
        ctx.lineWidth = 2

        ctx.fillText("P(X = x) =   ", xF, yF)
        ctx.fillText("1", xF + 85, yF - 15)
        ctx.fillText("6", xF + 87, yF + 22)
        
        ctx.fillText("≈ 16,67%", xF+180, yF)

        ctx.beginPath()
        ctx.moveTo(xF + 70, yF - 8)
        ctx.lineTo(xF + 100, yF - 8)
        ctx.stroke()

        ctx.restore();
    }
}