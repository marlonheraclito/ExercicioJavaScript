// Exercicio 6

let idade = 10
let cartaConducao = false

switch (idade && cartaConducao) {
    case idade >= 18 && cartaConducao == false:
        console.log('Pode ter carta de conducao')
        break;
    case idade >= 18 && cartaConducao == true:
        console.log('Pode conduzir')
        break;
    case idade < 18 && cartaConducao == false:
        console.log('Nao pode conduzir')
        break;
    default:
        console.log('Nenhuma das anteriores')
        break;
}
