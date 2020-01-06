
function verificar() {
    var ano = document.querySelector('input#adn').value
    var info = document.querySelector('p#prg')

    //var a = new Date()
    //var anoAtual = a.getYear

    var idade = 2019 - ano
    var sexo = "undefined"

    if (ano == false) {
        alert("Digite o ano de nascimento!")
        return false
    }if (document.form1.sexo[0].checked == false &&
        document.form1.sexo[1].checked == false) {
        alert("Selecione um Sexo")
        return false
    }if (ano > 2019 || ano < 0) {
        alert("Data inválida")
        return false
    }



    else if (document.form1.sexo[0].checked == true && idade >= 18 && idade <= 49){
        sexo = "Homem"
        info.innerHTML = `É um ${sexo} de  ${idade} anos`
        img.src = "homem.jpg"
    } else if (document.form1.sexo[1].checked == true && idade >= 18 && idade <=49){
        sexo = "Mulher"
        info.innerHTML = `É uma ${sexo} de  ${idade} anos`
        img.src = "mulher.jpg"
    }
    
    else if (document.form1.sexo[0].checked == true && idade <= 17) {
        sexo = "Menino"
        info.innerHTML = `É um ${sexo} de  ${idade} anos`
        img.src = "menino.jpg"
    }else if (document.form1.sexo[1].checked == true && idade <= 17) {
        sexo = "Menina"
        info.innerHTML = `É uma ${sexo} de  ${idade} anos`
        img.src = "menina.jpg"
    }
    
    else if (document.form1.sexo[0].checked == true && idade >= 50) {
        sexo = "senhor"
        info.innerHTML = `É um ${sexo} de ${idade}`
        img.src = "senhor.jpg"
    }else if (document.form1.sexo[1].checked == true && idade >=50){
        sexo = "senhora"
        info.innerHTML = `É uma ${sexo} de ${idade} anos`
        img.src ="senhora.jpg"
        
    }


}
