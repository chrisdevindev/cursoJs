function tabuada(){
    var num = document.querySelector("#num")
    var tab = document.querySelector("#seltab")

    var n = Number(num.value)
  

    if (n == false|| n == 0)  {
        alert("Digite um número!")
        
    }else{
        tab.innerHTML = ' '
        var cont = 1;
        while(cont <= 10){
            var item = document.createElement("option")
            item.text = `${n} x ${cont} = ${n * cont}`
            tab.appendChild(item)
            cont++

        }
    }
}