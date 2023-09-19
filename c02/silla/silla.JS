const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear el asiento de la silla (un cubo)
const seatGeometry = new THREE.BoxGeometry(4, 0.2, 4); // Ancho, alto y profundidad del asiento
const seatMaterial = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
const seat = new THREE.Mesh(seatGeometry, seatMaterial);
seat.position.set(0, 2, 0); // Coloca el asiento sobre el suelo
scene.add(seat);



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

function animate() {
    requestAnimationFrame(animate);

    // Rotar la silla
    seat.rotation.y += 0.01;
    backrest.rotation.y += 0.01;
    frontLeftLeg.rotation.z += 0.01;
    backRightLeg.rotation.z +=0.01;
    backLeftLeg.rotation.y +=0.01;
    frontRightLeg.rotation.x +=0.01;
    renderer.render(scene, camera);
}

animate();
