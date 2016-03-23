
// Setter globale variabler som ikke har en verdi enda
var scene, camera, renderer, emitter, particleGroup, clock;

// Modellen er litt liten så vi skalerer den opp
var scale = 8;

// Henter en teksturloader
var textureLoader = new THREE.TextureLoader();

// Setter opp Scenen
function init() {
	// Initialiserer et scene objeckt
    scene = new THREE.Scene();
    // Henter et perspektiv kamera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
    camera.position.z = 20;
    camera.position.x = 30;
    camera.lookAt( scene.position );
    // Henter inn to lys
    var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 ); 
    var light2 = new THREE.AmbientLight( 0x333333 ); // soft white light
	scene.add( light );
    scene.add( light2 );

    // Hentermodellen vår
    var loader = new THREE.ColladaLoader();
		var totalBytes = 0;
		loader.options.convertUpAxis = true;
		loader.load('../opnelukke/model/reaktor3.dae', 
			function(collada){
			model = collada.scene;
			model.name = "reaktor";
			model.scale.set(scale, scale, scale);
			model.position.y = -25;
			model.rotation.set ( 0, 2, 0);
			doneloading();
			scene.add(model);
			obj = scene.getObjectByName( "hovedform_lukket" );
			obj.visible = false;
			});	


	// Henter renderen
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor(0xff0000);

    // Henter en Orbitkontroller
    controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.enableDamping = true;
	controls.dampingFactor = 0.25;
	controls.enableZoom = true;
   	
   	// Setter i gang en Delta klokke
    clock = new THREE.Clock();

   	// Setter dette i scenen
    document.getElementById('output').appendChild(renderer.domElement);
}

// Lager particle group and emitter
function initParticles() {
	particleGroup = new SPE.Group({
		// Laster innn teksturen som er et bilde av en boble i 128x128 px
		texture: {
            value: textureLoader.load('./images/buble.png')
        }
	});

	emitter = new SPE.Emitter({
        // Denne variabeln setter levetiden. Øker man tallet vil boblene gå over kanten på vannet.
        maxAge: {
            value: 7
        },

        // Setter plasseringen for emitteren spread er hvor stort område
        // Her har vi satt i lengde og bredde og ingen ting i høyde
		position: {
            value: new THREE.Vector3(0, -15, 0),
            spread: new THREE.Vector3( 8, 0, 8 )
        },

        //setter retning på akselerasjonen her har vi satt den til opp
        // Spread skaper turbulent. Siden dette er vann, vil vi kun gå oppover
        // så noen positive eller negative tall vil føre til avvik fra retningen.
		acceleration: {
            value: new THREE.Vector3(0, 0.05, 0),
            spread: new THREE.Vector3( 0, 0, 0)
        },

        // Dette parameteret sørger for at vi kommer oss opp og med nok fart
        // igjen jobber vi med de midterste parameterne for å sørge for en flow
        // oppover. Her har vi også lagt inn litt for at partiklene skal vingle.
		velocity: {
            value: new THREE.Vector3(0, 1, 0),
            spread: new THREE.Vector3(0.5, 1 , 0.5)
        },

        // Siden luft utvider seg eksponensielt i atm har jeg satt en mellom verdi
        size: {
            value: [0.1, 0.2, 0.4]
        },

		particleCount: 500
	});

	particleGroup.addEmitter( emitter );
	scene.add( particleGroup.mesh );
}

// Animerer med requestAnimationFrame som sørger for at bildet blir 
// gjengitt i frp og ikke hakker for mye.
function animate() {
    requestAnimationFrame( animate );
    render( clock.getDelta() );
}

// Rendrer ut scenen og holder orden på partikkel gruppen med dt (Deltatime)
function render( dt ) {
    particleGroup.tick( dt );
    renderer.render( scene, camera );
}

// Rendrer rikte proposjoner etter størrelsen på browservinduet.
window.addEventListener( 'resize', function() {
	var w = window.innerWidth,
	h = window.innerHeight;
	camera.aspect = w / h;
	camera.updateProjectionMatrix();

	renderer.setSize( w, h );
}, false );


// Jquery som lytter på start og stopp knappen
$(document).ready(function(){
	
	// Starter vannkokern
	$('#start').on('click', function(){
		emitter.enable();
		$('#stop').toggle();
		$('#start').toggle();
	});

	//stopper vannkokern
	$('#stop').on('click', function(){
		emitter.disable();
		$('#stop').toggle();
		$('#start').toggle();
	});
});

// Gir brukeren en grafisk feedback på at noe skjer på siden mens modellen loades
function doneloading(){
	$('#loader').hide();
	$('.centerpadding').show();
}



init();
initParticles();
emitter.disable();
setTimeout(animate, 0);




