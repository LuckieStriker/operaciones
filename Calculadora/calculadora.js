

var operation="";
var firstValue="";

function addToNumber(numero){
    console.log(numero);
    console.log(document.getElementById("numero"));
    var valor=document.getElementById("numero").value+numero;
    document.getElementById("numero").value=valor;
    console.log(valor);
}

function positiveNegative(){
    var number= document.getElementById("numero").value;
    if(number.charAt(0)=='-'){
        document.getElementById("numero").value=document.getElementById("numero").value.substring(1);
    }else{
        document.getElementById("numero").value="-"+document.getElementById("numero").value;
    }

}

function ac(){
    document.getElementById("numero").value="";
}

function opera(operador){
    operation=operador;
    firstValue=document.getElementById("numero").value;
    document.getElementById("numero").value="";
}

let suma = (a, b) => a + b;
let multiplicacion = (a, b) => a * b;
let divison = (a, b) => a / b;
let porcentaje = (a, b) => a * (b/100);
let resta = (a, b) => a - b;

function equals(){
    var resultado=0;
    console.log("Vamos a sumar");
    console.log(firstValue);
    console.log(document.getElementById("numero").value)
    switch(operation){
        case "+":
            resultado= suma(Number(firstValue), Number(document.getElementById("numero").value));
            break;
        case "-":
            resultado= resta(Number(firstValue), Number(document.getElementById("numero").value));
            break;     
        case "*":
            resultado= multiplicacion(Number(firstValue),Number(document.getElementById("numero").value));
            break;       
        case "/":
            resultado= division(Number(firstValue),Number(document.getElementById("numero").value));
            break;
        case "%":
            resultado= porcentaje(Number(firstValue),Number(document.getElementById("numero").value));
            break;            
    }
    document.getElementById("numero").value=resultado;


}
