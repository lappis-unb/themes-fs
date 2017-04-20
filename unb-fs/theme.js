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

  $(document).ready(function () {
    profileDropDownActions();
    putSearchInputAtTop();
    loadBrazilBar();
    addSignupAlertMessage();
  });
}) (jQuery);
