import { Canvas, Cores, Fontes, fundo, Texto, FontSizes, ctx, Maquina, Chave, ChaveOuro, Maquina2, Chat, Cadeado, AndrawYao, SetaCurvadaVermelha, SetaCurvadaVerde, VS } from "../files.js";



let exI = null;
function ResetFundo() {
    Fundo = null;
}
var Fundo = null;
export function SlideAplicacaoNaArea(i) {
    Fundo = fundo(1, Fundo);
    ctx.save()
    ctx.scale(VS, VS)
    if (i == 0) {
        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "criptografia de chave simétrica",
            [Canvas.width / 2, Canvas.height / 2]
        );
    }
    else if (i > 0 && i < 5) {
        if (i < 4) {
            imagem(0)
        }
        else {
            imagem(0.1)
        }

        if (i > 1) {
            imagem(1)
        }

        if (i > 2) {
            imagem(2)
        }
    }
    else if (i == 5 || i == 6) {
        imagem(3)

        if (i == 6) {
            imagem(4)
        }
    }

    else if (i == 7 || i == 8) {
        imagem(5)

        if (i == 8) {
            imagem(6)
        }
    }
    ctx.restore()
}

function imagem(i) {
    ctx.imageSmoothingEnabled = false;
    if (i == 0 || i == 0.1) {
        var [x, y] = [Canvas.width / 20 / VS, Canvas.height / 10 * 2.5 / VS]

        ctx.textAlign = "center"
        ctx.strokeStyle = "white"
        ctx.lineWidth = 3
        ctx.strokeRect(x, y, 450, 600)
        ctx.drawImage(Maquina, x + 25, y + 50, 400, 400);
        ctx.drawImage(Chave, x + 300, y + 320, 60, 60);

        ctx.save()
        ctx.font = "30px arial"
        ctx.fillStyle = "#ffe603"
        y -= 150
        x += 140
        ctx.fillText("C", x, y)
        if (i == 0.1) ctx.fillStyle = "#fd2424"
        ctx.fillText("P", x, y + 30)
        if (i == 0.1) ctx.fillStyle = "#ffe603"
        ctx.fillText("R", x, y + 60)
        ctx.fillText("N", x, y + 90)
        ctx.fillText("G", x, y + 120)

        ctx.textAlign = "left"
        ctx.fillStyle = "white"
        ctx.fillText("ryptographic", x + 10, y)
        if (i == 0.1) ctx.fillStyle = "#fd2424"
        ctx.fillText("seudo", x + 10, y + 30)
        if (i == 0.1) ctx.fillStyle = "white"
        ctx.fillText("andom", x + 10, y + 60)
        ctx.fillText("umber", x + 10, y + 90)
        ctx.fillText("enerator", x + 10, y + 120)

        ctx.restore()
    }
    if (i == 1) {
        var [x, y] = [Canvas.width / 20 / VS + (Canvas.width/3/VS), Canvas.height / 10 * 2.5 / VS]
        ctx.textAlign = "center"
        ctx.strokeStyle = "white"
        ctx.lineWidth = 3
        ctx.strokeRect(x, y, 500, 600)

        imageChat(x + 10, y + 50, 120 / VS)
        ctx.drawImage(Chave, x + 220, y + 60, 90, 90);
        imageSeta(x + 155, y + 150, 25, "#ffe603")

        ctx.drawImage(SetaCurvadaVermelha, x + 90, y + 230, 130, 50);
        ctx.save()
        ctx.translate(x + 300, y + 450);
        ctx.rotate(-Math.PI / 2);
        imageSeta(0, 0, 25, "#ffe603")
        ctx.restore()

        imageChat(x + 370, y + 400, 120 / VS)

        ctx.drawImage(Maquina2, x + 25, y + 250, 250, 300);

        ctx.save()
        ctx.translate(x + 395, y + 370)
        ctx.rotate(-Math.PI / 8)
        ctx.drawImage(Cadeado, 0, 0, 313, 626, 0, 0, 75, 150);
        ctx.restore()

        ctx.textAlign = "center"
        ctx.fillStyle = "#fd2424"
        ctx.font = '30px arial'
        ctx.fillText("Criptografar", x + 250, y - 30)

    }

    ctx.lineWidth = 2
    if (i == 2) {
        var [x, y] = [Canvas.width / 20 / VS + (Canvas.width/3/VS)*2, Canvas.height / 10 * 2.5 / VS]
        ctx.textAlign = "center"
        ctx.strokeStyle = "white"
        ctx.lineWidth = 3

        ctx.strokeRect(x, y, 500, 600)

        imageChat(x + 10, y + 50, 120 / VS)
        ctx.drawImage(Chave, x + 220, y + 60, 90, 90);
        imageSeta(x + 155, y + 150, 25, "#ffe603")

        ctx.save()
        ctx.translate(x + 215, y + 230)
        ctx.scale(-1, 1)
        ctx.drawImage(SetaCurvadaVerde, 0, 0, 130, 50);
        ctx.restore()

        ctx.save()
        ctx.translate(x + 300, y + 450);
        ctx.rotate(-Math.PI / 2);
        imageSeta(0, 0, 25, "#ffe603")
        ctx.restore()

        imageChat(x + 370, y + 400, 120 / VS)

        ctx.drawImage(Maquina2, (x + 25), (y + 250), 250, 300);
        ctx.save()
        ctx.translate(x + 40, y + 20)
        ctx.rotate(-Math.PI / 8)
        ctx.drawImage(Cadeado, 0, 0, 313, 626, 0, 0, 75, 150);
        ctx.restore()

        ctx.save()
        ctx.translate(x + 405, y + 370)
        ctx.rotate(-Math.PI / 8)
        ctx.drawImage(Cadeado, 313, 0, 313, 626, 0, 0, 75, 150);
        ctx.restore()

        ctx.textAlign = "center"
        ctx.fillStyle = "#3bd336"
        ctx.font = '30px arial'
        ctx.fillText("Descriptografar", x + 250, y - 30)
        ctx.restore()
    }
    if (i == 3) {

        var [x, y] = [Canvas.width / 15 / VS, Canvas.height / 10 * 2.5 / VS]
        ctx.textAlign = "left"
        ctx.strokeStyle = "white"
        ctx.fillStyle = "white"
        ctx.lineWidth = 3
        ctx.font = "100px arial"
        ctx.fillText("Next-bit Test", Canvas.width / 20 / VS, Canvas.height / 10 / VS)
        ctx.drawImage(AndrawYao, x, y, 500, 500)
        ctx.textAlign = "center"
        ctx.font = "60px arial"
        ctx.fillText("Andrew Yao -", x + 250, y + 550)
        ctx.fillText("1982", x + 250, y + 610)
    }
    if (i == 4) {
        var [x, y] = [Canvas.width / 15 * 7 / VS, Canvas.height / 10 * 2.5 / VS]
        ctx.textAlign = "left"
        ctx.strokeStyle = "white"
        ctx.fillStyle = "white"
        ctx.lineWidth = 3
        ctx.drawImage(Maquina2, x, y, 500, 500)
        ctx.textAlign = "center"
        ctx.font = "60px arial"
        ctx.fillText("NIST SP 800-200", x + 250, y - 50)

        ctx.fillText("K", x - 110, y + 300)
        ctx.fillText("K + 1", x + 690, y + 300)
        ctx.fillStyle = "#fd2424"
        ctx.fillText("> 50%", x + 690, y + 240)
        ctx.save()
        ctx.translate(x - 70, y + 280)
        ctx.rotate(-Math.PI / 2)
        imageSeta(0, 0, 20, "#ffe633")
        ctx.restore()

        ctx.save()
        ctx.translate(x + 550, y + 280)
        ctx.rotate(-Math.PI / 2)
        imageSeta(0, 0, 20, "#ffe633")
        ctx.restore()

    }
    if (i == 5) {
        var [x, y] = [(Canvas.width / 20) / VS, (Canvas.height / 10 * 2.5) / VS]
        x /= (1.2 / VS)
        y /= (1.2 / VS)
        ctx.save()
        ctx.scale((1.2 / VS), (1.2 / VS))
        ctx.textAlign = "center"
        ctx.strokeStyle = "white"
        ctx.lineWidth = 3
        ctx.drawImage(Maquina, x + 25 * VS, y + 150 * VS, 400 * VS, 400 * VS);
        ctx.drawImage(Chave, x + 300 * VS, y + 420 * VS, 60 * VS, 60 * VS);

        ctx.save()
        ctx.font = "30px arial"
        ctx.fillStyle = "#ffe603"
        y -= 150 * VS
        x += 140 * VS
        ctx.fillText("C", x, y)
        ctx.fillStyle = "#fd2424"
        ctx.fillText("P", x, y + 30)
        ctx.fillStyle = "#ffe603"
        ctx.fillText("R", x, y + 60)
        ctx.fillText("N", x, y + 90)
        ctx.fillText("G", x, y + 120)

        ctx.textAlign = "left"
        ctx.fillStyle = "white"
        ctx.fillText("ryptographic", x + 10, y)
        ctx.fillStyle = "#fd2424"
        ctx.fillText("seudo", x + 10, y + 30)
        ctx.fillStyle = "white"
        ctx.fillText("andom", x + 10, y + 60)
        ctx.fillText("umber", x + 10, y + 90)
        ctx.fillText("enerator", x + 10, y + 120)
        ctx.restore()
        ctx.restore()
    }
    if (i == 6) {
        var [x, y] = [((Canvas.width) - Canvas.width / 20 - 600*VS), (Canvas.height / 10 * 2.5)]
        x /= (1.2)
        y /= (1.2)

         ctx.save()
        ctx.translate(Canvas.width/VS /2 -100/VS, y + 350 )
        ctx.rotate(-Math.PI / 2)
        imageSeta(0, 0, 100/VS, "#ffe633")
        ctx.restore()

        ctx.save()
        ctx.scale(1.2 / VS, 1.2 / VS)
        ctx.textAlign = "center"
        ctx.strokeStyle = "white"
        ctx.lineWidth = 3
        ctx.drawImage(Maquina, x + 25 * VS, y + 150 * VS, 400 * VS, 400 * VS);
        ctx.drawImage(ChaveOuro, x + 300 * VS, y + 420 * VS, 60 * VS, 60 * VS);
       
        ctx.save()
        ctx.font = "30px arial"
        ctx.fillStyle = "#ffe603"
        y -= 150 * VS
        x += 140 * VS
        ctx.fillText("C", x, y)
        ctx.fillStyle = "#3bd336"
        ctx.fillText("S", x, y + 30)
        ctx.fillStyle = "#ffe603"
        ctx.fillText("P", x, y + 60)
        ctx.fillText("R", x, y + 90)
        ctx.fillText("N", x, y + 120)
        ctx.fillText("G", x, y + 150)

        ctx.textAlign = "left"
        ctx.fillStyle = "white"
        ctx.fillText("ryptographic", x + 10, y)
        ctx.fillStyle = "#3bd336"
        ctx.fillText("ecure", x + 10, y + 30)
        ctx.fillStyle = "white"
        ctx.fillText("seudo", x + 10, y + 60)
        ctx.fillText("andom", x + 10, y + 90)
        ctx.fillText("umber", x + 10, y + 120)
        ctx.fillText("enerator", x + 10, y + 150)
        ctx.restore()
        ctx.restore()
    }

    ctx.lineWidth = 2
}



function imageChat(x, y, size) {
    const temp = document.createElement("canvas");
    const tctx = temp.getContext("2d");

    temp.width = size * VS;
    temp.height = size * VS;

    tctx.drawImage(Chat, 0, 0, size * VS, size * VS);

    tctx.globalCompositeOperation = "source-in";

    tctx.fillStyle = "white";
    tctx.fillRect(0, 0, size * VS, size * VS);

    ctx.drawImage(temp, x, y);
}

function imageSeta(x, y, size, color) {
    size *= VS
    ctx.beginPath();

    ctx.moveTo(x + size * 0.5, y + size * 0);

    ctx.lineTo(x + size * 0.5, y + size * 1.45);
    ctx.lineTo(x + size * 1.0, y + size * 1.45);

    ctx.lineTo(x + size * 0, y + size * 2.45);

    ctx.lineTo(x - size * 1.0, y + size * 1.45);
    ctx.lineTo(x - size * 0.5, y + size * 1.45);

    ctx.lineTo(x - size * 0.5, y + size * 0);

    ctx.closePath();

    ctx.fillStyle = color;
    ctx.strokeStyle = color;

    ctx.lineWidth = size * 0.2;

    ctx.fill();
    ctx.stroke();
}

