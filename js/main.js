const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

renderer.setClearColor( 0xFFF000)

const light = new THREE.AmbientLight( 0xFFFFFf ); // soft white light
scene.add( light );

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x33EEE5} );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 2;

const loader  = new THREE.GLTFLoader()

loader.load("../models/air_force(gltf)/scene.gltf", function(gltf){
    scene.add( gltf.scene );
    // gltf.scene.scale.set( .4, .4 ,.4); // decreas the size

    
})


function animate(){
    renderer.render( scene , camera );
    requestAnimationFrame( animate );
}
animate();

// window.addEventListener('resize', onWinowResize, false);

// function onWidnowsResize(){

//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize( window.innerWidth, window.innerHeight);
// }