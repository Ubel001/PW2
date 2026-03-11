const frutas: string [] = ["Maca", "Banana", "Uva"];

frutas.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

let totalVendas = 0;
const precos: number[] = [10.5, 20.0, 5.25];

precos.forEach(preco => {
    totalVendas += preco; //Efeito colateral: altera variavel externa
});

console.log(`O total de vendas e: ${totalVendas}`);

