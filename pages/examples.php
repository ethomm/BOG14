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
      <h2>Learning Three.js - the JavaScript 3D Library forWebGL</h2>
      <p>Disse elnkene tar for seg eksemplene i boka Learning Thrre.js</p>
    </article>
    <aside class="col-sm-4">
    <i class="fa fa-file-pdf-o">&nbsp;</i><a href="threeejsexamples/c01e1.html" target="_blank"> Kapitel 1 eksempel 1</a>
    </aside>
  </div>
  </section>
</div>
</main>
<?php include "../staticElements/footer.php" //includes the footer?>
<?php include "../staticElements/scripts.php" //includes scripts as jquery and bootstrap?>
  </body>
</html>