function calcular() {
    var d = new Date()
    var data = d.getFullYear()
    var fano = document.getElementById('txta')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > data){
        window.alert('Verifique a data novamente!')
    }else{
        var ano = data - fano.value
        var fsexo = window.document.getElementsByName('rsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsexo[0].checked){
            if (ano >= 1 && ano <= 11){
                genero = 'criança'
                img.setAttribute('src', 'imagem/criancah.jpg')
            }else if (ano >= 12 && ano <= 17){
                genero = 'jovem'
                img.setAttribute('src','imagem/jovemh.jpg')
            }else if (ano >= 18 && ano <= 50){
                genero = 'adulto'
                img.setAttribute('src','imagem/adultoh.jpg')
            }else {
                genero = 'velho'
                img.setAttribute('src','imagem/velhoh.jpg')
            }
        }else if (fsexo[1].checked){
            if (ano >= 1 && ano <= 11){
                genero = 'criança'
                img.setAttribute('src','imagem/criancam.jpg')
            }else if (ano >= 12 && ano <= 17){
                genero = 'jovem'
                img.setAttribute('src','imagem/jovemm.jpg')
            }else if (ano >= 18 && ano <= 50){
                genero = 'adulto'
                img.setAttribute('src','imagem/adultom.jpg')
            }else {
                genero = 'velha'
                img.setAttribute('src','imagem/velham.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Você é um(a) ${genero} com ${ano} anos`
        res.appendChild(img)
    }
}