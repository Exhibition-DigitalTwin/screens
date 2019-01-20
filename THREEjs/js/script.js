var parentBladesBottom
var parentBladesTop

var loaded = false;

var speedRotationBlades = -0.01;
var speedRotationHead = 0;

var initRotationLoop = 0;
var stopRotationLoop = 0;

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 200;

renderer = new THREE.WebGLRenderer({ antialiasing: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// -------------------------- Orbit control for zooming and rotating view --------------------------------------

//var controls = new THREE.OrbitControls(camera, renderer.domElement);
//controls.enableDamping = true;
//controls.dampingFactor = 0.25;
//controls.enableZoom = true;


// -------------------------- Lights and shading of this scene --------------------------------------

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);


// -------------------------- Loading and early positioning of obj files --------------------------------------

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('/objects/');
mtlLoader.setPath('/objects/');
mtlLoader.load('windrad_base_kopf.mtl', function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('/objects/');
    objLoader.load('windrad_base_kopf.obj', function (object) {
        scene.add(object);
        object.position.y -= 40;
        object.name = "windrad";
    });
});
mtlLoader.load('windrad_flügel.mtl', function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('/objects/');
    objLoader.load('windrad_flügel.obj', function (object) {

        parentBladesBottom = new THREE.Object3D();
        object.position.y -= 43;
        object.rotateY(-0.785);
        parentBladesBottom.add(object);
        parentBladesBottom.position.y += 3;
        parentBladesBottom.rotateY(0.785);
        //parentBladesBottom.add(new THREE.AxesHelper(20));
        parentBladesTop = new THREE.Object3D();
        parentBladesTop.add(parentBladesBottom);
        scene.add(parentBladesTop);
        loaded = true;

    });
});

function rotationLoop(init, stop, speed) {
    speedRotationHead = speed;
    initRotationLoop = init;
    var rad = stop * Math.PI / 180;
    var steps = rad / speed;
    console.log("steps" + steps);
    stopRotationLoop = steps;
};

var animate = function () {
    requestAnimationFrame(animate);
    var headBody = scene.getObjectByName("windrad");
    if (loaded) {
        parentBladesBottom.rotateZ(speedRotationBlades);
    }
    if (initRotationLoop < stopRotationLoop) {
        headBody.rotateY(speedRotationHead);
        parentBladesTop.rotateY(speedRotationHead);
        initRotationLoop++;
    }
    //controls.update();
    renderer.render(scene, camera);
};

animate();