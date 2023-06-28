/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false*/

function divisível(num){
    if(num % 3 == 0){
        return console.log(true)
    }else{
        return console.log(false)
    }
}

divisível(10)
divisível(9)
divisível(8)
divisível(6)