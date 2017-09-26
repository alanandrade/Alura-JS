var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

/* Calculo IMC */

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

/* Resultado impresso no console */
console.log(imc);

/* Seleciona a Coluna do valor IMC */
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;