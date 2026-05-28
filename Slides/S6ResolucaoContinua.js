import { Canvas, Cores, Fontes, fundo, Texto, FontSizes, ctx, VS } from "../files.js";
let exI = null;
function ResetFundo() {
    Fundo = null;
}
var Fundo = null;
export function SlideResolucaoContinua(i) {

    Fundo = fundo(8, Fundo);

    ctx.save()
    ctx.scale(VS, VS)
    Texto(
        Cores.Titulo, FontSizes.Titulo,
        Fontes.Titulo, "center",
        "Resolução de problema (Contínua)",
        [Canvas.width / 2, Canvas.height / 10]
    );

    if (i == 0) {
        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "left",
            "A variável aleatória X tem distribuição uniforme \nno intervalo (100, 160). Calcular:\n\na) a média\nb) a variância\nc) a probabilidade de X estar entre 120 e 150",
            [Canvas.width / 10 * 2, Canvas.height / 10 * 2.5], 60
        );
    }
    else if (i == 1) {
        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "left",
            "a) Média",
            [Canvas.width / 10 * 2, Canvas.height / 10 * 2.5], 60
        );
        formula(0)
    }
    else if (i == 2) {
        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "left",
            "b) Variância",
            [Canvas.width / 10 * 2, Canvas.height / 10 * 2.5], 60
        );
        formula(1)
    }
    else if (i == 3) {
        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "left",
            "c) Probabilidade",
            [Canvas.width / 10 * 2, Canvas.height / 10 * 2.5], 60
        );
        formula(2)
    }
    ctx.restore()
}

function formula(i) {
    if (i == 0) {
        ctx.font = "30px arial"
        ctx.fillStyle = "white"
        ctx.lineWidth = 2
        ctx.strokeStyle = "white"
        ctx.textAlign = "left"
        var [x, y] = [Canvas.width / 10 / VS * 2.2, Canvas.height / 10 / VS * 3.5]
        ctx.save()
        ctx.scale(1.3, 1.3)
        x /= 1.3
        y /= 1.3

        ctx.fillText("μx =", x, y)
        x -= 60
        ctx.fillText("a + b", x + 140, y - 25)
        ctx.fillText("2", x + 165, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 5)
        ctx.lineTo(x + 210, y - 5)
        ctx.stroke()

        y += 100
        x += 60
        ctx.fillText("μx =", x, y)
        x -= 60
        ctx.fillText("100 + 160", x + 140, y - 25)
        ctx.fillText("2", x + 200, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 5)
        ctx.lineTo(x + 285, y - 5)
        ctx.stroke()

        y += 100
        x += 60
        ctx.fillText("μx =", x, y)
        x -= 60
        ctx.fillText("260", x + 140, y - 25)
        ctx.fillText("2", x + 157, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 5)
        ctx.lineTo(x + 200, y - 5)
        ctx.stroke()

        y += 100
        x += 60
        ctx.fillText("μx = 130", x, y)
        ctx.restore()
    }
    else if (i == 1) {
        ctx.font = "30px arial"
        ctx.fillStyle = "white"
        ctx.lineWidth = 2
        ctx.strokeStyle = "white"
        ctx.textAlign = "left"
        var [x, y] = [Canvas.width / 10 / VS * 2.2, Canvas.height / 10 / VS * 3.5]
        ctx.save()
        ctx.scale(1.2, 1.2)
        x /= 1.2
        y /= 1.2

        ctx.fillText("σ² =", x, y)
        x -= 60
        ctx.fillText("(b - a)²", x + 145, y - 25)
        ctx.fillText("12", x + 165, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 5)
        ctx.lineTo(x + 235, y - 5)
        ctx.stroke()

        y += 100
        x += 60
        ctx.fillText("σ² =", x, y)
        x -= 60
        ctx.fillText("(160 - 100)² ", x + 140, y - 25)
        ctx.fillText("12", x + 200, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 5)
        ctx.lineTo(x + 295, y - 5)
        ctx.stroke()

        y += 100
        x += 60
        ctx.fillText("σ² =", x, y)
        x -= 60
        ctx.fillText("60²", x + 140, y - 25)
        ctx.fillText("12", x + 140, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 5)
        ctx.lineTo(x + 185, y - 5)
        ctx.stroke()

        y += 100
        x += 60
        ctx.fillText("σ² =", x, y)
        x -= 60
        ctx.fillText("3600", x + 140, y - 25)
        ctx.fillText("12", x + 157, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 5)
        ctx.lineTo(x + 215, y - 5)
        ctx.stroke()

        y += 100
        x += 60
        ctx.fillText("σ² = 300", x, y)
        ctx.restore()
    }
    else if (i == 2) {
        ctx.font = "30px arial"
        ctx.fillStyle = "white"
        ctx.lineWidth = 2
        ctx.strokeStyle = "white"
        ctx.textAlign = "left"
        var [x, y] = [Canvas.width / 10/VS * 2.2, Canvas.height / 10/VS * 3.5]
        ctx.save()
        ctx.scale(1.3, 1.3)
        x /= 1.3
        y /= 1.3

        ctx.fillText("P(c ≤ X ≤ d)  = ", x, y)
        x += 70
        ctx.fillText("(d - c) ", x + 145, y - 25)
        ctx.fillText("(b - a)", x + 145, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 5)
        ctx.lineTo(x + 235, y - 5)
        ctx.stroke()

        y += 100
        x -= 70
        ctx.fillText("P(120 ≤ X ≤ 150)  =", x, y)
        x += 145
        ctx.fillText("(150 - 120)", x + 140, y - 25)
        ctx.fillText("(160 - 100)", x + 140, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 5)
        ctx.lineTo(x + 295, y - 5)
        ctx.stroke()

        y += 100
        x -= 145
        ctx.fillText("P(120 ≤ X ≤ 150)  =", x, y)
        x += 145
        ctx.fillText("30", x + 140, y - 25)
        ctx.fillText("60", x + 140, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 5)
        ctx.lineTo(x + 185, y - 5)
        ctx.stroke()

        y += 100
        x -= 145
        ctx.fillText("P(120 ≤ X ≤ 150)  =   0,5 ou 50%", x, y)
        ctx.restore()
    }
}