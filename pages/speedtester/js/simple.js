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
	scene.add(light);
	scene.add(camera);

	var colladaModel = 'modells/mil.dae';
	var result = 0;
	var rounds = 1;
	var totalTime = 0;
	var maksTime = 0;
	var minTime = 0;
	var totalSpeed = 0;
	var maksSpeed = 0;
	var minSpeed = 0;
	var totalBytes = 0;

function startCollada(){
	console.log(totalBytes);
		stopWatch.start();
		var loader = new THREE.ColladaLoader();
		loader.options.convertUpAxis = true;
		loader.load(colladaModel, 
			function(collada){
			render();
			
			stopWatch.stop();

			updateView();
			rounds++;
			runNewTest();
			}, 
			function(xhr){
				totalBytes = xhr.total/1000000;
			});	

		

		$("#testContainer").append('<div class="row test"><div class="col-md-4">Runde: #'+rounds+'</div></div>');
}

function updateView(){
		totalTime += result;
		if(rounds === 1){
			maksTime = result;
			minTime = result;
		}
		else if (result>maksTime){
			maksTime = result;
		}else if(result<minTime){
			minTime = result;
		}
		var speed = totalBytes/result;
		totalSpeed += speed;
		if(rounds === 1){
			minSpeed = speed;
			maksSpeed = speed;
		}
		if(speed>minSpeed){
			minSpeed = speed;
		}else if (speed<maksSpeed){
			maksSpeed = speed;
		}
		

	$("#size").text(totalBytes.toFixed(2) + " mb");
	$("#mintime").text(minTime + " sekunder");
	$("#maxtime").text(maksTime + " sekunder");
	$("#avgtime").text(totalTime/rounds + " sekunder");
	$("#maxspeed").text(maksSpeed.toFixed(3) + " mb/s");
	$("#minspeed").text(minSpeed.toFixed(3) + " mb/s");
	$("#avgspeed").text(totalSpeed/rounds.toFixed(3) + " mb/s");

}


function runNewTest(){
	if (rounds === 1){
		$("#testContainer").append('<div class="row test"><div class="col-md-4">Started</div></div>');
		startCollada();
	}
	else if(rounds > 1 && <= 5){
		startCollada();
	}else{
		$("#testContainer").append('<div class="row test"><div class="col-md-4">Finnished</div></div>');
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
			console.log(result);
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
		
	}
