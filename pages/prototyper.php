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
  <?php include_once("../staticElements/analyticstracking.php") ?>
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
      <h2>Web Service</h2>
      <p>Uheldigvis for de som ikke er innvigde i prosjektet kan vi ikke gi full tilgang til denne prototypen</p>
    </article>
    <aside class="col-sm-4">
    <i class="fa fa-file-code-o">&nbsp;</i><a href="https://nameless-fortress-73855.herokuapp.com" target="_blank">WebService for innhold</a><br />
    </aside>
  </div>
   <div class="row">
    <article class="col-sm-8">
      <h2>Partikelgenerator</h2>
      <p>Denne prototypen tar for seg animasjon av bobler i vann, ved bruk av en partikkel generator</p>
    </article>
    <aside class="col-sm-4">
    <i class="fa fa-file-code-o">&nbsp;</i><a href="http://frigg.hiof.no/bo16-g14/pages/bubles/index.html" target="_blank">Vann koker, partikel generator</a><br />
    </aside>
  </div>
  <div class="row">
    <article class="col-sm-8">
      <h2>Raycasting</h2>
      <p>Disse prototypene tar for seg raycasting. Målet med prototypene er å finne en optimal måte å interaktere med objektene i scenen</p>
      <p>Prototypene er basert på primitiver og en colladamodel</p>
    </article>
    <aside class="col-sm-4">
    <i class="fa fa-file-code-o">&nbsp;</i><a href="http://frigg.hiof.no/bo16-g14/pages/raycasting/index.html" target="_blank">Raycasting med primitiver </a><br />
    <i class="fa fa-file-code-o">&nbsp;</i><a href="http://frigg.hiof.no/bo16-g14/pages/opnelukke/index.html" target="_blank">Raycasting med reaktormodel </a>
    </aside>
  </div>
  <div class="row">
    <article class="col-sm-8">
      <h2>Collada vs Json</h2>
      <p>Denne siden kjører en test som ser om det er en fordel å konvertere filer om fra Collada(.dae) til JSON(.json). Vi har i denne testen tatt utgangspunkt i samme model og kjører den igjennom Three.js sin rendrer for å se hvor lang tid det tar i de forskjellige formatene.</p>
      <p>Hovedpoenget med testen er å gjøre vårt prosjekt raskest mulig client side.</p>
    </article>
    <aside class="col-sm-4">
    <i class="fa fa-file-code-o">&nbsp;</i><a href="http://frigg.hiof.no/bo16-g14/pages/speedtester/index.html" target="_blank">Gå til testsiden </a>
    </aside>
  </div>
  <div class="row">
    <article class="col-sm-8">
      <h2>Colladaloader Three.js</h2>
      <p>Denne prototypen tar for seg lasting av .dae (collada) inn på nettsiden via en parser. I denne prototypen har vi brukt collada loader som er hentet fra "dev" branchen i <a href="https://github.com/mrdoob/three.js/tree/dev/src/loaders" target="_blank"><i class="fa fa-external-link-square">&nbsp;</i>Github prosjektet.</a> I prototypen har vi tatt utganspunkt i tre modeller, for å se på lastetiden ved bytte av modell i realtime.
    </article>
    <aside class="col-sm-4">
    <i class="fa fa-file-code-o">&nbsp;</i><a href="http://frigg.hiof.no/bo16-g14/pages/simple-3d-interaction/index.html" target="_blank">Gå til prototype </a>
    </aside>
  </div>
  </section>
</div>
</main>
<?php include "../staticElements/footer.php" //includes the footer?>
<?php include "../staticElements/scripts.php" //includes scripts as jquery and bootstrap?>
  </body>
</html>