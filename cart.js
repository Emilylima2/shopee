// quais ações meu carrinho pode fazer

//adicionar item no carrinho
async function addItem (userCart){
    userCart.push(item);
}

//deletar item do carrinho
async function deleteItem(userCart, name) {
    return userCart.reduce(total, item) => total + item.subtotal(),
}

//remover um item
async function removeItem(userCart, index) {}

//calcular o total 
async function calculateItem(userCart) {}