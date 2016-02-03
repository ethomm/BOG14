<!DOCTYPE html>
<html lang="no">
  <head>
  <?php 
  //Includes the header elements like the css files and other static elements.
  //This leaves the only element, the title avalible for change per page
  include '../staticElements/head.php' 
  ?>
    <title>Bacheloroppgaven 2016 - BlogGL</title>
  </head>
  <body>
  <header>
  	<div class="container headertext">
  	<?php 
  	//The main title on the page can also be subject to chang according to the page its on...
  	?>
  		<h1><i class="fa fa-comments-o">&nbsp;</i>Bacheloroppgaven 2016<small>&nbsp; BlogGL</small></h1>
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
      <h2>LilleLørdag!</h2>
      <div class="bloggdate">Onsdag 03.02.2016</div>
      <img src="../images/blogg/blog_0302.jpg" alt="Lillelørdag på kontoret" />
      <p>Da var vi halveis i uka! Another day, another... day..? Vel halvveis til helg. Så kan vi starte på nytt til neste uke! 
      Denne uka har vi sett på antall vertex/poly og kb. Har vi funnet ut noe fornuftig? Du får bare vente å se blant dokumentene våre</p>
      <p>Blant dokumentene kan du nå finne en <a href="../vedlegg/rapportcolladavsjson.pdf" target="_blank">rapport om konvertering av COLLADA vs. JSON i browseren igjennom Three.js.</a> Resultatene av denne
      testen var ganske enstydige. Så her kan det bli mye fart og moro fremover, spesielt når vi funner ut hvor mange vertexes vi klarer å putte i en kb ;)</p>
      <p>En av dagens største nyheter er at vi har funnet kantina på IFE, og kan rapportere om meget konkurransedyktige priser vs SiØ. Det vil ikke komme en mer utfyllende skriftlig
      rapport på dette.</p><p> We'll be back!</p>      
    </article>

  </div> 
  </section>
</div>
</main>
<?php include "../staticElements/footer.php" //includes the footer?>
<?php include "../staticElements/scripts.php" //includes scripts as jquery and bootstrap?>
  </body>
</html>
