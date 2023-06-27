/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function triangulo(x, y, z){
    if(x == y && y == z){
        console.log('Triangulo Equilatero')
    }else if(x == y || x == z || y == z){
        console.log('Triangulo Isoceles')
    }else if(x !== y && y !== z){
        console.log('Triangulo Escaleno')
    }
}

triangulo(2, 2, 2)
triangulo(4, 4, 5)
triangulo(2, 3, 4)