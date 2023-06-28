function pedido(codigo, qtd){
    switch(codigo){
        case 100:
            return console.log('Preço a ser pago : ' + (3 * qtd))
        break;

        case 200:
            return console.log('Preço a ser pago : ' + (4 * qtd))
        break;

        case 300:
            return console.log('Preço a ser pago : ' + (5.50 * qtd))
        break;

        case 400:
            return console.log('Preço a ser pago : ' + (7.50 * qtd))
        break;

        case 500:
            return console.log('Preço a ser pago : ' + (3.50 * qtd))
        break;

        case 600:
            return console.log('Preço a ser pago : ' + (2.80 * qtd))
        break;

        default:
            return console.log('Nos nao vendemos este produto aqui')
    }
}

pedido(100, 2)
pedido(200, 4)
pedido(300, 1)
pedido(400, 2)
pedido(500, 4)
pedido(600, 2)
pedido(700, 2)