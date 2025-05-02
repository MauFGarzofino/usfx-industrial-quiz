import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const scene = new THREE.Scene();

// Luces
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Cámara
const camera = new THREE.PerspectiveCamera(45, 1 / 1, 0.1, 1000); camera.position.setZ(11);

// Renderizador
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(600, 600);
renderer.setClearColor(0x20232a);
// Controles
const controls = new OrbitControls(camera, renderer.domElement);

let leftHemispherePercent = 0;
let rightHemispherePercent = 0;
//colores
const colorLeft = new THREE.Color(0x5ac8fa);
const colorRight = new THREE.Color(0xff6b6b);
const colorDefault = new THREE.Color(0xffffff);

let animationStarted = false;
let brainObject = null;

window.updateBrainVisualization = function (leftPercent, rightPercent) {
  leftHemispherePercent = leftPercent / 100;
  rightHemispherePercent = rightPercent / 100;

  if (brainObject) {
    actualizarColoresYTexto();
  }

  if (!animationStarted) {
    animate();
    animationStarted = true;
  }
};

const loader = new OBJLoader();
const fontLoader = new FontLoader();
loader.load('obj/freesurff.Obj', function (obj) {
  brainObject = obj;
  actualizarColoresYTexto();
  scene.add(obj);
});

function actualizarColoresYTexto() {
  if (!brainObject) return;

  brainObject.traverse(function (child) {
    if (child.isMesh) {
      const geometry = child.geometry;
      const count = geometry.attributes.position.count;

      const colors = new Float32Array(count * 3);
      const colorAttribute = new THREE.BufferAttribute(colors, 3);

      const leftVertices = [];
      const rightVertices = [];

      for (let i = 0; i < count; i++) {
        const x = geometry.attributes.position.getX(i);
        const y = geometry.attributes.position.getY(i);

        if (x <= 0) leftVertices.push({ index: i, y });
        else rightVertices.push({ index: i, y });
      }

      leftVertices.sort((a, b) => b.y - a.y);
      rightVertices.sort((a, b) => b.y - a.y);

      const leftToColor = Math.floor(leftVertices.length * leftHemispherePercent);
      const rightToColor = Math.floor(rightVertices.length * rightHemispherePercent);

      for (let i = 0; i < leftVertices.length; i++) {
        const { index } = leftVertices[i];
        const color = i < leftToColor ? colorLeft : colorDefault;
        color.toArray(colors, index * 3);
      }

      for (let i = 0; i < rightVertices.length; i++) {
        const { index } = rightVertices[i];
        const color = i < rightToColor ? colorRight : colorDefault;
        color.toArray(colors, index * 3);
      }

      geometry.setAttribute('color', colorAttribute);
      geometry.attributes.color.needsUpdate = true;

      child.material = new THREE.MeshStandardMaterial({
        vertexColors: true,
        metalness: 0.3,
        roughness: 0.6,
      });
    }
  });

  crearTextoPorcentajes(leftHemispherePercent, rightHemispherePercent);
}

function crearTextoPorcentajes(leftPercent, rightPercent) {
  scene.children = scene.children.filter((obj) => {
    return obj.name !== 'percentage-label';
  });

  fontLoader.load('fonts/helvetiker_regular.typeface.json', (font) => {
    const createTextMesh = (text, color, offsetX) => {
      const geometry = new TextGeometry(text, {
        font: font,
        size: 1.5,
        height: 0.1,
        curveSegments: 12,
      });
      geometry.computeBoundingBox();
      const bbox = geometry.boundingBox;
      const centerOffset = -0.5 * (bbox.max.x - bbox.min.x);

      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshPhongMaterial({ color })
      );
      mesh.name = 'percentage-label';
      mesh.position.set(centerOffset + offsetX, 0, 0);
      mesh.scale.set(0.3, 0.3, 0.001);
      scene.add(mesh);
    };

    createTextMesh(`${(leftPercent * 100).toFixed(0)}%`, colorLeft, -1.9);
    createTextMesh(`${(rightPercent * 100).toFixed(0)}%`, colorRight, 4.7);
  });
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

window.scene = scene;
window.loader = loader;
window.brainObject = brainObject;
window.actualizarColoresYTexto = actualizarColoresYTexto;