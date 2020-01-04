var agora = new Date() //instanciando a classe Date
var hora = agora.getHours()//utilizando o método getHours para atribuir
//à variável hora, o horário atual do seu sistema na sua máquina

//var hora = 22
console.log(`São exatamente ${hora} horas...`)
if (hora>=5 && hora<=11) {
    console.log("Bom dia, meu xuxu!")
}else if(hora>=12 && hora<=17){
    console.log("Boa tarde, meu love!")
}else{
    console.log("Boa noite, minha nega!")
}