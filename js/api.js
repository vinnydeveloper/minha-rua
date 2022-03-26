const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputCidade = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");

const BASE_URL = "https://brasilapi.com.br/api"

inputCep.onkeyup = async (evento) =>{
    if(inputCep.value.length < 8){
        return;
    }
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
        method: "GET", 
    });

    const conteudoResposta = await resposta.json();

    inputRua.value = conteudoResposta.street;
    inputBairro.value = conteudoResposta.neighborhood;
    inputCidade.value = conteudoResposta.city;
    inputUF.value = conteudoResposta.state;


    console.log(conteudoResposta);
    alert("Cep completo" + inputCep.value);
}

