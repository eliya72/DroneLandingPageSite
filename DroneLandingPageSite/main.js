import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import fileUrl from './public/DroneLandingPage/bob46.gltf';

let container = document.querySelector(".image-drone-main__wrapper");
let container2 = document.querySelector(".image-drone-main__wrapper-double");

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xFFFFFF);
container.appendChild(renderer.domElement);

const renderer2 = new THREE.WebGLRenderer({ antialias: true });
renderer2.outputColorSpace = THREE.SRGBColorSpace;
renderer2.setPixelRatio(window.devicePixelRatio);
renderer2.setClearColor(0xFFFFFF);
container2.appendChild(renderer2.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(1, 1, 1);
camera.lookAt(scene.position);

const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera2.position.set(1, 1, 1);
camera2.lookAt(scene2.position);

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);
scene2.add(light.clone());

const directionalLight = new THREE.DirectionalLight(0xffffff, 7);
directionalLight.position.set(1, 20, 0).normalize();
scene.add(directionalLight);
scene2.add(directionalLight.clone());


const spotLight = new THREE.SpotLight(0xffffff, 2);
spotLight.position.set(2, 0, 0);
spotLight.castShadow = true;
scene.add(spotLight);
scene2.add(spotLight.clone());


let model, model2;
let mixer, mixer2;
let clock = new THREE.Clock();

const loader = new GLTFLoader();


loader.load('DroneLandingPage/bob46.gltf', (gltf) => {
    model = gltf.scene;
    scene.add(model);

    model.scale.set(4.5, 4.5, 4.5);
    model.rotation.y = (- Math.PI / 2) - 1.2;
    model.rotation.z = Math.PI / 14;
    model.rotation.x = Math.PI / 14;

    mixer = new THREE.AnimationMixer(model);

    gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
    });

    // window.dispatchEvent(new Event('resize'));
}, undefined, function (error) {
    console.error("Error loading model:", error);
});

loader.load('DroneLandingPage/bob46.gltf', (gltf) => {
    model2 = gltf.scene;
    scene2.add(model2);

    model2.scale.set(4.5, 4.5, 4.5);
    model2.rotation.y = (- Math.PI / 2) - 1.2;
    model2.rotation.z = Math.PI / 14;
    model2.rotation.x = Math.PI / 14;

    mixer2 = new THREE.AnimationMixer(model2);

    gltf.animations.forEach((clip) => {
        mixer2.clipAction(clip).play();
    });

    // window.dispatchEvent(new Event('resize'));
}, undefined, function (error) {
    console.error("Error loading model:", error);
});


let animate = () => {
    requestAnimationFrame(animate);

    let delta = clock.getDelta()

    if (mixer) {
        mixer.update(delta);
    }

    if (mixer2) {
        mixer2.update(delta);
    }

    renderer.render(scene, camera);
    renderer2.render(scene2, camera2);
};

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();

// window.addEventListener("resize", () => {
    // const { width } = container.getBoundingClientRect();
    // let height = window.innerHeight;

    // renderer.setSize(width, height);
    
    // camera.aspect = width / height;
    // camera.updateProjectionMatrix();

    // if (model) {
    //     let scaleFactor = Math.max(window.innerWidth / 500, 1);
    //     model.scale.set(scaleFactor, scaleFactor, scaleFactor);
    // }
// });

// window.dispatchEvent(new Event('resize'));


// window.addEventListener('resize', () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight / 1.35;

//     renderer.setSize(width, height);
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();
// });


const width = window.innerWidth / 1.3;
const height = window.innerHeight / 1.3;
renderer.setSize(width, height);
camera.aspect = width / height;
camera.updateProjectionMatrix();

const width2 = window.innerWidth;
const height2 = window.innerHeight / 3;
renderer2.setSize(width2, height2);
camera2.aspect = width2 / height2;
camera2.updateProjectionMatrix();


animate();
