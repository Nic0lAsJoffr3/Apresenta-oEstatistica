import { Canvas, ctx } from "./files.js";

export const Cores = {
    Titulo: " #FFF",
    SubTitulo: " #FFF",
    NormalText: " #FFF",
    ExemploText: " #FFF",
    CianoClaro: " #00f0ff",
    Red: "#cf222a"
}
export const Fontes = {
    Titulo: " Roboto ",
    SubTitulo: "Roboto",
    NormalText: " Roboto ",
    ExemploText: " Roboto ",
}
export function GetFontSizes(canvas) {

    const base = Math.min(canvas.width, canvas.height);

    return {
        Titulo: `${base * 0.08}px`,
        SubTitulo: `${base * 0.06}px`,
        NormalText: `${base * 0.04}px`,
        ExemploText: `${base * 0.03}px`,
    };
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
                    y[i] += Math.random() * 5;
                }
                var spaceX = 2
                var x = Canvas.width / amoutX - (11 * spaceX)
                look[i] = look[i] == -1 ? 50 + Math.floor(Math.random() * 150) : look[i];
                ctx.fillRect(i * x + (10 * spaceX * (i + 1)), Canvas.height - y[i], x, y[i])
            }
            return { saveY: look, atual: y };
            break;




        case 1:

            if (!Fundo?.crypto1_1) {

                Fundo = {
                    t1_1: 0,
                    crypto1_1: []
                };

                const cols_1 = 55;

                for (let i_1 = 0; i_1 < cols_1; i_1++) {

                    Fundo.crypto1_1.push({

                        x_1:
                            (Canvas.width / cols_1) * i_1,

                        y_1:
                            Math.random() * Canvas.height,

                        // mais lento
                        speed_1:
                            0.2 + Math.random() * 0.8,

                        size_1:
                            11 + Math.random() * 6,

                        seed_1:
                            Math.random() * 9999,

                        chars_1:
                            Array.from(
                                { length: 26 },
                                () => {

                                    const list_1 = [

                                        "0", "1",

                                        "A", "B", "C",
                                        "D", "E", "F",

                                        "#",

                                        "%",

                                        "&", "$", "*"
                                    ];

                                    return list_1[
                                        Math.floor(
                                            Math.random() *
                                            list_1.length
                                        )
                                    ];
                                }
                            )
                    });
                }
            }

            Fundo.t1_1 += 0.003;

            ctx.textAlign = "center";
            ctx.textBaseline = "top";

            // rede criptográfica
            for (
                let i_1 = 0;
                i_1 < Fundo.crypto1_1.length;
                i_1++
            ) {

                const c1_1 =
                    Fundo.crypto1_1[i_1];

                for (
                    let j_1 = i_1 + 1;
                    j_1 < Fundo.crypto1_1.length;
                    j_1++
                ) {

                    const c2_1 =
                        Fundo.crypto1_1[j_1];

                    const dx_1 =
                        c1_1.x_1 - c2_1.x_1;

                    const dist_1 =
                        Math.abs(dx_1);

                    if (dist_1 < 120) {

                        const alpha_1 =
                            (1 - dist_1 / 120) * 0.015;

                        ctx.strokeStyle =
                            Cores.CianoClaro +
                            Math.floor(
                                alpha_1 * 255
                            )
                                .toString(16)
                                .padStart(2, "0");

                        ctx.beginPath();

                        ctx.moveTo(
                            c1_1.x_1,
                            c1_1.y_1 % Canvas.height
                        );

                        ctx.lineTo(
                            c2_1.x_1,
                            c2_1.y_1 % Canvas.height
                        );

                        ctx.stroke();
                    }
                }
            }

            // colunas criptográficas
            for (let s_1 of Fundo.crypto1_1) {

                s_1.y_1 += s_1.speed_1;

                if (
                    s_1.y_1 >
                    Canvas.height + 500
                ) {

                    s_1.y_1 = -500;
                }

                for (
                    let i_1 = 0;
                    i_1 < s_1.chars_1.length;
                    i_1++
                ) {

                    const y_1 =
                        s_1.y_1 +
                        i_1 * (s_1.size_1 * 1.25);

                    if (
                        y_1 < -40 ||
                        y_1 > Canvas.height + 40
                    ) continue;

                    // caracteres mudando
                    if (
                        Math.random() > 0.996
                    ) {

                        const list_1 = [

                            "0", "1",

                            "A", "B", "C",
                            "D", "E", "F",

                            "#",

                            "%",

                            "&"
                        ];

                        s_1.chars_1[i_1] =
                            list_1[
                            Math.floor(
                                Math.random() *
                                list_1.length
                            )
                            ];
                    }

                    let alpha_1 =

                        0.015 +

                        (1 - i_1 / s_1.chars_1.length)
                        * 0.16;

                    alpha_1 +=

                        Math.sin(
                            Fundo.t1_1 * 2 +
                            s_1.seed_1 +
                            i_1
                        ) * 0.01;

                    alpha_1 =
                        Math.max(0.01, alpha_1);

                    ctx.font =
                        `${s_1.size_1}px Consolas`;

                    // glow
                    ctx.fillStyle =
                        Cores.CianoClaro + "04";

                    ctx.fillText(
                        s_1.chars_1[i_1],
                        s_1.x_1,
                        y_1
                    );

                    // principal
                    ctx.fillStyle =
                        Cores.CianoClaro +
                        Math.floor(
                            alpha_1 * 255
                        )
                            .toString(16)
                            .padStart(2, "0");

                    ctx.fillText(
                        s_1.chars_1[i_1],
                        s_1.x_1,
                        y_1
                    );

                    // brilho da cabeça
                    if (i_1 === 0) {

                        ctx.fillStyle =
                            Cores.CianoClaro + "25";

                        ctx.fillText(
                            s_1.chars_1[i_1],
                            s_1.x_1,
                            y_1
                        );
                    }
                }
            }

            // blocos hash
            for (let i_1 = 0; i_1 < 8; i_1++) {

                const x_1 =
                    (Canvas.width / 8) * i_1;

                const y_1 =

                    Canvas.height * 0.5 +

                    Math.sin(
                        Fundo.t1_1 * 0.5 +
                        i_1
                    ) * 25;

                ctx.strokeStyle =
                    Cores.CianoClaro + "05";

                ctx.lineWidth = 1;

                ctx.strokeRect(
                    x_1,
                    y_1,
                    80,
                    25
                );

                ctx.beginPath();

                ctx.moveTo(
                    x_1 + 80,
                    y_1 + 12
                );

                ctx.lineTo(
                    x_1 + 120,
                    y_1 + 12
                );

                ctx.stroke();
            }
            ctx.textAlign = "start";
            ctx.textBaseline = "alphabetic";
            return Fundo;



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








        case 5: {

            if (!Fundo) Fundo = {};

            if (!Fundo.t5) {
                Fundo.t5 = 0;
            }

            Fundo.t5 += 0.01;

            const w = Canvas.width;
            const h = Canvas.height;

            const cell = 12;

            // 🌫️ fundo base extremamente leve
            ctx.fillStyle = Cores.CianoClaro + "03";
            ctx.fillRect(0, 0, w, h);

            for (let y = 0; y < h; y += cell) {
                for (let x = 0; x < w; x += cell) {

                    // 🎲 ruído uniforme controlado
                    const noise =
                        (Math.sin(x * 0.02 + Fundo.t5) +
                            Math.cos(y * 0.02 + Fundo.t5)) * 0.5;

                    // 🔵 intensidade uniforme com leve variação
                    const alpha = 0.05 + (noise * 0.020);

                    ctx.fillStyle = `rgba(0,240,255,${alpha})`;

                    // pequeno deslocamento uniforme (sem clustering)
                    const offsetX = (Math.random() - 0.5) * 1.5;
                    const offsetY = (Math.random() - 0.5) * 1.5;

                    ctx.fillRect(
                        x + offsetX,
                        y + offsetY,
                        2,
                        2
                    );
                }
            }

            return Fundo;
        }

        case 6: {

            if (!Fundo) Fundo = {};

            if (!Fundo.t6) {
                Fundo.t6 = 0;
            }

            Fundo.t6 += 0.01;

            const w = Canvas.width;
            const h = Canvas.height;

            const cx = w / 2;
            const cy = h / 2;

            const focusX = cx + Math.sin(Fundo.t6 * 0.6) * 120;
            const focusY = cy + Math.cos(Fundo.t6 * 0.5) * 80;


            const layers = 2;
            const linesPerLayer = 15;

            for (let l = 0; l < layers; l++) {

                const speed = 0.2 + l * 0.05;

                ctx.strokeStyle = `rgba(0,240,255,${0.03 + l * 0.008})`;
                ctx.lineWidth = 1;

                for (let i = 0; i < linesPerLayer; i++) {

                    ctx.beginPath();

                    const baseY = (h / linesPerLayer) * i;

                    for (let x = 0; x <= w; x += 20) {

                        const dx = x - focusX;
                        const dy = baseY - focusY;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        const influence = Math.max(0, 1 - dist / (w * 0.8));

                        const wave =
                            Math.sin(x * 0.01 + Fundo.t6 * speed + i) * 25;

                        const pull =
                            Math.sin(Fundo.t6 + dist * 0.01) * 10 * influence;

                        const y = baseY + wave + pull;

                        if (x === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }

                    ctx.stroke();
                }
            }

            return Fundo;
        }


        case 7: {

            if (!Fundo?.fract7) {

                Fundo = {
                    t7: 0,
                    fract7: []
                };

                for (let i = 0; i < 25; i++) {

                    Fundo.fract7.push({

                        x: Math.random() * Canvas.width,
                        y: Math.random() * Canvas.height,

                        size: 40 + Math.random() * 60,

                        rot: Math.random() * Math.PI,

                        seed: Math.random() * 1000
                    });
                }
            }

            Fundo.t7 += 0.004;

            function fract(x, y, size, rot, depth, seed) {

                if (depth <= 0 || size < 3)
                    return;

                const t =
                    Fundo.t7 +
                    seed;

                const sway =
                    Math.sin(t + depth) * 0.2;

                const branches = 3;

                for (let i = 0; i < branches; i++) {

                    const angle =
                        rot +
                        sway +
                        ((Math.PI * 2) / branches) * i;

                    const x2 =
                        x +
                        Math.cos(angle) * size;

                    const y2 =
                        y +
                        Math.sin(angle) * size;

                    ctx.strokeStyle =
                        `rgba(0,255,255,${0.01 + depth * 0.01
                        })`;

                    ctx.lineWidth =
                        depth * 0.3;

                    ctx.beginPath();

                    ctx.moveTo(x, y);
                    ctx.lineTo(x2, y2);

                    ctx.stroke();

                    fract(
                        x2,
                        y2,
                        size * 0.55,
                        angle,
                        depth - 1,
                        seed + i * 10
                    );
                }
            }

            for (let f of Fundo.fract7) {

                fract(
                    f.x,
                    f.y,
                    f.size,
                    f.rot +
                    Math.sin(Fundo.t7 + f.seed) * 0.3,
                    4,
                    f.seed
                );
            }

            return Fundo;
        }

        case 8: {

            if (!Fundo?.math9) {

                Fundo = {
                    t9: 0,
                    math9: []
                };

                const symbols = [

                    "∫",
                    "∑",
                    "π",
                    "∞",
                    "Δ",
                    "λ",
                    "σ",
                    "μ",
                    "∂",
                    "√",
                    "ƒ",
                    "dx",
                    "dy",
                    "∇",
                    "∈",
                    "≈"
                ];

                for (let i = 0; i < 80; i++) {

                    Fundo.math9.push({

                        x:
                            Math.random() * Canvas.width,

                        y:
                            Math.random() * Canvas.height,

                        size:
                            14 + Math.random() * 38,

                        speed:
                            0.2 + Math.random() * 0.6,

                        symbol:
                            symbols[
                            Math.floor(
                                Math.random() *
                                symbols.length
                            )
                            ],

                        seed:
                            Math.random() * 9999,

                        rot:
                            Math.random() * Math.PI * 2
                    });
                }
            }

            Fundo.t9 += 0.003;

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            for (let m of Fundo.math9) {

                // movimento fluido
                m.y += m.speed;

                m.x +=
                    Math.sin(
                        Fundo.t9 +
                        m.seed
                    ) * 0.4;

                // wrap
                if (m.y > Canvas.height + 50) {

                    m.y = -50;
                    m.x =
                        Math.random() * Canvas.width;
                }

                const pulse =

                    1 +

                    Math.sin(
                        Fundo.t9 * 2 +
                        m.seed
                    ) * 0.08;

                const alpha =
                    0.03 +
                    Math.sin(
                        Fundo.t9 +
                        m.seed
                    ) * 0.015;

                ctx.save();

                ctx.translate(
                    m.x,
                    m.y
                );

                ctx.rotate(
                    m.rot +
                    Fundo.t9 * 0.05
                );

                // glow
                ctx.fillStyle =
                    Cores.CianoClaro + "08";

                ctx.font =
                    `${m.size * pulse}px Arial`;

                ctx.fillText(
                    m.symbol,
                    0,
                    0
                );

                // principal
                ctx.fillStyle =
                    Cores.CianoClaro +
                    Math.floor(
                        alpha * 255
                    )
                        .toString(16)
                        .padStart(2, "0");

                ctx.fillText(
                    m.symbol,
                    0,
                    0
                );

                ctx.restore();
            }

            // curvas matemáticas suaves
            for (let i = 0; i < 5; i++) {

                ctx.beginPath();

                for (
                    let x = 0;
                    x <= Canvas.width;
                    x += 12
                ) {

                    const y =

                        Canvas.height * 0.5 +

                        Math.sin(
                            x * 0.004 +
                            Fundo.t9 +
                            i
                        ) *

                        40 *

                        Math.cos(
                            Fundo.t9 * 0.5 +
                            i
                        );

                    if (x === 0)
                        ctx.moveTo(x, y);
                    else
                        ctx.lineTo(x, y);
                }

                ctx.strokeStyle =
                    Cores.CianoClaro + "06";

                ctx.lineWidth = 1;

                ctx.stroke();
            }

            // névoa matemática
            const grad =
                ctx.createRadialGradient(

                    Canvas.width / 2,
                    Canvas.height / 2,

                    0,

                    Canvas.width / 2,
                    Canvas.height / 2,

                    Canvas.width * 0.7
                );

            grad.addColorStop(
                0,
                Cores.CianoClaro + "08"
            );

            grad.addColorStop(
                1,
                "#00000000"
            );

            ctx.fillStyle = grad;

            ctx.fillRect(
                0,
                0,
                Canvas.width,
                Canvas.height
            );

            return Fundo;
        }

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