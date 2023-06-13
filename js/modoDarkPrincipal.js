const darkMode = document.querySelector('#chk')

darkMode.addEventListener('click', () => {
    console.log(1)
    const imgIcon = document.querySelector('#modoDark')

    imgIcon.classList.toggle('fa-moon')
    imgIcon.classList.toggle('fa-sun')


    /*Modo dark do header e navegação*/
    const body = document.querySelector('body')
    const caixa_info = document.querySelector('.caixa-info')
    const cabecalho = document.querySelector('.cabecalho')
    const h1 = document.querySelector('.logo h1')
    const txtPesquisa = document.querySelector('#txtPesquisa')
    const caixaBotao = document.querySelector('.caixaBotao')
    const botaoLogin = document.querySelector('.botaoLogin')
    const botaoCadastro = document.querySelector('.botaoCadastro')
    const navegacao = document.querySelector('.navegacao')  
    const lista_menuA = document.querySelectorAll('.lista-menu a')
    const linhaBanner = document.querySelector('.linha-banner')
    const nomeBanner = document.querySelector('.sessao-banner div').className;
    
    if(nomeBanner=='bannerIngles') {
        const bannerImgIngles = document.querySelector('.bannerIngles');
        bannerImgIngles.classList.toggle("dark");
    } else if(nomeBanner=='banner-img') {
        const bannerImg = document.querySelector('.banner-img');
        bannerImg.classList.toggle("dark");
        
    }
    


    lista_menuA.forEach(e=> {
        e.classList.toggle('dark')
    })
    body.classList.toggle('dark')
    caixa_info.classList.toggle('dark')
    cabecalho.classList.toggle('dark')
    h1.classList.toggle('dark')
    txtPesquisa.classList.toggle('dark')
    caixaBotao.classList.toggle('dark')
    botaoLogin.classList.toggle('dark')
    botaoCadastro.classList.toggle('dark')
    navegacao.classList.toggle('dark')
    linhaBanner.classList.toggle('dark')

    /*Modo dark da página principal*/
    const destaqueBotao_comprar = document.querySelector('.destaqueBotao-comprar')
    const destaqueBotao_carrinho = document.querySelector('.destaqueBotao-carrinho')
    const secao_promocao = document.querySelector('.secao-promocao')
    const promocao_menu = document.querySelector('.promocao-menu')
    const texto_promocao = document.querySelector('.promocao-menu p')
    const textoMenu_promocao = document.querySelectorAll('.lista-promocao-menu a')
    const card = document.querySelectorAll('.card')
    const card_botaoCarrinho = document.querySelectorAll('.card-botaoCarrinho')
    const card_botaoCarrinhoImg = document.querySelectorAll('.card-botaoCarrinho img')
    const card_botaoComprar = document.querySelectorAll('.card-botaoComprar')
    const secao_todosProdutos = document.querySelector('.secao-todosProdutos p')
    const linhaTexto = document.querySelector('#linhaTexto')

    destaqueBotao_comprar.classList.toggle('dark')
    destaqueBotao_carrinho.classList.toggle('dark')
    secao_promocao.classList.toggle('dark')
    promocao_menu.classList.toggle('dark')
    texto_promocao.classList.toggle('dark')
    textoMenu_promocao.forEach(e => {
        e.classList.toggle('dark')
    })
    card.forEach(e => {
        e.classList.toggle('dark')
    })
    card_botaoCarrinho.forEach(e => {
        e.classList.toggle('dark')
    })
    card_botaoCarrinhoImg.forEach(e => {
        e.classList.toggle('dark')
    })
    card_botaoComprar.forEach(e => {
        e.classList.toggle('dark')
    })
    secao_todosProdutos.classList.toggle('dark')
    linhaTexto.classList.toggle('dark')

    /*Modo dark do rodapé*/
    const rodape = document.querySelector('.rodape')
    const telefone = document.querySelector('.iconeTelefone p')
    const whats = document.querySelector('.iconeWhats p')
    const instagram = document.querySelector('.iconeInstagram p')

    rodape.classList.toggle('dark')
    telefone.classList.toggle('dark')
    whats.classList.toggle('dark')
    instagram.classList.toggle('dark')

    /*Modo dark modal cadastro*/
    const modal_content = document.querySelector('.modal-content')
    const modal_body = document.querySelector('.modal-body p')
    const facaLogin = document.querySelector('#facaLogin')
    const enviarCadastro = document.querySelector('#inputEnviarCadastro')

    modal_content.classList.toggle('dark')
    modal_body.classList.toggle('dark')
    facaLogin.classList.toggle('dark')
    enviarCadastro.classList.toggle('dark')
    
     /*Modo dark modal login*/
     const caixaGeral = document.querySelector('.modal-caixaGeral')
     const caixaLogin = document.querySelector('.modal-caixaLogin')
     const enviarLogin = document.querySelector('#inputEnviarLogin')
 
     enviarLogin.classList.toggle('dark')
     caixaLogin.classList.toggle('dark')
     caixaGeral.classList.toggle('dark')

})