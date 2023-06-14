$(document).ready(function() {
    var currentLanguage = 'pt-br'; // Defina o idioma atual, por exemplo, 'pt-br'
  
    // Função para alternar o idioma do site
    function changeLanguage(language) {
      // Faz uma requisição AJAX para obter as traduções do arquivo JSON
      $.getJSON('traducaoProdutos.json', function(data) {
        var translations = data[language]; // Obtém as traduções para o idioma selecionado
  
        // Itera sobre cada elemento com o atributo 'data-translate'
        $('[data-translate]').each(function() {
          var translationKey = $(this).data('translate'); // Obtém a chave de tradução do elemento
          var translationText = translations[translationKey]; // Obtém o texto traduzido para a chave
  
          // Define o texto traduzido no elemento
          $(this).text(translationText);
        });
      });
    }
  
    // Chama a função para definir o idioma inicial
    changeLanguage(currentLanguage);
  
    // Evento de clique para alternar o idioma para inglês
    $('#englishButton').on('click', function() {
      currentLanguage = 'en-us'; // Define o idioma como inglês
      changeLanguage(currentLanguage); // Chama a função para atualizar as traduções
      $('#txtPesquisa').attr('placeholder', 'Find your product');
      $('.botaoCadastro').text("Register");
      $('.destaqueBotao-comprar').text('Buy now');
      $('.card-botaoComprar').text("Purchase");
      $('.botaoFinalizarCompra').text("Finalize Purchase");
      
    });
  
    // Evento de clique para alternar o idioma para português
    $('#portugueseButton').on('click', function() {
      currentLanguage = 'pt-br'; // Define o idioma como português
      changeLanguage(currentLanguage); // Chama a função para atualizar as traduções
      $('#txtPesquisa').attr('placeholder', 'Encontre seu produto');
      $('.botaoCadastro').text("Cadastre-se");
      $('.destaqueBotao-comprar').text('Comprar agora');
      $('.card-botaoComprar').text("Comprar");
      $('.botaoFinalizarCompra').text("Finalizar Compra");
    });
  });
  