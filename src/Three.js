import React, { Component } from 'react';
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
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
        this.camera.position.z = 200
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)

        this.keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        this.keyLight.position.set(-100, 0, 100);

        this.fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        this.fillLight.position.set(100, 0, 100);

        this.backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        this.backLight.position.set(100, 0, -100).normalize();

        this.scene.add(this.keyLight);
        this.scene.add(this.fillLight);
        this.scene.add(this.backLight);

        this.material = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: false });

        this.THREE = THREE;
        const objLoader = new this.THREE.OBJLoader();
        objLoader.setPath('C:/Users/magge/OneDrive/Semester_4/Sem4.Schwerpunkte_1/04_Code_Github/screens/src/');
        objLoader.load('Windrad_base_kopf.obj', (object) => {
            this.scene.add(object);
            this.object.position.y -= 40;
            this.object.add(new THREE.AxesHelper(200));
            this.object.name = "windrad";
            if (object instanceof THREE.Mesh) object.material = this.material;
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