let vetor = [2,5,8,4,3,1]

for (let pos in vetor){
    if (vetor[pos] == 3){
        console.log(`o valor armazenado é ${vetor[pos]} e a posição é ${pos}`)
    }else{
        console.log(`Erro!`)
    }
}