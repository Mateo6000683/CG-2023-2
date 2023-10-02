// Configurar la escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 2;
camera.position.x = 2;
scene.add(camera);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear un grupo para la silla
const sillaGroup = new THREE.Group();

// Crear un cubo
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshNormalMaterial(); // Color verde
const cube = new THREE.Mesh(geometry, material);
const cube1 = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry, material);
const cube3 = new THREE.Mesh(geometry, material);
const cube4 = new THREE.Mesh(geometry, material);
const cylinderGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
const cylinderMaterial = new THREE.MeshNormalMaterial();
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.rotation.x = Math.PI / 2;
cube.scale.set(0.4, 0.1, 0.4);
cube1.scale.set(0.05, 0.5, 0.05);
cube2.scale.set(0.05, 0.5, 0.05);
cube3.scale.set(0.05, 0.5, 0.05);
cube4.scale.set(0.05, 0.5, 0.05);
cylinder.position.set(0, 0.6, -0.3);
cube.position.y = 0.1;
cube1.position.set(-0.35,-0.5,-0.35);
cube2.position.set(0.35,-0.5,-0.35);
cube3.position.set(-0.35,-0.5,0.35);
cube4.position.set(0.35,-0.5,0.35);

// Agregar todas las partes de la silla al grupo
sillaGroup.add(cube, cube1, cube2, cube3, cube4, cylinder);

// Agregar el grupo a la escena
scene.add(sillaGroup);

// Posicionar la cámara
camera.position.z = 5;

 // Configurar el fondo morado
 scene.background = new THREE.Color(0x800080); // Código de color morado
const animate = () => {
requestAnimationFrame(animate);

 // Rotar todo el grupo de la silla
sillaGroup.rotation.x += 0.01;
sillaGroup.rotation.y += 0.01;

renderer.render(scene, camera);
};

animate();
