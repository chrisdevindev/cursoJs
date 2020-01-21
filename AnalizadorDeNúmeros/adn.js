let num = document.querySelector("#num")
let list = document.querySelector("#slc")
let res = document.querySelector("#div2")


let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else{
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true 
    }else{
        return false
    }
}

function adicionar(){
    if (isNumber(num.value) && !inList(num.value , valores)) {
        
        valores.push(Number(num.value));
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`;
        list.appendChild(item)
        
        res.innerHTML = ''
    }else{
        alert("Número inválido ou já existente!")
    }
    num.value = '' //fazendo com que o input zere após o procedimento ser encerrado
    num.focus() // faz com que haja um foco no elemento
}

function finalizar(){
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
        
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]

            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
    
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${valores.length} número cadastrados.</p>`
        res.innerHTML += `<p> O maior número informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor número informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores, o resultado é ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}. </p>`
    }
}