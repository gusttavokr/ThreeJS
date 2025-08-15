import * as THREE from 'three';

const cena = new THREE.Scene(); // Criando cena
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); // Câmera

const renderizador = new THREE.WebGLRenderer(); // Renderizador
renderizador.setSize( window.innerWidth, window.innerHeight ); // Ajustando resolução
document.body.appendChild( renderizador.domElement );

const geometria = new THREE.BoxGeometry( 1, 2, 1 ); // Criando cubo
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); // Cores
const cubo = new THREE.Mesh( geometria, material ); // Material
cena.add( cubo ); // Adicionando o cubo a cena

camera.position.z = 5;


// Loop de renderização
function animate() {
    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;
  renderizador.render( cena, camera );
}
renderizador.setAnimationLoop( animate );