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
  		<h1><i class="fa fa-cube">&nbsp;</i>Bacheloroppgaven 2016<small>&nbsp; eksempler</small></h1>
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
      <h2>Learning Three.js - the JavaScript 3D Library for WebGL</h2>
      <img src="https://s1.adlibris.com/images/16588179/learning-threejs---the-javascript-3d-library-for-webgl.jpg" 
      alt="Learning Three.js - the JavaScript 3D Library for WebGL" class="pull-right" />
      <p>Disse lenkene tar for seg eksemplene i boka Learning Three.js</p>
      <p><a href="http://www.adlibris.com/no/bok/learning-threejs---the-javascript-3d-library-for-webgl-9781784392215"><i class="fa fa-book">&nbsp;</i>Learning Three.js - the JavaScript 3D Library for WebGL<br/>
      <h6>secoundEdition</h6>
      By: Jos Dirksen</a></p>
    </article>
    <aside class="col-sm-4">
    <i class="fa fa-cube">&nbsp;</i><a href="threejsexamples/c01e1.html" target="_blank"> Kapitel 1 eksempel 1</a>
    </aside>
  </div>
  </section>
</div>
</main>
<?php include "../staticElements/footer.php" //includes the footer?>
<?php include "../staticElements/scripts.php" //includes scripts as jquery and bootstrap?>
  </body>
</html>