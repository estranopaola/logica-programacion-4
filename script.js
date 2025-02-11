
function calcularFibonacci(n) {
    let fib = [0, 1];  
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]); 
    }
    return fib;
}

function mostrarFibonacci() {
    const numeroInput = document.getElementById('numeroInput');
    const numero = Number(numeroInput.value);
    const resultadosDiv = document.getElementById('resultados');
    const errorDiv = document.getElementById('error');

    

    if (isNaN(numero) || numero <= 0) {
        errorDiv.innerHTML = "Por favor ingresa un número válido mayor que 0.";
    } else {
        const fibonacci = calcularFibonacci(numero);
        resultadosDiv.innerHTML = `Serie de Fibonacci: ${fibonacci.join(', ')}`;
    }
}
