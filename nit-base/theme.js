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

  $(document).ready(function () {
    loadBrazilBar();
  });
}) (jQuery);

