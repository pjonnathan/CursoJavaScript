function calcular() {
    var i = window.document.getElementById('txti')
    var f = window.document.getElementById('txtf')
    var p = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    var inicio = Number(i.value)
    var final = Number(f.value)
    var passo = Number(p.value)
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        res.innerText = 'Erro! verifique os valores.'
    }else{
        while(inicio<=final){
            res.innerText += `${inicio}, `
            inicio += passo
        }
    }
}