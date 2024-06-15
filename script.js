let amigos = [];

const txtAmigo = document.querySelector('.input-amigo');
const btnAdicionar = document.querySelector('.add');
const listaParticipantes = document.querySelector('.participantes');
const mensagemErro = document.querySelector('.mensagem-erro');
const btnReiniciar = document.querySelector('.reset');

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
});