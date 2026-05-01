import { Pacote } from "./Pacote";

export class Voo {
    pacotes: Pacote[];

    constructor(pacotes: Pacote[]) {
        this.pacotes = pacotes;
    }

    getPesoTotal(): number {
        let total = 0;

        for (let i = 0; i < this.pacotes.length; i++) {
            total += this.pacotes[i].getPeso();
        }

        return total;
    }
}