var colladaen = null;

$(document).ready(function() {

// SET GLOBAL VARIABLES FOR THE APPLICATION
	var scene = new THREE.Scene();
	var renderer = new THREE.WebGLRenderer();
	var light = new THREE.HemisphereLight( 0xffffee, 0x080820, 9 );
	var camera = new THREE.PerspectiveCamera( 35, window.innerWidth/ window.innerHeight, 1, 1000 );
	light.intensity = 1;
	camera.position.z = 150;
	scene.add(light);
	scene.add(camera);
	var scale = 0.2;
	
//Renderloop
function render (){
	renderer.setClearColor( 0xffffff, 1 );
	renderer.render(scene, camera);
	requestAnimationFrame(render);
	model.rotation.y += 0.002;
	model.rotation.z += 0.001;
	
	renderer.setSize (window.innerWidth,window.innerHeight );
	//Oppdates the camera ascpect ratio
	camera.aspect = (window.innerWidth/ window.innerHeight);
	model.scale.set(scale, scale, scale);

	}

//Initializes the Scene. Also when new model is loaded
function initScene(){
		document.getElementById('testContainer').appendChild(renderer.domElement);
		scene.add(light);
		scene.add(camera);
		var loader = new THREE.ColladaLoader();
		var totalBytes = 0;
		loader.options.convertUpAxis = true;
		


		loader.load('./modells/mil.dae', 
			function(collada){
			colladaen = collada;
			model = collada.scene;
			//JsonModel = model.toJSON();
			//console.log(JSON.stringify(JsonModel));



			scene.add(model);
			render();
			});	
	}

initScene();

});

