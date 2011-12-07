var bulmaRss = {
  FORMAT_RSS: 'RSS',
  RSS_DESCRIPTORS_015: [
    {from:    1, to:    9, label: "N° FINESS"},
    {from:   10, to:   12, label: "Version RSS"},
    {from:   13, to:   32, label: "N° RSS"},
    {from:   33, to:   52, label: "N° de séjour"},
    {from:   53, to:   62, label: "N° RUM"},
    {from:   63, to:   70, label: "Date naissance", type: 'date'},
    {from:   71, to:   71, label: "Sexe", type: 'sexe'},
    {from:   72, to:   75, label: "Unité médicale"},
    {from:   76, to:   77, label: "Type d'autorisation lit"},
    {from:   78, to:   85, label: "Date entrée UM", type: 'date'},
    {from:   86, to:   86, label: "Mode entrée UM"},
    {from:   87, to:   87, label: "Provenance"},
    {from:   88, to:   95, label: "Date sortie UM", type: 'date'},
    {from:   96, to:   96, label: "Mode sortie UM"},
    {from:   97, to:   97, label: "Destination"},
    {from:   98, to:  102, label: "Code postal"},
    {from:  103, to:  106, label: "Poids nouveau né"},
    {from:  107, to:  108, label: "Age gestationnel"},
    {from:  109, to:  110, label: "Nombre de séances"},
    {from:  111, to:  112, label: "Nombre de diagnostics associés"},
    {from:  113, to:  114, label: "Nombre de données documentaires"},
    {from:  115, to:  117, label: "Nombre de zone d'acte"},
    {from:  118, to:  125, label: "Diagnostic Principal"},
    {from:  126, to:  133, label: "Diagnostic Relié"},
    {from:  134, to:  136, label: "IGS2"},
    {from:  137, to:  137, label: "Confirmation du codage"},
    {from:  138, to:  138, label: "Type de machine radiothérapie"},
    {from:  139, to:  139, label: "Type de dosimétrie"},
    {from:  140, to:  140, label: "Nombre de faisceaux"},
    {from:  141, to:  150, label: "Zone réservée"}
  ],
  RSS_DESCRIPTORS_016: [
    {from:    1, to:    9, label: "N° FINESS"},
    {from:   10, to:   12, label: "Version RSS"},
    {from:   13, to:   32, label: "N° RSS"},
    {from:   33, to:   52, label: "N° de séjour"},
    {from:   53, to:   62, label: "N° RUM"},
    {from:   63, to:   70, label: "Date naissance", type: 'date'},
    {from:   71, to:   71, label: "Sexe", type: 'sexe'},
    {from:   72, to:   75, label: "Unité médicale"},
    {from:   76, to:   77, label: "Type d'autorisation lit"},
    {from:   78, to:   85, label: "Date entrée UM", type: 'date'},
    {from:   86, to:   86, label: "Mode entrée UM"},
    {from:   87, to:   87, label: "Provenance"},
    {from:   88, to:   95, label: "Date sortie UM", type: 'date'},
    {from:   96, to:   96, label: "Mode sortie UM"},
    {from:   97, to:   97, label: "Destination"},
    {from:   98, to:  102, label: "Code postal"}
  ]
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
bulmaRss.getFileFormat = function(content)
{
  if(content.match(/^.{9}0(15)|(16)/) !== null)
  {
    return this.FORMAT_RSS;
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

  switch(this.getFileFormat(content))
  {
    case this.FORMAT_RSS:
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
  var RSSJson = this.RSSJson(content);
  var html = '';

  html += '<table class="segment inline">';
  html +=   '<tr class="titre"><td>Champs</td><tr>';
  $.each(bulmaRss.RSS_DESCRIPTORS_015, function(i, descriptor){
    var className = 'desc';
    if(descriptor.significant == undefined)
    {
      className += ' insignifiant';
    }
    html += '<tr class="'+className+'"><td>'+descriptor.label+'</td><tr>';
  });
  html += '<table>';

  $.each(RSSJson.RSSs, function(RSSIndex, RSS){
    html += '<table class="segment inline">';
    html +=   '<tr class="titre"><td>RSS '+(RSSIndex + 1)+'</td><tr>';

    $.each(RSS.champs, function(champIndex, champ){
      var className = '';

      if(champ != '')
      {
        className += 'value ';
      }

      if(bulmaRss.RSS_DESCRIPTORS_015[champIndex].significant == undefined)
      {
        className += 'insignifiant ';
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
  var class = this.htmlClassByLevel[level];
  class += (this.isSignificantField(key)) ? " significant" : "";
  class += (value == '') ? " empty" : "";
  inlineStyle = (value == '') ? 'style="display: none;"' : '';
  
  return '<tr ' + inlineStyle + '  class="' + class + '"><td class="key">' + key + '</td><td class="value">' + value + '</td><td class="desc">' + description + '</td></tr>';
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
  var RSSJson = { champs: []};
  var value;

  var version = RSSText.substr(9, 3);

  if(version == '015')
  {
    $.each(bulmaRss.RSS_DESCRIPTORS_015, function(i, descriptor){
      value = RSSText.substring(descriptor.from - 1, descriptor.to);
      RSSJson.champs.push(bulmaRss.format(value, descriptor));
    });
  }
  else
  {
    $.each(bulmaRss.RSS_DESCRIPTORS_016, function(i, descriptor){
      value = RSSText.substring(descriptor.from - 1, descriptor.to);
      RSSJson.champs.push(bulmaRss.format(value, descriptor));
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
  if(value === '')
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
