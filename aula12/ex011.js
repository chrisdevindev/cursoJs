var idade = 18
console.log(`Para pessoas com ${idade} anos: `)
if (idade>=18 && idade<=64) {
    console.log("Voto obrigatório")
    
}else if(idade>=16 && idade<18 || idade>=65){
    console.log("Voto opcional")
}
else{
    console.log("Não pode votar")
}