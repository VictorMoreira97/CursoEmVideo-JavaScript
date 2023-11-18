function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var resultado = document.querySelector('div#resultado');

    if (fano.value.letgh == 0 || fano.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente');
    } else {
        var fgend = document.getElementsByName('radioGender');
        var idade = ano - Number(fano.value);
        var genero = ``;

        var imagem = document.createElement('imagem');

        imagem.setAttribute('id', 'foto');

        if (fgend[0].checked) {
            genero = `Homem`;

            if (idade >= 0 && idade < 10) {
                //criança
                imagem.setAttribute('src', 'foto-bebe-m.png')

            } else if (idade < 21) {
                //jovem
                imagem.setAttribute('src', 'foto-jovem-m.png')

            } else if (idade < 60) {
                // Adulto
                imagem.setAttribute('src', 'foto-adulto-m.png')

            } else {
                //idoso
                imagem.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fgend[1].checked) {
            genero = `Mulher`;

            if (idade >= 0 && idade < 10) {
                //criança
                imagem.setAttribute('src', 'foto-bebe-f.png')

            } else if (idade < 21) {
                //jovem
                imagem.setAttribute('src', 'foto-jovem-f.png')

            } else if (idade < 60) {
                // Adulto
                imagem.setAttribute('src', 'foto-adulto-f.png')

            } else {
                //idoso
                imagem.setAttribute('src', 'foto-idoso-f.png')
            }
            
        }

        resultado.style.textAlign = `center`;
        resultado.innerHTML = `${genero} com ${idade}`;
        resultado.appendChild(imagem);


    }

}