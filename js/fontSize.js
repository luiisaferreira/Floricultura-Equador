window.onload = function() {
    var contador=0;
    var textoAtendimento = document.querySelector('.textoAtendimento');
    var h1 = document.querySelector('.cabecalho h1')
    var listaMenuTexto =  document.querySelectorAll('.lista-menu a');
    var botaoLogin = document.querySelector('.botaoLogin');
    var botaoCadastro = document.querySelector('.botaoCadastro');
    var descricaoProdutoDestaque = document.querySelector('#descricaoProdutoDestaque');
    var textoDisponivel = document.querySelector('#textoDisponivel');
    var secao_promocao = document.querySelector('.secao-promocao')
    var promocao_menu = document.querySelector('.promocao-menu p')
    var card = document.querySelectorAll('.card');
    var card_title = document.querySelectorAll('.card-title');
    var card_preco = document.querySelectorAll('.card-preco');
    var card_descricao = document.querySelectorAll('.card-descricao');
    var card_botoes = document.querySelectorAll('.card-botoes');
    var lista_promocao_menu = document.querySelectorAll('.lista-promocao-menu a');
    var secao_todosProdutos = document.querySelector('.secao-todosProdutos p');

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
        descricaoProdutoDestaque.style.fontSize = fontSize + '%';
        secao_promocao.style.height = (fontSize*6) + 'px';
        promocao_menu.style.fontSize = fontSize + '%';
        card.forEach(e=> {
            e.style.width = (fontSize*2) + 'px';
            e.style.height = (fontSize*5.5) + 'px';
        })
        card_title.forEach(e=> {
            e.style.fontSize = fontSize + '%';
        })
        card_descricao.forEach(e=> {
            e.style.fontSize = fontSize + '%';
            e.style.marginTop = 30 + 'px';
        })
        card_preco.forEach(e=> {
            e.style.fontSize = fontSize + '%';
            e.style.marginTop = 20 + 'px';
        })
        card_botoes.forEach(e=> {
            e.style.marginTop = 75 + 'px';
        })
        lista_promocao_menu.forEach(e=> {
            e.style.fontSize = fontSize + '%';
        })
        secao_todosProdutos = fontSize + '%';

       
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
        descricaoProdutoDestaque.style.fontSize = fontSize + '%';
        textoDisponivel.style.fontSize = fontSize + '%';
        card.forEach(e=> {
            e.style.width = (fontSize*2) + 'px';
            e.style.height = (fontSize*5.5) + 'px';
        })
        card_title.forEach(e=> {
            e.style.fontSize = fontSize + '%';
        })
        card_descricao.forEach(e=> {
            e.style.fontSize = fontSize + '%';
        })
        card_preco.forEach(e=> {
            e.style.fontSize = fontSize + '%';
        })
        card_botoes.forEach(e=> {
            e.style.marginTop = 40 + 'px';
        })
        lista_promocao_menu.forEach(e=> {
            e.style.fontSize = fontSize + '%';
        })
        secao_todosProdutos = fontSize + '%';

    });
}