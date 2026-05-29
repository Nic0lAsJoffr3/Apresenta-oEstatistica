
import { Canvas, Cores, Fontes, fundo, Texto, FontSizes, ctx, VS } from "../files.js";
let exI = null;
function ResetFundo() {
    Fundo = null;
}
var Fundo = null;
export function SlideModelagemContinua(i) {
    Fundo = fundo(2, Fundo);
    ctx.save()
    ctx.scale(VS,VS)
    if (i == 0) {

        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Modelagem (Uniforme Contínua)",
            [Canvas.width / 2, Canvas.height / 10]
        );
        Texto(
            Cores.NormalText, FontSizes.NormalText,
            Fontes.NormalText, "left",
            "Na modelagem contínua não conseguimos atribuir\nprobabilidade a cada valor individual;\n\n[0 , 1]\n0.1 , 0.2 , 0.3 … 0.9 , 1\n0.01 , 0.02 , 0.03 … 0.09, 1\n0 - Ꝏ - 1",
            [Canvas.width / 10, Canvas.height / 10 * 3], 50
        );

        Texto(
            Cores.SubTitulo, FontSizes.SubTitulo,
            Fontes.SubTitulo, "center",
            "P(X = x) → 0",
            [Canvas.width / 10 * 7, Canvas.height / 10 * 8.3]
        );

        Texto(
            Cores.SubTitulo, FontSizes.SubTitulo,
            Fontes.SubTitulo, "center",
            "P(X = x) = 0",
            [Canvas.width / 10 * 3, Canvas.height / 10 * 8.3]
        );


    }
    else if (i == 1) {
        

        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Modelagem (Uniforme Contínua)",
            [Canvas.width / 2, Canvas.height / 10]
        );
        Texto(
            Cores.SubTitulo, FontSizes.SubTitulo,
            Fontes.SubTitulo, "left",
            "Ao invés disso, utilizamos a densidade da\nprobabilidade",
            [Canvas.width / 20, Canvas.height / 10 * 4], 60
        );
        Texto(
            Cores.SubTitulo, FontSizes.SubTitulo,
            Fontes.SubTitulo, "left",
            "Dessa forma, uma distribuição uniforme contínua é\naquela em que todos os pontos possuem a mesma\ndensidade de probabilidade",
            [Canvas.width / 20, Canvas.height / 10 * 6], 60
        );
    }

    else if (i == 2) {
        

        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Como modelar?",
            [Canvas.width / 2, Canvas.height / 10]
        );
        formula(0)


    }

    else if (i == 3) {
       

        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Fórmulas para dados contínuos",
            [Canvas.width / 2, Canvas.height / 10]
        );

        formula(1);
        grafico(0);
    }

    else if (i == 4) {
        

        Texto(
            Cores.Titulo, FontSizes.Titulo,
            Fontes.Titulo, "center",
            "Fórmulas para dados contínuos",
            [Canvas.width / 2, Canvas.height / 10]
        );
        formula(2);


    }
    ctx.restore()
}
function grafico(i) {
    ctx.font = "40px arial"
    ctx.fillStyle = "white"
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.textAlign = "left"
    var [x, y] = [Canvas.width / 6/VS, Canvas.height / 10/VS * 3]

    ctx.save()
    ctx.strokeRect(x, y, 500, 500)

    ctx.fillText("0", x - 20, y + 535)
    ctx.fillText("a", x + 125 + 20, y + 545)
    ctx.fillText("b", x + 375 - 20, y + 545)
    ctx.fillText("x", x + 500, y + 535)
    ctx.fillText("f(x)", x - 75, y + 30)

    ctx.strokeStyle = Cores.CianoClaro
    ctx.lineWidth = 5
    ctx.beginPath();
    ctx.moveTo(x, y + 500)
    ctx.lineTo(x + 125 + 30, y + 500)
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(x + 500, y + 500)
    ctx.lineTo(x + 500 - (125 + 10), y + 500)
    ctx.stroke()

    ctx.lineWidth = 3
    ctx.beginPath();
    ctx.moveTo(x + 125 + 30, y + (500 * 0.4))
    ctx.lineTo(x + 500 - (125 + 10), y + (500 * 0.4))
    ctx.stroke()
    ctx.setLineDash([10, 5]);

    ctx.beginPath();
    ctx.moveTo(x + 500 - (125 + 15), y + (500 * 0.4))
    ctx.lineTo(x + 500 - (125 + 15), y + (500))
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(x + 125 + 30, y + (500 * 0.4))
    ctx.lineTo(x + 125 + 30, y + (500))
    ctx.stroke()
    ctx.strokeStyle = "white"

    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(x + 125 + 30, y + (500 * 0.4))
    ctx.lineTo(x, y + (500 * 0.4))
    ctx.stroke()

    ctx.setLineDash([]);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x + 500 - (125 + 15), y + 500, 10, 0, Math.PI * 2);
    ctx.arc(x + 125 + 30, y + 500, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x + 500 - (125 + 15), y + 500, 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x + 125 + 30, y + 500, 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = Cores.CianoClaro;
    ctx.strokeStyle = Cores.CianoClaro;
    ctx.beginPath();
    ctx.arc(x + 500 - (125 + 15), y + (500 * 0.4), 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 125 + 30, y + (500 * 0.4), 10, 0, Math.PI * 2);
    ctx.fill();




    ctx.restore()
}


function formula(i) {
    if (i == 0) {
        ctx.font = "30px arial"
        ctx.fillStyle = "white"
        ctx.lineWidth = 2
        ctx.strokeStyle = "white"
        ctx.textAlign = "left"
        var [x, y] = [Canvas.width / 10/VS, Canvas.height / 10/VS * 2.5]

        ctx.save()
        ctx.scale(1.3, 1.3)
        x /= 1.3;
        y /= 1.3
        ctx.fillText("P( a ≤ X ≤ b) = ", x, y)
        x += 220
        ctx.font = "20px arial bold italic"
        ctx.save();

        ctx.translate(x - 10, y + 10);
        ctx.rotate(7 * Math.PI / 180);
        ctx.scale(3, 3);

        ctx.fillText("∫", 0, 0);

        ctx.restore();
        ctx.font = "20px arial"
        ctx.fillText("a", x + 14, y + 20)
        ctx.fillText("b", x + 17, y - 30)
        ctx.font = "30px arial"
        ctx.fillText("f(x) dx", x + 35, y)

        x -= 220
        y += 70
        ctx.fillText("Onde:", x, y)
        y += 40
        ctx.fillStyle = Cores.CianoClaro;
        ctx.fillText("P", x, y)
        ctx.fillStyle = "white";
        ctx.fillText("= Probabilidade", x + 30, y)

        y += 40
        ctx.fillStyle = Cores.CianoClaro;
        ctx.fillText("X", x, y)
        ctx.fillStyle = "white";
        ctx.fillText("= Variável Aleatória", x + 30, y)

        y += 40
        ctx.fillStyle = Cores.CianoClaro;
        ctx.fillText(" a    b", x, y)
        ctx.fillStyle = "white";
        ctx.fillText("e", x + 24, y)
        ctx.fillText("= Limites Do Intervalo", x + 80, y)

        y += 40
        ctx.fillStyle = Cores.CianoClaro;
        ctx.fillText("ab", x, y)
        ctx.fillText("a", x + 658, y)
        ctx.fillText("b", x + 718, y)
        ctx.fillStyle = "white"
        ctx.fillText("= Somatória De Todos Os Infinitos Valores De     A", x + 45, y);

        y += 40
        ctx.fillStyle = Cores.CianoClaro;
        ctx.fillText("f(x)", x, y)
        ctx.fillStyle = "white";
        ctx.fillText("= Função Densidade Da Probabilidade", x + 50, y)

        y += 40
        ctx.fillStyle = Cores.CianoClaro;
        ctx.fillText("dx", x, y)
        ctx.fillStyle = "white";
        ctx.fillText("= Um Pedaço Infinitesimal Do Eixo X", x + 40, y)
        y += 70
        ctx.fillStyle = "white";
        ctx.fillText("Ou seja: A probabilidade de    estar entre    e    é a área sob a curva", x, y)
        ctx.fillStyle = Cores.CianoClaro;
        ctx.fillText("x", x + 375, y)
        ctx.fillText("a", x + 545, y)
        ctx.fillText("b", x + 595, y)
        y += 40
        ctx.fillStyle = "white";
        ctx.fillText("da função densidade       nesse intervalo", x, y)
        ctx.fillStyle = Cores.CianoClaro;
        ctx.fillText("f(x)", x + 285, y)
        ctx.restore()
    }
    else if (i == 1) {
        ctx.font = "30px arial"
        ctx.fillStyle = "white"
        ctx.lineWidth = 2
        ctx.strokeStyle = "white"
        ctx.textAlign = "left"
        var [x, y] = [Canvas.width / 10/VS * 6, Canvas.height / 10/VS * 3]

        ctx.save()
        ctx.scale(1.2, 1.2)
        x /= 1.2
        y /= 1.2
        ctx.fillText("Probabilidade: Base x Altura", x, y)
        y += 70
        ctx.fillText("A = B x H", x, y)
        ctx.fillText("1 = (b - a) x H", x + 190, y)
        ctx.fillStyle = Cores.CianoClaro
        ctx.fillText("=>", x + 140, y)
        ctx.fillStyle = "white"
        y += 75
        ctx.fillText("H =", x, y)
        ctx.beginPath()
        ctx.moveTo(x + 70, y - 10)
        ctx.lineTo(x + 140, y - 10)
        ctx.stroke()
        ctx.fillText("1", x + 95, y - 20)
        ctx.fillText("b - a", x + 75, y + 25)
        y += 60
        ctx.fillText("Base  =  b - a", x, y + 25)
        x += 300
        ctx.fillText("Altura = ", x - 50, y + 25)

        ctx.beginPath()
        ctx.moveTo(x + 70, y - 10 + 25)
        ctx.lineTo(x + 140, y - 10 + 25)
        ctx.stroke()
        ctx.fillText("1", x + 95, y - 20 + 25)
        ctx.fillText("b - a", x + 75, y + 25 + 25)

        x -= 300
        y += 120
        ctx.fillText("Média  =", x, y)
        ctx.fillText("(a + b)", x + 140, y - 25)
        ctx.fillText("2", x + 175, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 10)
        ctx.lineTo(x + 230, y - 10)
        ctx.stroke()

        y += 100
        ctx.font = "30px "
        ctx.fillText("Variância (  ) =", x, y)
        ctx.fillStyle = Cores.CianoClaro
        ctx.fillText("σ", x + 138, y)
        ctx.fillStyle = "white"
        x += 70
        ctx.fillText("(b - a) ²", x + 140, y - 25)
        ctx.fillText("12", x + 165, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 10)
        ctx.lineTo(x + 230, y - 10)
        ctx.stroke()
        ctx.restore()
    }
    else if (i == 2) {
        ctx.font = "30px arial"
        ctx.fillStyle = "white"
        ctx.lineWidth = 2
        ctx.strokeStyle = "white"
        ctx.textAlign = "left"
        var [x, y] = [Canvas.width / 10/VS * 1.5, Canvas.height / 10/VS * 3]

        ctx.save()
        ctx.scale(1.4, 1.4)
        x /= 1.4
        y /= 1.4
        ctx.font = "30px "
        ctx.fillText("Variância (  ) =", x, y)
        ctx.fillStyle = Cores.CianoClaro
        ctx.fillText("σ", x + 138, y)
        ctx.fillStyle = "white"
        x += 70
        ctx.fillText("(b - a) ²", x + 140, y - 25)
        ctx.fillText("12", x + 165, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 10)
        ctx.lineTo(x + 230, y - 10)
        ctx.stroke()
        y += 70
        x -= 70

        ctx.fillStyle = Cores.CianoClaro
        ctx.fillText("σ", x, y)

        ctx.fillStyle = "white"
        ctx.fillText("= E( X² ) - μ²", x + 30, y)

        y += 85

        ctx.fillText("μ =", x, y)
        x -= 80
        ctx.fillText("a + b", x + 140, y - 25)
        ctx.fillText("2", x + 165, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 10)
        ctx.lineTo(x + 210, y - 10)
        ctx.stroke()


        y += 85
        x += 80
        ctx.fillText("E( X² ) =", x, y)

        ctx.save();

        ctx.translate(x + 130, y + 10);
        ctx.rotate(7 * Math.PI / 180);
        ctx.scale(2, 2);

        ctx.fillText("∫", 0, 0);

        ctx.restore();
        ctx.font = "20px arial"
        ctx.fillText("a", x + 14 + 145, y + 20)
        ctx.fillText("b", x + 17 + 145, y - 30)
        x += 190
        ctx.font = "30px arial"
        ctx.fillText("X²", x, y)

        ctx.save();
        ctx.translate(x + 45, y + 10);
        ctx.scale(1.5, 2.5);
        ctx.fillText("(", 0, 0)
        ctx.fillText(")", 70, 0)
        ctx.restore()
        x -= 70
        ctx.fillText("1", x + 165, y - 25)
        ctx.fillText("b - a", x + 145, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 10)
        ctx.lineTo(x + 210, y - 10)
        ctx.stroke()

        ctx.fillText("dx   =", x + 250, y)

        ctx.save();
        ctx.translate(x + 345, y + 10);
        ctx.scale(1.5, 2.5);
        ctx.fillText("(", 0, 0)
        ctx.fillText(")", 70, 0)
        ctx.restore()
        x += 230
        ctx.fillText("X³", x + 165, y - 25)
        ctx.fillText("b - a", x + 145, y + 25)
        ctx.beginPath()
        ctx.moveTo(x + 135, y - 10)
        ctx.lineTo(x + 210, y - 10)
        ctx.stroke()
        x += 85
        ctx.font = "20px arial"
        ctx.fillText("a", x + 15 + 145, y + 20)
        ctx.fillText("b", x + 15 + 145, y - 30)

        ctx.restore();
    }
}
