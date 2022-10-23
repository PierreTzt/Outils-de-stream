<?php
// recuperation du nom du fichier
$contenu = stripslashes(nl2br(htmlentities($_POST['textarea'])));
//Ouverture du répertoire de destination
$fichierouvert = fopen ("inclure.txt", "w+");
//Copie du fichier
if ( !fwrite($fichierouvert, $contenu)) {
  echo "Impossible d'écrire dans le fichier ($filename)";
  exit;
}
//Fermeture du fichier
fclose ($fichierouvert);
echo "Merci on as enregistrer le message <br>";
echo "$contenu";
?>