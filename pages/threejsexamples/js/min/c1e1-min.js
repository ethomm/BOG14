function init(){function e(){a.update(),requestAnimationFrame(e),s.render(n,i)}var t=window.innerHeight,o=window.innerWidth,n=new THREE.Scene,i=new THREE.PerspectiveCamera(45,o/t,.1,1e3),a=initStats(),s=new THREE.WebGLRenderer;s.setClearColor(new THREE.Color(15658734,1)),s.setSize(o,t),s.shadowMap.enabled=!0;var d=new THREE.AxisHelper(20);n.add(d);var r=new THREE.PlaneGeometry(60,20,1,1),E=new THREE.MeshLambertMaterial({color:13421772}),p=new THREE.Mesh(r,E);p.rotation.x=-.5*Math.PI,p.position.x=15,p.position.y=0,p.position.z=0,p.receiveShadow=!0,n.add(p);var l=new THREE.BoxGeometry(4,4,4),w=new THREE.MeshLambertMaterial({color:16711680}),m=new THREE.Mesh(l,w);m.position.x=-4,m.position.y=3,m.position.z=0,m.castShadow=!0,n.add(m);var h=new THREE.SphereGeometry(4,20,20),H=new THREE.MeshLambertMaterial({color:7829503}),R=new THREE.Mesh(h,H);R.position.x=20,R.position.y=4,R.position.z=2,R.castShadow=!0,n.add(R);var T=new THREE.SpotLight(16777215);T.position.set(-40,60,-10),T.castShadow=!0,n.add(T),i.position.x=-30,i.position.y=40,i.position.z=30,i.lookAt(n.position),document.getElementById("output").appendChild(s.domElement),e()}function initStats(){var e=new Stats;return e.setMode(0),e.domElement.style.position="absolute",e.domElement.style.left="0px",e.domElement.style.top="0px",document.getElementById("Stats-output").appendChild(e.domElement),e}window.onload=init;