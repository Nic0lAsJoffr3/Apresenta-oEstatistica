import { Start } from "./control.js";
export const Maquina = new Image();
Maquina.src = "https://nic0lasjoffr3.github.io/Apresenta-oEstatistica/IMG/Maquina.png";
export const Chave = new Image();
Chave.src = "https://nic0lasjoffr3.github.io/Apresenta-oEstatistica/IMG/Chave.png";
export const ChaveOuro = new Image();
ChaveOuro.src = "https://nic0lasjoffr3.github.io/Apresenta-oEstatistica/IMG/ChaveDourada.png";
export const Maquina2 = new Image();
Maquina2.src = "https://nic0lasjoffr3.github.io/Apresenta-oEstatistica/IMG/Maquina2.png";
export const Chat = new Image();
Chat.src = "https://nic0lasjoffr3.github.io/Apresenta-oEstatistica/IMG/Chat.png";
export const Cadeado = new Image();
Cadeado.src = "https://nic0lasjoffr3.github.io/Apresenta-oEstatistica/IMG/Cadeados.png";

export const AndrawYao = new Image();
AndrawYao.src = "https://nic0lasjoffr3.github.io/Apresenta-oEstatistica/IMG/andrawyao.jpg";

export const SetaCurvadaVermelha = new Image();
SetaCurvadaVermelha.src = "https://nic0lasjoffr3.github.io/Apresenta-oEstatistica/IMG/SetaCurvadaVermelha.svg";

export const Moeda = new Image()
Moeda.src = "https://nic0lasjoffr3.github.io/Apresenta-oEstatistica/IMG/moeda.png"
export const SetaCurvadaVerde = new Image();
SetaCurvadaVerde.src = "https://nic0lasjoffr3.github.io/Apresenta-oEstatistica/IMG/SetaCurvadaVerde.svg";

export const HomemLaranja = new Image()
HomemLaranja.src = "../IMG/HomemLaranja.png"
export const HomemVerde = new Image()
HomemVerde.src = "../IMG/HomemVerde.png"
export const Servidor = new Image()
Servidor.src = "../IMG/Servidor.png"
export const Certo = new Image()
Certo.src = "../IMG/certo.png"
export const Errado = new Image()
Errado.src = "../IMG/x.svg"




export const assets = [
    Maquina,
    Chave,
    ChaveOuro,
    Maquina2,
    Chat,
    Cadeado,
    AndrawYao,
    SetaCurvadaVermelha,
    SetaCurvadaVerde,
    Moeda
];
function loadImage(img) {
    return new Promise((resolve, reject) => {
        if (img.complete && img.naturalWidth !== 0) {
            resolve(img);
            return;
        }
        img.onload = () => resolve(img);
        img.onerror = () => reject(img);
    });
}
async function preloadAssets() {
    await Promise.all(assets.map(loadImage));
}
async function bootstrap() {
    try {
        console.log("Carregando assets...");
        await preloadAssets();
        console.log("Assets carregados com sucesso!");
        Start(); 

    } catch (err) {
        console.error("Erro ao carregar imagens:", err);
    }
}
bootstrap();

export * from "./Slides/S0Introducao.js";
export * from "./Slides/S1Conceito.js";
export * from "./Slides/S2ModelagemDiscreta.js";
export * from "./Slides/S3ModelagemContinua.js";
export * from "./Slides/S4AplicacaoNaArea.js";
export * from "./Slides/S5ResolucaoDiscreta.js";
export * from "./Slides/S6ResolucaoContinua.js";
export * from "./Slides/S7LeiGrandesNumeros.js";
export * from "./Slides/S4AplicacaoNaAreaContinua.js";
export * from "./Slides/S8Fontes.js";
export * from "./control.js";
export * from "./style.js"

