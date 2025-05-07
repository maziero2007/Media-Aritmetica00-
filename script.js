function calcularMedia() {
    
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, insira todas as notas corretamente.");
        return;
    }

    let media = (nota1 + nota2 + nota3) / 3;

    document.getElementById("media").textContent = `A média é: ${media.toFixed(2)}`;
}