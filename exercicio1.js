function somar(){
    var a, b, c, s;
    a = Number(document.querySelector('input.n1').value)
    b = Number(document.querySelector('input.n2').value)
    c = document.querySelector('p.resultado')
    s = a+b;
    c.innerHTML = ` <strong> A soma é: ${s} </strong>`

}

function calcular() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var res = document.querySelector('h4.res')

    var operacaoSelecionada = document.getElementById("operacao").value;

    var resultado;
    switch (operacaoSelecionada) {
        case "adicao":
            resultado = num1 + num2;
            break;
        case "subtracao":
            resultado = num1 - num2;
            break;
        case "multiplicacao":
            resultado = num1 * num2;
            break;
        case "divisao":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação inválida";
    }

    res.innerHTML = `<strong>Resultado: ${resultado}</strong>`
}
function imc(){
    var a, b, c, s;
    a = Number(document.querySelector('input.r1').value);
    b = Number(document.querySelector('input.r2').value);
    c = document.querySelector('p.resulta');
    s = b/(a**2);
    c.innerHTML = `Seu IMC é: ${s.toFixed(2)}, Consulte a tabela abaixo.`
}