import React, { Component } from 'react';
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
import OBJ from './objects/Windrad_base_kopf.obj';
import OBJ1 from './objects/Windrad_flügel.obj';
import MAT from './objects/Windrad_base_kopf.mtl';
OBJLoader(THREE);
class ThreeScene extends Component {
    componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        this.loaded = false;

        this.speedRotationBlades = -0.01
        this.speedRotationHead = 0

        this.initRotationLoop = 0
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
        this.camera.position.z = 400
        this.camera.rotation.x = -0.05
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)

        this.keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        this.keyLight.position.set(100, 0, 100);

        this.fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
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

        this.THREE = THREE;
        const objLoader = new this.THREE.OBJLoader();
        //objLoader.setMaterials(this.materials);
        objLoader.crossOrigin = '';
        objLoader.load(OBJ, (object0) => {
            //object.material = materials;
            this.scene.add(object0);
            object0.position.y -= 40;
            //object0.add(new THREE.AxesHelper(2000));
            object0.name = "windrad";
        })

        const objLoader1 = new this.THREE.OBJLoader();
        //objLoader.setMaterials(this.materials);
        objLoader1.crossOrigin = '';
        objLoader1.load(OBJ1, (object) => {
            this.parentBladesBottom = new THREE.Object3D();
            object.position.y -= 43;
            object.rotateY(-0.785);
            this.parentBladesBottom.add(object);
            this.parentBladesBottom.position.y += 3;
            this.parentBladesBottom.rotateY(0.785);
            //parentBladesBottom.add(new THREE.AxesHelper(20));
            this.parentBladesTop = new THREE.Object3D();
            this.parentBladesTop.add(this.parentBladesBottom);
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

    handleClick(init, stop, speed) {
        this.speedRotationHead = speed;
        this.initRotationLoop = init;
        var rad = stop * 3.14159 / 180;
        var steps = rad / Math.sqrt(speed * speed);
        console.log("steps" + steps);
        this.stopRotationLoop = steps;
    };

    animate = () => {

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
            <div>
                <div>
                    <button id="ninetyDeg" onClick={() => this.handleClick(0, 90, 0.01)}>
                        Turn 90°
                    </button>
                </div>
                <div>
                    <button id="onehundretEightyDeg" onClick={() => this.handleClick(0, 180, 0.01)}>
                        Turn 180°
                    </button>
                </div>
                <div>
                    <button id="minusNinetyDeg" onClick={() => this.handleClick(0, 90, -0.01)}>
                        Turn -90°
                    </button>
                </div>
                <div>
                    <button id="minusOnehundretEightyDeg" onClick={() => this.handleClick(0, 180, (-0.01))}>
                        Turn -180°
                    </button>
                </div>
                <div
                    style={{ width: '1920px', height: '1080px' }}
                    ref={(mount) => { this.mount = mount }}
                />
            </div >
        )
    }
}
export default ThreeScene