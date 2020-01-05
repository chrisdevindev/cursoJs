
// function enviar(){
//     var radios = document.querySelector('sexo')
//     for(var i = 0; i <= 2; i++){
//         if (radios[i].checked) {
//             console.log("Escolheu: "+ radios[i].value)
//         }
//     }
// }

function enviar(){

    if (document.form1.sexo[0].checked == false && 
        document.form1.sexo[1].checked == false) {
            alert('Selecione o sexo da pessoa')
        
    }else if(document.form1.sexo[0].checked == true){
        alert("É um homem! ")

    }else if(document.form1.sexo[1].checked == true)
        alert("É mulher! ")
}