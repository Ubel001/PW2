const numeros:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];

const semDuplicados = numeros.filter((valor, indice, self)=>{
    return self.indexOf(valor) === indice;
});

let pares = numeros.filter(n => n % 2 === 0);

let maiorQueTres = numeros.filter(n => n > 3);

let valores = [10, null, 25, undefined, 52, 89];
let valoresNaoNulos = valores.filter(v => v !== null && v !== undefined);

type Pessoa={
    nome:string;
    idade:number;
}

const pessoas: Pessoa[] = [
    {nome: "Frederico", idade: 67},
    {nome: "Enzo", idade: 17},
    {nome: "Anna", idade: 19},
    {nome: "Isabelly", idade: 19},
    {nome: "Carol", idade: 18},
    {nome: "Tamires", idade: 32}
]

let maiorDeIdade = pessoas.filter(pessoa => pessoa.idade>= 18);
console.log(maiorDeIdade);