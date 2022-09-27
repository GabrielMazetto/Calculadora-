let s = false;
let s_2 = false
let mul_div = false


function operacao(val) {
    if (s == false) {
        document.calculadora.visor.value += val;
        s = true
    }
    if (val == "/" || val == "*") {
        mul_div = true
    }
    if (val == "-" && mul_div == true && s_2 == false) {
        document.calculadora.visor.value += val;
        s_2 = true
    }
}

function valor(val) {
    s = false;
    s_2 = false
    mul_div = false
    document.calculadora.visor.value += val;
    }

function limpar(){
    document.calculadora.visor.value = ""
}
function calcular(){
    document.calculadora.visor.value = (eval(document.calculadora.visor.value))
}