/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

function bissexto(ano){
    if(ano <=0){
        return console.log(false)
    }else if(ano % 400 == 0){
        return console.log(true)
    }else if(ano % 100 == 0){
        return console.log(false)
    }else if(ano % 4 == 0){
        return console.log(true)
    }else{
        return console.log(false)
    }
}

bissexto(2020)
bissexto(2022)
bissexto(2021)
bissexto(2024)