console.log("Antes.");
setTimeout(() => console.log("Executando o Timeout"), 2000);
setInterval(() => console.log("Executando o Interval"), 2000)
console.log("Depois.");

let frases = "Rodando setTimout"

let timeout = setTimeout( () => console.log("Rodando setTimeout"), 3000);

frases = "Rodando o clearTimeout";

if (frases !== "Rodando o cleatTimeout"){
    clearTimeout(timeout);
    console.log(frases);
}

let contador = 0;

let interval = setInterval(() => {
    contador++;
    console.log("Rodando o setInterval");
    if(contador===3){
        console.log("Intervalo cancelado apos 3 execucoes.");
        clearInterval(interval);
    }
}, 500)

