var vetor = [3,4,7,2,5]

vetor.sort() //ordenando os elementos do vetor

//PERCURSO PARA EXIBIÇÃO DO VETOR(forma atualizada e simplificada)
//É OTIMIZADO PARA VETORES E OBJETOS
for (var i in vetor) {
    console.log(`A posição "${i}" tem o valor ${vetor[i]}`)
}

console.log(`O menor valor está na posição ${vetor.indexOf(2)}`)