var fileContent = bulmaRss.getFileContent();

//on change de page si le fichier correspond à un format pris en charge
if(bulmaRss.getFormat(fileContent) !== null)
{
  bulmaRss.computeFile(fileContent);
}