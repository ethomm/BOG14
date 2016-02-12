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
<?php include_once("../staticElements/analyticstracking.php") ?>
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
     <div class="row blogginnlegg">
     <article class="col-sm-8 ">
      <h2>Something's cooking</h2>
      <div class="bloggdate">fredag 12.02.2016</div>
      <img src="../images/blogg/koker.jpg" alt="Vannkoker" />
      <p>Vi har klart å lage en vannkoker!</p>
      <p>Det er ingen hemmelighet at en atomreaktor når man koker det ned til beinet, er en glorifisert vannkoker. Så i oppgaven vår med å visuelt illustrere dette, er vi nødt til å ha kokende vann... Altså koke vann, en vannkoker..</p>
      <p>I vår siste prototype bubles kan du starte og stoppe vannkokeren som du vil. Om litt skal vi få animert resten av reaktoren også.</p>
      <p>Følg med! 敬請期待! Оставайтесь с нами!</p>
    </article>

  </div> 
   <div class="row blogginnlegg">
     <article class="col-sm-8 ">
      <h2>Det er så lett!</h2>
      <div class="bloggdate">torsdag 11.02.2016</div>
      <img src="../images/blogg/gravatar.png" alt="gravatar" />
      <p>Skal være den første til å innrømme at jeg ikke hadde hørt om dette før inntil noen uker siden. Men hvor artig er ikke dette. Du kan gå inn på <a href="https://en.gravatar.com/">Gravatar (A Globally Recognized Avatar)</a> og registrere deg med epost adresser du bruker forskjellige steder. Nettsidene du bruker med emailen din kan via din epost hente din avatar, eller profilbilde. artig! </p>
      <p>Det artigste er at det er så lett å implementere på siden din. I eksempelet over har vi brukt Ruby som språk for å hente avataren til brukeren som er registert</p>
      <p>I all hovedsak sender du en hashet versjon (MD5) av en epostadresse til gravatar</p>
      <p>I eksempelet over har vi lagt til et par andre funksjoner som størrelse, samt sørget for at eposten som blir hashet er i småbokstaver. Tilbake får vi en image tag som vil se ut som <p><code>&lt;img src="ADDRESSEN TIL BILDET" alt="NAVNET TIL BRUKEREN" class="gravatar" /&gt;</code></p>

      <p>
      <embed type="application/x-shockwave-flash" src="https://v0.wordpress.com/player.swf?v=1.04" width="400" height="224" wmode="direct" seamlesstabbing="true" allowfullscreen="true" allowscriptaccess="always" overstretch="true" flashvars="guid=HNyK67JS&amp;isDynamicSeeking=true"></embed></p>
      <div class="clearfix"></div>
         
    </article>

  </div> 
    <div class="row blogginnlegg">
     <article class="col-sm-8 ">
      <h2>From russia with love</h2>
      <div class="bloggdate">onsdag 10.02.2016</div>
      <img src="../images/blogg/russia.jpg" alt="russian spy" />
      <p>En liten kveldstur innom google analytics viste at en person/bruker befant seg på nettsiden vår. Nygjerrig nok, måtte vi jo undersøke hvem det var. Er sidene så interessante at de skaper klikkstrømmer en sen onsdags kveld?</p>
      <p>Som du ser av illustrasjonen over. Kom brukeren fra Russland... Vi skal ikke bli høye på pæra, men så grensesprengende ting holder vi ikke på meg her altså...</p>
      <p>Uansett til vår russiske venn: Спасибо за посещение! (uttales "spasibo za poseshcheniye").</p>
      <p>Vi høres/мы услышали</p>
      <div class="clearfix"></div>
         
    </article>

  </div> 
   <div class="row blogginnlegg">
     <article class="col-sm-8 ">
      <h2>Midt i uka</h2>
      <div class="bloggdate">onsdag 10.02.2016</div>
      <img src="../images/blogg/smurfey.jpg" alt="brillesmurf" />
      <p>Starter dagen med et lite sitat som kanskje er med på å øke motivasjonen, eller bare en reminder om hvorfor ;)</p>
      <p class="quote">Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.</p>
      <p class="quotebyline">- Linus Torvalds</p>
      <div class="clearfix"></div>
         
    </article>

  </div> 
   <div class="row blogginnlegg">
    <article class="col-sm-8 ">
      <h2>Da har vi raycasta en reaktor</h2>
      <div class="bloggdate">tirsdag 9.02.2016</div>
      <img src="../images/blogg/reaktorraycast.jpg" alt="Reaktor raycasting" />
      <p>Etter en fin dag og fin lunch hos IFE har vi klart å lage en modell av en raktor hvor vi kan
      veksle mellom forskjellige lag på modellen. Et skritt nærmere mai...</p>
      <p>Da er det bare å se hva morgen dagen bringer...</p>
      <p>vi prekæs!</p>

    </article>

  </div> 
    <div class="row blogginnlegg">
    <article class="col-sm-8 ">
      <h2>Det bygges en reaktor i Halden</h2>
      <div class="bloggdate">tirsdag 9.02.2016</div>
      <img src="../images/blogg/reaktorstart.jpg" alt="Det bygges en reaktor i Halden" />
      <p>Ryktene har det til at Joakim M. Elden holder på å bygge en reaktor i Halden</p>
      <p>Ikke bare lager han en reaktor, den lages også på sparebluss. Fra sitt originale budsjett på 600 000 vertex, 
      har mister elden klart å stramme det ned til rundt 30 000 i skrivende stund. Resultatet er kraftig reduksjon i megabyte
      og responsen har ikke latt seg vente... Tog du han... ;) Tørr men god!</p>

    </article>

  </div> 
  <div class="row blogginnlegg">
    <article class="col-sm-8 ">
      <h2>Endelig er det Fredag!</h2>
      <div class="bloggdate">fredag 05.02.2016</div>
      <p>Da er denne uka ved veis ende. Som litt krydder inn i helgen vil jeg bare dele et sitat jeg kom over i dag.</p>
      <p class="quote">Let people learn eager loading by crawling across broken glass, like we did. It builds character!</p>
      <p class="quotebyline">- wilson (Thre Rails 4 Way , 2014)</p>
      <div class="clearfix"></div>
      <P>Med slike kloke ord er det bare å ta helg.</p><p> We'll be back next week!</p>      
    </article>

  </div> 
   <div class="row blogginnlegg">
    <article class="col-sm-8 ">
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
