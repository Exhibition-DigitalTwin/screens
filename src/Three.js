import React, { Component } from 'react';
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
import OBJ from './objects/Windrad_base_kopf.obj';
import OBJ1 from './objects/Windrad_flügel.obj';
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
        this.stopRotationLoop = 0

        //ADD SCENE
        this.scene = new THREE.Scene()
        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(
            10,
            width / height,
            0.1,
            1000
        )
        this.camera.position.z = 500
        this.camera.position.y = 15
        this.camera.position.x = -25
        this.camera.rotation.x = -0.05
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setSize(width, height)
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
        var materialWhite = new THREE.MeshPhongMaterial( {color: 0xffffff, opacity: 0, transparent: true} )

        this.tween = new TWEEN.Tween( materialWhite )
        this.tween.to( { opacity: 1 }, 1500 )
        this.tween.delay( 1500 )
        //tween.start();

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
            object0.rotateY(-0.785);
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
            object.position.y -= 43;
            object.rotateY(-0.785);
            this.parentBladesBottom.add(object);
            this.parentBladesBottom.position.y += 3;
            this.parentBladesBottom.rotateY(0.785);
            this.parentBladesTop = new THREE.Object3D();
            this.parentBladesTop.add(this.parentBladesBottom);
            this.parentBladesTop.rotateY(-0.785);
            this.scene.add(this.parentBladesTop);
            this.loaded = true;
            console.log("hi" + this.loaded);
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

    showWindmill(){
        this.tween.start();
    }

    animate = () => {
        //console.log(this.initRotationLoop);
        TWEEN.update();
        if (this.loaded) {
            this.parentBladesBottom.rotateZ(this.speedRotationBlades);
        }
        this.headBody = this.scene.getObjectByName("windrad");
        if (this.initRotationLoop < this.stopRotationLoop) {
            this.headBody.rotateY(this.speedRotationHead);
            this.parentBladesTop.rotateY(this.speedRotationHead);
            this.initRotationLoop++;
        }
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