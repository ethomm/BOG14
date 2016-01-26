

// SET GLOBAL VARIABLES FOR THE APPLICATION
	var scene = new THREE.Scene();
	var renderer = new THREE.WebGLRenderer();
	var light = new THREE.HemisphereLight( 0xffffee, 0x080820, 9 );
	var camera = new THREE.PerspectiveCamera( 35, window.innerWidth/ window.innerHeight, 1, 1000 );
	light.intensity = 1;
	camera.position.z = 150;

// Creating instances of statistics for rendering in bowser
	var stats = new Stats();
	var stats2 = new Stats();
	var stats3 = new Stats();

// User input variables for testing purposes
	var scale = 0.2;
	var rotation = true;
	var r2d2 = 'model/r2d2.dae';
	var milleniumFalcon = 'model/mil.dae';
	var x_wing = 'model/xwing.dae';
	var displayModel = r2d2;
	var backgroundColor = 0xffffff;

// Starts and sets the statsmonitoring
stats.setMode(0); // 0: fps, 1: ms, 2: mb
stats2.setMode(1);
stats3.setMode(2);
document.getElementById('stats').appendChild(stats.domElement);
document.getElementById('stats').appendChild(stats2.domElement);
document.getElementById('stats').appendChild(stats3.domElement);

//Stoppwatch and bytes counter
	var stopWatch = {
		startTime: 0 ,
		start: function(){
			this.startTime = new Date();
			$('#loadtime').text("Venter...");
			}, 
		stop: function(bytes){
			var startTime = this.startTime;
			var endTime = new Date();
			var result = (endTime - startTime)/1000;
			$('#loadtime').text(bytes.toFixed(2)+ " Mb på "+result + " sekunder ("+(bytes/result).toFixed(2) + " Mb/s)");
		}
	};

//Funtion to set the screen
var screenSize = function (){
	//Finds the height of the div containing the controllers
	var topHeight = $('#top-controller').height();
	//Accounts for space for the footer
	var footerHeight = 50;
	//Subtracts the browser window height
	var renderHeight = window.innerHeight - topHeight - footerHeight;
	//Sets the right renderheight for the view
	renderer.setSize (window.innerWidth, renderHeight);
	//Oppdates the camera ascpect ratio
	camera.aspect = (window.innerWidth/ renderHeight);
	camera.updateProjectionMatrix();
};
//Model Rotation parameters
var modelRotation = function(){
	if(rotation){
		model.rotation.y += 0.002;
		model.rotation.z += 0.001;
	}
};

//Renderloop
function render (){
	screenSize();
	//starts the stats
	stats.begin();
	stats2.begin();
	stats3.begin();
	//Sets the backgroundColor
	renderer.setClearColor( backgroundColor, 1 );
	//Scales the model
	model.scale.set(scale, scale, scale);
	//Rotates the model if rotation is set to true
	modelRotation();
	renderer.render(scene, camera);
	requestAnimationFrame(render);
	//Ends stats cycle
	stats.end();
	stats2.end();
	stats3.end();
	}

//Initializes the Scene. Also when new model is loaded
function initScene(){
		stopWatch.start();
		loading();
		document.getElementById('threecontainer').appendChild(renderer.domElement);
		scene.add(light);
		scene.add(camera);
		var loader = new THREE.ColladaLoader();
		var totalBytes = 0;
		loader.options.convertUpAxis = true;
		loader.load(displayModel, 
			function(collada){
			model = collada.scene;
			scene.add(model);
			//console.log(JSON.stringify(model));
			render();
			doneLoading();
			stopWatch.stop(totalBytes);
			}, 
			function(xhr){
				totalBytes = xhr.total/1000000;
			});	
	}
//Loading/Render Handler
function loading (){
	$('#threecontainer').hide();
	$('#loader').show();

}

function doneLoading (){
	$('#threecontainer').show();
	$('#loader').hide();
}

//User Eventhandlers

$(document).ready(function() {
	$('#scale').change( function(){
		scale = $('#scale').val();
	});

	$('.btn-success').on('click', function (){
		rotation = true;

	});
	$('.btn-danger').on('click', function (){
		rotation = false;

	});
	$('.btn-warning').on('click', function (){
		model.rotation.y = 0;
		model.rotation.z = 0;
	});
	$('#modelSelect').on('change', function(){
		var selection = $('#modelSelect').val(); 
		if(selection === "1" && displayModel !== r2d2){
			displayModel = r2d2;
			//Removes last added item from Scene
			scene.children.pop();
			initScene();

		}
		else if(selection === "2" && displayModel !== milleniumFalcon){
			displayModel = milleniumFalcon;
			//Removes last added item from Scene
			scene.children.pop();
			initScene();
		}
		else if(displayModel !== x_wing) {
			displayModel = x_wing;
			//Removes last added item Scene
			scene.children.pop();
			initScene();
		}
	});
});

	
window.onload =initScene();
window.onresize = screenSize();