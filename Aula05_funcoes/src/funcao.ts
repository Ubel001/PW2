function mensagem(f:string):string{
    return f;
}
console.log (mensagem ("Olá Mundo!!"));

function soma(a:number, b:number):number{
    return a+b;
}
function saudacao(nome:string ="Visitamte"):string{
    return `Olá, ${nome}`
}
saudacao("ADS");
saudacao();

function multiplicar(a:number, b:number){
    return a*b;
}

const ambda = (f:string):string => f;

const somaAmbda = (a:number, b:number):number => {return a+b};

const multiplicarOpcional = (a:number, b:number):number =>{
    return a*(b ?? 1)
}
multiplicarOpcional(1, 2);

//Operador Terciário
const multiplicarTerciario=(a:number, b?:number):number => b === undefined ? a: a * b;

//Operador Coalescência
const multiplicarCoalescencia=(a:number, b?:number):number => a*(b ?? 1);

