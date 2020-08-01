import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import * as treeUtility from "./utilities/tree_utility";
class App extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    var directionalLight = new THREE.DirectionalLight(0xffffff, .5);
    scene.add(directionalLight);

    var geometry = new THREE.PlaneBufferGeometry(75, 75, 32);
    var material = new THREE.MeshBasicMaterial({
      color: 0xe0e0e0,
      side: THREE.DoubleSide
    });

    var plane = new THREE.Mesh(geometry, material);
    plane.rotateX(-Math.PI / 2);
    plane.position.y = -1

    scene.add(plane);
    camera.position.y = 5
    camera.position.z = 25;
    scene.add(treeUtility.createTree());
    var animate = function() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
