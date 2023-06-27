/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capitalInicial, taxa, tempo){
    let resultado = capitalInicial * (taxa / 100) * tempo
    console.log(`Juros Simples : ${resultado}`)
    console.log(`Juros simples montante : ${capitalInicial + resultado}`)

}

jurosSimples(1000, 1, 12)

function jurosComposto(capitalInicial, taxa, tempo){
    let resultado = capitalInicial * (1 + taxa) ** tempo
    console.log(`Juros composto : ${resultado}`)
    console.log(`Juros composto montante : ${resultado + capitalInicial}`)
}

jurosComposto(1000, 10/100, 2)