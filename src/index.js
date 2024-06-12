import * as THREE from 'three'
import { WEBGL } from './webgl'


if (WEBGL.isWebGLAvailable()) {

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x004fff);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);

    camera.position.z = 3;
    const renderer = new THREE.WebGLRenderer({
      alpha : true,
      antialias : true
    });
    renderer.setSize(window.innerWidth,window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry01 = new THREE.OctahedronGeometry(1,1,1);
    const material01 = new THREE.MeshStandardMaterial({
      color:0X999999
    });

    const obj01 = new THREE.Mesh(geometry01,material01);
    scene.add(obj01);

    const geometry02 = new THREE.OctahedronGeometry(1,1,1);
    const material02 = new THREE.MeshStandardMaterial({
      color:0X999999
    });

    const obj02 = new THREE.Mesh(geometry02,material02);
    scene.add(obj02);
    obj02.position.x = -2;
    const geometry03 = new THREE.OctahedronGeometry(1,1,1);
    const material03 = new THREE.MeshStandardMaterial({
      color:0X999999
    });

    const obj03 = new THREE.Mesh(geometry03,material03);
    obj03.position.x = 2;
    scene.add(obj03);
    
    function render(time){

       time *= 0.001;
      
       obj01.rotation.x = time;
       obj01.rotation.y = time;
       renderer.render(scene,camera); 
       requestAnimationFrame(render);

    }
 
      requestAnimationFrame(render);

    
    function onWindowResize(){
      camera.aspect = window.innerWidth / window.innerHeight ;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth,window.innerHeight);

    }

    window.addEventListener('resize', onWindowResize);

} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
