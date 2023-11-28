function contarVocales(texto) {
    var vocales = "aeiouAEIOU";
    var contador = 0;

    for (var char of texto) {
        if (vocales.includes(char)) {
            contador++;
        }
    }

    return contador;
}

var entradaUsuario = prompt("Ingresa un texto:");
var resultado = contarVocales(entradaUsuario);
alert("Número de vocales en el texto: " + resultado);