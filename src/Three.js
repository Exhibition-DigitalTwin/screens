import React, { Component } from 'react';
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
import OBJBaseRootModel from './objects/Base_Leer.obj';
import OBJBladesRootModel from './objects/Propeller.obj';
import OBJCaseRootModel from './objects/Ueberbau.obj';
import OBJWing1RootModel from './objects/Flügel_1.obj';
import OBJWing2RootModel from './objects/Flügel_2.obj';
import OBJWing3RootModel from './objects/Flügel_3.obj';
import OBJStepper1RootModel from './objects/NEMA17_1.obj';
import OBJStepper2RootModel from './objects/NEMA17_2.obj';
import OBJZahnradSRootModel from './objects/Zahnrad_Senkrecht.obj';
import OBJZahnradWRootModel from './objects/Zahnrad_Waagerecht.obj';
import OBJHubRootModel from './objects/Nabe.obj';
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

        this.rotation = false;

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
        this.wing1 = this.scene.getObjectByName("Wing1");
        this.wing2 = this.scene.getObjectByName("Wing2");
        this.wing3 = this.scene.getObjectByName("Wing3");
        this.stepper1 = this.scene.getObjectByName("Stepper1");
        this.stepper2 = this.scene.getObjectByName("Stepper2");
        this.zahnradS = this.scene.getObjectByName("ZahnradSenkrecht");
        this.zahnradW = this.scene.getObjectByName("ZahnradWaagerecht");
        this.head.position.y = this.rootPositionHead + (valueSlider / 1.5);
        this.bottomParentBladesRootModel.position.x = 0 + valueSlider;
        this.wing1.position.x = 0 - (valueSlider / 4);
        this.wing2.position.x = 0 + (valueSlider / 8);
        this.wing2.position.y = -44.3 - (valueSlider / 4);
        this.wing3.position.x = 0 + (valueSlider / 8);
        this.wing3.position.y = -44.3 + (valueSlider / 4);
        
        if(valueSlider >= 5){
            this.stepper1.position.x = 0 - ((valueSlider-5) / 4);
            this.stepper1.position.y = -40 + ((valueSlider-5) / 6);
            this.stepper2.position.x = 0 + ((valueSlider-5) / 4);
            this.stepper2.position.y = -40 + ((valueSlider-5) / 6);
            this.zahnradS.position.y = -40 + ((valueSlider-5) / 6);
            this.zahnradS.position.x = 0 + ((valueSlider-5) / 8);
            this.zahnradS.position.z = 0 + ((valueSlider-5) / 8);
            this.zahnradW.position.y = -40 + ((valueSlider-5) / 8);
        }
        
    }

    resetPosition() {
        var destinationHead = new THREE.Vector3(0, -40, 0);
        var destinationBottomParentBladesRootModel = new THREE.Vector3(0, 4.3, 0);
        var destinationWingRootModel = new THREE.Vector3(0, -44.3, 0);
        var destinationStepperRootModel = new THREE.Vector3(0, -40, 0);
        var destinationZahnradRootModel = new THREE.Vector3(0, -40, 0);
        
        this.head = this.scene.getObjectByName("caseRootModel");
        this.wing1 = this.scene.getObjectByName("Wing1");
        this.wing2 = this.scene.getObjectByName("Wing2");
        this.wing3 = this.scene.getObjectByName("Wing3");
        this.stepper1 = this.scene.getObjectByName("Stepper1");
        this.stepper2 = this.scene.getObjectByName("Stepper2");
        this.zahnradS = this.scene.getObjectByName("ZahnradSenkrecht");
        this.zahnradW = this.scene.getObjectByName("ZahnradWaagerecht");

        new TWEEN.Tween(this.head.position)
            .to(destinationHead, 1500)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)
        new TWEEN.Tween(this.bottomParentBladesRootModel.position)
            .to(destinationBottomParentBladesRootModel, 1500)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)
        new TWEEN.Tween(this.wing1.position)
            .to(destinationWingRootModel, 1500)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)
        new TWEEN.Tween(this.wing2.position)
            .to(destinationWingRootModel, 1500)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)
        new TWEEN.Tween(this.wing3.position)
            .to(destinationWingRootModel, 1500)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)
        new TWEEN.Tween(this.stepper1.position)
            .to(destinationStepperRootModel, 1200)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)
        new TWEEN.Tween(this.stepper2.position)
            .to(destinationStepperRootModel, 1200)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)
        new TWEEN.Tween(this.zahnradS.position)
            .to(destinationZahnradRootModel, 1200)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)
        new TWEEN.Tween(this.zahnradW.position)
            .to(destinationZahnradRootModel, 1200)
            .start()
            .easing(TWEEN.Easing.Cubic.InOut)
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
        const objLoader15 = new this.THREE.OBJLoader();
        objLoader15.crossOrigin = '';
        objLoader15.load(OBJStepper1RootModel, (stepper) => {
            // ADD MATERIALS
            //bladesRootModel.add(new THREE.AxesHelper(20));
            stepper.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            stepper.name = "Stepper1";
            stepper.position.y -= 40;
            stepper.rotateY(-1.5708);
           
            this.scene.add(stepper);
        })
        
        const objLoader16 = new this.THREE.OBJLoader();
        objLoader16.crossOrigin = '';
        objLoader16.load(OBJStepper2RootModel, (stepper) => {
            // ADD MATERIALS
            //bladesRootModel.add(new THREE.AxesHelper(20));
            stepper.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            stepper.name = "Stepper2";
            stepper.position.y -= 40;
            stepper.rotateY(-1.5708);
            
            this.scene.add(stepper);
        })

        const objLoader17 = new this.THREE.OBJLoader();
        objLoader17.crossOrigin = '';
        objLoader17.load(OBJZahnradSRootModel, (zahnrad) => {
            // ADD MATERIALS
            //zahnrad.add(new THREE.AxesHelper(20));
            zahnrad.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            zahnrad.name = "ZahnradSenkrecht";
            zahnrad.position.y -= 40;
            zahnrad.rotateY(-1.5708);
            
            this.scene.add(zahnrad);
        })

        const objLoader18 = new this.THREE.OBJLoader();
        objLoader18.crossOrigin = '';
        objLoader18.load(OBJZahnradWRootModel, (zahnrad) => {
            // ADD MATERIALS
            //zahnrad.add(new THREE.AxesHelper(20));
            zahnrad.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            zahnrad.name = "ZahnradWaagerecht";
            zahnrad.position.y -= 40;
            zahnrad.rotateY(-1.5708);
            
            this.scene.add(zahnrad);
        })

        const objLoader30 = new this.THREE.OBJLoader();
        objLoader30.crossOrigin = '';
        objLoader30.load(OBJBaseRootModel, (baseRootModel) => {
            //ADD MATERIALS
            baseRootModel.traverse(function (child) {
                var material = materialWhite;
                if (child instanceof THREE.Mesh) {
                    child.material = material;
                }
            });
            baseRootModel.position.y -= 40;
            baseRootModel.rotateY(-1.5708);
            this.parentBaseRootModel = new THREE.Object3D();  
            this.parentBaseRootModel.add(baseRootModel)
            //this.parentBaseRootModel.add(new THREE.AxesHelper(20));
            this.scene.add(this.parentBaseRootModel);          
        })

        //BLADES ROOT MODEL
        const objLoader10 = new this.THREE.OBJLoader();
        objLoader10.crossOrigin = '';
        objLoader10.load(OBJWing1RootModel, (wing) => {
            // ADD MATERIALS
            //bladesRootModel.add(new THREE.AxesHelper(20));
            wing.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            wing.name = "Wing1";
            wing.position.y -= 44.3;
            wing.rotateY(-1.5708);
            this.scene.add(wing);
        })
        const objLoader11 = new this.THREE.OBJLoader();
        objLoader11.crossOrigin = '';
        objLoader11.load(OBJWing2RootModel, (wing) => {
            // ADD MATERIALS
            //bladesRootModel.add(new THREE.AxesHelper(20));
            wing.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            wing.name = "Wing2";
            wing.position.y -= 44.3;
            wing.rotateY(-1.5708);
            this.scene.add(wing);
        })
        const objLoader12 = new this.THREE.OBJLoader();
        objLoader12.crossOrigin = '';
        objLoader12.load(OBJWing3RootModel, (wing) => {
            // ADD MATERIALS
            //wing.add(new THREE.AxesHelper(20));
            wing.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            wing.name = "Wing3";
            wing.position.y -= 44.3;
            wing.rotateY(-1.5708);
            this.scene.add(wing);
            
        })
        const objLoader13 = new this.THREE.OBJLoader();
        objLoader13.crossOrigin = '';
        objLoader13.load(OBJHubRootModel, (hub) => {
            // ADD MATERIALS
            //bladesRootModel.add(new THREE.AxesHelper(20));
            hub.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            hub.name = "Hub";
            hub.position.y -= 44.3;
            hub.rotateY(-1.5708);
            this.scene.add(hub);
        })
        const objLoader1 = new this.THREE.OBJLoader();
        objLoader1.crossOrigin = '';
        objLoader1.load(OBJBladesRootModel, (bladesRootModel) => {
            // ADD MATERIALS
            bladesRootModel.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = materialWhite;
                }
            });
            this.hub = this.scene.getObjectByName("Hub");
            this.wing1 = this.scene.getObjectByName("Wing1");
            this.wing2 = this.scene.getObjectByName("Wing2");
            this.wing3 = this.scene.getObjectByName("Wing3");
            this.bottomParentBladesRootModel = new THREE.Object3D();
            this.bottomParentBladesRootModel.add(this.hub);
            this.bottomParentBladesRootModel.add(this.wing1);
            this.bottomParentBladesRootModel.add(this.wing2);
            this.bottomParentBladesRootModel.add(this.wing3);
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

    startRotation() {
        this.rotation = true;
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
        if (this.loadedSimulation === true && this.deletedSimulation === false && this.rotation === true) {
            this.bottomParentBladesRootModel.rotateZ(this.speedRotationBlades);
            this.bottomParentBladesSimulationModel.rotateZ(this.speedRotationBlades);
        }
        else if (this.loadedSimulation === true && this.rotation === true){
            this.bottomParentBladesRootModel.rotateZ(this.speedRotationBlades);
        }

        //TURNING HEAD OF ROOT MODEL
        this.caseRootModel = this.scene.getObjectByName("caseRootModel");
        this.baseSimulationModel = this.scene.getObjectByName("baseSimulationModel");
        this.caseSimulationModel = this.scene.getObjectByName("caseSimulationModel");
        this.stepper1 = this.scene.getObjectByName("Stepper1");
        this.stepper2 = this.scene.getObjectByName("Stepper2");
        this.zahnradS = this.scene.getObjectByName("ZahnradSenkrecht");
        this.zahnradW = this.scene.getObjectByName("ZahnradWaagerecht");
        if (this.initRotationLoop < this.stopRotationLoop) {
            if(this.deletedSimulation === false) {
                this.baseSimulationModel.rotateY(this.speedRotationHead);
                this.caseSimulationModel.rotateY(this.speedRotationHead);
                this.topParentBladesSimulationModel.rotateY(this.speedRotationHead);
            }
            this.parentBaseRootModel.rotateY(this.speedRotationHead);
            this.stepper1.rotateY(this.speedRotationHead);
            this.stepper2.rotateY(this.speedRotationHead);
            this.zahnradS.rotateY(this.speedRotationHead);
            this.zahnradW.rotateY(this.speedRotationHead);
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