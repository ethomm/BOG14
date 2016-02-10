<!DOCTYPE html>
<html lang="no">
  <head>
  <?php 
  //Includes the header elements like the css files and other static elements.
  //This leaves the only element, the title avalible for change per page
  include '../staticElements/head.php' 
  ?>
    <title>Bacheloroppgaven 2016 - examples</title>
  </head>
  <?php include_once("../staticElements/analyticstracking.php") ?>
  <body>
  <header>
  	<div class="container headertext">
  	<?php 
  	//The main title on the page can also be subject to chang according to the page its on...
  	?>
  		<h1><i class="fa fa-user">&nbsp;</i>Bacheloroppgaven 2016<small>&nbsp; Eirik Thommessen</small></h1>
  	</div>
  	
  	<?php 
  	//Includes the navigation to the page
  	include '../staticElements/navigation.php' ?>
</header>
<main>
<div class="container">
  <section class=" col-md-6 col-md-offset-3">
  <div class="row">
  <p>Denne grafen viser aktivitet som er registert som koding igjennom IDEer eller texteditorer som Sublime. Det vil si at den fysisk registrer tid som brukes på å skrive i editoren. Lesing og Skriving i Google driv blir derfor ikke registrert
	<img src="https://wakatime.com/@eirikthommessen/f3a3e640-1a14-40f1-bbe7-7f5c2c8a8096.png" />
  </div>
  </section>
</div>
</main>
<?php include "../staticElements/footer.php" //includes the footer?>
<?php include "../staticElements/scripts.php" //includes scripts as jquery and bootstrap?>
  </body>
</html>