/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console*/


let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['um', 'dois', 'tres', 'quatro']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function uniao(vetor1, vetor2, vetor3){
    let v1 = vetor1
    let v2 = vetor2
    let v3 = vetor3

    let uniao1 = 0
    let uniao2 = 0

    uniao1 = v1.concat(v2)
    uniao2 = v3.concat(v2)

    return console.log(uniao1, uniao2)
}

uniao(vetorInteiro, vetorString, vetorDouble)