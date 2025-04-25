function switchTab(tab) {
    document.getElementById('section-imc').classList.add('hidden');
    document.getElementById('section-bhaskara').classList.add('hidden');

    document.getElementById('tab-imc').classList.remove('tab-active');
    document.getElementById('tab-bhaskara').classList.remove('tab-active');

    document.getElementById('section-' + tab).classList.remove('hidden');
    document.getElementById('tab-' + tab).classList.add('tab-active');
}

// IMC
document.getElementById('imc-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);

        let classificacao = '';
        if (imc < 18.5) classificacao = 'Abaixo do peso';
        else if (imc < 25) classificacao = 'Peso normal';
        else if (imc < 30) classificacao = 'Sobrepeso';
        else if (imc < 35) classificacao = 'Obesidade grau 1';
        else if (imc < 40) classificacao = 'Obesidade grau 2';
        else classificacao = 'Obesidade grau 3 (mórbida)';

        document.getElementById('imc-valor').textContent = imc.toFixed(2);
        document.getElementById('imc-classificacao').textContent = classificacao;
        document.getElementById('resultado-imc').classList.remove('hidden');
    }
});

// Bhaskara
document.getElementById('bhaskara-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    if (a !== 0) {
        const delta = (b * b) - (4 * a * c);
        document.getElementById('delta-valor').textContent = delta.toFixed(2);

        if (delta >= 0) {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);

            document.getElementById('x1-valor').textContent = x1.toFixed(4);
            document.getElementById('x2-valor').textContent = x2.toFixed(4);

            document.getElementById('raizes-container').classList.remove('hidden');
            document.getElementById('sem-raizes').classList.add('hidden');
        } else {
            document.getElementById('raizes-container').classList.add('hidden');
            document.getElementById('sem-raizes').classList.remove('hidden');
        }

        document.getElementById('resultado-bhaskara').classList.remove('hidden');
    }
});