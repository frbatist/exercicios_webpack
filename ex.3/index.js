const produto = {
    nome: 'Caneta ',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    return { ...objeto }
}
console.log(1)

const novoProduto = clone(produto)

console.log(2)

novoProduto.nome = 'Lapis'

console.log(3)

console.log(produto, novoProduto)