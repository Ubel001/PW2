import {Paciente} from "./Paciente"
import {Medico} from "./Medico"
import { log } from "node:console"

export class Prontuario{
    paciente:Paciente
    medico:Medico

    constructor(paciente:Paciente, medico:Medico){
        this.paciente = paciente
        this.medico = medico
    }

    exibir():void{
        console.log(`O nome do paciente é: ` ${this.paciente});
        
    }
}