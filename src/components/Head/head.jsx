import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './head.css';
import Car from './scene.gltf'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
export class Head extends Component {

  componentDidMount(){
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 45;
    camera.position.y = 5;

    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth - 17, window.innerHeight - 63.4);

    renderer.domElement.setAttribute('id', 'super-car');
    document.querySelector('main').append(renderer.domElement)

    const aLight = new THREE.AmbientLight(0x404040, 1.2);
    scene.add(aLight);

    const pLight = new THREE.PointLight(0xFFFFFF, 1.2);
    pLight.position.set(0, -3, 7);
    scene.add(pLight)

    const helper = new THREE.PointLightHelper(pLight);
    scene.add(helper)

    let loader = new THREE.GLTFLoader();
    let obj = null;

    loader.load(Car, function(gltf){
      obj = gltf;
      obj.scene.scale.set(1.3, 1.3, 1.3);

      scene.add(obj.scene)
    });
    function animate(){
      requestAnimationFrame(animate);

      if (obj){
        obj.scene.rotation.y -= 0.003;
      }
      renderer.render(scene, camera)
    }
    animate();
  }

  render(){
    const { Login } = this.props
    return(
      <div>
        <header>
          <AppBar position="static" className="MY CLASS">
            <Toolbar className="nav">
              <div className="nav-elems">
                <Link to='/' className="nav-link">
                  <Button className="nav-link-btn" variant="outlined">Head</Button>
                </Link>
                <Link to='/news' className="nav-link">
                  <Button className="nav-link-btn" variant="outlined">News</Button>
                </Link>
              </div>
              {Login.login ? 
              <Link to='/profile' className="log-in-link">
                <Button className="log-in-link-btn" variant="outlined" color="inherit">Profile</Button>
              </Link> :
              <Link to='/login' className="log-in-link">
                <Button className="log-in-link-btn" variant="outlined" color="inherit">LOG IN</Button>
              </Link>
              }
            </Toolbar>
          </AppBar>
        </header>
        <main>
          
        </main>
      </div>
    )
  }
}