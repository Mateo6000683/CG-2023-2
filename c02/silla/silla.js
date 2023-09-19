const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear el asiento de la silla (un cubo)
const seatGeometry = new THREE.BoxGeometry(4, 0.2, 4); // Ancho, alto y profundidad del asiento
const seatMaterial = new THREE.MeshNormalMaterial({ color: 0x0000FF });
const seat = new THREE.Mesh(seatGeometry, seatMaterial);
seat.position.set(0, 2, 0); // Coloca el asiento sobre el suelo
scene.add(seat);

// Crear el respaldo de la silla (un cilindro)
const backrestGeometry = new THREE.CylinderGeometry(1, 1, 10, 50); // Radio y altura del respaldo
const backrestMaterial = new THREE.MeshNormalMaterial({ color: 0x0000ff });
const backrest = new THREE.Mesh(backrestGeometry, backrestMaterial);
backrest.rotation.x = Math.PI / 2; // Orienta el respaldo en el plano x/y
backrest.position.set(0, 3, -1.8); // Coloca el respaldo detrás del asiento
scene.add(backrest);

// Agregar patas de la silla (cuatro cilindros)
const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 32); // Radio y altura de las patas
const legMaterial = new THREE.MeshNormalMaterial({ color: 0x00ff00 });

const frontLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
frontLeftLeg.position.set(-1.5, 1, -1.5); // Coloca la pata delantera izquierda
scene.add(frontLeftLeg);

const frontRightLeg = new THREE.Mesh(legGeometry, legMaterial);
frontRightLeg.position.set(1.5, 1, -1.5); // Coloca la pata delantera derecha
scene.add(frontRightLeg);

const backLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
backLeftLeg.position.set(-1.5, 1, 1.5); // Coloca la pata trasera izquierda
scene.add(backLeftLeg);

const backRightLeg = new THREE.Mesh(legGeometry, legMaterial);
backRightLeg.position.set(1.5, 1, 1.5); // Coloca la pata trasera derecha
scene.add(backRightLeg);

camera.position.z = 7;
camera.position.y = 2;
camera.rotation.z=-1;

function animate() {
    requestAnimationFrame(animate);

    // Rotar la silla
    //seat.rotation.y += 0.01;
    backrest.rotation.y += 0.01;
    //frontLeftLeg.rotation.z += 0.01;
    //backRightLeg.rotation.z +=0.01;
    //backLeftLeg.rotation.x +=0.01;
    //frontRightLeg.rotation.x +=0.01;
    renderer.render(scene, camera);
}

animate();
