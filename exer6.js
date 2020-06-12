// Exercicio 6

let idade = 10
let cartaConducao = false

let estado

if (idade >= 18 && cartaConducao == false) {
    estado = 'talvez'
} else if (idade >= 18 && cartaConducao == true) {
    estado = 'sim'
} else {
    estado = 'nao'
}

switch (estado) {
    case 'talvez':
        console.log('Pode ter carta de conducao')
        break;
    case 'sim':
        console.log('Pode conduzir')
        break;
    case 'nao':
        console.log('Nao pode conduzir')
        break;
    default:
        console.log('Nenhuma das anteriores')
        break;
}
