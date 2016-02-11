
//Definerer variabler som skal være globale
var scene, renderer, camera, sphere;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var textureLoader = new THREE.TextureLoader();
var scale = 8;
var subdiv = 18;

//henter texturer
var vann = textureLoader.load( './images/water.png' );
var aplha = textureLoader.load( './images/alpa.png');

// Lager en geometri og et materiale
var sphereGeometry = new THREE.SphereGeometry(0.1, 15, 15);
var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, transparent: false, wireframe: false});

//lager et object
var buble = function () {
	return new THREE.Mesh(sphereGeometry, sphereMaterial);
};


//Initaializes the scene with a sphere and a cube.
function init(){
	scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer();
	camera = new THREE.PerspectiveCamera (45, windowWidth/windowHeight, 0.1, 1000);
	renderer.setClearColor(0xffffff);
	renderer.setSize(windowWidth, windowHeight);
	var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
	scene.add( light );
	

	//lager cylinder
	var geometry = new THREE.CylinderGeometry( 5, 5, 20, subdiv );
	var material = new THREE.MeshPhongMaterial( {map: vann, transparent: true, depthTest: true} );
	var cylinder = new THREE.Mesh( geometry, material );
	scene.add( cylinder );


	//Lager en ball
	sphere = new buble();
	sphere2 = new buble();

	sphere.position.y = -10;
	scene.add(sphere);

	camera.position.x = -30;
	camera.position.y =20;
	camera.lookAt(scene.position);

	render();

}
//Rendering out the sceen to the div with ID output
function render(){
	requestAnimationFrame(render);
	document.getElementById('output').appendChild(renderer.domElement);
	renderer.render(scene, camera);
}

//updates the view according to the aspect ratio of the view, the window height and width.
function reSize(){
 	windowHeight = window.innerHeight;
	windowWidth = window.innerWidth;
	renderer.setSize(windowWidth, windowHeight);
	camera.aspect = windowWidth/windowHeight;
	camera.updateProjectionMatrix();
}

//window dom listeners

$(document).ready(function() {
	$('#oppdater').on('click', function (){
		subdiv = parseInt($('#sub').val());
		init();
	});
});
window.onload = init;
window.onresize = reSize;
