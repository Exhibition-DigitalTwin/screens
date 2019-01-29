import React, { Component } from 'react';
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
import OBJ from './objects/Base.obj';
import OBJ1 from './objects/Propeller.obj';
import OBJ2 from './objects/Ueberbau.obj';
import MAT from './objects/Windrad_base_kopf.mtl';
import TWEEN from 'tween'

OBJLoader(THREE);
class ThreeScene extends Component {
    componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        this.loaded = false;

        this.speedRotationBlades = -0.01
        this.speedRotationHead = 0

        this.initRotationLoop = 0;
        this.stopRotationLoop = 0;

        this.rootPositionHead = -40;
        this.newPositionHead = -40;

        //ADD SCENE
        this.scene = new THREE.Scene()
        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(
            10,
            width / height,
            0.1,
            1000
        )
        //this.scene.background = new THREE.Color( 0, 0, 0 );
        this.camera.position.z = 500
        this.camera.position.y = 15
        this.camera.position.x = -25
        this.camera.rotation.x = -0.05
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setSize(width, height)
        this.renderer.setClearColor(0x000000, 0); // the default
        this.mount.appendChild(this.renderer.domElement)

        this.keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(100%, 100%, 75%)'), 1.0);
        this.keyLight.position.set(100, 0, 100);

        this.fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(80%, 100%, 75%)'), 0.5);
        this.fillLight.position.set(-100, 0, 100);

        this.backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        this.backLight.position.set(100, 0, -100).normalize();

        this.scene.add(this.keyLight);
        this.scene.add(this.fillLight);
        this.scene.add(this.backLight);

        var MTLLoader = require('three-mtl-loader')
        const mtlLoader = new MTLLoader();
        mtlLoader.load(MAT, function (materials) {
            materials.preload();
            materials.name = "white";
        });

        var materialWireframe = new THREE.MeshBasicMaterial({ color: 0xfffff, wireframe: true });
        var materialWhite = new THREE.MeshPhongMaterial({ color: 0xffffff, opacity: 0, transparent: true })

        this.tween = new TWEEN.Tween(materialWhite)
        this.tween.to({ opacity: 1 }, 1500)
        this.tween.delay(1500)
        //tween.start();


        //--------------------------------- Try moving camera -----------------------------
        //this.from = {
        //    x: this.camera.position.x,
        //    y: this.camera.position.y,
        //    z: this.camera.position.z
        //};
        //
        //this.to = {
        //    x: 600,
        //    y: 20,
        //    z: -30
        //};
        //this.tweenCamera = new TWEEN.Tween(this.from)
        //this.tweenCamera.to(this.to, 600)
        //this.tweenCamera.easing(TWEEN.Easing.Linear.None)
        //this.tweenCamera.onUpdate(function () {
        //    this.camera.position.y = this.this.y;
        //    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        //})
        //this.tweenCamera.onComplete(function () {
        //    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        //})
        //
        //
        this.THREE = THREE;
        const objLoader = new this.THREE.OBJLoader();
        objLoader.crossOrigin = '';
        objLoader.load(OBJ, (object0) => {

            // adding Material
            object0.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });

            this.scene.add(object0);
            object0.position.y -= 40;
            object0.rotateY(-1.5708);
            object0.name = "windrad";

        })


        const objLoader1 = new this.THREE.OBJLoader();
        objLoader1.crossOrigin = '';
        objLoader1.load(OBJ1, (object) => {

            // adding Material
            object.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });

            this.parentBladesBottom = new THREE.Object3D();
            object.position.y -= 44.3;
            object.rotateY(-1.5708);
            this.parentBladesBottom.add(object);
            this.parentBladesBottom.position.y += 4.3;
            this.parentBladesBottom.rotateY(1.5708);
            //this.parentBladesBottom.add(new THREE.AxesHelper(20));
            this.parentBladesTop = new THREE.Object3D();
            this.parentBladesTop.add(this.parentBladesBottom);
            this.parentBladesTop.rotateY(-1.5708);
            this.scene.add(this.parentBladesTop);
            this.loaded = true;
            console.log("hi" + this.loaded);
        })


        const objLoader2 = new this.THREE.OBJLoader();
        objLoader2.crossOrigin = '';
        objLoader2.load(OBJ2, (object1) => {

            // adding Material
            object1.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });

            this.scene.add(object1);
            object1.position.y -= 40;
            object1.rotateY(-1.5708);
            object1.name = "Ueberbau";

        })



        this.start()
    }
    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }
    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }
    stop = () => {
        cancelAnimationFrame(this.frameId)
    }

    handleClickThree(init, stop, speed) {
        this.speedRotationHead = speed;
        this.initRotationLoop = init;
        var rad = stop * 3.14159 / 180;
        var steps = rad / Math.sqrt(speed * speed);
        this.stopRotationLoop = steps;
        //console.log("steps" + steps);
    };

    changePositionHead(valueSlider) {
        console.log(valueSlider);
        this.head = this.scene.getObjectByName("Ueberbau");
        this.head.position.y = this.rootPositionHead + valueSlider;
    }

    resetPosition() {
        var destination = new THREE.Vector3(0, -40, 0);
        this.head = this.scene.getObjectByName("Ueberbau");
        new TWEEN.Tween(this.head.position)
            .to(destination, 1500) // destinationPoint is the object of destination
            .start();
        console.log("reset");
    }

    showWindmill() {
        this.tween.start();
    }

    //showSimulation() {
    //    this.tweenCamera.start();
    //}

    animate = () => {
        //console.log(this.initRotationLoop);
        TWEEN.update();
        if (this.loaded) {
            this.parentBladesBottom.rotateZ(this.speedRotationBlades);
        }
        this.headBody = this.scene.getObjectByName("windrad");
        this.head = this.scene.getObjectByName("Ueberbau");
        if (this.initRotationLoop < this.stopRotationLoop) {
            this.headBody.rotateY(this.speedRotationHead);
            this.head.rotateY(this.speedRotationHead);
            this.parentBladesTop.rotateY(this.speedRotationHead);
            this.initRotationLoop++;
        }
        //this.head.translateY(this.newPositionHead);
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }
    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }
    render() {
        return (
            <div
                style={{ width: '1920px', height: '1080px' }}
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
}
export default ThreeScene