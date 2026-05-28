import { Canvas, Cores, ctx, CuboDado, Fontes, FontSizes, fundo, Texto, VS } from "../files.js";

var Fundo = null;
var Dado = null

var SizeBarValor = new Array(10).fill(0)
var SizeBarValor2 = new Array(6).fill(0)
var SizeBarValor3 = new Array(10).fill(0)
var SizeBarValor4 = new Array(6).fill(0)
var SizeBarValor5 = new Array(10).fill(0)
let mediaAmostral = 0;
let exI = null;
function ResetFundo() {
    Dado = null

    SizeBarValor = new Array(10).fill(0)
    SizeBarValor2 = new Array(6).fill(0)
    SizeBarValor3 = new Array(10).fill(0)
    SizeBarValor4 = new Array(6).fill(0)
    SizeBarValor5 = new Array(10).fill(0)
    mediaAmostral = 0;
}


const En = Array.from({ length: 400 }, (_, n) => {
    const base = 1 / Math.sqrt(n + 1);

    // ruído pequeno que diminui com n
    const noise = (Math.random() - 0.5) * (0.6 / Math.sqrt(n + 1));

    return Math.abs(base + noise);
});


ResetFundo();
export function SlideLeiGrandesNumeros(i) {

    Fundo = fundo(4, Fundo);
    ctx.save()
    ctx.scale(VS, VS)
    if (i == 0) {
        if (exI != i) {
            exI = i
            ResetFundo();
        }

        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Lei dos Grandes Números",
            [Canvas.width / 2, Canvas.height / 10]
        );
        Texto(
            Cores.Titulo, FontSizes.SubTitulo,
            Fontes.Titulo, "center",
            "“Quando o acaso vira previsível”",
            [Canvas.width / 2, Canvas.height / 4]
        );
        animDado();
    }
    else if (i == 1) {
        if (exI != i) {
            exI = i
            ResetFundo();
        }

        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "O que é a Lei dos Grandes Números",
            [Canvas.width / 2, Canvas.height / 10]
        );

        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "left",
            "Conforme o número de amostras aumenta, \na média amostral se aproxima do valor esperado.",
            [Canvas.width / 10, Canvas.height / 10 * 2.25]
        );

        Grafico(0)

        Texto(
            Cores.Red, FontSizes.NormalText,
            Fontes.NormalText, "right",
            "Valor Esperado",
            [Canvas.width / 4 * VS, (Canvas.height / 4 * 3 * VS)]
        );

        Texto(
            Cores.CianoClaro, FontSizes.NormalText,
            Fontes.NormalText, "center",
            "Poucas Amostras",
            [(Canvas.width / 2 / 1.3 * VS), Canvas.height - 480]
        );

        Texto(
            Cores.CianoClaro, FontSizes.NormalText,
            Fontes.NormalText, "center",
            "Muitas Amostras",
            [(Canvas.width / 2 * 1.5 * VS), Canvas.height - 480]
        );

    }
    else if (i == 2) {

        if (exI != i) {
            exI = i
            ResetFundo();
        }
        // Titulo e Subtitulo
        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Aplicação na distribuição uniforme",
            [Canvas.width / 2, Canvas.height / 10]
        );
        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "center",
            "Em distribuições uniformes, a média localiza-se no centro do intervalo.",
            [Canvas.width / 2, Canvas.height / 10 * 2]
        );

        // Informe das formulas no canto
        Texto(
            Cores.NormalText, FontSizes.ExemploText,
            Fontes.ExemploText, "left",
            "Discreta (1 a N): ",
            [Canvas.width / 50, Canvas.height / 10 * 3]
        );
        Texto(
            Cores.NormalText, FontSizes.ExemploText,
            Fontes.ExemploText, "left",
            "Contínua [ a , b ]: ",
            [Canvas.width / 50, Canvas.height / 10 * 4]
        );
        Formula(0)

        // Grafico em baixo
        Grafico(1)
        Formula(1)
    }
    else if (i == 3) {
        if (exI != i) {
            exI = i
            ResetFundo();
        }

        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Convergência da Média Amostral",
            [Canvas.width / 2, Canvas.height / 10]
        );

        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "center",
            "Conforme aumentam as amostras, a média se estabiliza e o erro tende a zero.",
            [Canvas.width / 2, Canvas.height / 10 * 2.25]
        );


        Formula(2);

        // Grafico em baixo
        Formula(3);


        Grafico(2);
    }

    else if (i == 4) {
        Grafico(3)
    }
    ctx.restore()
}
function DesenharBarras(x, y, plusY = 0, sizeX = 100) {

    ctx.fillRect(x, Canvas.height - plusY - y * VS, sizeX * VS, y * VS)
}
let dados = [];



function animDado() {
    if (dados.length <= 0) {
        dados[0] = [Canvas.width / 13 / VS, Canvas.height / 3 / VS, Math.floor(Math.random() * 6 + 1), 0.5 / VS, 10, 0]
        dados[1] = [Canvas.width / 1.15 / VS, Canvas.height / 4 / VS, Math.floor(Math.random() * 6 + 1), 0.4 / VS, 5, 0]
        dados[2] = [Canvas.width / 10 / VS, Canvas.height / 1.3 / VS, Math.floor(Math.random() * 6 + 1), 0.45 / VS, 4, 0]
        dados[3] = [Canvas.width / 1.3 / VS, Canvas.height / 1.4 / VS, Math.floor(Math.random() * 6 + 1), 0.53 / VS, 15, 0]
        dados[4] = [Canvas.width / 2 / VS, Canvas.height / 1.7 / VS, Math.floor(Math.random() * 6 + 1), 0.7 / VS, 3, 0]
    }
    else {
        ctx.strokeStyle = Cores.CianoClaro;

        ctx.lineWidth = 1
        dados.forEach((element, index) => {
            if (element == null) {
                return;
            }

            element[1] += Math.random() * 1 - 0.5;
            element[0] += Math.random() * 1 - 0.5;
            if (element[5] <= 0) {
                element[2] = Math.floor(Math.random() * 6 + 1);
                element[5] = element[4];
            }
            else {
                element[5] -= 0.025;
            }

            const [x, y, i, s] = element;

            const cubo = CuboDado(x, y, i, s);
            ctx.stroke(cubo);
        });
    }

}


function Grafico(i) {

    ctx.textBaseline = "alphabetic";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    switch (i) {
        case 0:
            ctx.fillStyle = Cores.CianoClaro
            var xB = 100
            var sizeBar = [173, 402, 250, 118, 266]

            for (var i = 0; i < 5; i++) {
                if (SizeBarValor[i] < sizeBar[i]) SizeBarValor[i] += (sizeBar[i] / 50);
                DesenharBarras(Canvas.width / 4 + ((100 * VS) * i + (10 * i)), SizeBarValor[i]);
            }
            for (var i = 0; i < 5; i++) {
                if (SizeBarValor[i + 5] < 250) SizeBarValor[i + 5] += 5
                DesenharBarras(Canvas.width / 8 * 5 + (100 * VS) * i + (10 * i), SizeBarValor[i + 5]);
            }
            ctx.beginPath()
            ctx.moveTo(Canvas.width / 4 - 300, Canvas.height - 250 * VS);
            ctx.lineTo(Canvas.width / 8 * 5 + 550, Canvas.height - 250 * VS)
            ctx.strokeStyle = Cores.Red
            ctx.lineWidth = 5
            ctx.stroke()

            break;
        case 1:
            ctx.fillStyle = Cores.CianoClaro
            for (var i = 0; i < 6; i++) {
                if (SizeBarValor2[i] < 250) SizeBarValor2[i] += Math.random() * 5
                else SizeBarValor2[i] = 250
                DesenharBarras((Canvas.width * VS + (100 * VS) * 6) / 16 + (100 * VS) * i + (10 * i), SizeBarValor2[i], 50);
                ctx.font = FontSizes.ExemploText + Fontes.ExemploText
                ctx.fillStyle = Cores.CianoClaro
                ctx.textAlign = "center"
                ctx.fillText((i + 1).toString(), ((Canvas.width * VS + (100 * VS) * 6) / 16 + (100 * VS) * i + (10 * i) + (50 * VS)), (Canvas.height - 15 * VS))
            }
            for (var i = 0; i < 10; i++) {
                if (SizeBarValor3[i] < 250) SizeBarValor3[i] += Math.random() * (3 + (i + 1) / 3)
                else SizeBarValor3[i] = 250
                ctx.font = FontSizes.ExemploText + Fontes.ExemploText
                ctx.fillStyle = Cores.CianoClaro
                ctx.textAlign = "center"
                ctx.fillText(((-i + 10) / 10).toString(), Canvas.width - ((Canvas.width + (50 * VS) * 10) / 16 + (50 * VS) * i + (20 * i) - 60 * VS), (Canvas.height - 15 * VS))
                DesenharBarras(Canvas.width - ((Canvas.width + (50 * VS) * 10) / 16 + 50 * VS * i + (20 * i)), SizeBarValor3[i], 50, 50);
            }
            ctx.font = FontSizes.ExemploText + Fontes.ExemploText
            ctx.fillStyle = Cores.CianoClaro
            ctx.textAlign = "center"

            ctx.fillText("0", Canvas.width - ((Canvas.width + (50 * VS) * 10) / 16 + (50 * VS) * i + (20 * i) - 60 * VS), Canvas.height - 15 * VS)


            ctx.beginPath()
            ctx.strokeStyle = Cores.Red
            ctx.lineWidth = 3
            ctx.moveTo((Canvas.width * VS + (55.5 * VS) * 6) / 16 + ((100 * VS) * 6 + (10 * 6) + (25 * VS)) / 2, Canvas.height - 25)
            ctx.lineTo((Canvas.width * VS + (55.5 * VS) * 6) / 16 + ((100 * VS) * 6 + (10 * 6) + (25 * VS)) / 2, Canvas.height - (325*VS))
            ctx.stroke()
            ctx.beginPath()
            ctx.strokeStyle = Cores.Red
            ctx.lineWidth = 4
            ctx.moveTo(Canvas.width - ((Canvas.width - 50 * 10) / 16 + ((50 * VS) * 10 + (20 * 10) + 85)) / 2, Canvas.height - (325*VS))
            ctx.lineTo(Canvas.width - ((Canvas.width - 50 * 10) / 16 + ((50 * VS) * 10 + (20 * 10) + 85)) / 2, Canvas.height - 45)
            ctx.stroke()
            ctx.beginPath()
            ctx.strokeStyle = Cores.CianoClaro
            ctx.lineWidth = 3
            ctx.moveTo(Canvas.width - ((Canvas.width + 50 * 10) / 16 + (20 * 0) - 70), Canvas.height - 40)
            ctx.lineTo(Canvas.width - ((Canvas.width + 50 * 10) / 16 + (50 * VS) * 10 + (20 * 10) - 45), Canvas.height - 40)
            ctx.stroke()
            break;
        case 2:
            ctx.save()
            ctx.translate(0, Canvas.height / 10 * 1.5)
            ctx.scale(0.85, 0.85)
            ctx.fillStyle = Cores.CianoClaro
            var SizeBarBaseValue = [
                200,
                100,
                150,
                50,
                250,
                300
            ]
            var SizeBarBaseValue2 =
                [12, 45, 58, 33, 60, 55, 180, 300, 210, 150
                ]
            var xB = 100

            ctx.save()
            ctx.translate(-Canvas.width / 15, 0)
            for (var i = 0; i < 6; i++) {
                if (SizeBarValor4[i] < SizeBarBaseValue[i]) SizeBarValor4[i] += Math.random() * 5
                else SizeBarValor4[i] = SizeBarBaseValue[i]
                DesenharBarras((Canvas.width + (100*VS) * 6) / 16 + (100*VS) * i + (10 * i), SizeBarValor4[i], 50);


                ctx.font=  FontSizes.ExemploText, Fontes.ExemploText
                ctx.textAlign = "center"
                ctx.fillText((i + 1).toString(),(Canvas.width + (100*VS) * 6) / 16 + (100*VS) * i + (10 * i) + (50*VS), Canvas.height - 15)
                ctx.fillText(Math.round(SizeBarValor4[i]).toString(),(Canvas.width + (100*VS) * 6) / 16 + (100*VS) * i + (10 * i) + (50*VS), Canvas.height - SizeBarValor4[i]*VS - 60)
                
                
            }
            ctx.beginPath()
            ctx.strokeStyle = Cores.Red
            ctx.lineWidth = 3
            ctx.moveTo((Canvas.width + (100*VS) * (6)) / 16 + ((100*VS) * (3.9 * 2) + (10 * 6)) / 2, Canvas.height - 25*VS)
            ctx.lineTo((Canvas.width + (100*VS) * (6)) / 16 + ((100*VS) * (3.9 * 2) + (10 * 6)) / 2, Canvas.height - 395*VS)
            ctx.stroke()
            ctx.restore()

            ctx.save()
            ctx.translate(Canvas.width / 5, 0)
            for (var i = 0; i < 10; i++) {
                if (SizeBarValor5[i] < SizeBarBaseValue2[i]) SizeBarValor5[i] += Math.random() * 5
                else SizeBarValor5[i] = SizeBarBaseValue2[i]

                
                ctx.font=  "20px "+ Fontes.ExemploText
                ctx.textAlign = "center"
                ctx.fillText(((-i + 10) / 10).toString(),Canvas.width - ((Canvas.width + (50*VS) * 10) / 16 + (50*VS) * (i - 1) + (20*VS * i)), Canvas.height - 15*VS)
                ctx.fillText(Math.round(SizeBarValor5[i]).toString(),Canvas.width - ((Canvas.width + (50*VS) * 10) / 16 + (50*VS) * (i - 1) + (20*VS * i)) - (25*VS), Canvas.height - SizeBarValor5[i]*VS - 70)
                DesenharBarras(Canvas.width - ((Canvas.width + (50*VS) * 10) / 16 + (50*VS) * i + (20*VS * i)), SizeBarValor5[i], 50, 50);
            }
            ctx.beginPath()
            ctx.strokeStyle = Cores.CianoClaro
            ctx.lineWidth = 3
            ctx.moveTo(Canvas.width - ((Canvas.width + (50*VS) * 10) / 16  - 70), Canvas.height - 40)
            ctx.lineTo(Canvas.width - ((Canvas.width + (50*VS) * 10) / 16 + (50*VS) * 10 + (20 *VS* 10) - 45), Canvas.height - 40)
            ctx.stroke()

            ctx.beginPath()
            ctx.strokeStyle = Cores.Red
            ctx.lineWidth = 4
            ctx.moveTo(Canvas.width - ((Canvas.width - 25 *VS * ((10*VS) - 2.95) * 2) / 16 + ((50*VS) * (10 - 2.95) * 2 + (20 *VS* (10)) * 2)) / 2, Canvas.height - 390*VS)
            ctx.lineTo(Canvas.width - ((Canvas.width - 25 *VS* ((10*VS) - 2.95) * 2) / 16 + ((50*VS) * (10 - 2.95) * 2 + (20 * VS*(10)) * 2)) / 2, Canvas.height - 45)
            ctx.stroke()
            Texto(
                Cores.CianoClaro, "20px",
                Fontes.ExemploText, "center",
                "0",
                [Canvas.width - ((Canvas.width + 50 * 10) / 16 + 50 * i + (20 * i) - 60), Canvas.height - 15]
            )

            ctx.restore();

            ctx.restore()
            break;
        case 3:
            var [x, y] = [Canvas.width / 10 * 2, Canvas.height / 10 * 3]
            ctx.font = "30px arial"
            ctx.strokeStyle = Cores.CianoClaro
            ctx.lineWidth = 3
            ctx.beginPath()
            ctx.moveTo(x, y)

            for (var i = 0; i < 400; i++) {
                ctx.lineTo(x + (i * 2), y - (En[i] * 200))
            }
            ctx.stroke()
            break;
    }
}
function Formula(i) {

    ctx.textBaseline = "alphabetic";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    switch (i) {
        case 0:
            var [xD, yD] = [Canvas.width / 10 * 2*VS, Canvas.height / 10 * 3]
            ctx.save()
            ctx.translate(xD, yD)
            xD = -50*VS
            yD = 0
            ctx.scale(VS, VS)
            ctx.font = "30px arial"
            ctx.fillStyle = "white"

            ctx.fillText("μ = ", xD, yD)
            xD += 60
            ctx.fillText("1 + n", xD, yD - 20)
            ctx.textAlign = "center"
            ctx.fillText("2", xD + 35, yD + 20)
            ctx.beginPath()
            ctx.strokeStyle = "white"
            ctx.lineWidth = 3
            ctx.moveTo(xD - 5, yD - 10)
            ctx.lineTo(xD + 80, yD - 10)
            ctx.stroke()
            ctx.textAlign = "left"
            
            xD -= 60
            yD += 100

            ctx.fillText("μ = ", xD, yD)
            xD += 60
            ctx.fillText("a + b", xD, yD - 20)
            ctx.textAlign = "center"
            ctx.fillText("2", xD + 35, yD + 20)
            ctx.beginPath()
            ctx.strokeStyle = "white"
            ctx.lineWidth = 3
            ctx.moveTo(xD - 5, yD - 10)
            ctx.lineTo(xD + 80, yD - 10)
            ctx.stroke()
            ctx.restore()
            break;
        case 1:
            
            var xB = 100
            ctx.textAlign = "left"
            xD = (Canvas.width + 100 * 6) / 16
            yD = Canvas.height / 10 * 6
            ctx.fillText("μ = ", xD, yD)
            xD += 60
            ctx.fillText("1 + 6", xD, yD - 20)
            ctx.textAlign = "center"
            ctx.fillText("2", xD + 35, yD + 20)

            ctx.fillText("=", xD + 115, yD)

            ctx.fillText("7", xD + 175, yD - 20)
            ctx.fillText("2", xD + 175, yD + 20)


            ctx.fillText("=", xD + 230, yD)

            ctx.fillStyle = Cores.Red
            ctx.fillText("3.5", xD + 280, yD)
            ctx.beginPath()
            ctx.strokeStyle = Cores.CianoClaro
            ctx.lineWidth = 3
            ctx.moveTo(xD - 5, yD - 10)
            ctx.lineTo(xD + 80, yD - 10)
            ctx.stroke()

            ctx.beginPath()
            ctx.strokeStyle = Cores.CianoClaro
            ctx.lineWidth = 3
            ctx.moveTo(xD + 150, yD - 10)
            ctx.lineTo(xD + 200, yD - 10)
            ctx.stroke()

            // outra formula

            var [xD, yD] = [Canvas.width / 50 * 7, Canvas.height / 10 * 3]
            var xB = 100
            ctx.font = FontSizes.ExemploText + Fontes.ExemploText


            ctx.textAlign = "left"
            ctx.fillStyle = Cores.CianoClaro
            xD = (Canvas.width + 50 * 5) / 16 * 7.6
            yD = Canvas.height / 10 * 6
            ctx.fillText("μ = ", xD, yD)
            xD += 60
            ctx.fillText("0 + 1", xD, yD - 20)
            ctx.textAlign = "center"
            ctx.fillText("2", xD + 35, yD + 20)

            ctx.fillText("=", xD + 115, yD)

            ctx.fillText("1", xD + 175, yD - 20)
            ctx.fillText("2", xD + 175, yD + 20)


            ctx.fillText("=", xD + 230, yD)
            ctx.fillStyle = Cores.Red
            ctx.fillText("0.5", xD + 280, yD)


            ctx.beginPath()
            ctx.strokeStyle = Cores.CianoClaro
            ctx.lineWidth = 3
            ctx.moveTo(xD - 5, yD - 10)
            ctx.lineTo(xD + 80, yD - 10)
            ctx.stroke()

            ctx.beginPath()
            ctx.strokeStyle = Cores.CianoClaro
            ctx.lineWidth = 3
            ctx.moveTo(xD + 150, yD - 10)
            ctx.lineTo(xD + 200, yD - 10)
            ctx.stroke()
            break;
        case 2:

            var xB2 = Canvas.width / 10 * 1.3
            var x_w_B2 = Canvas.width / 10 * 5.35
            var yB2 = Canvas.height / 10 * 2.55

            ctx.fillStyle = "white"
            ctx.font = "25px arial"
            ctx.textAlign = "center"

            ctx.save();
            ctx.scale(1.3, 1.3)
            ctx.fillText("Média amostral: X   = ", x_w_B2 - 72, yB2)

            ctx.font = "15px arial"
            ctx.fillText("n", x_w_B2 + 15, yB2 + 3)
            ctx.font = "25px arial"

            ctx.fillText("n", x_w_B2 + 115, yB2 + 20)
            ctx.font = "30px arial"
            ctx.fillText("​∑", x_w_B2 + 70, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("n", x_w_B2 + 90, yB2 - 30)
            ctx.fillText("i = 1", x_w_B2 + 100, yB2 - 8)
            ctx.font = "25px arial"
            ctx.fillText("M", x_w_B2 + 130, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("i", x_w_B2 + 145, yB2 - 12)

            ctx.font = "25px arial"
            ctx.fillText("F", x_w_B2 + 160, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("i", x_w_B2 + 170, yB2 - 12)
            ctx.lineWidth = 2
            ctx.strokeStyle = "white"

            ctx.beginPath()
            ctx.moveTo(x_w_B2 - 15, yB2 - 25)
            ctx.lineTo(x_w_B2 + 12.5, yB2 - 25)
            ctx.stroke();

            ctx.beginPath()
            ctx.moveTo(x_w_B2 + 50, yB2 - 5)
            ctx.lineTo(x_w_B2 + 180, yB2 - 5)
            ctx.stroke();
            ctx.restore()

            ctx.save();
            ctx.scale(1.3, 1.3)
            ctx.fillText("Média amostral: X   = ", xB2 - 73, yB2)

            ctx.font = "15px arial"
            ctx.fillText("n", xB2 + 15, yB2 + 3)
            ctx.font = "25px arial"

            ctx.fillText("n", xB2 + 115, yB2 + 20)
            ctx.font = "30px arial"
            ctx.fillText("​∑", xB2 + 70, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("n", xB2 + 90, yB2 - 30)
            ctx.fillText("i = 1", xB2 + 100, yB2 - 8)
            ctx.font = "25px arial"
            ctx.fillText("X", xB2 + 130, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("i", xB2 + 145, yB2 - 12)

            ctx.font = "25px arial"
            ctx.fillText("F", xB2 + 160, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("i", xB2 + 170, yB2 - 12)
            ctx.lineWidth = 2
            ctx.strokeStyle = "white"

            ctx.beginPath()
            ctx.moveTo(xB2 - 15, yB2 - 25)
            ctx.lineTo(xB2 + 12.5, yB2 - 25)
            ctx.stroke();

            ctx.beginPath()
            ctx.moveTo(xB2 + 50, yB2 - 5)
            ctx.lineTo(xB2 + 180, yB2 - 5)
            ctx.stroke();
            ctx.restore()
            break;
        case 3:
            ctx.fillStyle = Cores.CianoClaro
            ctx.strokeStyle = Cores.CianoClaro
            ctx.lineWidth = 2
            ctx.font = "25px arial"
            ctx.textAlign = "center"
            var xB2 = Canvas.width / 10 * 0.5
            var yB2 = Canvas.height / 10 * 5.7
            ctx.save();
            ctx.scale(0.9, 0.9)
            ctx.fillText("X   = ", xB2 + 20, yB2)

            ctx.font = "15px arial"
            ctx.fillText("n", xB2 + 15, yB2 + 3)
            ctx.font = "25px arial"

            ctx.fillText("n", xB2 + 115, yB2 + 20)
            ctx.font = "30px arial"

            ctx.save()
            ctx.translate(-60, 0)
            ctx.scale(0.9, 0.9)
            ctx.fillText("​∑", xB2 + 70, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("n", xB2 + 90, yB2 - 30)
            ctx.fillText("i = 1", xB2 + 100, yB2 - 8)
            ctx.font = "25px arial"
            ctx.fillText("X", xB2 + 130, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("i", xB2 + 145, yB2 - 12)

            ctx.font = "25px arial"
            ctx.fillText("F", xB2 + 160, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("i", xB2 + 170, yB2 - 12)

            ctx.font = "25px arial"
            ctx.textAlign = "left"
            ctx.fillText("=", xB2 + 750, yB2 - 15)
            ctx.textAlign = "center"
            ctx.fillText("4100", xB2 + 820, yB2 - 15)

            ctx.font = "25px arial"
            ctx.textAlign = "left"
            ctx.fillText("=", xB2 + 200, yB2 - 15)
            ctx.fillText("200.1 + 100.2 +150.3 +50.4 +250.5 +300.6", xB2 + 240, yB2 - 15)
            ctx.restore()


            ctx.font = "30px arial"
            ctx.fillText("​∑", xB2 + 70, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("n", xB2 + 90, yB2 - 30)
            ctx.fillText("i = 1", xB2 + 100, yB2 - 8)
            ctx.font = "25px arial"
            ctx.fillText("X", xB2 + 130, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("i", xB2 + 145, yB2 - 12)

            ctx.font = "25px arial"
            ctx.fillText("F", xB2 + 160, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("i", xB2 + 170, yB2 - 12)




            ctx.font = "25px arial"
            ctx.textAlign = "left"

            ctx.textAlign = "center"
            ctx.fillText("=", xB2 + 200, yB2)
            ctx.fillText("1050", xB2 + 260, yB2 + 25)
            ctx.fillText("4100", xB2 + 260, yB2 - 10)


            ctx.fillText("≈", xB2 + 330, yB2)
            ctx.fillText("3.90", xB2 + 380, yB2)

            ctx.beginPath()
            ctx.moveTo(xB2 + 55, yB2 - 2.5)
            ctx.lineTo(xB2 + 180, yB2 - 2.5)
            ctx.stroke();

            ctx.beginPath()
            ctx.moveTo(xB2 + 215, yB2 - 2.5)
            ctx.lineTo(xB2 + 310, yB2 - 2.5)
            ctx.stroke();

            ctx.beginPath()
            ctx.moveTo(xB2 - 15, yB2 - 25)
            ctx.lineTo(xB2 + 12.5, yB2 - 25)
            ctx.stroke();


            ctx.restore()

            ctx.fillStyle = Cores.CianoClaro
            ctx.strokeStyle = Cores.CianoClaro
            ctx.lineWidth = 2
            ctx.font = "25px arial"
            ctx.textAlign = "center"
            var xB2 = Canvas.width / 10 * 7
            var yB2 = Canvas.height / 10 * 5.7
            ctx.save();
            ctx.scale(0.9, 0.9)

            ctx.fillText("X   = ", xB2 + 20, yB2)

            ctx.font = "15px arial"
            ctx.fillText("n", xB2 + 15, yB2 + 3)
            ctx.font = "25px arial"

            ctx.fillText("n", xB2 + 115, yB2 + 20)
            ctx.font = "30px arial"

            ctx.save()
            ctx.translate(-60, 0)
            ctx.scale(0.9, 0.9)
            ctx.fillText("​∑", xB2 + 70, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("n", xB2 + 90, yB2 - 30)
            ctx.fillText("i = 1", xB2 + 100, yB2 - 8)
            ctx.font = "25px arial"
            ctx.fillText("M", xB2 + 130, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("i", xB2 + 145, yB2 - 12)

            ctx.font = "25px arial"
            ctx.fillText("F", xB2 + 160, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("i", xB2 + 170, yB2 - 12)

            ctx.font = "25px arial"
            ctx.textAlign = "left"
            ctx.fillText("=", xB2 + 760, yB2 - 15)
            ctx.textAlign = "center"
            ctx.fillText("310.85", xB2 + 830, yB2 - 15)

            ctx.font = "25px arial"
            ctx.textAlign = "left"
            ctx.fillText("=", xB2 + 200, yB2 - 15)
            ctx.fillText("0.05⋅210 + 0.15⋅300 + 0.25⋅150 + 0.35⋅130 ...", xB2 + 240, yB2 - 15)
            ctx.restore()


            ctx.font = "30px arial"
            ctx.fillText("​∑", xB2 + 70, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("n", xB2 + 90, yB2 - 30)
            ctx.fillText("i = 1", xB2 + 100, yB2 - 8)
            ctx.font = "25px arial"
            ctx.fillText("M", xB2 + 130, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("i", xB2 + 145, yB2 - 12)

            ctx.font = "25px arial"
            ctx.fillText("F", xB2 + 160, yB2 - 15)
            ctx.font = "15px arial"
            ctx.fillText("i", xB2 + 170, yB2 - 12)




            ctx.font = "25px arial"
            ctx.textAlign = "left"

            ctx.textAlign = "center"
            ctx.fillText("=", xB2 + 200, yB2)
            ctx.fillText("1053", xB2 + 260, yB2 + 25)
            ctx.fillText("310.85", xB2 + 260, yB2 - 10)


            ctx.fillText("≈", xB2 + 330, yB2)
            ctx.fillText("0.295", xB2 + 380, yB2)

            ctx.beginPath()
            ctx.moveTo(xB2 + 55, yB2 - 2.5)
            ctx.lineTo(xB2 + 180, yB2 - 2.5)
            ctx.stroke();

            ctx.beginPath()
            ctx.moveTo(xB2 + 215, yB2 - 2.5)
            ctx.lineTo(xB2 + 310, yB2 - 2.5)
            ctx.stroke();

            ctx.beginPath()
            ctx.moveTo(xB2 - 15, yB2 - 25)
            ctx.lineTo(xB2 + 12.5, yB2 - 25)
            ctx.stroke();


            ctx.restore()
            break;
    }


}