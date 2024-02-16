const inputValue = document.querySelectorAll('input');

function uppercaseText (input, textarea){
    let valor = input.value;

    valor = valor.charAt(0).toUpperCase() + valor.slice(1);

    input.value = valor;
}