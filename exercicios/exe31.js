/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console*/

let vetor = [2, 5, 98 ,-60, 45, -22, -23, 80, 4]

function negativos(vetor){
    let neg = 0
    for(i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            neg++
        }
    }
    return console.log(neg)
}

negativos(vetor)