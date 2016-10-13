(function($, undefined) {
  // Async load brazil bar, so it wont slow our js script
  function loadBrazilBar() {
    var url = "http://barra.brasil.gov.br/barra.js?cor=cinza";
    var scriptElement = document.createElement("script");

    scriptElement.src = url;

    // Add script to load brazil bar into some div
    var brazilBarConteinerDiv = document.querySelector("#brazil-bar-goes-here");
    brazilBarConteinerDiv.appendChild(scriptElement);
  }


  // Profile dropdown menu events
  function profileDropDownActions() {
    $('#profile-header-actions').click(function(event) {
      $('#profile-dropdown').toggle();
      $('#profile-button').toggleClass("pressed");
      $('#content').css('z-index', -1);
      $('#profile-dropdown').css('z-index', 100);
      $('.highlights-container').css('z-index', 0);

      event.stopPropagation();

      $(document).one('click', function() {
        $('#profile-dropdown').hide();
      });
    });

    $('#profile-dropdown').click(function(event) {
      event.stopPropagation();
    });
  }

  function putSearchInputAtTop() {
    $("#top-search").prependTo("#top-search-wrapper");
  }

  // Is it realy needed ?
  function addTranslations() {
    // add new translations below!
    var translationsList = {
      en: {
        'prefix': 'english',
        'Sobre': ['About', 'sobre'],
        'Graduação': ['Graduation', 'graduacao'],
        'Pós-Graduação': ['Pos-Graduation', 'pos-graduacao'],
        'Professores': ['Professors', 'professores'],
        'Contato': ['Contact', 'contato'],
        'Página Inicial': ['Homepage', '/'],
        'Redes Sociais': ['Social Network',''],
        'Painel de Controle': ['Control Panel', new_hidden_panel],
        'Administração': ['Administration', 'admin'],
        'Todo o conteúdo e dados do Portal da UnB Gama estão disponíveis sob a licença': ['Entire', '#'],
        'Termos de Uso': ['Terms of Use', '#'],
        'Creative Commons Atribuição 3.0 Unported (CC BY 3.0)': ['umteste', '#'],
        'exceto quando especificado em contrário e nos conteúdos replicados de outras fontes.': ['outroteste', '#'],
        'Sair': ['Logout', 'account/logout'],
         // noosfero_license_pt: [noosfero_license_en]
      }
    }

    // the current language
    var language = $('html').attr('lang');

    // if the translationsList array has translations to the current language
    if (translationsList[language]) {
      var prefix = translationsList[language]['prefix'];
      var new_hidden_panel = $('.hidden-panel a').attr('href');

      $('#menu-top li a, #footer-content li a, .redesSociais strong, #license-on-footer, .user-name li a').each(function() {
        var element = $(this);
        var translated = translationsList[language][element.html().replace(/^\s*|\s*$/g,'')];

        if (translated) {
          if (translated.constructor != Array) translated = [translated];
          element.html(translated[0]);
          if (element.attr('href') && translated[1]) {
            element.attr('href', '/' + translated[1]);
          }
        }
      });
    }
  }


  $(document).ready(function () {
    profileDropDownActions();
    putSearchInputAtTop();
    addTranslations();
    loadBrazilBar();
  });
}) (jQuery);

