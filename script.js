function agregar (valor){
    document.getElementById('pantalla').value +=valor
}

function borrar(){
    document.getElementById('pantalla').value = ''
}

function calcular(){
    const ValorPantalla = document.getElementById('pantalla').value
    const resultado = eval(ValorPantalla)
    document.getElementById('pantalla').value = resultado
}

document.addEventListener('DOMContentLoaded', function() {
    const pantalla = document.getElementById('pantalla');
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            handleInput(button.getAttribute('data-key'));
        });

        document.addEventListener('keydown', (event) => {
            const key = event.key;
            if (isValidKey(key)) {
                handleInput(key);
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (/[0-9+\-*/=]/.test(key) || key === 'Enter' || key === 'Backspace' || key === 'Escape') {
            handleInput(key);
        }
    });

    function handleInput(input) {
        switch (input) {
            case 'C':
            case 'Escape':
                pantalla.value = '';
                break;
            case '=':
            case 'Enter':
                try {
                    pantalla.value = eval(pantalla.value);
                } catch {
                    pantalla.value = 'Error';
                }
                break;
            case 'Backspace':
                pantalla.value = pantalla.value.slice(0, -1);
                break;
            default:
                if (/[0-9+\-*/]/.test(input)) {
                    pantalla.value += input;
                }
                break;
        }
    }
});