function aumento(plano, salario){
    switch(plano){
        case 'A':
            return console.log(salario + (salario * (10 / 100) ))
        break;

        case 'B':
            return console.log(salario + (salario * (15 / 100) ))
        break;

        case 'C':
            return console.log(salario + (salario * (20 / 100) ))
        break;

        default:
            return console.log('Nao existe este plano na nossa empresa')
    }
}

aumento('A', 1000)
aumento('B', 1000)
aumento('C', 1000)
aumento('D', 1000)