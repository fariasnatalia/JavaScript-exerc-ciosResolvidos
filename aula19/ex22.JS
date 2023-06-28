function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){ // PARA O CONTADOR RECEBER O VALOR DE N, ENQUANTO FOR MENOR QUE 1 C -1
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
 