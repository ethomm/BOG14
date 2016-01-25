<!DOCTYPE html>
<html lang="no">
  <head>
  <?php 
  //Includes the header elements like the css files and other static elements.
  //This leaves the only element, the title avalible for change per page
  include '../staticElements/head.php' 
  ?>
    <title>Bacheloroppgaven 2016 - prototyper</title>
  </head>
  <body>
  <header>
  	<div class="container headertext">
  	<?php 
  	//The main title on the page can also be subject to chang according to the page its on...
  	?>
  		<h1><i class="fa fa-file-code-o">&nbsp;</i>Bacheloroppgaven 2016<small>&nbsp; prototyper</small></h1>
  	</div>
  	
  	<?php 
  	//Includes the navigation to the page
  	include '../staticElements/navigation.php' ?>
</header>
<main>
<div class="container">
  <section>
  <div class="row">
    <article class="col-sm-8">
      <h2>Colladaloader Three.js</h2>
      <p>Denne prototypen tar for seg lasting av .dae (collada) inn på nettsiden via en parser. I denne prototypen har vi brukt collada loader som er hentet fra "dev" branchen i <a href="https://github.com/mrdoob/three.js/tree/dev/src/loaders" target="_blank"><i class="fa fa-external-link-square">&nbsp;</i>Github prosjektet.</a> I prototypen har vi tatt utganspunkt i tre modeller, for å se på lastetiden ved bytte av modell i realtime.
    </article>
    <aside class="col-sm-4">
    <i class="fa fa-file-code-o">&nbsp;</i><a href="../vedlegg/forprosjektraport.pdf" target="_blank">Gå til prototype </a>
    </aside>
  </div>
  </section>
</div>
</main>
<?php include "../staticElements/footer.php" //includes the footer?>
<?php include "../staticElements/scripts.php" //includes scripts as jquery and bootstrap?>
  </body>
</html>