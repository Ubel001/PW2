//Listas de números
let numbers: number[] = [1, 2, 3, 4, 5]
console.log(numbers)

//Lista de strings
let nomes: string[] = ["Anna", "Guilherme", "Carolina", "Lucas"]
let posAnna: number = nomes.indexOf("Anna")
console.log(posAnna)
nomes.splice(posAnna, posAnna)

console.log(nomes)

//Lista Genérica (Usando Array<Tipos>)
let idades: Array<number> = [20, 30, 40]

//Lista com tipos mistos (Usando Union Type)
let misto: (number | string) [] = [1, "dois", 3, "quatro"]

let fruits: string[] =  ["Maça", "Banana"]
fruits.push("Laranja") //Adiciona no final da lista
fruits.unshift("Uva") //Adicona no inicio