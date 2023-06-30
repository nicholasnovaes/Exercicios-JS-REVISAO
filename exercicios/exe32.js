/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

let vetor = [2, 5, 98 ,60, 45, 22, 23, 80, 4]

function media(vetor){
    let resultado = 0
    for(i = 0; i < vetor.length; i++){
        resultado = resultado + vetor[i]
    }
    return console.log(resultado / vetor.length)
}

media(vetor)