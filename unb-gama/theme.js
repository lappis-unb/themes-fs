$(document).ready(function () {

  $('#profile-header-actions').click(function() {
    $('#profile-div').toggle();
    $('#content').css('z-index', -1);
    $('#profile-div').css('z-index', 100);
    $('.highlights-container').css('z-index', 0);
  });

  jQuery("#top-search").prependTo("#top-search-wrapper");

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

  var pt_flag_img = '../designs/themes/default/images/cc.png';
  var body = $('body').ready(function(){

    if($('.article-translations').length != 0) {
      $('.article-body').addClass('has-flags');
      $('.publishing-info').addClass('has-flags');
      $('#bt_addThis').addClass('with-flags');
    }
    else {
      $('#bt_addThis').addClass('without-flags');
    }

    if($('#article_end_date_3i').length != 0) {
      $('.text-editor-sidebar').addClass('is-event');
    }
    else {
      $('.text-editor-sidebar').addClass('is-not-event');
    }

    var link = $('.article-translations-menu');
    var data = link.attr('onmouseover');
    var regExp = /\[.*\]/;
    var new_data = regExp.exec(data);
    var div = link.parent();

    if (new_data != null) {
      var trad = $.parseJSON(new_data[0]);
      if (link != undefined) {
        $.each(trad, function(index, value) {
          if (value.English != undefined) {
            div.append(' <a  div class="flags" href="'+value.English.href+'"><img src="../designs/themes/unb-gama/images/flag_en.png"></a>');
          }else if(value.Portugu\u00eas != undefined) {
            div.append(' <a div class="flags" href="'+value.Portugu\u00eas.href+'"><img src="../designs/themes/unb-gama/images/flag_pt.png" /> </a>');
          }else if(value.Espa\u00f1ol != undefined) {
            div.append(' <a div class="flags" href="'+value.Espa\u00f1ol.href+'"><img src="../designs/themes/unb-gama/images/flag_es.png" /></a>');
          }
        });
        link.replaceWith('<span class="article-translations-menu simplemenu-trigger up">'+link.text()+'</span>');
      }
    }
  });
});
