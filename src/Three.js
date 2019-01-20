import React, { Component } from 'react';
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
import OBJ from './objects/Windrad_base_kopf.obj';
import MAT from './objects/Windrad_base_kopf.mtl';
OBJLoader(THREE);
class ThreeScene extends Component {
    componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        var parentBladesBottom
        var parentBladesTop

        var loaded = false;

        var speedRotationBlades = -0.01
        var speedRotationHead = 0

        var initRotationLoop = 0
        var stopRotationLoop = 0

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
        var materials = this.scene.getObjectByName("white");
        const objLoader = new this.THREE.OBJLoader();
        //objLoader.setMaterials(new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide }));
        objLoader.crossOrigin = '';
        objLoader.load(OBJ, (object) => {
            console.log("hi");
            object.material = materials;
            this.scene.add(object);
            object.position.y -= 40;
            object.add(new THREE.AxesHelper(2000));
        });




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
    animate = () => {

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