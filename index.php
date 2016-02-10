<!DOCTYPE html>
<html lang="no">
  <head>
  <?php 
  //Includes the header elements like the css files and other static elements.
  //This leaves the only element, the title avalible for change per page
  include 'staticElements/head.php' 
  ?>
    <title>Bacheloroppgaven 2016 - gruppe 14</title>
  </head>
  <?php include_once("staticElements/analyticstracking.php") ?>
  <body>
  <header>
  	<div class="container headertext">
  	<?php 
  	//The main title on the page can also be subject to chang according to the page its on...
  	?>
  		<h1><i class="fa fa-graduation-cap">&nbsp;</i>Bacheloroppgaven 2016<small>&nbsp; Gruppe 14</small></h1>
  	</div>
  	
  	<?php 
  	//Includes the navigation to the page
  	include 'staticElements/navigation.php' ?>
</header>
<main>
<div class="container">
	<?php 
	//inclides the content
	//This is the include that is subjact to change per page
	include 'pages/forsiden.php' ?>
</div>
</main>
<?php include "staticElements/footer.php" //includes the footer?>
<?php include "staticElements/scripts.php" //includes scripts as jquery and bootstrap?>
  </body>
</html>