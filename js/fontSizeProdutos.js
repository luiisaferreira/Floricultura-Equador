window.onload = function() {
    var contador=0;
    var textoAtendimento = document.querySelector('.textoAtendimento');
    var h1 = document.querySelector('.cabecalho h1')
    var listaMenuTexto =  document.querySelectorAll('.lista-menu a');
    var botaoLogin = document.querySelector('.botaoLogin');
    var botaoCadastro = document.querySelector('.botaoCadastro');
    var menuDepartamento = document.querySelector('.menuDepartamento');
    var listaMenuDepartamentoA = document.querySelectorAll('.listaMenu-departamento a');
    var textoDepartamento = document.querySelector('.menuDepartamento div p ');
    var titulo = document.querySelectorAll('.titulo p');

    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;

    elementBtnDecreaseFont.disabled = true;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        contador= contador+1;
        console.log(contador);
        if(contador==4) {
            this.disabled = true;
        }
        elementBtnDecreaseFont.disabled = false;

        fontSize = fontSize + increaseDecrease;
        textoAtendimento.style.fontSize = fontSize + '%';
        h1.style.fontSize = fontSize + '%';
        listaMenuTexto.forEach(e=> {
            e.style.fontSize = fontSize + '%';
        })
        botaoLogin.style.fontSize = fontSize + '%';
        botaoCadastro.style.fontSize = fontSize + '%';
        botaoCadastro.style.width = (fontSize*2) + 'px';
        menuDepartamento.style.height = fontSize + '%';
        listaMenuDepartamentoA.forEach(e=> {
            e.style.fontSize = fontSize + '%';
        })
        textoDepartamento.style.fontSize = fontSize + '%';
        titulo.forEach(e=> {
            e.style.fontSize = fontSize + '%';
        })

    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        console.log(contador);
        if(contador>5 || contador<=0) {
            this.disabled = true;
        }
        contador= contador-1;
        elementBtnIncreaseFont.disabled = false;
        fontSize = fontSize - increaseDecrease;
        textoAtendimento.style.fontSize = fontSize + '%';
        h1.style.fontSize = fontSize + '%';
        listaMenuTexto.forEach(e=> {
            e.style.fontSize = fontSize + '%';
        })
        botaoLogin.style.fontSize = fontSize + '%';
        botaoCadastro.style.fontSize = fontSize + '%';
        botaoCadastro.style.width = (fontSize*2) + 'px';
        menuDepartamento.style.height = fontSize + '%';
        listaMenuDepartamentoA.forEach(e=> {
            e.style.fontSize = fontSize + '%';
        })
        textoDepartamento.style.fontSize = fontSize + '%';
        titulo.forEach(e=> {
            e.style.fontSize = fontSize + '%';
        })
    });
} 