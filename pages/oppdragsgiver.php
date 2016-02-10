<!DOCTYPE html>
<html lang="no">
  <head>
  <?php 
  //Includes the header elements like the css files and other static elements.
  //This leaves the only element, the title avalible for change per page
  include '../staticElements/head.php' 
  ?>
    <title>Bacheloroppgaven 2016 - oppdragsgiver</title>
  </head>
  <?php include_once("../staticElements/analyticstracking.php") ?>
  <body>
  <header>
  	<div class="container headertext">
  	<?php 
  	//The main title on the page can also be subject to chang according to the page its on...
  	?>
  		<h1><i class="fa fa-briefcase">&nbsp;</i>Bacheloroppgaven 2016<small>&nbsp; oppdragsgiver</small></h1>
  	</div>
  	
  	<?php 
  	//Includes the navigation to the page
  	include '../staticElements/navigation.php' ?>
</header>
<main>
<div class="container">
  <section >
  <article class="col-sm-6">
  <h1>Institutt for energiteknikk</h1>
  <p>Oppdragsgiveren for denne prosjektet er IFE. IFE er en internasjonal forskningsstiftelse for energi- og nukleærteknologi. Stiftelsens hovedformål er på ideelt og samfunnsnyttig grunnlag å drive forskning og utvikling innenfor energi- og petroleumssektoren, og å ivereta nukleærteknologiske oppgaver for Norge. IFE arbeider for et mer klimavennlig energisystem basert på fornybar og C0<sub>2</sub> -fri energi.</p>
  <p>
  IFE ble grunnlagt i 1948, og er i dag en selvstendig stiftelse. Årlig omsetning er ca. 950 millioner kroner og antall fast ansatte er ca. 600. IFEs visjon er å være et internasjonalt ledende energiforskningsinstitutt.</p>

  <p>IFE har sine lokaler i Halden. Der har de ansvaret for en av to atomreaktorer i Norge. Med denne reaktoren forsker instituttet på kjernekraft og sikkerhet. I 50 år har IFE ledet et av verdens største forskningsprogram innen atomsikkerhet, Haldenprosjektet.
  </p>

  <p><strong>Lenker:</strong>
      <ul class="ekslinks">
        <li><a href="http://www.ife.no/no"><i class="fa fa-external-link-square">&nbsp;</i>Ife.no</a>
        <li><a href="http://www.ife.no/no/ife/halden/haldenprosjektet/hrp-no"><i class="fa fa-external-link-square">&nbsp;</i>Haldenprosjektet</a>
      </ul>
  </p>
  </article>
  <aside class="col-sm-4 col-sm-offset-2">
    <img src="http://frigg.hiof.no/bo16-g14/images/logos/ifelogo.png" alt="Ife logo" />
    <article>
    <h3>Kontaktperson</h3>
    <h4>Michael Louka</h4>
    <strong>Stilling:</strong> <br />
    St.f.avdelingsjef/Seksjonsleder<br />
    <strong>Epost:</strong><br /> 
    michael.louka(at)hrp.no
    </article>
  </aside>
  </section>
</div>
</main>
<?php include "../staticElements/footer.php" //includes the footer?>
<?php include "../staticElements/scripts.php" //includes scripts as jquery and bootstrap?>
  </body>
</html>