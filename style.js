import { Canvas, ctx } from "./files.js";

export const Cores = {
    Titulo: " #FFF",
    SubTitulo: " #FFF",
    NormalText: " #FFF",
    CianoClaro: " #00f0ff",
    Red: "#cf222a"
}
export const Fontes = {
    Titulo: " Roboto ",
    SubTitulo: "Roboto",
    NormalText: " Roboto ",
    ExemploText: " Roboto ",
}

export const FontSizes = {
    Titulo: " 80px ",
    SubTitulo: " 60px ",
    NormalText: " 40px ",
    ExemploText: " 30px ",
}


export function Texto(Cor, size, font, align, text, [x, y], lineSpace = 40) {
    const linhas = text.split("\n");

    ctx.fillStyle = Cor;
    ctx.font = size + " " + font;
    ctx.textAlign = align;
    for (let i = 0; i < linhas.length; i++) {
        ctx.fillText(linhas[i], x, y);
        y += lineSpace;
    }
}


export function fundo(index, Fundo) {
    switch (index) {
        case 0:
            ctx.fillStyle = (Cores.CianoClaro + "06")
            var amoutX = 20;
            if (Fundo != null) {
                var y = Fundo.atual;
                var look = Fundo.saveY;
            }
            else {
                var y = new Array(amoutX).fill(0)
                var look = new Array(amoutX).fill(-1);
            }
            for (var i = 0; i < amoutX; i++) {
                if (y[i] < look[i]) {
                    y[i] += Math.random()*5;
                }
                var spaceX = 2
                var x = Canvas.width / amoutX - (11 * spaceX)
                look[i] = look[i] == -1 ? 50 + Math.floor(Math.random() * 150) : look[i];
                ctx.fillRect(i * x + (10 * spaceX * (i + 1)), Canvas.height - y[i], x, y[i])
            }
            return { saveY: look, atual: y };
            break;
        case 1:


            ctx.fillStyle = Cores.CianoClaro + "04";

            if (!Fundo?.t) {
                Fundo = {
                    t: 0
                };
            }

            Fundo.t += 0.005;

            let w = Canvas.width;
            let h = Canvas.height;

            let centerX = w / 2;

            for (let i = 0; i < 16; i++) {

                let yBase = (h / 16) * i;

                ctx.beginPath();
                ctx.strokeStyle = Cores.CianoClaro + "06";
                ctx.lineWidth = 3;

                for (let x = 0; x <= w; x += 20) {
                    let distCenter = Math.abs(x - centerX) / centerX;
                    let amplitude = distCenter * i * 5;

                    let y =
                        yBase +
                        Math.sin((x * 0.01) + Fundo.t + i) * amplitude;

                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }

                ctx.stroke();
            }

            return Fundo;
            break;
        case 2:

            if (!Fundo?.t) {
                Fundo = { t: 0 };
            }

            Fundo.t += 0.002;

            let w2 = Canvas.width;
            let h2 = Canvas.height;


            let lightX = w2 * (0.5 + Math.sin(Fundo.t) * 0.2);
            let lightY = h2 * (0.5 + Math.cos(Fundo.t * 0.8) * 0.2);

            let grad = ctx.createRadialGradient(
                lightX, lightY, 50,
                lightX, lightY, w2 * 0.8
            );

            grad.addColorStop(0, Cores.CianoClaro + "10");
            grad.addColorStop(0.5, Cores.CianoClaro + "04");
            grad.addColorStop(1, "#00000000");

            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, w2, h2);


            let spacing = 80;

            for (let x = 0; x < w2; x += spacing) {

                let dist = Math.abs(x - lightX) / w2;
                let alpha = Math.max(0.03, 0.09 - dist);

                ctx.strokeStyle = `rgba(0,255,255,${alpha})`;
                ctx.lineWidth = 1;

                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h2);
                ctx.stroke();
            }

            for (let y = 0; y < h2; y += spacing) {

                let dist = Math.abs(y - lightY) / h2;
                let alpha = Math.max(0.03, 0.09 - dist);

                ctx.strokeStyle = `rgba(0,255,255,${alpha})`;
                ctx.lineWidth = 1;

                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w2, y);
                ctx.stroke();
            }

            return Fundo;
        case 3:

            if (!Fundo?.particles3) {

                Fundo = {

                    t3: 0,

                    particles3: Array.from({ length: 120 }, () => ({

                        x3: Math.random() * Canvas.width,
                        y3: Math.random() * Canvas.height,

                        vx3:
                            (Math.random() - 0.5) * 0.3,

                        vy3:
                            (Math.random() - 0.5) * 0.3,

                        size3:
                            Math.random() * 2 + 1
                    }))
                };
            }

            Fundo.t3 += 0.002;

            let w3 = Canvas.width;
            let h3 = Canvas.height;

            let grad3 = ctx.createRadialGradient(
                w3 / 2,
                h3 / 2,
                0,
                w3 / 2,
                h3 / 2,
                w3 * 0.9
            );

            grad3.addColorStop(
                0,
                Cores.CianoClaro + "03"
            );

            grad3.addColorStop(
                1,
                "#00000000"
            );

            ctx.fillStyle = grad3;
            ctx.fillRect(0, 0, w3, h3);

            for (let i3 = 0; i3 < Fundo.particles3.length; i3++) {

                let p13 = Fundo.particles3[i3];

                for (
                    let j3 = i3 + 1;
                    j3 < Fundo.particles3.length;
                    j3++
                ) {

                    let p23 = Fundo.particles3[j3];

                    let dx3 = p13.x3 - p23.x3;
                    let dy3 = p13.y3 - p23.y3;

                    let dist3 =
                        Math.sqrt(dx3 * dx3 + dy3 * dy3);

                    if (dist3 < 120) {

                        let alpha3 =
                            (1 - dist3 / 120) * 0.05;

                        ctx.strokeStyle =
                            `rgba(0,255,255,${alpha3})`;

                        ctx.lineWidth = 1;

                        ctx.beginPath();

                        ctx.moveTo(
                            p13.x3,
                            p13.y3
                        );

                        ctx.lineTo(
                            p23.x3,
                            p23.y3
                        );

                        ctx.stroke();
                    }
                }
            }

            Fundo.particles3.forEach(p3 => {

                p3.x3 += p3.vx3;
                p3.y3 += p3.vy3;

                // drift suave
                p3.vx3 +=
                    Math.sin(
                        Fundo.t3 + p3.y3 * 0.001
                    ) * 0.0005;

                p3.vy3 +=
                    Math.cos(
                        Fundo.t3 + p3.x3 * 0.001
                    ) * 0.0005;

                // damping
                p3.vx3 *= 0.99;
                p3.vy3 *= 0.99;

                // wrap
                if (p3.x3 < 0) p3.x3 = w3;
                if (p3.x3 > w3) p3.x3 = 0;

                if (p3.y3 < 0) p3.y3 = h3;
                if (p3.y3 > h3) p3.y3 = 0;

                // glow
                ctx.beginPath();

                ctx.fillStyle =
                    Cores.CianoClaro + "20";

                ctx.arc(
                    p3.x3,
                    p3.y3,
                    p3.size3,
                    0,
                    Math.PI * 2
                );

                ctx.fill();
            });

            return Fundo;
            break
        case 4: {

            if (!Fundo?.t4) {
                Fundo = {
                    t4: 0
                };
            }

            Fundo.t4 += 0.01;

            const w = Canvas.width;
            const h = Canvas.height;


            const cell = 20;

            const cx1 = w / 2 + Math.sin(Fundo.t4) * 200;
            const cy1 = h / 2 + Math.cos(Fundo.t4 * 0.8) * 120;

            const cx2 = w / 2 + Math.cos(Fundo.t4 * 0.7) * 220;
            const cy2 = h / 2 + Math.sin(Fundo.t4 * 1.1) * 150;

            for (let y = 0; y < h; y += cell) {
                for (let x = 0; x < w; x += cell) {

                    const d1 = Math.hypot(x - cx1, y - cy1);
                    const d2 = Math.hypot(x - cx2, y - cy2);

                    const force =
                        Math.sin(d1 * 0.02 - Fundo.t4) +
                        Math.cos(d2 * 0.02 + Fundo.t4);

                    const offset = force * 6;

                    const alpha = Math.min(0.12, Math.abs(force) * 0.10);

                    ctx.fillStyle = `rgba(0,255,255,${alpha})`;

                    ctx.fillRect(
                        x + offset,
                        y + offset,
                        2,
                        2
                    );
                }
            }

            const grad = ctx.createRadialGradient(
                cx1, cy1, 0,
                cx2, cy2, w * 0.9
            );

            grad.addColorStop(0.0, Cores.CianoClaro + "10");
            grad.addColorStop(0.5, "#00000000");
            grad.addColorStop(1, "#00000000");

            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, w, h);

            return Fundo;
        }
            break
    }
}






// Particulas

export function CuboDado(x = 0, y = 0, i = 1, size = 0.4) {
    const path = new Path2D();

    const S = (v) => v * size;

    // ===== CUBO =====
    path.rect(
        x + S(40),
        y + S(60),
        S(80),
        S(80)
    );

    function line(x1, y1, x2, y2) {
        path.moveTo(x + S(x1), y + S(y1));
        path.lineTo(x + S(x2), y + S(y2));
    }

    line(40, 60, 60, 40);
    line(60, 40, 140, 40);
    line(120, 60, 140, 40);
    line(120, 140, 140, 120);
    line(140, 120, 140, 40);

    path.moveTo(0, 0);

    function dot(xd, yd) {
        path.moveTo(x + S(xd) + S(10), y + S(yd));
        path.arc(
            x + S(xd),
            y + S(yd),
            S(10),
            0,
            Math.PI * 2
        );
    }

    switch (i) {
        case 1:
            dot(80, 100);
            break;

        case 2:
            dot(55, 125);
            dot(105, 75);
            break;

        case 3:
            dot(55, 125);
            dot(105, 75);
            dot(80, 100);
            break;

        case 4:
            dot(55, 125);
            dot(105, 125);
            dot(105, 75);
            dot(55, 75);
            break;

        case 5:
            dot(55, 125);
            dot(105, 125);
            dot(105, 75);
            dot(55, 75);
            dot(80, 100);
            break;

        case 6:
            dot(55, 125);
            dot(105, 125);
            dot(105, 100);
            dot(105, 75);
            dot(55, 75);
            dot(55, 100);
            break;
    }

    return path;
}