/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares*/

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 45, 66, 69, 68, 50, 54, 25, 23]

function paresEImpares(vetor){
    let pares = []
    let impares = []
    for(i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            pares++
        }else{
            impares++
        }
    }

    return console.log(`São ${pares} pares e ${impares} impares`)
}

paresEImpares(vetor)