function verificar(){
    var hora = window.document.getElementById('res')
    var img = window.document.getElementById('imagem')
    var d = new Date()
    var data = d.getHours()
    if (data>=0 && data<12){
        hora.innerText = `Bom Dia`
        img.src = 'imagemcss/fotomanha.jpg'
    }else if(data>12 && data<=18){
        hora.innerText = `Boa Tarde`
        img.src = 'imagemcss/fototarde.jpg'
    }else{
        hora.innerText = `Boa Noite`
        img.src = 'imagemcss/fotonoite.jpg'
    }
}