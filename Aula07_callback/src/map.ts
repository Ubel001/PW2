type Produtos = {id: number; nome: string; preco:number}

const produtos: Produtos[] = [
    {id: 1, nome: "Mouse", preco: 50},
    {id: 2, nome: "Teclado", preco: 150}
];

const nomes:string [] = produtos.map(p => p.nome);

const listaFormatada = produtos.map(p => ({
    id: p.id,
    label: `${p.nome} - R$ ${p.preco.toFixed(2)}`,
    disponivel: true
}));

