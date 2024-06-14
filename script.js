let amigos = [];

const txtAmigo = document.querySelector('.input-amigo');
const btnAdicionar = document.querySelector('.add');
const listaParticipantes = document.querySelector('.participantes');
const mensagemErro = document.querySelector('.mensagem-erro');

btnAdicionar.addEventListener('click', () => {

    if (txtAmigo.value.length === 0 ) {
        mensagemErro.textContent = "ERRO! Insira um nome."
    } else {
        mensagemErro.textContent = '';
    if (listaParticipantes.textContent.length === 0 ) {
        listaParticipantes.textContent = txtAmigo.value;
    } else {
        listaParticipantes.textContent += ", " + txtAmigo.value;
    }
    amigos.push(txtAmigo.value);
    txtAmigo.value = '';
}

})