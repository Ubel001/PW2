function concatenar( a: string, b: string):void{
    var op = a + "" + b;
    console.log("A operação efetudada resultou em: " + op);
}
function somar (a: number, b: number ):void{
    var op = a + b;
    console.log("A operação efetuada resultou em:" + op);
}

function imprimir (value: any  ):void{
    console.log("A operação efetuada resultou em:" + value);
}

function concatenarCallback (a: string, b: string, callback: (param: string) => void):void{
    var op = a + "" + b;
    callback(op);
}

function somarCallback (a: number, b: number, callback: (param: number) => void):void{
    var op = a + b;
    callback(op);
}

concatenarCallback("Hellow", "World", imprimir);
somarCallback(2, 2, imprimir);