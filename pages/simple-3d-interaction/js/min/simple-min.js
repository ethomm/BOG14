function render(){screenSize(),stats.begin(),stats2.begin(),stats3.begin(),renderer.setClearColor(backgroundColor,1),model.scale.set(scale,scale,scale),modelRotation(),renderer.render(scene,camera),requestAnimationFrame(render),stats.end(),stats2.end(),stats3.end()}function initScene(){stopWatch.start(),loading(),document.getElementById("threecontainer").appendChild(renderer.domElement),scene.add(light),scene.add(camera);var e=new THREE.ColladaLoader,n=0;e.options.convertUpAxis=!0,e.load(displayModel,function(e){model=e.scene,scene.add(model),render(),doneLoading(),stopWatch.stop(n)},function(e){n=e.total/1e6})}function loading(){$("#threecontainer").hide(),$("#loader").show()}function doneLoading(){$("#threecontainer").show(),$("#loader").hide()}var scene=new THREE.Scene,renderer=new THREE.WebGLRenderer,light=new THREE.HemisphereLight(16777198,526368,9),camera=new THREE.PerspectiveCamera(35,window.innerWidth/window.innerHeight,1,1e3);light.intensity=1,camera.position.z=150;var stats=new Stats,stats2=new Stats,stats3=new Stats,scale=.2,rotation=!0,r2d2="model/r2d2.dae",milleniumFalcon="model/mil.dae",x_wing="model/xwing.dae",displayModel=r2d2,backgroundColor=16777215;stats.setMode(0),stats2.setMode(1),stats3.setMode(2),document.getElementById("stats").appendChild(stats.domElement),document.getElementById("stats").appendChild(stats2.domElement),document.getElementById("stats").appendChild(stats3.domElement);var stopWatch={startTime:0,start:function(){this.startTime=new Date,$("#loadtime").text("Venter...")},stop:function(e){var n=this.startTime,t=new Date,o=(t-n)/1e3;$("#loadtime").text(e.toFixed(2)+" Mb på "+o+" sekunder ("+(e/o).toFixed(2)+" Mb/s)"),console.log(o)}},screenSize=function(){var e=$("#top-controller").height(),n=50,t=window.innerHeight-e-n;renderer.setSize(window.innerWidth,t),camera.aspect=window.innerWidth/t,camera.updateProjectionMatrix()},modelRotation=function(){rotation&&(model.rotation.y+=.002,model.rotation.z+=.001)};$(document).ready(function(){$("#scale").change(function(){scale=$("#scale").val()}),$(".btn-success").on("click",function(){rotation=!0}),$(".btn-danger").on("click",function(){rotation=!1}),$(".btn-warning").on("click",function(){model.rotation.y=0,model.rotation.z=0}),$("#modelSelect").on("change",function(){var e=$("#modelSelect").val();"1"===e&&displayModel!==r2d2?(displayModel=r2d2,scene.children.pop(),initScene()):"2"===e&&displayModel!==milleniumFalcon?(displayModel=milleniumFalcon,scene.children.pop(),initScene()):displayModel!==x_wing&&(displayModel=x_wing,scene.children.pop(),initScene())})}),window.onload=initScene(),window.onresize=screenSize();