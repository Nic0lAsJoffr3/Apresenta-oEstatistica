import { Canvas,  Cores, Fontes, fundo, Texto, FontSizes } from "../files.js";
let exI = null;
function ResetFundo() {
    Fundo = null;
}
var Fundo = null;
export function SlideFontes(i) {
    Fundo = fundo(7, Fundo);

    Texto(
        Cores.Titulo, FontSizes.Titulo,
        Fontes.Titulo, "left",
        "Fontes",
        [Canvas.width / 10, Canvas.height / 10]
    );

    Texto(
        Cores.CianoClaro, FontSizes.NormalText,
        Fontes.NormalText, "left",
        "https://brasilescola.uol.com.br/matematica/probabilidade.htm\nAcessado em 25/05/2026",
        [Canvas.width / 10, Canvas.height / 10 * 2], 50
    );

    Texto(
        Cores.CianoClaro, FontSizes.NormalText,
        Fontes.NormalText, "left",
        "https://encyclopedia.pub/entry/30451.\nAcessado em 26/05/2026",
        [Canvas.width / 10, Canvas.height / 10 * 3.5], 50
    );
    
    Texto(
        Cores.CianoClaro, FontSizes.NormalText,
        Fontes.NormalText, "left",
        "https://csrc.nist.gov/projects/random-bit-generation/documentation-and-software.\nAcessado em 26/05/2026",
        [Canvas.width / 10, Canvas.height / 10 * 5], 50
    );
    
    Texto(
        Cores.CianoClaro, FontSizes.NormalText,
        Fontes.NormalText, "left",
        "https://www.ibm.com/br-pt/think/topics/symmetric-encryption.\nAcessado em 26/05/2026",
        [Canvas.width / 10, Canvas.height / 10 * 6.5], 50
    );
    
    Texto(
        Cores.CianoClaro, FontSizes.NormalText,
        Fontes.NormalText, "left",
        "https://dev.to/biomousavi/understanding-jitter-backoff-a-beginners-guide-2gc.\nAcessado em 26/05/2026",
        [Canvas.width / 10, Canvas.height / 10 * 8], 50
    );

}