$(document).ready(function() {
	$('#startcollada').on('click', function (){
		console.log("kjører");
		clearTest();
		runNewTest();
		isCollada = true;

	});
	$('#startjson').on('click', function (){
		startJson();
		isCollada = false;
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
	var antallRunder = 5;
	var result = 0;
	var rounds = 1;
	var totalTime = 0;
	var maksTime = 0;
	var minTime = 0;
	var totalSpeed = 0;
	var maksSpeed = 0;
	var minSpeed = 0;
	var totalBytes = 0;
	var startedTest = false;
	var isCollada = true;


function startCollada(){
		stopWatch.start();
		var loader = new THREE.ColladaLoader();
		loader.options.convertUpAxis = true;
		loader.load(colladaModel, 
			function(collada){
			nextRound();
			}, 
			function(xhr){
				totalBytes = xhr.total/1000000;
			});	
}

function startJson(){
	stopWatch.start();
	var loader = new THREE.ObjectLoader();
	loader.load("./modells/mil2.json", function(object){
    	model = object;
    	nextRound();
		}, 
		function(xhr){
		totalBytes = xhr.total/1000000;
		});
}

function nextRound(){
	    render();
    	stopWatch.stop();
    	updateView();
    	runNewTest();
    	rounds++;
}

function clearTest(){
	document.getElementById("testContainer").innerHTML = "";
	rounds = 1;
	totalTime = 0;
	maksTime = 0;
	minTime = 0;
	totalSpeed = 0;
	maksSpeed = 0;
	minSpeed = 0;
	totalBytes = 0;
	updateView();
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

function showResult(){
	var testTidspunkt = new Date();
	var testsubject = isCollada ? "Collada" : "JSON" ;
	$('#result').append('<h2>Resultat</h2><h6>'+testTidspunkt+'</h6><p>Testen tok : '+ totalTime.toFixed(2) +' sekunder </p><p class="ingress">GJENNOMSNITTSFART '+testsubject.toUpperCase()+'</p><h2 class="green">'+(totalSpeed/rounds).toFixed(3)+' mb/s</h2><p>på '+rounds+' runder</p>');
}


function runNewTest(){
	if (!startedTest){
		$("#testContainer").append('<div class="row test"><div class="col-md-4">Started</div></div>');
		if(isCollada){startCollada();}else{startJson();}
		startedTest = true;
	}
	else if(startedTest && rounds <antallRunder){
		$("#testContainer").append('<div class="row test"><div class="col-md-2">Runde: #'+rounds+'</div><div clas="col-md4">Tok <strong>'+ result +'</strong> sekunder med en gjennomsnittsfart på <strong>' + (totalBytes/result).toFixed(3) +' mb/s</strong>. </div>');
		if(isCollada){startCollada();}else{startJson();}
	}
	else{
		$("#testContainer").append('<div class="row test"><div class="col-md-2">Runde: #'+rounds+'</div><div clas="col-md4">Tok <strong>'+ result.toFixed(2) +'</strong> sekunder med en gjennomsnittsfart på <strong>' + (totalBytes/result).toFixed(3) +' mb/s</strong>. </div>');
		$("#testContainer").append('<div class="row test"><div class="col-md-4">Finnished</div></div>');
		startedTest =false;
		showResult();
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


//Renderloop
function render (){
	renderer.render(scene, camera);
	requestAnimationFrame(render);
	}
