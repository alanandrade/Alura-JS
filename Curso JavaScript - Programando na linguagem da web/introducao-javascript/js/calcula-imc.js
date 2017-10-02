// Alterando o titulo da pagina pelo DOM
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

/* Calculo IMC */

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");

    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    /* Seleciona a Coluna do valor IMC */
    var tdImc = paciente.querySelector(".info-imc");

    //Validação

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    // Exibi o Resultado se variaveis no parâmetro for true
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
        //Verificando status das variaveis
        //console.log("Var pesoEhValido: " + pesoEhValido + " e " + "Var alturaEhValido: " + alturaEhValida);
    }
} /* Fecha loop FOR */



function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}