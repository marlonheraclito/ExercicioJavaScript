// Exercicio 10



function ePrimo(n) {
for (let i = 2; i < n; i ++) 
    if(n % i == 0) return false;    
}

function xpto() {
    if(ePrimo(11)){
        console.log('primo')
    } else {
        console.log('nao e primo')
    }
}

xpto()



