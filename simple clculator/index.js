function calculate() {
    var nombre1 = parseFloat(document.getElementById('num1').value);
    var nombre2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;

    if (isNaN(nombre1) || isNaN(nombre2)) {
        alert("Veuillez saisir des nombres valides.");
        return;
    }

    var resultat;
    switch (operation) {
        case '+':
            resultat = nombre1 + nombre2;
            break;
        case '-':
            resultat = nombre1 - nombre2;
            break;
        case '*':
            resultat = nombre1 * nombre2;
            break;
        case '/':
            if (nombre2 === 0) {
                alert("Division par zéro impossible.");
                return;
            }
            resultat = nombre1 / nombre2;
            break;
        case '%':
            resultat = nombre1 % nombre2;
            break;
        default:
            alert("Opération non reconnue.");
            return;
    }
    document.getElementById('test').textContent = resultat;
}