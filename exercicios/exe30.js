/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

let vetor = [2, 5, 98 ,60, 45, 22, 23, 80, 4]

function maiorEmenor(vetor){
    let maior = undefined
    let menor = undefined

    for(i = 0; i < vetor.length; i++){
        if(maior == undefined && menor == undefined){
            maior = vetor[i]
            menor = vetor[i]
        }else{
            if(vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return console.log(maior,menor)
}
maiorEmenor(vetor)
