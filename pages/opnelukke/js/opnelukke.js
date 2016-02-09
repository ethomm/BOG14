
//Definerer variabler som skal være globale
var scene, renderer, camera, sphere, cube;
var trackballControls;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var clock = new THREE.Clock();
var projector = new THREE.Projector();
var scale = 7;
var model = null;



//Initaializes the scene with a sphere and a cube.
function init(){
	scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer();
	camera = new THREE.PerspectiveCamera (45, windowWidth/windowHeight, 0.1, 1000);
	renderer.setClearColor(0xffffff);
	renderer.setSize(windowWidth, windowHeight);
	var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
	light.intensity = 2;
	scene.add( light );

	//Initsialiserer tracballcontrolleren
	trackballControls = new THREE.TrackballControls(camera);

	//laster inn modellen
	var loader = new THREE.ColladaLoader();
		var totalBytes = 0;
		loader.options.convertUpAxis = true;
		loader.load('model/reaktor3.dae', 
			function(collada){
			model = collada.scene;
			model.name = "reaktor";
			model.scale.set(scale, scale, scale);
			model.position.y = -25;
			scene.add(model);
			});	
	
	camera.position.x = -60;
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

//funksjon som åpner og lukker skallet
function hovedform(){
	obj = scene.getObjectByName( "hovedform_lukket" );
	if(obj.visible){
		obj.visible = false;
	}else{
		obj.visible = true;
	}
}

//funksjon som initsialiserer raycasten og fanger opp hva den treffer
function onDocumentMouseDown(event){
	var vector = new THREE.Vector3((event.clientX/ windowWidth)* 2 -1, - (event.clientY/windowHeight) * 2+1, 0.5);
	vector = vector.unproject(camera);
	var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
	//Henter objekter som blir truffet. Andre parameteret setter recursive til true, slik 
	//at childobjects også blir tatt med.
	var intersects = raycaster.intersectObjects( scene.children, true);
	//console.log(intersects.length);
	//Henter første elementet i listen.
    var intersection = intersects[0],
    //Går oppover i nivåene til å finne et toppnivå hvor navnet enten er reaktor eller reaktorkjerne
    	obj = intersection.object.parent.parent.parent;
    		if(obj.name === "reaktor" || obj.name === "reaktorkjerne"){
    			hovedform();//kjører funksjon som toggler fullt skal av og på.
    		}
    	
    	//console.log("Intersected object", obj);
  		
	}



//window dom listeners

window.onload = init;
window.onresize = reSize;
document.addEventListener('mousedown', onDocumentMouseDown, false);