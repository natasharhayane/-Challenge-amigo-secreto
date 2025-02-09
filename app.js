//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let numerosSorteados = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (!nomeAmigo) {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);
    atualizarListaDeAmigos();
    inputAmigo.value = '';
}

function atualizarListaDeAmigos() {
    const listaExibicao = document.getElementById('listaAmigos');
    listaExibicao.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaExibicao.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, adicione amigos antes de sortear.');
        return;
    }

    if (numerosSorteados.length >= amigos.length) {
        numerosSorteados.splice(0);
      }
      
      let numeroSorteado;
      do{
          numeroSorteado = Math.floor(Math.random() * amigos.length);
      } while(numerosSorteados.includes(numeroSorteado))
      
      numerosSorteados.push(numeroSorteado);
      
      exibirAmigoSorteado(numeroSorteado);
}

function exibirAmigoSorteado(index) {
  const resultadoElemento= document.getElementById('resultado');
  resultadoElemento.innerHTML=`<li>${amigos[index]}</li>`;
}
