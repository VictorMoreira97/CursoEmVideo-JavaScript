function horaDoDia () {

    var mensagem = window.document.getElementById('msg');
    var imagem = window.document.getElementById('img');

    var data = new Date();
    var hora = data.getHours();

    mensagem.innerHTML = `<p>Agora são ${hora} horas</p>`;

    if (hora >= 0 && hora < 12) {
        mensagem.innerHTML += `<p>Bom dia</p>`;
        imagem.src = `midday.png`
        document.body.style.background = '#D5BBAC';

    } else if (hora >= 12 && hora <= 19) {
        mensagem.innerHTML += `<p>Boa tarde</p>`;
        imagem.src = `dusk.png`
        document.body.style.background = '#CC7339';

    } else {
        mensagem.innerHTML += `<p>Boa noite</p>`;
        imagem.src = `midnight.png`
        document.body.style.background = '#AD3743';

    }
}
