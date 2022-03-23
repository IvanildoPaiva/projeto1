'use strict';

const preencherForm = (retorno)  => {
document.getElementById('endereco').value = retorno.logradouro;
document.getElementById('bairro').value = retorno.bairro;
document.getElementById('cidade').value = retorno.localidade;
document.getElementById('estado').value = retorno.uf;
}

const pesquisaCep = async() =>{
    const cep = document.getElementById('cep').value;

    const url =  `https://viacep.com.br/ws/${cep}/json/`;
    // fetch(url).then(response => response.json()).then(console.log);

   const busca = await fetch(url);
   const retorno = await busca.json();
    preencherForm(retorno);
}


document.getElementById('cep').addEventListener('focusout', pesquisaCep);