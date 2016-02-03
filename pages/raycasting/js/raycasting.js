
//Definerer variabler som skal være globale
var scene, renderer, camera, sphere, cube;
var trackballControls;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var clock = new THREE.Clock();
var projector = new THREE.Projector();


//Initaializes the scene with a sphere and a cube.
function init(){
	scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer();
	camera = new THREE.PerspectiveCamera (45, windowWidth/windowHeight, 0.1, 1000);
	renderer.setClearColor(0xffffff);
	renderer.setSize(windowWidth, windowHeight);
	var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
	scene.add( light );

	//Initsialiserer tracballcontrolleren
	trackballControls = new THREE.TrackballControls(camera);


	//Lager en ball
	var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
	var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xff0000, wireframe: true});
	sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	sphere.name = "Spherix";
	scene.add(sphere);

	//Lager en Box
	var cubeGeometry = new THREE.BoxGeometry( 6, 6, 6, 3,3,3);
	var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00, wireframe: true});
	cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cube.name = "Cubix";
	cube.position.z = 10;
	scene.add(cube);


	camera.position.x = -30;
	camera.lookAt(scene.position);

	//Setter kontrollattrubitter på trackball controlleren
	trackballControls.rotateSpeed = 1.0;
	trackballControls.zoomSpeed = 1.0;
	trackballControls.panSpeed = 1.0;

	render();

}
//Rendering out the sceen to the div with ID output
function render(){
	var delta = clock.getDelta();
	trackballControls.update(delta);
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

//funksjon som initsialiserer raycasten og fanger opp hva den treffer
function onDocumentMouseDown(event){
	var vector = new THREE.Vector3((event.clientX/ windowWidth)* 2 -1, - (event.clientY/windowHeight) * 2+1, 0.5);
	vector = vector.unproject(camera);
	var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
	var intersect = raycaster.intersectObjects([sphere, cube]);
	if(intersect.length > 0){
	var object = intersect[0].object;
	console.log(object.name +" sier: slutt å trykk på meg!");
		if(object.material.wireframe === true){
			object.material.wireframe = false;
		}else{
			object.material.wireframe = true;
		}
	}

}

//window dom listeners

window.onload = init;
window.onresize = reSize;
document.addEventListener('mousedown', onDocumentMouseDown, false);