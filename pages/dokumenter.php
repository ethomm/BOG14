<!DOCTYPE html>
<html lang="no">
  <head>
  <?php 
  //Includes the header elements like the css files and other static elements.
  //This leaves the only element, the title avalible for change per page
  include '../staticElements/head.php' 
  ?>
    <title>Bacheloroppgaven 2016 - dokumenter</title>
  </head>
  <body>
  <header>
  	<div class="container headertext">
  	<?php 
  	//The main title on the page can also be subject to chang according to the page its on...
  	?>
  		<h1><i class="fa fa-folder-open">&nbsp;</i>Bacheloroppgaven 2016<small>&nbsp; dokumenter</small></h1>
  	</div>
  	
  	<?php 
  	//Includes the navigation to the page
  	include '../staticElements/navigation.php' ?>
</header>
<main>
<div class="container">
  <section >
   <div class="row">
    <article class="col-sm-8">
      <h2>Rapport COLLADA vs JSON</h2>
      <p>Denne rapporten ser på konverteringstiden til Three.js for formatene COLLADA og JSON</p>

      <p>Three.js gengir på skjermen sitt eget format. Det vil si at alle formater som leveres til THree.js blir konvertert til Three.js sitt eget format.
      Vi ser derfor i denne rapporten på hvilket format som konverteres raskest av COLLADA og JSON for å se om det er hensiktsmessige å konverte våre COLLADA modeller om til 
      JSON i arbeidsflyten.</p>
    </article>
    <aside class="col-sm-4">
    <i class="fa fa-file-pdf-o">&nbsp;</i><a href="../vedlegg/rapportcolladavsjson.pdf" target="_blank">Rapport Collada vs Json</a>
    </aside>
  </div>
   <div class="row">
    <article class="col-sm-8">
      <h2>Rapport om rammeverk</h2>
      <p>Denne rapporten tar for seg forskjellige rammeverk og løsninger for publisering av 3D modeller på nett igjennom WebGL. Noen av disse er nettbaserte løsninger, andre er enkeltstående rammeverk.</p>

      <p>Målet med denne rapporten er å finne frem til hvilken tjeneste eller rammeverk som skal brukes i bacheloroppgaven.</p>
    </article>
    <aside class="col-sm-4">
    <i class="fa fa-file-pdf-o">&nbsp;</i><a href="../vedlegg/rammeverkforwebgl.pdf" target="_blank">Last ned rapporten om WebGL rammeverk</a>
    </aside>
  </div>
  <div class="row">
    <article class="col-sm-8">
      <h2>Forprosjektrapport</h2>
      <p>Denne rapporten gir en kort beskrivelse av prosjektsgrupppen, oppdraget og oppdragsgiver.</p>
      <p>Rapporten dekker også plan for gjennomføring og en risikoanalyse</p>
    </article>
    <aside class="col-sm-4">
    <i class="fa fa-file-pdf-o">&nbsp;</i><a href="../vedlegg/forprosjektrapport.pdf" target="_blank"> Last ned forprosjektsrapporten</a>
    </aside>
  </div>
 
  </section>
</div>
</main>
<?php include "../staticElements/footer.php" //includes the footer?>
<?php include "../staticElements/scripts.php" //includes scripts as jquery and bootstrap?>
  </body>
</html>