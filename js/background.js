//background
//render
'use strict';

const canvas = document.querySelector('#canvas');
const body = document.querySelector('#body');
const width = canvas.offsetWidth;
const height = canvas.offsetHeight;


const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: true,
	alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.setSize(width, height);
renderer.setClearColor(0xffffff, 0.0);

//scene
const scene = new THREE.Scene();
//for detect scene in chrome three.js inspector 
window.scene = scene;

//camera
const camera = new THREE.PerspectiveCamera(10, width / height, 0.1, 10000);
camera.position.set(0, 0, 15);

//light
let light = new THREE.HemisphereLight(0xffffff, 0xA9E7DA, 1);
light.position.set(0, 1, 0);
scene.add(light);

let light1 = new THREE.DirectionalLight(0x36E782, 0.1);
light1.position.set(200, 300, 400);
scene.add(light1);

let light2 = new THREE.HemisphereLight(0xffffff, 0xA9E7DA, 0.01);
light2.position.set(-200, 300, 400);
scene.add(light2);

//geometry
const sphere_geometry = new THREE.SphereGeometry(1, 128, 128);
let material = new THREE.MeshLambertMaterial({
	color: 0xA9E7DA
});

const sphere = new THREE.Mesh(sphere_geometry, material);
sphere.position.set(0, 0, 0);
scene.add(sphere);

//make some noise
function update() {
	let k = 1.1;
	for (let i = 0; i < sphere.geometry.vertices.length; i++) {
		let p = sphere.geometry.vertices[i];
		let time = performance.now() * 0.001;
		p.normalize().multiplyScalar(1 + 0.2 * noise.perlin3(p.x * k, p.y * k, p.z * k + time));
	}

	sphere.geometry.computeVertexNormals();
	sphere.geometry.normalsNeedUpdate = true;
	sphere.geometry.verticesNeedUpdate = true;
}

//make it move
function animate() {
	update();
	// controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(animate);

}

//make is responive
function onResize() {
	canvas.style.width = '';
	canvas.style.height = '';
	const width = canvas.offsetWidth;
	const height = canvas.offsetHeight;
	camera.aspect = width / height;
	camera.updateProjectionMatrix();

	renderer.setSize(width, height);
}

let resizeTm;
window.addEventListener("resize", function () {
	resizeTm = clearTimeout(resizeTm);
	resizeTm = setTimeout(onResize, 100);
});

//make it work
window.requestAnimationFrame(animate);

//make it interactive
let mouse = new THREE.Vector2();

function onMouseMove() {
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
	TweenMax.to(
		camera.position,
		1,
		{
			x: mouse.x / 2,
			y: mouse.y / 2,
		});
}
window.addEventListener('mousemove', onMouseMove, true);

// bakcground change
// home page
const home = document.querySelector('#btn_1');
home.addEventListener('click', homeMove);
function homeMove() {

    body.classList.add('main');
    body.classList.remove('about', 'work', 'contact');

    renderer.setClearColor(0xffffff, 0.0);
    material.color.setHex(0xA9E7DA);

    light.color.setHex(0xffffff);
    light.groundColor.setHex(0xA9E7DA);
    light.intensity = 1;
    light.position.set(0, 1, 0);

    light1.color.setHex(0x36E782);
    light1.intensity = 0.1;
    light1.position.set(200, 300, 400);

    light2.color.setHex(0xffffff);
    light2.groundColor.setHex(0xA9E7DA);
    light2.intensity = 0.01;
    light2.position.set(-200, 300, 400);

    TweenMax.to(
        camera.position,
        1,
        {   
            z: 15
		});
    TweenMax.to(
        sphere.position,
        1,
        {   
            x: 0,
            y: 0
		});
}

//about page
const about = document.querySelector('#btn_2');
about.addEventListener('click', aboutMove);
function aboutMove() {

    body.classList.add('about');
    body.classList.remove('main', 'work', 'contact');

    renderer.setClearColor(0xffffff, 0.0);
    material.color.setHex(0x54a2e6);

    light.color.setHex(0xffffff);
    light.groundColor.setHex(0x91BCE1);
    light.intensity = 0.95;
    light.position.set(0, 1, 0);

    light1.color.setHex(0xC3E3FF);
    light1.intensity = 0.14;
    light1.position.set(200, 300, 400);

    light2.color.setHex(0xffffff);
    light2.groundColor.setHex(0x54a2e6);
    light2.intensity = 0.2;
    light2.position.set(-200, 300, 400);
    
    TweenMax.to(
        camera.position,
        1,
        {   
            z: 10
        });
    TweenMax.to(
        sphere.position,
        1,
        {   
            x: -0.7,
            y: 0.3
		});
};

//work page
const work = document.querySelector('#btn_3');
work.addEventListener('click', workMove);
function workMove() {

    body.classList.add('work');
    body.classList.remove('main', 'about', 'contact');

    renderer.setClearColor(0xffffff, 0.0);
    material.color.setHex(0xbd8dfd);

    light.color.setHex(0xffffff);
    light.groundColor.setHex(0xbd8dfd);
    light.intensity = 0.8;
    light.position.set(0, 1, 0);

    light1.color.setHex(0xbd8dfd);
    light1.intensity = 0.2;
    light1.position.set(200, 300, 400);

    light2.color.setHex(0xffffff);
    light2.groundColor.setHex(0xbd8dfd);
    light2.intensity = 0.1;
    light2.position.set(-200, 300, 400);

    TweenMax.to(
        camera.position,
        1,
        {   
            z: 10
        });
    TweenMax.to(
        sphere.position,
        1,
        {   
            x: 0.8,
            y: 0.3
        });
};

//contact page
const center = document.querySelector('#btn_4');
center.addEventListener('click', centerMove);
function centerMove() {

    body.classList.add('contact');
    body.classList.remove('main', 'about', 'work');

    if(body.classList.contains('contact')) {
        TweenMax.to(
            camera.position,
            1,
            {   
                z: 15
            });
        TweenMax.to(
            sphere.position,
            1,
            {   
                x: 0,
                y: 0
            });
    }

    renderer.setClearColor(0xffffff, 0.0);
    material.color.setHex(0xfcc8b2);

    light.color.setHex(0xffffff);
    light.groundColor.setHex(0xfcc8b2);
    light.intensity = 0.95;
    light.position.set(0, 1, 0);

    light1.color.setHex(0xfcc8b2);
    light1.intensity = 0.1;
    light1.position.set(200, 300, 400);

    light2.color.setHex(0xffffff);
    light2.groundColor.setHex(0xfcc8b2);
    light2.intensity = 0.01;
    light2.position.set(-200, 300, 400);

}