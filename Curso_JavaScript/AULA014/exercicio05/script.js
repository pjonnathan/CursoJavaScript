function calcular() {
    var n = document.getElementById('txtn')
    var sel = document.getElementById('seltab')
    if (n.value.length == 0){
        window.alert('Erro verifique os dados!')
    }else{
        var numero = Number(n.value)
        sel.innerHTML = ''
        for(c=1;c<=10;c++){
            var item = document.createElement('option')
            item.text = `${numero} * ${c} = ${numero*c}`
            item.value = `{sel${c}}`
            sel.appendChild(item)
        }
        
    }
}