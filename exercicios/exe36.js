/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

let vetor = [1, 3, 4, 8, 9]

function multi(vetor, multiplicador){
    let resultado = []
    for(i = 0; i < vetor.length; i++){
        resultado.push(vetor[i] * multiplicador)
    }

    console.log(resultado)
}

multi(vetor, 10)

function multi5(vetor, multiplicador){
    let resultado = []
    for(i = 0; i < vetor.length; i++){
        if(vetor[i] > 5){
            resultado.push(vetor[i] * multiplicador)
        }
    }

    console.log(resultado)
}

multi5(vetor, 10)