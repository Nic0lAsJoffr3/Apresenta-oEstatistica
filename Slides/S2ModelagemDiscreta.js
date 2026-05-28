import { Canvas, Cores, Fontes, fundo, Texto, FontSizes, ctx } from "../files.js";
let exI = null;
function ResetFundo() {
    Fundo = null;
}
var Fundo = null;
export function SlideModelagemDiscreta(i) {

    Fundo = fundo(2, Fundo);
    if (i == 0) {
        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Modelagem (Uniforme Discreta)",
            [Canvas.width / 2, Canvas.height / 10]
        );

        Texto(
            Cores.SubTitulo, FontSizes.SubTitulo,
            Fontes.SubTitulo, "left",
            "Use quando:",
            [Canvas.width / 10, Canvas.height / 10 * 3.5]
        );
        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "left",
            "Os resultados podem ser listados;\nExiste uma quantidade finita de possibilidades;\nNenhum resultado é favorecido;\nTodos têm a mesma chance.",
            [Canvas.width / 10 * 1.5, Canvas.height / 10 * 4.5], 50
        );

        ctx.beginPath()

        ctx.arc(Canvas.width / 10 * 1.5 - 20, Canvas.height / 10 * 4.5 - 12, 7, Math.PI / 180, 0)
        ctx.arc(Canvas.width / 10 * 1.5 - 20, Canvas.height / 10 * 4.5 - 12 + 50, 7, Math.PI / 180, 0)
        ctx.arc(Canvas.width / 10 * 1.5 - 20, Canvas.height / 10 * 4.5 - 12 + 100, 7, Math.PI / 180, 0)
        ctx.arc(Canvas.width / 10 * 1.5 - 20, Canvas.height / 10 * 4.5 - 12 + 150, 7, Math.PI / 180, 0)
        ctx.fill()
        Texto(
            Cores.ExemploText, "35px",
            Fontes.ExemploText, "center",
            "Se conseguimos listar e contar todos os resultados, podemos usar a modelagem discreta. ",
            [Canvas.width / 2, Canvas.height / 10 * 8]
        );

    }
    else if (i == 1) {
        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Como modelar?",
            [Canvas.width / 2, Canvas.height / 10]
        );

        Texto(
            Cores.NormalText, "35px",
            Fontes.NormalText, "left",
            "Definir a variável aleatória\nListar os resultados possíveis\nContar o total de possibilidades\nVerificar se todos os resultados possuem a mesma chance",
            [Canvas.width / 10 * 1.5, Canvas.height / 10 * 2.5], 120
        );
        Texto(
            Cores.CianoClaro, "30px",
            Fontes.NormalText, "left",
            "X = resultado do sorteio\n1, 2, 3, ..., 20\nn = 20",
            [Canvas.width / 10 * 2, Canvas.height / 10 * 2.5 + 50], 120
        );

        Texto(
            Cores.ExemploText, "35px",
            Fontes.ExemploText, "center",
            "Depois de listar os resultados e verificar que todos têm a mesma chance, podemos calcular\nprobabilidade de um valor específico ou de um evento formado por vários resultados.",
            [Canvas.width / 2, Canvas.height / 10 * 8], 50
        );
    }
    else if (i == 2) {
        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Fórmulas para dados discretos",
            [Canvas.width / 2, Canvas.height / 10]
        );
        Texto(
            Cores.NormalText, "35px",
            Fontes.NormalText, "left",
            "X = variável aleatória\nx = resultado específico que queremos calcular\nn = total de resultados possíveis\n\nResultado específico:",
            [Canvas.width / 20, Canvas.height / 10 * 3.5], 50
        );

        Texto(
            Cores.NormalText, "35px",
            Fontes.NormalText, "left",
            "A = evento que queremos calcular\nk = quantidade de casos favoráveis\nn = total de resultados possíveis\n\nEvento com vários resultados possíveis:",
            [Canvas.width - 700, Canvas.height / 10 * 3.5], 50
        );
        ctx.beginPath()
        ctx.arc(Canvas.width / 20 - 20, Canvas.height / 10 * 3.5 - 12, 7, Math.PI / 180, 0)
        ctx.arc(Canvas.width / 20 - 20, Canvas.height / 10 * 3.5 - 10 + 50, 7, Math.PI / 180, 0)
        ctx.arc(Canvas.width / 20 - 20, Canvas.height / 10 * 3.5 - 10 + 100, 7, Math.PI / 180, 0)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(Canvas.width - 700 - 20, Canvas.height / 10 * 3.5 - 12, 7, Math.PI / 180, 0)
        ctx.arc(Canvas.width - 700 - 20, Canvas.height / 10 * 3.5 - 10 + 50, 7, Math.PI / 180, 0)
        ctx.arc(Canvas.width - 700 - 20, Canvas.height / 10 * 3.5 - 10 + 100, 7, Math.PI / 180, 0)
        ctx.fill()
        formula();
    }

}

function formula() {
    ctx.font = "30px arial"
    ctx.fillStyle = "white"
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.textAlign = "left"
    var [x, y] = [Canvas.width / 20, Canvas.height / 10 * 7.5]

    ctx.save()
    ctx.scale(2.4, 2.4)
    x /= 2.4
    y /= 2.4
    ctx.fillText("P(X = x) =", x, y)
    ctx.fillText("1", x + 150, y - 20)
    ctx.fillText("n", x + 150, y + 20)
    ctx.beginPath()
    ctx.moveTo(x + 140, y - 8)
    ctx.lineTo(x + 175, y - 8)
    ctx.stroke()

    var [x, y] = [Canvas.width - 700, Canvas.height / 10 * 7.5]
    
    x /= 2.4
    y /= 2.4

    ctx.fillText("P(A) =", x, y)
    ctx.fillText("k", x + 105, y - 20)
    ctx.fillText("n", x + 105, y + 20)
    ctx.beginPath()
    ctx.moveTo(x + 95, y - 8)
    ctx.lineTo(x + 130, y - 8)
    ctx.stroke()

    ctx.restore()
}