// Alterando o titulo da pagina pelo DOM
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

/* Calculo IMC */

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

/* Seleciona a Coluna do valor IMC */
var tdImc = paciente.querySelector(".info-imc");

//Validação

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido!";
}

if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválida!";
}

// Exibi o Resultado se variaveis no parâmetro for true
if(pesoEhValido && alturaEhValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
    //Verificando status das variaveis
    console.log("Var pesoEhValido: " + pesoEhValido + " e " + "Var alturaEhValido: " + alturaEhValida);
}