let amigo = {
    nome: "Christian", 
    peso: 71.2, 
    sexo: "M", 
        engordar(p = 0){
            console.log('Engordou')
            this.peso += p
}}

amigo.engordar(3)
console.log(amigo.peso)

