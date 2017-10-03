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

    var pesoEhValido = validaPeso(peso); // true ou false
    var alturaEhValida = validaAltura(altura); //true ou false

    if (!pesoEhValido) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
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


//Validacoes
function validaPeso(peso){
    if (peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    } else {
        return false;
    }
}


//Cálculo do IMC

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}