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
    const listaMenuActive = document.querySelector('.listaMenuDark')
    const lista_menuA = document.querySelectorAll('.lista-menu .listaHover')

    lista_menuA.forEach(e=> {
        e.classList.toggle('dark')
    })
    listaMenuActive.classList.toggle('dark')
    body.classList.toggle('dark')
    caixa_info.classList.toggle('dark')
    cabecalho.classList.toggle('dark')
    h1.classList.toggle('dark')
    txtPesquisa.classList.toggle('dark')
    caixaBotao.classList.toggle('dark')
    botaoLogin.classList.toggle('dark')
    botaoCadastro.classList.toggle('dark')
    navegacao.classList.toggle('dark')

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

    /*Modo dark no menu Departamento*/

    const menuDepartamento = document.querySelector('.menuDepartamento')
    const divMenuDepartamento = document.querySelector('.menuDepartamento div')
    const tituloMenuDepartamento = document.querySelector('.menuDepartamento div p')
    const listaMenu = document.querySelectorAll('.listaMenu-departamento a')

    divMenuDepartamento.classList.toggle('dark')
    menuDepartamento.classList.toggle('dark')
    tituloMenuDepartamento.classList.toggle('dark')
    listaMenu.forEach(e=> {
        e.classList.toggle('dark')
    })

    /*Modo dark produtos*/
    const titulo = document.querySelectorAll('.titulo p')
    const linhaTexto_ocasioes = document.querySelectorAll('.linhaTexto-ocasioes')

    titulo.forEach(e=> {
        e.classList.toggle('dark')
    })
    
    linhaTexto_ocasioes.forEach(e=> {
        e.classList.toggle('dark')
    })

    /*Modo dark do rodapé*/
    const rodape = document.querySelector('.rodape')
    const telefone = document.querySelector('.iconeTelefone p')
    const whats = document.querySelector('.iconeWhats p')
    const instagram = document.querySelector('.iconeInstagram p')

    rodape.classList.toggle('dark')
    telefone.classList.toggle('dark')
    whats.classList.toggle('dark')
    instagram.classList.toggle('dark')
})