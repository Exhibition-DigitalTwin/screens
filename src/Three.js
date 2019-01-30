import React, { Component } from 'react';
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
import OBJBaseRootModel from './objects/Base.obj';
import OBJBladesRootModel from './objects/Propeller.obj';
import OBJCaseRootModel from './objects/Ueberbau.obj';
import TWEEN from 'tween'

OBJLoader(THREE);
class ThreeScene extends Component {

    componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        this.loadedSimulation = false;
        this.deletedSimulation = false;

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
        this.camera.position.z = 500
        this.camera.position.y = 15
        this.camera.position.x = -29
        this.camera.rotation.x = -0.05

        //this.camera.lookAt(new THREE.Vector3(0, 12, 0))

        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setSize(width, height)
        this.renderer.setClearColor(0x000000, 0); // the default
        this.mount.appendChild(this.renderer.domElement)

        //ADD LIGHTS
        this.keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(100%, 100%, 75%)'), 1.0);
        this.keyLight.position.set(100, 0, 100);

        this.fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(80%, 100%, 75%)'), 0.5);
        this.fillLight.position.set(-100, 0, 100);

        this.backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        this.backLight.position.set(100, 0, -100).normalize();

        this.scene.add(this.keyLight);
        this.scene.add(this.fillLight);
        this.scene.add(this.backLight);

        //ADD MATERIALS 
        var materialWireframe = new THREE.MeshBasicMaterial({ color: 0xfffff, wireframe: true });
        this.materialWhite = new THREE.MeshPhongMaterial({ color: 0xffffff, opacity: 0, transparent: true, alphaTest: 0.5 })
        this.materialWhiteSimulation = new THREE.MeshPhongMaterial({ color: 0xffffff, opacity: 0, transparent: true, alphaTest: 0.5 })


        //ADD FADING OF ROOT MODEL
        this.tween = new TWEEN.Tween(this.materialWhite)
        this.tween.to({ opacity: 1 }, 300)
        this.tweenSimulation = new TWEEN.Tween(this.materialWhiteSimulation)
        this.tweenSimulation.to({ opacity: 1, transparent: false }, 300)
        //tween.start();

        this.THREE = THREE;

      
        this.createRootModel()
        this.createSecondModel()


        this.start()
    }


    // ------------------------------------------ OWN FUNCTIONS ----------------------------------------------

    rotateHeadRootModel(init, stop, speed) {
        this.speedRotationHead = speed;
        this.initRotationLoop = init;
        var rad = stop * 3.14159 / 180;
        var steps = rad / Math.sqrt(speed * speed);
        this.stopRotationLoop = steps;
    };

    changePositionHead(valueSlider) {
        this.head = this.scene.getObjectByName("caseRootModel");
        this.head.position.y = this.rootPositionHead + valueSlider;
    }

    moveCamera(x, y, z) {
        var destination = new THREE.Vector3(x, y, z);
        new TWEEN.Tween(this.camera.position)
            .to(destination, 600)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)
        // Camera look at does not work yet
        //.onUpdate(function () {
        //    this.camera.lookAt(look);
        //})

        //console.log(this.camera.position);
    }

    createRootModel() {
        //DEFINE MATERIALS 
        var materialWhite = this.materialWhite;

        //BASE ROOT MODEL
        const objLoader = new this.THREE.OBJLoader();
        objLoader.crossOrigin = '';
        objLoader.load(OBJBaseRootModel, (baseRootModel) => {
            //ADD MATERIALS
            baseRootModel.traverse(function (child) {
                var material = materialWhite;
                if (child instanceof THREE.Mesh) {
                    child.material = material;
                }
            });
            this.scene.add(baseRootModel);
            baseRootModel.position.y -= 40;
            baseRootModel.rotateY(-1.5708);
            baseRootModel.name = "baseRootModel";
        })

        //BLADES ROOT MODEL
        const objLoader1 = new this.THREE.OBJLoader();
        objLoader1.crossOrigin = '';
        objLoader1.load(OBJBladesRootModel, (bladesRootModel) => {
            // ADD MATERIALS
            //bladesRootModel.add(new THREE.AxesHelper(20));
            bladesRootModel.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            this.bottomParentBladesRootModel = new THREE.Object3D();
            bladesRootModel.position.y -= 44.3;
            bladesRootModel.rotateY(-1.5708);
            this.bottomParentBladesRootModel.add(bladesRootModel);
            this.bottomParentBladesRootModel.position.y += 4.3;
            this.bottomParentBladesRootModel.rotateY(1.5708);
            //this.bottomParentBladesRootModel.add(new THREE.AxesHelper(20));
            this.topParentBladesRootModel = new THREE.Object3D();
            //this.topParentBladesRootModel.add(new THREE.AxesHelper(20));
            this.topParentBladesRootModel.add(this.bottomParentBladesRootModel);
            this.topParentBladesRootModel.rotateY(-1.5708);
            this.scene.add(this.topParentBladesRootModel);
        })

        //CASE ROOT MODEL
        const objLoader2 = new this.THREE.OBJLoader();
        objLoader2.crossOrigin = '';
        objLoader2.load(OBJCaseRootModel, (caseRootModel) => {
            // ADD MATERIALS
            caseRootModel.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            this.scene.add(caseRootModel);
            caseRootModel.position.y -= 40;
            caseRootModel.rotateY(-1.5708);
            caseRootModel.name = "caseRootModel";
        })
    }

    createSecondModel() {
        //DEFINE MATERIALS 
        var materialWhite = this.materialWhiteSimulation;

        //BASE SIMULATION MODEL
        const objLoader3 = new this.THREE.OBJLoader();
        objLoader3.crossOrigin = '';
        objLoader3.load(OBJBaseRootModel, (baseSimulationModel) => {
            //ADD MATERIALS
            baseSimulationModel.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            this.scene.add(baseSimulationModel);
            baseSimulationModel.position.y -= 40;
            baseSimulationModel.rotateY(-1.5708);
            baseSimulationModel.name = "baseSimulationModel";
        })

        //BLADES SIMULATION MODEL
        const objLoader4 = new this.THREE.OBJLoader();
        objLoader4.crossOrigin = '';
        objLoader4.load(OBJBladesRootModel, (bladesSimulationModel) => {
            //ADD MATERIALS
            //bladesSimulationModel.add(new THREE.AxesHelper(20));
            bladesSimulationModel.name = "bladesSimulationModel";
            bladesSimulationModel.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            this.bottomParentBladesSimulationModel = new THREE.Object3D();
            this.bottomParentBladesSimulationModel.name = "bottomParentBladesSimulationModel";
            bladesSimulationModel.position.y -= 44.3;
            bladesSimulationModel.rotateY(-1.5708);
            this.bottomParentBladesSimulationModel.add(bladesSimulationModel);
            this.bottomParentBladesSimulationModel.position.y += 4.3;

            this.bottomParentBladesSimulationModel.rotateY(1.5708);
            //this.bottomParentBladesSimulationModel.add(new THREE.AxesHelper(20));
            this.topParentBladesSimulationModel = new THREE.Object3D();
            this.topParentBladesSimulationModel.name = "topParentBladesSimulationModel";
            //this.topParentBladesSimulationModel.add(new THREE.AxesHelper(20));
            this.topParentBladesSimulationModel.add(this.bottomParentBladesSimulationModel);
            this.topParentBladesSimulationModel.rotateY(-1.5708);
            this.scene.add(this.topParentBladesSimulationModel);
            this.loadedSimulation = true;
        })

        //CASE SIMULATION MODEL
        const objLoader5 = new this.THREE.OBJLoader();
        objLoader5.crossOrigin = '';
        objLoader5.load(OBJCaseRootModel, (caseSimulationModel) => {
            //ADD MATERIALS
            caseSimulationModel.name = "caseSimulationModel";
            caseSimulationModel.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            this.scene.add(caseSimulationModel);
            caseSimulationModel.position.y -= 40;
            caseSimulationModel.rotateY(-1.5708);
        })

    }

    resetPosition() {
        var destination = new THREE.Vector3(0, -40, 0);
        this.head = this.scene.getObjectByName("caseRootModel");
        new TWEEN.Tween(this.head.position)
            .to(destination, 1500)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)
    }

    showWindmill() {
        this.tween.start();
    }

    showSecondModel() {
        var destination = new THREE.Vector3(-40, -40, 0);
        var destination1 = new THREE.Vector3(-40, -44.3, 0);
        var destination2 = new THREE.Vector3(0, 4.3, 0);
        var destination3 = new THREE.Vector3(-40, 0, 0);
        this.case = this.scene.getObjectByName("caseSimulationModel");
        this.blades = this.scene.getObjectByName("bladesSimulationModel");
        this.base = this.scene.getObjectByName("baseSimulationModel");
        new TWEEN.Tween(this.case.position)
            .to(destination, 600)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)

        new TWEEN.Tween(this.base.position)
            .to(destination, 600)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)

        new TWEEN.Tween(this.bottomParentBladesSimulationModel.position)
            .to(destination2, 600)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)

        new TWEEN.Tween(this.topParentBladesSimulationModel.position)
            .to(destination3, 600)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)

        this.tweenSimulation.start();
    }

    deleteModel() {
        this.baseSimulationModel = this.scene.getObjectByName("baseSimulationModel");
        this.bladesSimulationModel = this.scene.getObjectByName("bladesSimulationModel");
        this.caseSimulationModel = this.scene.getObjectByName("caseSimulationModel");
        this.bottomParentBladesSimulationModel = this.scene.getObjectByName("bottomParentBladesSimulationModel");
        this.topParentBladesSimulationModel = this.scene.getObjectByName("topParentBladesSimulationModel");
        this.scene.remove(this.baseSimulationModel);
        this.scene.remove(this.bladesSimulationModel);
        this.scene.remove(this.caseSimulationModel);
        this.scene.remove(this.bottomParentBladesSimulationModel);
        this.scene.remove(this.topParentBladesSimulationModel);
        this.deletedSimulation = true;
    }

    // ------------------------------------------ THREE.JS FUNCTIONS ----------------------------------------------

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
        TWEEN.update();

        //TURNING BLADES OF ROOT MODEL
        if (this.loadedSimulation === true && this.deletedSimulation === false) {
            this.bottomParentBladesRootModel.rotateZ(this.speedRotationBlades);
            this.bottomParentBladesSimulationModel.rotateZ(this.speedRotationBlades);
        }
        else if (this.loadedSimulation === true){
            this.bottomParentBladesRootModel.rotateZ(this.speedRotationBlades);
        }

        //TURNING HEAD OF ROOT MODEL
        this.baseRootModel = this.scene.getObjectByName("baseRootModel");
        this.caseRootModel = this.scene.getObjectByName("caseRootModel");
        this.baseSimulationModel = this.scene.getObjectByName("baseSimulationModel");
        this.caseSimulationModel = this.scene.getObjectByName("caseSimulationModel");
        if (this.initRotationLoop < this.stopRotationLoop) {
            if(this.deletedSimulation === false) {
                this.baseSimulationModel.rotateY(this.speedRotationHead);
                this.caseSimulationModel.rotateY(this.speedRotationHead);
                this.topParentBladesSimulationModel.rotateY(this.speedRotationHead);
            }
            this.baseRootModel.rotateY(this.speedRotationHead);
            this.caseRootModel.rotateY(this.speedRotationHead);
            this.topParentBladesRootModel.rotateY(this.speedRotationHead);
            
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