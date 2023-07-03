/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A*/

let notas = [2.3, 5.5, 7.1, 9.9]

function avaliar(notas){
    resultado = []
    for(i = 0; i < notas.length; i++){
        if(notas[i] > 0 && notas[i] < 4.9){
            resultado.push('D')
        }else if(notas[i] > 4.9 && notas[i] < 6.9){
            resultado.push('C')
        }else if(notas[i] > 6.9 && notas[i] < 8.9){
            resultado.push('B')
        }else if(notas[i] > 8.9 && notas[i] <= 10){
            resultado.push('A')
        }
    }
    console.log(resultado)
}

avaliar(notas)