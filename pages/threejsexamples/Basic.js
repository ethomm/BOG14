
// Oppretter en Scnene
var scene = new THREE.Scene();
// Oppretter et camera (her finnes det mange forskjellige typer)
var camera = new THREE.PerspectiveCamera( 45, windowWidth/windowHeight , 0.1 , 1000 );
// Oppretter en renderer dersom det er mulig med WebGL har Canvasrenderer som fallback
var renderer = renderer = Detector.webgl? new THREE.WebGLRenderer(): new THREE.CanvasRenderer();


// Funksjon som kjøres når siden er lastet inn
// Denne funksjonen populerer scenen med e elmenetene som trengs
function initScene() {
	// Oppretter et lys her en spott (Dt finnes flere forskjellige typer lys)
	var spotLight = new THREE.SpotLight( 0xffffff);
	//Legger lyset til scenen
	scene.add(spotLight);
	
	// Lager et element her en boks, det finnes flere pre definerte geometrier som
	// sphere, cylinder ect.
	var cubeGeometry = new THREE.BoxGeometry(4,4,4);
	// Lager en istanse av materiale Lambert
	var cubeMaterial = new THREE.MeshLambertMaterial( {color: 0xff0000}); 
	// Setter dette sammen i en Mesh
	var cube = new THREE.Mesh( cubeGeometry, cubeMaterial);
	// Leger den nye kuben til scnene
	scene.add(cube);
	// Kaller funksjonen som gjengir scenen
	renderScene();
}


function renderScene() {
	// Setter en output for hvor scenen skal vises på nettsiden i dette 
	// eksempelet har vi valgt en et elment med ID output
	document.getElementById("output").appendChild(renderer.domElement);
	// Kaller på renderens render funksjon som tar parameterne scene og camera
	// Siden vi har lagt til de andre elementene i scene elementet blir alt nå
	// gjengitt i scenen
	renderer.render(scene, camera);
}
// Kjører funksjonen initScene når nettsiden er lastet
window.onload = initScene;