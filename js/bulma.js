var bulmaRss = {
  FORMAT_RSS: 'RSS',
  FORMAT_RSS_114: 'RSS114',
  FORMAT_RSS_015: 'RSS015',
  FORMAT_RSS_016: 'RSS016',
  FORMAT_RSS_115: 'RSS115',
  FORMAT_RSS_116: 'RSS116',
  RSS_FIELDS: {
    'groupage_classification': {label: "Classification Groupage"},
    'groupage_cmd'           : {label: "CMD"},
    'groupage_ghm'           : {label: "GHM"},
    'groupage_code_retour'   : {label: "Code retour groupage"},
    'version_rss'            : {label: "Version RSS"},
    'num_rss'                : {label: "N° RSS", significant: true},
    'num_sej'                : {label: "N° de séjour", significant: true},
    'num_rum'                : {label: "N° RUM"},
    'date_naissance'         : {label: "Date naissance", type: 'date'},
    'sexe'                   : {label: "Sexe", type: 'sexe'},
    'um'                     : {label: "Unité médicale", significant: true},
    'type_autorisation_lit'  : {label: "Type d'autorisation lit"},
    'date_entree_um'         : {label: "Date entrée UM", type: 'date', significant: true},
    'mode_entree_um'         : {label: "Mode entrée UM"},
    'provenance'             : {label: "Provenance"},
    'date_sortie_um'         : {label: "Date sortie UM", type: 'date', significant: true},
    'mode_sortie_um'         : {label: "Mode sortie UM"},
    'destination'            : {label: "Destination"},
    'code_postal'            : {label: "Code postal"},
    'poids_nouveau_ne'       : {label: "Poids nouveau né"},
    'age_gestationnel'       : {label: "Age gestationnel"},
    'date_dernieres_regles'  : {label: "Date dernières règles", type: 'date'},
    'nb_seance'              : {label: "Nombre de séances"},
    'nb_das'                 : {label: "Nombre de diagnostics associés"},
    'nb_donnees_doc'         : {label: "Nombre de données documentaires"},
    'nb_zone_acte'           : {label: "Nombre de zone d'acte"},
    'diag_dp'                : {label: "Diagnostic Principal", significant: true},
    'diag_dr'                : {label: "Diagnostic Relié", significant: true},
    'igs2'                   : {label: "IGS2"},
    'confirmation_codage'    : {label: "Confirmation du codage"},
    'type_machine_radio'     : {label: "Type de machine radiothérapie"},
    'type_dosimetrie'        : {label: "Type de dosimétrie"},
    'nb_faisceaux'           : {label: "Nombre de faisceaux"},
    'zone_reservee'          : {label: "Zone réservée"}
  },
  RSS_DESCRIPTORS: {
    RSS114: {
      'finess'                : {from:    1, to:    9},
      'version_rss'           : {from:   10, to:   12},
      'num_rss'               : {from:   28, to:   47},
      'num_sej'               : {from:   48, to:   67},
      'num_rum'               : {from:   68, to:   77},
      'date_naissance'        : {from:   78, to:   85},
      'sexe'                  : {from:   86, to:   86},
      'um'                    : {from:   87, to:   90},
      'type_autorisation_lit' : {from:   91, to:   92},
      'date_entree_um'        : {from:   93, to:  100},
      'mode_entree_um'        : {from:  101, to:  101},
      'provenance'            : {from:  102, to:  102},
      'date_sortie_um'        : {from:  103, to:  110},
      'mode_sortie_um'        : {from:  111, to:  111},
      'destination'           : {from:  112, to:  112},
      'code_postal'           : {from:  113, to:  117},
      'poids_nouveau_ne'      : {from:  118, to:  121},
      'age_gestationnel'      : {from:  122, to:  123},
      'nb_seance'             : {from:  124, to:  125},
      'nb_das'                : {from:  126, to:  127},
      'nb_donnees_doc'        : {from:  128, to:  129},
      'nb_zone_acte'          : {from:  130, to:  132},
      'diag_dp'               : {from:  133, to:  140},
      'diag_dr'               : {from:  141, to:  148},
      'igs2'                  : {from:  149, to:  151},
      'confirmation_codage'   : {from:  152, to:  152},
      'type_machine_radio'    : {from:  153, to:  153},
      'type_dosimetrie'       : {from:  154, to:  154},
      'zone_reservee'         : {from:  155, to:  165}
    },
    RSS015: {
      'finess'                : {from:    1, to:    9},
      'version_rss'           : {from:   10, to:   12},
      'num_rss'               : {from:   13, to:   32},
      'num_sej'               : {from:   33, to:   52},
      'num_rum'               : {from:   53, to:   62},
      'date_naissance'        : {from:   63, to:   70},
      'sexe'                  : {from:   71, to:   71},
      'um'                    : {from:   72, to:   75},
      'type_autorisation_lit' : {from:   76, to:   77},
      'date_entree_um'        : {from:   78, to:   85},
      'mode_entree_um'        : {from:   86, to:   86},
      'provenance'            : {from:   87, to:   87},
      'date_sortie_um'        : {from:   88, to:   95},
      'mode_sortie_um'        : {from:   96, to:   96},
      'destination'           : {from:   97, to:   97},
      'code_postal'           : {from:   98, to:  102},
      'poids_nouveau_ne'      : {from:  103, to:  106},
      'age_gestationnel'      : {from:  107, to:  108},
      'nb_seance'             : {from:  109, to:  110},
      'nb_das'                : {from:  111, to:  112},
      'nb_donnees_doc'        : {from:  113, to:  114},
      'nb_zone_acte'          : {from:  115, to:  117},
      'diag_dp'               : {from:  118, to:  125},
      'diag_dr'               : {from:  126, to:  133},
      'igs2'                  : {from:  134, to:  136},
      'confirmation_codage'   : {from:  137, to:  137},
      'type_machine_radio'    : {from:  138, to:  138},
      'type_dosimetrie'       : {from:  139, to:  139},
      'nb_faisceaux'          : {from:  140, to:  140},
      'zone_reservee'         : {from:  141, to:  150}
    },
    RSS016: {
      'finess'                : {from:    1, to:    9},
      'version_rss'           : {from:   10, to:   12},
      'num_rss'               : {from:   13, to:   32},
      'num_sej'               : {from:   33, to:   52},
      'num_rum'               : {from:   53, to:   62},
      'date_naissance'        : {from:   63, to:   70},
      'sexe'                  : {from:   71, to:   71},
      'um'                    : {from:   72, to:   75},
      'type_autorisation_lit' : {from:   76, to:   77},
      'date_entree_um'        : {from:   78, to:   85},
      'mode_entree_um'        : {from:   86, to:   86},
      'provenance'            : {from:   87, to:   87},
      'date_sortie_um'        : {from:   88, to:   95},
      'mode_sortie_um'        : {from:   96, to:   96},
      'destination'           : {from:   97, to:   97},
      'code_postal'           : {from:   98, to:  102},
      'poids_nouveau_ne'      : {from:  103, to:  106},
      'age_gestationnel'      : {from:  107, to:  108},
      'date_dernieres_regles' : {from:  109, to:  116},
      'nb_seance'             : {from:  117, to:  118},
      'nb_das'                : {from:  119, to:  120},
      'nb_donnees_doc'        : {from:  121, to:  122},
      'nb_zone_acte'          : {from:  123, to:  125},
      'diag_dp'               : {from:  126, to:  133},
      'diag_dr'               : {from:  134, to:  141},
      'igs2'                  : {from:  142, to:  144},
      'confirmation_codage'   : {from:  145, to:  145},
      'type_machine_radio'    : {from:  146, to:  146},
      'type_dosimetrie'       : {from:  147, to:  147},
      'nb_faisceaux'          : {from:  148, to:  148},
      'zone_reservee'         : {from:  149, to:  150}
    },
    RSS115: {
      'groupage_classification' : {from:    1, to:    2},
      'groupage_ghm'            : {from:    3, to:    4},
      'groupage_cmd'            : {from:    5, to:    8},
      'version_rss'             : {from:   10, to:   12},
      'groupage_code_retour'    : {from:   13, to:   15},
      'finess'                  : {from:   16, to:   24},
      'num_rss'                 : {from:   28, to:   47},
      'num_sej'                 : {from:   48, to:   67},
      'num_rum'                 : {from:   68, to:   77},
      'date_naissance'          : {from:   78, to:   85},
      'sexe'                    : {from:   86, to:   86},
      'um'                      : {from:   87, to:   90},
      'type_autorisation_lit'   : {from:   91, to:   92},
      'date_entree_um'          : {from:   93, to:  100},
      'mode_entree_um'          : {from:  101, to:  101},
      'provenance'              : {from:  102, to:  102},
      'date_sortie_um'          : {from:  103, to:  110},
      'mode_sortie_um'          : {from:  111, to:  111},
      'destination'             : {from:  112, to:  112},
      'code_postal'             : {from:  113, to:  117},
      'poids_nouveau_ne'        : {from:  118, to:  121},
      'age_gestationnel'        : {from:  122, to:  123},
      'nb_seance'               : {from:  124, to:  125},
      'nb_das'                  : {from:  126, to:  127},
      'nb_donnees_doc'          : {from:  128, to:  129},
      'nb_zone_acte'            : {from:  130, to:  132},
      'diag_dp'                 : {from:  133, to:  140},
      'diag_dr'                 : {from:  141, to:  148},
      'igs2'                    : {from:  149, to:  151},
      'confirmation_codage'     : {from:  152, to:  152},
      'type_machine_radio'      : {from:  153, to:  153},
      'type_dosimetrie'         : {from:  154, to:  154},
      'nb_faisceaux'            : {from:  155, to:  155},
      'zone_reservee'           : {from:  156, to:  165}
    },
    RSS116: {
      'groupage_classification' : {from:    1, to:    2},
      'groupage_cmd'            : {from:    3, to:    4},
      'groupage_ghm'            : {from:    5, to:    8},
      'version_rss'             : {from:   10, to:   12},
      'groupage_code_retour'    : {from:   13, to:   15},
      'finess'                  : {from:   16, to:   24},
      'num_rss'                 : {from:   28, to:   47},
      'num_sej'                 : {from:   48, to:   67},
      'num_rum'                 : {from:   68, to:   77},
      'date_naissance'          : {from:   78, to:   85},
      'sexe'                    : {from:   86, to:   86},
      'um'                      : {from:   87, to:   90},
      'type_autorisation_lit'   : {from:   91, to:   92},
      'date_entree_um'          : {from:   93, to:  100},
      'mode_entree_um'          : {from:  101, to:  101},
      'provenance'              : {from:  102, to:  102},
      'date_sortie_um'          : {from:  103, to:  110},
      'mode_sortie_um'          : {from:  111, to:  111},
      'destination'             : {from:  112, to:  112},
      'code_postal'             : {from:  113, to:  117},
      'poids_nouveau_ne'        : {from:  118, to:  121},
      'age_gestationnel'        : {from:  122, to:  123},
      'date_dernieres_regles'   : {from:  124, to:  131},
      'nb_seance'               : {from:  132, to:  133},
      'nb_das'                  : {from:  134, to:  135},
      'nb_donnees_doc'          : {from:  136, to:  137},
      'nb_zone_acte'            : {from:  138, to:  140},
      'diag_dp'                 : {from:  141, to:  148},
      'diag_dr'                 : {from:  149, to:  156},
      'igs2'                    : {from:  157, to:  159},
      'confirmation_codage'     : {from:  160, to:  160},
      'type_machine_radio'      : {from:  161, to:  161},
      'type_dosimetrie'         : {from:  162, to:  162},
      'nb_faisceaux'            : {from:  163, to:  163},
      'zone_reservee'           : {from:  164, to:  165}
    }
  }
};

/**
 * @returns string
 */
bulmaRss.getFileContent = function()
{
  return $('body > pre').text();
}

/**
 * Détermine le format d'un fichier
 *
 * @param message
 * @returns string|null le type du message ou null si il ne correspond à rien
 */
bulmaRss.getFormat = function(content)
{
  //rss non groupés
  if(content.match(/^.{9}015/) !== null)
  {
    return this.FORMAT_RSS_015;
  }
  if(content.match(/^.{9}016/) !== null)
  {
    return this.FORMAT_RSS_016;
  }

  //rss groupés
  if(content.match(/^.{9}114/) !== null)
  {
    return this.FORMAT_RSS_114;
  }
  if(content.match(/^.{9}115/) !== null)
  {
    return this.FORMAT_RSS_115;
  }
  if(content.match(/^.{9}116/) !== null)
  {
    return this.FORMAT_RSS_116;
  }

  return null;
}

/**
 *
 * @param content
 */
bulmaRss.computeFile = function(content)
{
  var fileAsHtml = content;

  switch(this.getFormat(content))
  {
    case this.FORMAT_RSS_015:
    case this.FORMAT_RSS_016:
    case this.FORMAT_RSS_115:
    case this.FORMAT_RSS_116:
    case this.FORMAT_RSS_114:
     fileAsHtml = this.RSSHtml(content);
     break;
  }
  
  this.setLayout(fileAsHtml);
}

/**
 * @param content
 */
bulmaRss.RSSHtml = function(content)
{
  //traduction du contenu du message en json
  var RSSJson = this.RSSJson(content);

  //traduction en hmtml
  var html = '';
  html += '<table class="segment inline">';
  html +=   '<tr class="titre"><td>Champs</td><tr>';

  //affichage de champs header
  $.each(bulmaRss.RSS_FIELDS, function(fieldIndex, descriptor){
    var className = 'desc';
    if(descriptor.significant == undefined)
    {
      className += ' insignifiant';
    }
    html += '<tr class="'+className+'"><td>'+descriptor.label+'</td><tr>';
  });
  html += '<table>';

  //affichage de chaque rss
  $.each(RSSJson.RSSs, function(RSSIndex, RSS){
    html += '<table class="segment inline">';
    html +=   '<tr class="titre"><td>RSS '+(RSSIndex + 1)+'</td><tr>';

    $.each(bulmaRss.RSS_FIELDS, function(fieldIndex, descriptor)
    {
      var className = 'desc';
      if(descriptor.significant == undefined)
      {
        className += ' insignifiant';
      }

      var champ = (RSS.champs[fieldIndex])? RSS.champs[fieldIndex] : '';
      if(champ != '')
      {
        className += ' value ';
      }

      html +=   '<tr class="'+className+'"><td>'+champ+'</td><tr>';
    });

    html += '<table>';
  });
  html += '<div class="clear"></div>';
  return html;
}

/**
 * @param key
 * @param value
 * @param level
 */
bulmaRss.drawHmltElement = function(key, value, level)
{
  var description = (bulmaRss.hl7Descriptions[key] !== undefined) ? bulmaRss.hl7Descriptions[key] : '';
  var className = this.htmlClassByLevel[level];
  className += (this.isSignificantField(key)) ? " significant" : "";
  className += (value == '') ? " empty" : "";
  inlineStyle = (value == '') ? 'style="display: none;"' : '';
  
  return '<tr ' + inlineStyle + '  class="' + className + '"><td class="key">' + key + '</td><td class="value">' + value + '</td><td class="desc">' + description + '</td></tr>';
}

/**
 * @param fieldName
 */
bulmaRss.isSignificantField = function(fieldName)
{
  return (jQuery.inArray(fieldName, bulmaRss.hl7SignificantValues) >= 0);
}

/**
 * @param content
 */
bulmaRss.RSSJson = function(content)
{
  var RSSsJson = {};
  RSSsJson.RSSs = [];

  var RSSs = content.split("\n");

  $.each(RSSs, function(i, RSSText){
    if(RSSText != '')
    {
      RSSsJson.RSSs.push(bulmaRss.parseRSS(RSSText));
    }
  });

  return RSSsJson;
}

/**
 * @param segment
 */
bulmaRss.parseRSS = function(RSSText)
{
  var RSSJson = { champs: {}};
  var value;

  var version = this.getFormat(RSSText);

  if(bulmaRss.RSS_DESCRIPTORS[version])
  {
    $.each(bulmaRss.RSS_DESCRIPTORS[version], function(fieldIndex, descriptor){
      value = RSSText.substring(descriptor.from - 1, descriptor.to);
      RSSJson.champs[fieldIndex] = bulmaRss.format(value, bulmaRss.RSS_FIELDS[fieldIndex]);
    });
  }

  return RSSJson;
}

/**
 * @param value
 * @param descriptor
 */
bulmaRss.format = function(value, descriptor)
{
  value = value.trim();
  if(value === '' || descriptor === undefined)
  {
    return value;
  }

  switch(descriptor.type)
  {
    case 'date':
      var result;
      if(result = value.match(/^([0-9]{2})([0-9]{2})([0-9]{4})$/))
      {
        return result[1]+'/'+result[2]+'/'+result[3];
      }
      break;
    case 'sexe':
      switch(value)
      {
        case '1': return 'H';
        case '2': return 'F';
      }
      break;
    case 'entier':
      return parseInt(value);
      break;
    case 'semaine':
      var result;
      if(result = value.match(/^([0-9]{2})([0-9]{4})$/))
      {
        return result[1]+'/'+result[2];
      }
      break;
  }

  return value;
}

bulmaRss.autoWidth = function()
{
  var totalWidth = 0;
  $('table.segment').each(function() {
    totalWidth += $(this).width() + 15;
  });

  $('#content').css({'width': totalWidth+'px'});
}

/**
 * @param fileAsHtml
 */
bulmaRss.setLayout = function(fileAsHtml)
{
  chrome.extension.sendRequest({
    action: 'getLayout'
  }, function(response){
    $('html').html(response.layout);
    $('#content').html(fileAsHtml);
    $('#logo').attr('src', chrome.extension.getURL('img/48.png'));
    $('#fileName').text(window.location.pathname);
    $("#showImportantFields").change(function() {
      $('.insignifiant').each(function() {
        $(this).toggle();
        bulmaRss.autoWidth();
      });
    });

    bulmaRss.autoWidth();
  });
}
