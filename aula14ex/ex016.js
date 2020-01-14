function contar() {
    var i = document.querySelector('#inicio')
    var ni = Number(i.value)

    var f = document.querySelector('#fim')
    var nf = Number(f.value)

    var p = document.querySelector('#passo')
    var np = Number(p.value)

    var pa = document.querySelector("#p")
    pa.innerHTML = "Contando: <br><br>"


    if (ni == false || nf == false) {
        alert("Preencha os dados!")
        return false

    }
    else if (np == 0 || np == false) {
        alert("Passe inválido! Considerando passe como 1")
        np = 1

    }

    if (ni < nf) {
        for (let inicio = ni; inicio <= nf; inicio += np) {
            var valor = inicio
            pa.innerHTML += `${valor}  \u{1F449}`


        }

    } else {
        for (let inicio = ni; inicio >= nf; inicio -= np) {
            var valor = inicio
            pa.innerHTML += `${valor}  `
        }
    } 
    pa.innerHTML += `\u{1F3C1}`
}