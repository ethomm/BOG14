	var scene = new THREE.Scene();
	var renderer = new THREE.WebGLRenderer();
	var light = new THREE.HemisphereLight( 0xffffee, 0x080820, 9 );
	var camera = new THREE.PerspectiveCamera( 35, window.innerWidth/ window.innerHeight, 1, 1000 );
	light.intensity = 1;
	camera.position.z = 150;
	scene.add(light);
	scene.add(camera);
	camera.position.y = 30;
	var scale = 10;
	var room= 1;

$(document).ready(function() {

// SET GLOBAL VARIABLES FOR THE APPLICATION

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
		document.getElementById('output').appendChild(renderer.domElement);
		scene.add(light);
		scene.add(camera);
		var loader = new THREE.ColladaLoader();
		loader.options.convertUpAxis = true;
		loader.load('et/ExporterTest.dae', 
			function(collada){
				console.log("this happens");
			model = collada.scene;
			console.log("and This");
			room=collada;
			//JsonModel = model.toJSON();
			//console.log(JSON.stringify(JsonModel));
			scene.add(model);
			render();
			}, function(file){
			console.log((file.loaded / file.total * 100).toFixed(2) + "% loaded");

			});	
		
	}


initScene();
return scene;
});