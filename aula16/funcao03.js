function fatorial(numero){
    var fat = 1
    for (var c = numero; c > 1 ; c--){
        fat*=c
    }
    return fat

}
console.log(fatorial(5))