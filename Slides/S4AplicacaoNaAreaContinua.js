import { Canvas, Cores, Fontes, fundo, Texto, FontSizes, ctx, Servidor, HomemVerde, HomemLaranja, Errado, Certo, VS } from "../files.js";



let exI = null;
function ResetFundo() {
    Fundo = null;
}
var Fundo = null;
export function SlideAplicacaoNaAreaContinua(i) {
    Fundo = fundo(3, Fundo);
    ctx.save()
    ctx.scale(VS,VS)
    if (i == 0) {
        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Jitter",
            [Canvas.width / 2, Canvas.height / 2]
        );
    }
    else {
        imagem(0)

        if (i == 1) imagem(1)
        else if (i == 2) imagem(2)
        else if (i == 3) imagem(2.1)
        else if (i == 4) imagem(2.2)
        else if (i == 5) imagem(2.3)
        else if (i == 6) imagem(1.1)

    }
    ctx.restore()
}

function imagem(i) {
    ctx.imageSmoothingEnabled = false;
    ctx.lineWidth = 2

    if (i == 0) {
        var [x, y] = [Canvas.width / 20, Canvas.height / 10 * 2.5]
        ctx.textAlign = "center"
        ctx.strokeStyle = "white"
        ctx.lineWidth = 3
        ctx.drawImage(Servidor, Canvas.width / 2/VS - 150, Canvas.height / 2/VS - 150, 300, 300)
    }

    if (i == 1 || i == 1.1) {
        var [x, y] = [Canvas.width / 20, Canvas.height / 10 * 2.5]
        ctx.textAlign = "center"
        ctx.strokeStyle = "white"
        ctx.lineWidth = 3
        ctx.drawImage(HomemVerde, Canvas.width / 2/VS - 100, Canvas.height / 2/VS + 200, 200, 200)
        ctx.drawImage(HomemVerde, Canvas.width / 2/VS - 100, Canvas.height / 2/VS - 400, 200, 200)

        ctx.drawImage(HomemVerde, Canvas.width / 2/VS - 400, Canvas.height / 2/VS - 100, 200, 200)
        ctx.drawImage(HomemVerde, Canvas.width / 2/VS + 200, Canvas.height / 2/VS - 100, 200, 200)


        ctx.drawImage(HomemVerde, Canvas.width / 2/VS - 350, Canvas.height / 2/VS - 350, 200, 200)
        ctx.drawImage(HomemVerde, Canvas.width / 2/VS + 150, Canvas.height / 2/VS - 350, 200, 200)


        ctx.drawImage(HomemVerde, Canvas.width / 2/VS - 350, Canvas.height / 2/VS + 150, 200, 200)
        ctx.drawImage(HomemVerde, Canvas.width / 2/VS + 150, Canvas.height / 2/VS + 150, 200, 200)

        if (i == 1.1) {
            ctx.drawImage(Certo, Canvas.width / 2/VS - 100 + 75, Canvas.height / 2/VS + 200 + 25, 50, 50)
            ctx.drawImage(Certo, Canvas.width / 2/VS - 100 + 75, Canvas.height / 2/VS - 400 + 25, 50, 50)

            ctx.drawImage(Certo, Canvas.width / 2/VS - 400 + 75, Canvas.height / 2/VS - 100 + 25, 50, 50)
            ctx.drawImage(Certo, Canvas.width / 2/VS + 200 + 75, Canvas.height / 2/VS - 100 + 25, 50, 50)
            ctx.drawImage(Certo, Canvas.width / 2/VS - 350 + 75, Canvas.height / 2/VS - 350 + 25, 50, 50)
            ctx.drawImage(Certo, Canvas.width / 2/VS + 150 + 75, Canvas.height / 2/VS - 350 + 25, 50, 50)
            ctx.drawImage(Certo, Canvas.width / 2/VS - 350 + 75, Canvas.height / 2/VS + 150 + 25, 50, 50)
            ctx.drawImage(Certo, Canvas.width / 2/VS + 150 + 75, Canvas.height / 2/VS + 150 + 25, 50, 50)
        }
    }
    if (i >= 2 && i < 3) {
        var [x, y] = [Canvas.width / 20, Canvas.height / 10 * 2.5]
        ctx.textAlign = "center"
        ctx.strokeStyle = "white"
        ctx.lineWidth = 3
        ctx.drawImage(HomemLaranja, Canvas.width / 2/VS - 100, Canvas.height / 2/VS + 200, 200, 200)
        ctx.drawImage(HomemLaranja, Canvas.width / 2/VS - 100, Canvas.height / 2/VS - 400, 200, 200)
        var imagemHomem = null
        if (i == 2.2) imagemHomem = HomemVerde
        else imagemHomem = HomemLaranja
        ctx.drawImage(imagemHomem, Canvas.width / 2/VS - 400, Canvas.height / 2/VS - 100, 200, 200)
        ctx.drawImage(HomemLaranja, Canvas.width / 2/VS + 200, Canvas.height / 2/VS - 100, 200, 200)
        ctx.drawImage(HomemLaranja, Canvas.width / 2/VS - 350, Canvas.height / 2/VS - 350, 200, 200)
        ctx.drawImage(HomemLaranja, Canvas.width / 2/VS + 150, Canvas.height / 2/VS - 350, 200, 200)
        ctx.drawImage(HomemLaranja, Canvas.width / 2/VS - 350, Canvas.height / 2/VS + 150, 200, 200)
        ctx.drawImage(HomemLaranja, Canvas.width / 2/VS + 150, Canvas.height / 2/VS + 150, 200, 200)

        ctx.drawImage(Errado, Canvas.width / 2/VS - 100 + 75, Canvas.height / 2/VS + 200 + 25, 50, 50)
        ctx.drawImage(Errado, Canvas.width / 2/VS - 100 + 75, Canvas.height / 2/VS - 400 + 25, 50, 50)
        var imagemHomem = null
        if (i == 2.2) imagemHomem = Certo
        else imagemHomem = Errado
        ctx.drawImage(imagemHomem, Canvas.width / 2/VS - 400 + 75, Canvas.height / 2/VS - 100 + 25, 50, 50)
        ctx.drawImage(Errado, Canvas.width / 2/VS + 200 + 75, Canvas.height / 2/VS - 100 + 25, 50, 50)
        ctx.drawImage(Errado, Canvas.width / 2/VS - 350 + 75, Canvas.height / 2/VS - 350 + 25, 50, 50)
        ctx.drawImage(Errado, Canvas.width / 2/VS + 150 + 75, Canvas.height / 2/VS - 350 + 25, 50, 50)
        ctx.drawImage(Errado, Canvas.width / 2/VS - 350 + 75, Canvas.height / 2/VS + 150 + 25, 50, 50)
        ctx.drawImage(Errado, Canvas.width / 2/VS + 150 + 75, Canvas.height / 2/VS + 150 + 25, 50, 50)

    }
    if (i == 2.1 || i == 2.2) {
        ctx.fillStyle = "white"
        ctx.font = "50px arial"
        ctx.fillText("5s", Canvas.width / 2/VS - 100 + 100, Canvas.height / 2 /VS+ 200 + 170)
        ctx.fillText("5s", Canvas.width / 2/VS - 100 + 100, Canvas.height / 2/VS - 400 + 170)
        var textoHomem = "5s"
        if (i == 2.2) textoHomem = ""
        ctx.fillText(textoHomem, Canvas.width / 2/VS - 400 + 100, Canvas.height / 2/VS - 100 + 170)
        ctx.fillText("5s", Canvas.width / 2/VS + 200 + 100, Canvas.height / 2 /VS- 100 + 170)
        ctx.fillText("5s", Canvas.width / 2/VS - 350 + 100, Canvas.height / 2 /VS- 350 + 170)
        ctx.fillText("5s", Canvas.width / 2/VS + 150 + 100, Canvas.height / 2 /VS- 350 + 170)
        ctx.fillText("5s", Canvas.width / 2/VS - 350 + 100, Canvas.height / 2 /VS+ 150 + 170)
        ctx.fillText("5s", Canvas.width / 2/VS + 150 + 100, Canvas.height / 2 /VS+ 150 + 170)
    }
    else if (i == 2.3) {
        ctx.fillStyle = "white"
        ctx.font = "50px arial"
        ctx.fillText("5.44s", Canvas.width / 2/VS - 100 + 100, Canvas.height / 2/VS + 200 + 170)
        ctx.fillText("5.16s", Canvas.width / 2/VS - 100 + 100, Canvas.height / 2/VS - 400 + 170)
        ctx.fillText("5.52s", Canvas.width / 2/VS - 400 + 100, Canvas.height / 2/VS - 100 + 170)
        ctx.fillText("5.27s", Canvas.width / 2/VS + 200 + 100, Canvas.height / 2/VS - 100 + 170)
        ctx.fillText("5.23s", Canvas.width / 2/VS - 350 + 100, Canvas.height / 2/VS - 350 + 170)
        ctx.fillText("5.38s", Canvas.width / 2/VS + 150 + 100, Canvas.height / 2/VS - 350 + 170)
        ctx.fillText("5.35s", Canvas.width / 2/VS - 350 + 100, Canvas.height / 2/VS + 150 + 170)
        ctx.fillText("5.40s", Canvas.width / 2/VS + 150 + 100, Canvas.height / 2/VS + 150 + 170)
    }

}

