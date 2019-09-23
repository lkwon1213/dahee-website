import React, { Component } from "react";

class Smoke extends Component {
  state = {};
  const canvas = document.querySelector('#experiment');
  const context = canvas.getContext('2d');
  
  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 800;
  
  const CURVES = 3;
  const STEPS = 35;
  
  const SPEED = 0.4;
  
  function start() {
    context.clearRect(0, 0, 9999, 9999);
    
    const pathController = new PathController(3);
    pathController.ensureCanvasFilled();
    pathController.interpolatePaths();
    pathController.drawPaths();
    pathController.animate();
  }
  
  
  function PathController(count) {
  
    const MIN_LENGTH = CANVAS_HEIGHT + 1024;
    
    this.paths = [...Array(count)].map(() => new Path());
  
    this.extendPaths = () => {
      this.paths.forEach(p => p.extend())
    }
    
    this.ensureCanvasFilled = () => {
      this.paths.forEach(path => {
        while (path.getBottom() < MIN_LENGTH) {
          this.extendPaths();
        }
      });
      
      this.paths.forEach(path => {
        if (path.curves[0].endPoint < 0 - 512) {
          this.shiftPaths();
        }
      })
      
      this.interpolatePaths();
    }
    
    this.shiftPaths = () => {
      this.paths.forEach(path => path.shiftPath())
    }
    
    this.drawPaths = () => {
      this.paths.forEach(p => p.draw());
    }
    
    this.interpolatePaths = () => {
      this.paths.forEach((path, idx) => {
        if (typeof this.paths[idx + 1] !== 'undefined') {
          path.interpolateWith(this.paths[idx + 1]);
        }
      });
    }
    
    this.stepPaths = () => {
      this.paths.forEach(p => p.step(SPEED));
    }
    
    this.clearCanvas = () => {
      context.clearRect(0, 0, 999, 999);
    }
    
    this.animate = () => {
      this.clearCanvas()
      this.stepPaths();
      this.ensureCanvasFilled();
      this.drawPaths();
      window.requestAnimationFrame(this.animate.bind(this));
    }
  }
  
  function Path() {
    this.curves = [];
    this.interpolatedCurves = [];
    
    // how much length to maintain
    this.minLength = CANVAS_HEIGHT + 512;
    
    this.extend = () => {
      let newCurve;
      if (this.curves.length) {
        const parentCurve = this.curves[this.curves.length - 1];
        childCurve = new Curve({startPoint: [...parentCurve.endPoint]});
      } else {
        childCurve = new Curve();
      }
      this.curves.push(childCurve);
      return childCurve;
    }
    
    this.draw = () => {
      this.curves.forEach(c => {
        c.draw('dimgray');
      });
      this.interpolatedCurves.forEach(c => {
        c.forEach(d => d.draw('dimgray'));
      });
    }
    
    this.step = () => {
      this.curves.forEach(c => c.step());
      this.interpolatedCurves.forEach(c => c.forEach(d => d.step()));
    }
    
    this.interpolateWith = path => {
      this.interpolatedPair = path;
      this.interpolatedCurves = this.curves.map((curve, idx) => {
        // for when some paths have more curves, just add
        // more curves to this path
        if (typeof path.curves[idx] == 'undefined') path.extend();
        return curve.interpolateWith(path.curves[idx]);
      })
    }
    
    this.getLength = () => this.curves.reduce((acc, cur) => acc + cur.length, 0);
    
    this.getBottom = () => {
      if (!this.curves.length) return 0; 
      return this.curves[this.curves.length - 1].endPoint[1];
    }
    
    
    this.shiftPath = () => {
      this.curves.shift();
    }
    
  }
  
  
  
  function Curve(params = {}) {
    
    const config = Object.assign({}, params);
    
    const MAX_WIDTH = 256;
    const MIN_WIDTH = 128;
    const MAX_LENGTH = 512;
    const MIN_LENGTH = 256;
    
    this.startPoint = config.startPoint || [randomInRange(0, MAX_WIDTH), 0];
    this.length = randomInRange(MIN_LENGTH, MAX_LENGTH);
    this.startWhiskerLength = config.startWhiskerLength || 128;
    this.endWhiskerLength = 128;
    
    // require the curve to start and end on opposite sides
    // with a margin of at least MIN_WIDTH
    let startX = this.startPoint[0];
    let endX;
    if (startX > MAX_WIDTH / 2) {
      endX = randomInRange(0, MIN_WIDTH);
    } else {
      endX = randomInRange(MIN_WIDTH, MAX_WIDTH);
    }
    this.endPoint = [endX, this.startPoint[1] + this.length];
    
    
    this.interpolatedCurves = [];
    this.attachedCurves = [];
    
    this.forcedBezier = config.forcedBezier;
    
    this.draw = (color = 'red') => {
      const bez = this.toBezier();
      context.beginPath();
      context.moveTo(...bez.startPoint);
      context.bezierCurveTo(...bez.cp1, ...bez.cp2, ...bez.endPoint);
      context.strokeStyle = color;
      context.lineWidth = 0.300;
      context.stroke();
      
      // this.drawPoints();
      // this.drawWhiskers();
    }
    
    this.step = () => {
      const oldBez = this.toBezier();
      const newBez = Object.assign({}, oldBez);
      newBez.startPoint[1] = oldBez.startPoint[1] - SPEED;
      newBez.endPoint[1] = oldBez.endPoint[1] - SPEED;
      newBez.cp1[1] = oldBez.cp1[1] - SPEED;
      newBez.cp2[1] = oldBez.cp2[1] - SPEED;
      this.forcedBezier = newBez;
    }
    
    this.toBezier = () => {
      return this.forcedBezier || {
        startPoint: this.startPoint,
        endPoint: this.endPoint,
        cp1: [this.startPoint[0], this.startPoint[1] + this.startWhiskerLength],
        cp2: [this.endPoint[0], this.endPoint[1] - this.endWhiskerLength]
      }
    }
    
    this.createAttachedCurve = () => {
      return new Curve(Object.assign({}, {
        startPoint: [...this.endPoint],
      }));
    }
    
    this.createAttachedCurves = (count = 20) => {
      this.attachedCurve = this.createAttachedCurve();
      if (count - 1) this.attachedCurve.createAttachedCurves(count - 1);
      return [...this.attachedCurves];
    }
    
    this.drawPoints = () => {
      drawCircle(...this.toBezier().startPoint, 'blue');
      drawCircle(...this.toBezier().endPoint, 'blue');
    }
    
    this.drawWhiskers = () => {
      context.beginPath();
      context.moveTo(...this.toBezier().startPoint);
      context.lineTo(...this.toBezier().cp1);
      context.moveTo(...this.toBezier().endPoint);
      context.lineTo(...this.toBezier().cp2);
      context.strokeStyle = 'orange';
      context.stroke();
      
      
      drawCircle(...this.toBezier().cp1, 'orange');
      drawCircle(...this.toBezier().cp2, 'orange');
    }
    
    // yeet
    this.interpolateWith = curve => this.interpolatedCurves = interpolateCurves(this, curve);
  }
  
  function drawCircle(x, y, color) {
    const radius = 4;
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
  }
  
  // returns new curves
  function interpolateCurves(curveA, curveB, count = STEPS) {
    const result = [];
    const bezierA = curveA.toBezier();
    const bezierB = curveB.toBezier();
  
    // draw one curve for each desired step
    for (let i = 1; i <= count; i++) {
      const progress = i / (count + 1);
      const curve = new Curve();
      const params = ['startPoint', 'endPoint', 'cp1', 'cp2'];
      const forcedBezier = {
        startPoint: interpolatePoints(bezierA.startPoint, bezierB.startPoint, progress),
        endPoint: interpolatePoints(bezierA.endPoint, bezierB.endPoint, progress),
        cp1: interpolatePoints(bezierA.cp1, bezierB.cp1, progress),
        cp2: interpolatePoints(bezierA.cp2, bezierB.cp2, progress),
      }
      result.push(new Curve({forcedBezier}));
    }
    return result;
  }
  
  function interpolatePoints(pointA, pointB, progress) {
    const diffX = pointA[0] - pointB[0];
    const diffY = pointA[1] - pointB[1];
    const newX = progress * diffX + pointB[0];
    const newY = progress * diffY + pointB[1];
    return [newX, newY];
  }
  
  
  
  function rngIfy(number, maxMag, minMag) {
    const max = number + maxMag;
    let min;
    if (typeof minMag !== 'undefined') {
      min = number - minMag;
    } else {
      min = number - maxMag;
    }
    return Math.floor(Math.random() * (max - min) + min); 
  }
  
  function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  
  
  // generateCurves(CURVES);
  
  randomizeButton = document.querySelector('#randomize');
  
  start();
  randomizeButton.onclick = () => start();
  
  render() {
    return (
      <div class="smoke">
        <canvas width="256px" height="1080px" id="experiment"></canvas>
        <div class="overlay">SMOKE</div>
      </div>
    );
  }
}

export default Smoke;
