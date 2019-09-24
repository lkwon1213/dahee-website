import React, { Component } from "react";
import * as THREE from "three/src/Three.js";
// Cloud Code from https://codepen.io/teolitto/pen/KwOVvL?editors=0010

class Cloud extends Component {
  state = {};
  componentDidMount() {
    var smokeParticles = [];

    smokeParticles = this.init(smokeParticles);
    this.animate(smokeParticles);
  }

  init = smokeParticles => {
    this.clock = new THREE.Clock();

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    this.camera.position.z = 1000;
    this.scene.add(this.camera);

    var geometry = new THREE.CubeGeometry(200, 200, 200);
    var material = new THREE.MeshLambertMaterial({
      color: 0xaa6666,
      wireframe: false
    });
    this.mesh = new THREE.Mesh(geometry, material);
    //scene.add( mesh );
    this.cubeSineDriver = 0;

    var textGeo = new THREE.PlaneGeometry(300, 300);
    THREE.ImageUtils.crossOrigin = ""; //Need this to pull in crossdomain images from AWS
    var textTexture = THREE.ImageUtils.loadTexture(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png"
    );
    var textMaterial = new THREE.MeshLambertMaterial({
      color: 0x00ffff,
      opacity: 1,
      map: textTexture,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    var text = new THREE.Mesh(textGeo, textMaterial);
    text.position.z = 800;
    this.scene.add(text);

    var light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(-1, 0, 1);
    this.scene.add(light);

    var smokeTexture = THREE.ImageUtils.loadTexture(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
    );
    var smokeMaterial = new THREE.MeshLambertMaterial({
      color: 0x00dddd,
      map: smokeTexture,
      transparent: true
    });
    var smokeGeo = new THREE.PlaneGeometry(300, 300);

    for (var p = 0; p < 150; p++) {
      var particle = new THREE.Mesh(this.smokeGeo, this.smokeMaterial);
      particle.position.set(
        Math.random() * 500 - 250,
        Math.random() * 500 - 250,
        Math.random() * 1000 - 100
      );
      particle.rotation.z = Math.random() * 360;
      this.scene.add(particle);
      smokeParticles.push(particle);
    }
    return smokeParticles;
    document.body.appendChild(this.renderer.domElement);
  }; // end of init

  animate = smokeParticles => {
    var delta = this.clock.getDelta();
    requestAnimationFrame(this.animate);
    this.evolveSmoke(delta, smokeParticles);
    this.renderScene();
  }; // end of animate

  evolveSmoke = (delta, smokeParticles) => {
    var sp = smokeParticles.length;
    while (sp--) {
      smokeParticles[sp].rotation.z += delta * 0.2;
    }
  }; // end of evolveSmoke

  renderScene = () => {
    this.mesh.rotation.x += 0.005;
    this.mesh.rotation.y += 0.01;
    this.cubeSineDriver += 0.01;
    this.mesh.position.z = 100 + Math.sin(this.cubeSineDriver) * 500;
    this.renderer.render(this.scene, this.camera);
  }; // end of renderScene

  ////////////RENDER////////////////
  render() {
    return (
      <div
        className="cloud"
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default Cloud;
