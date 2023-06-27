/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo)*/

let listaDePontos = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function recorde(lista){
    let str = lista.split(',')
    let maiorPontuacao = str[0]
    let menorPontuacao = str[0]
    let qtdQuebraDeRecords = 0
    let piorJogo = 1

    for(i = 1; i < str.length; i++){
        if(parseInt(str[i]) > parseInt(maiorPontuacao)){
            maiorPontuacao = str[i]
            qtdQuebraDeRecords++
        }else if(parseInt(str[i]) < parseInt(menorPontuacao)){
            menorPontuacao = str[i]
            piorJogo = i + 1
        }
    }
     return [qtdQuebraDeRecords, piorJogo]
}

console.log(recorde(listaDePontos))