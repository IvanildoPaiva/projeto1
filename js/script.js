'use strict';

const preencherForm = (retorno)  => {
document.getElementById('endereco').value = retorno.logradouro;
document.getElementById('bairro').value = retorno.bairro;
document.getElementById('cidade').value = retorno.localidade;
document.getElementById('estado').value = retorno.uf;
}

//validando o campo cep.
const eNumero = (numero) =>  /^[0-9]+$/.test(numero);
const validaCep = (cep) => cep.length == 8 && eNumero(cep);

const pesquisaCep = async() =>{
    const cep = document.getElementById('cep').value;

    const url =  `https://viacep.com.br/ws/${cep}/json/`;
    // fetch(url).then(response => response.json()).then(console.log);
   if(validaCep(cep)){
    
    const busca = await fetch(url);
    const retorno = await busca.json();
    if(retorno.hasOwnProperty('erro')){
        document.getElementById('endereco').value = 'Cep não encontrado!!';
 
    }else{
     preencherForm(retorno);
    }

   }else{
    document.getElementById('endereco').value = 'Cep incorreto, Digitar somente número!!';
   }
  
    
   
}



document.getElementById('cep').addEventListener('focusout', pesquisaCep);