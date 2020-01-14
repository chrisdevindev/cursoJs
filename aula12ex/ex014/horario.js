function carregar(){
    var msg = document.querySelector("#msg")
    var img = document.querySelector("img")
    var data = new Date()
    var hora = data.getHours()

    
    msg.innerHTML = `São exatamente ${hora} horas`

    if (hora >= 00 && hora <=11) {
        img.src ="manha.jpeg"
        
    }else if(hora >=12 && hora <=17){
        img.src="tarde.jpg"
    }else{
        img.src="noite.jpg"
    }
}