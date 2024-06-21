let amigos = [];

const txtAmigo = document.querySelector('.input-amigo');
const btnAdicionar = document.querySelector('.add');
const listaParticipantes = document.querySelector('.participantes');
const mensagemErro = document.querySelector('.mensagem-erro');
const btnReiniciar = document.querySelector('.reset');
const btnSortear = document.querySelector('.sort')
const sorteio = document.querySelector('.sorteio')

btnAdicionar.addEventListener('click', () => {

    if (txtAmigo.value.length === 0 ) {
        mensagemErro.textContent = "ERRO! Insira um nome."
    } else if (amigos.includes(txtAmigo.value)) {
        mensagemErro.textContent = 'ERRO! Nome já inserido';
    } else { mensagemErro.textContent = '';
    
    amigos.push(txtAmigo.value); 
    listaParticipantes.textContent = amigos.join(', ');
    txtAmigo.value = '';
}

});

btnReiniciar.addEventListener('click', () => {
    amigos = [];
    listaParticipantes.textContent = '';
    mensagemErro.textContent = '';
    txtAmigo.value = '';
    sorteio.innerHTML='';
});

btnSortear.addEventListener('click', () => {
    sortear()
});

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {
     if (amigos.length < 4) {
         alert('Adicone ao menos 4 amigos');
    return;
}
    embaralhar(amigos);

    let sorteio = document.querySelector('.sorteio');
    sorteio.innerHTML='';
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + '<li>' + amigos[i] + '-->' + amigos[0] + '</li>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + '<li>' + amigos[i] + '-->' + amigos[i+ 1] + '</li>';
        }
}
}

