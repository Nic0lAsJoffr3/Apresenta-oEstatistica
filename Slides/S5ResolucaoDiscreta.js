import { Canvas, Cores, Fontes, fundo, Texto, FontSizes, ctx, VS } from "../files.js";
let exI = null;
function ResetFundo() {
    Fundo = null;
}
var Fundo = null;
export function SlideResolucaoDiscreta(i) {

    Fundo = fundo(8, Fundo);
    ctx.save()
    ctx.scale(VS, VS)
    Texto(
        Cores.Titulo, FontSizes.Titulo,
        Fontes.Titulo, "center",
        "Resolução de problema (Discreta)",
        [Canvas.width / 2, Canvas.height / 10]
    );


    if (i == 0) {
        Texto(
            Cores.SubTitulo, FontSizes.SubTitulo,
            Fontes.SubTitulo, "left",
            "1) Se sortearmos aleatoriamente um número de 1 a 20,\nqual a probabilidade de sair um número par?",
            [Canvas.width / 20, Canvas.height / 10 * 3], 70
        );
    }
    else if (i == 1) {
        formula(0);
    }
    else if (i == 2) {
        Texto(
            Cores.SubTitulo, FontSizes.SubTitulo,
            Fontes.SubTitulo, "left",
            "2)  Ao lançar um dado de 6 lados, qual a probabilidade de sair\n o número 4?",
            [Canvas.width / 20, Canvas.height / 10 * 3], 70
        );
    }
    else if (i == 3) {
        formula(1);
    }
    ctx.restore()
}

function formula(i) {
    if (i == 0) {
        ctx.font = "40px arial"
        ctx.fillStyle = "white"
        ctx.lineWidth = 2
        ctx.strokeStyle = "white"
        ctx.textAlign = "left"
        var [x, y] = [Canvas.width / 10, Canvas.height / 10 * 3]
        ctx.save()
        ctx.scale(1.2, 1.2)
        x /= 1.2 * VS
        y /= 1.2 * VS

        ctx.fillText("Total de resultados possíveis: 20", x, y)
        y += 60
        ctx.fillText("Casos favoráveis: 10", x, y)
        y += 85
        ctx.fillText("P(par) =", x, y)
        x += 40
        ctx.fillText("10", x + 125, y - 25)
        ctx.fillText("20", x + 125, y + 30)
        ctx.beginPath()
        ctx.moveTo(x + 115, y)
        ctx.lineTo(x + 180, y)
        ctx.stroke()
        ctx.fillText("= 0.5", x + 200, y)
        x -= 40
        y += 105
        ctx.fillText("A probabilidade é 50%", x, y)
        ctx.restore()
    }
    else if (i == 1) {
        ctx.font = "40px arial"
        ctx.fillStyle = "white"
        ctx.lineWidth = 2
        ctx.strokeStyle = "white"
        ctx.textAlign = "left"
        var [x, y] = [Canvas.width / 10, Canvas.height / 10 * 3]
        ctx.save()
        ctx.scale(1.2, 1.2)
        x /= 1.2* VS
        y /= 1.2* VS
        ctx.fillText("Total de resultados possíveis: 6", x, y)
        y += 60
        ctx.fillText("Casos favoráveis: 1", x, y)
        y += 85
        ctx.fillText("P(X = 4) =", x, y)
        x += 40
        ctx.fillText("1", x + 165, y - 25)
        ctx.fillText("6", x + 165, y + 30)
        ctx.beginPath()
        ctx.moveTo(x + 155, y)
        ctx.lineTo(x + 195, y)
        ctx.stroke()
        ctx.fillText("≈ 0,1666", x + 220, y)
        x -= 40
        y += 105
        ctx.fillText("A probabilidade é aproximadamente 16,66%", x, y)
        ctx.restore()
    }
}