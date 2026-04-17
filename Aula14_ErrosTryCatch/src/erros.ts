//Exercício 1 -- R: O erro da função era de lógica '<=' iria fazer o loop ir um índice além do array.
function calcularMedia(notas: number[]): number {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]!;
    }
    return soma / notas.length;
}

//Exercício 2
function cadastrarusuario(nome: string, idade: number){
    if(nome.length === 0 || idade < 0){
        throw new Error ("Dados Inváldos");
    } else{ 
    console.log("Usuário cadastrado!");
    }
}