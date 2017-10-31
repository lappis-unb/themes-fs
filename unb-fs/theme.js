(function($, undefined) {
  // Async load brazil bar, so it wont slow our js script
  function loadBrazilBar() {
    var url = "https://barra.brasil.gov.br/barra.js?cor=cinza";
    var scriptElement = document.createElement("script");

    scriptElement.src = url;

    // Add script to load brazil bar into some div
    var brazilBarConteinerDiv = document.querySelector("#brazil-bar-goes-here");
    brazilBarConteinerDiv.appendChild(scriptElement);
  }

  function addSignupAlertMessage() {
    $("form#signup-form").prepend("<div class='signup-alert-message'> Após se cadastrar é necessário aguardar a ativação da conta pelo administrador. </div>");
  }

  // Profile dropdown menu events
  function profileDropDownActions() {
    $('.profile-menu-trigger').click(function(event) {
      $('#profile-dropdown').toggle();
      $('#profile-button').toggleClass("pressed");
      $('#content').css('z-index', -1);
      $('#profile-dropdown').css('z-index', 100);
      $('.highlights-container').css('z-index', 0);

      event.stopPropagation();

      $(document).one('click', function() {
        $('#profile-dropdown').hide();
        $('#profile-button').toggleClass("pressed");
      });
    });

    $('#profile-dropdown').click(function(event) {
      event.stopPropagation();
    });
  }

  function putSearchInputAtTop() {
    $("#top-search").prependTo("#top-search-wrapper");
  }

  function fixShowMoreButtonOnHomePage() {
    var isHomePage = $('.controller-home:first #highlighted-news').length !== 0;

    // Only run scrip on homepage
    if (!isHomePage) {
      return;
    }

    var folderLink = (function() { // get the first 5 itens between "/". EX: 1/2/3/4/5/6/7/8/... --> 1/2/3/4/5
      var href = $('.highlighted-news-item:first h2 a:first').attr('href');
      return href.split(/\//g).slice(0, 5).join("/");
    }) ();

    var showMoreLink = $('#font-see-more-button');

    // If link not found, add one
    if (showMoreLink.length === 0) {
      var button = $('<div id="see-more-button"><a href="#" id="font-see-more-button">Ver mais</a></div>');
      $('#portal-news').after(button);
      showMoreLink = $('#font-see-more-button');
    }

    showMoreLink.attr('href', folderLink);
  }

  $(document).ready(function () {
    fixShowMoreButtonOnHomePage();
    profileDropDownActions();
    putSearchInputAtTop();
    loadBrazilBar();
    addSignupAlertMessage();
  });
}) (jQuery);
