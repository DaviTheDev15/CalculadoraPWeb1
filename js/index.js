const dividir = (valor1, valor2) => valor1 / valor2;

const multiplicar = (valor1, valor2) => valor1 * valor2;

const soma = (valor1, valor2) => valor1 + valor2;

const subtrair = (valor1, valor2) => valor1 - valor2;

const calcular = function(funcao, valor1, valor2){
    return funcao(valor1, valor2);
}



const clicada = function(){
    const valor1 = document.getElementById("input1").value;
    const valor2 = document.getElementById("input2").value;
    const operador = document.getElementById("input3").value;
    if (valor1.length == 0){
        alert("O campo Valor 1 se encontra vazio!")
    }
    if (valor2.length == 0){
        alert("O campo Valor 2 se encontra vazio!")
    }
    if (operador.length == 0){
        alert("O campo Operador se encontra vazio!")
    }
    else if(operador == "+"){
        const resultado = calcular(soma, parseFloat(valor1), parseFloat(valor2));
        document.getElementById("frase").innerHTML =  valor1 + " + " + valor2 + " = ";
        document.getElementById("resultado").innerHTML = resultado;
    }
    else if(operador == "-"){
        const resultado = calcular(subtrair, parseFloat(valor1), parseFloat(valor2));
        document.getElementById("frase").innerHTML = valor1 + " - " + valor2 + " = ";
        document.getElementById("resultado").innerHTML = resultado;
    }
    else if(operador == "*"){
        const resultado = calcular(multiplicar, parseFloat(valor1), parseFloat(valor2));
        document.getElementById("frase").innerHTML = valor1 + " x " + valor2 + " = ";
        document.getElementById("resultado").innerHTML = resultado;
    }
    else if(operador == "/" && valor2 == "0"){
        alert("Não é possível realizar uma divisão por 0!")
    }
    else if(operador == "/"){
        const resultado = calcular(dividir, parseFloat(valor1), parseFloat(valor2));
        document.getElementById("frase").innerHTML = valor1 + " ÷ " + valor2 + " = ";
        document.getElementById("resultado").innerHTML = resultado;
    }
    else{
        alert("O Operador informado não é compátivel!\nTente algum desses: + , - , * , / ")
    }
}


