$(document).ready(function() {
	$('#startcollada').on('click', function (){
		console.log("kjører");
		startCollada();


	});
	$('#startjson').on('click', function (){
		startJson();
	});
});

// SET GLOBAL VARIABLES FOR THE APPLICATION
	var scene = new THREE.Scene();
	var renderer = new THREE.WebGLRenderer();
	var light = new THREE.HemisphereLight( 0xffffee, 0x080820, 9 );
	var camera = new THREE.PerspectiveCamera( 35, window.innerWidth/ window.innerHeight, 1, 1000 );
	light.intensity = 1;
	var colladaModel = 'modells/mil.dae';
	var result = 0;
	var bytes = 0;


function startCollada(){
	var totalTime = 0;
	var maksTime = 0;
	var minTime = 0;
	var totalSpeed = 0;
	var maksSpeed = 0;
	var minSpeed = 0;

	$('#testContainer').empty();

	for(var i=1; i<=5; i++){
		stopWatch.start();
		colladatester();
		stopWatch.stop();
		$("#testContainer").append('<div class="row test"><div class="col-md-4">Runde: #'+i+'</div></div>');
	}
}


//Stoppwatch and bytes counter
	var stopWatch = {
		startTime: 0 ,
		start: function(){this.startTime = new Date();}, 
		stop: function(bytes){
			var startTime = this.startTime;
			var endTime = new Date();
			result = (endTime - startTime)/1000;
		}
	};

//User Eventhandlers



//Renderloop
function render (){
	renderer.render(scene, camera);
	requestAnimationFrame(render);
	}

//Initializes the Scene. Also when new model is loaded
function colladatester(){
		scene.add(light);
		scene.add(camera);
		var loader = new THREE.ColladaLoader();
		var totalBytes = 0;
		loader.options.convertUpAxis = true;
		loader.load(colladaModel, 
			function(collada){
			model = collada.scene;
			scene.add(model);
			render();
			}, 
			function(xhr){
				totalBytes = xhr.total/1000000;
			});	
	}
