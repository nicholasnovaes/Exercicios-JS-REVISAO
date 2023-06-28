/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
*/

function calculadora(x, sinal, y){
    switch(sinal){
        case '+':
            return console.log(x + y)
        break;

        case '-':
            return console.log(x - y)
        break

        case '*':
            return console.log(x * y)
        break;

        case '/':
            return console.log(x / y)
        break;
        default:
            return console.log('Insira um sinal de operação valido')
    }
}

calculadora(10, '+', 5)
calculadora(10, '-', 5)
calculadora(10, '*', 5)
calculadora(10, '/', 5)
calculadora(10, '%', 5)
