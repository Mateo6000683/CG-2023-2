const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

const curve = new THREE.CatmullRomCurve3([
new THREE.Vector3(-2, 0, 0),
new THREE.Vector3(-1, 2, 0),
new THREE.Vector3(0, 0, 0),
 new THREE.Vector3(1, -1, 0),
 new THREE.Vector3(2, 0, 0)
 ]);
 var hemiLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.6);
hemiLight.position.set(0, 500, 0);
scene.add(hemiLight)
 var pointColor = "#ff5808";
 var directionalLight = new THREE.DirectionalLight(pointColor);
 directionalLight.position.set(-40, 60, -10);
 directionalLight.castShadow = true;
 directionalLight.shadowCameraNear = 2;
 directionalLight.shadowCameraFar = 200;
 directionalLight.shadowCameraLeft = -50;
 directionalLight.shadowCameraRight = 50;
 directionalLight.shadowCameraTop = 50;
 directionalLight.shadowCameraBottom = -50;
 
 directionalLight.distance = 0;
 directionalLight.intensity = 0.5;
 directionalLight.shadowMapHeight = 1024;
 directionalLight.shadowMapWidth = 1024;
 
 
 scene.add(directionalLight);
 

 const points = curve.getPoints(50);
 
 const geometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 100, 0.7, 20, false);
 
const material = new THREE.MeshToonMaterial({ color: 0x00ff00 });
const tube = new THREE.Mesh(geometry, material);


 scene.add(tube);


 const animate = function () {
requestAnimationFrame(animate);

 tube.rotation.x += 0.01;
 tube.rotation.y += 0.01;

 renderer.render(scene, camera);
};

animate();