import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
const axesHelper = new THREE.AxesHelper()

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
camera.position.y = 4
scene.add(camera)
scene.add(axesHelper)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
let relay = true

setInterval(() => {
    
        if (mesh.position.length() > 3) {
            relay = false
        }
        if (mesh.position.length() < 3) {
            relay = true
        }
        mesh.position.z = relay ? mesh.position.z - Math.random() : mesh.position.z + Math.random()
        mesh.scale.x = relay ? mesh.scale.x - Math.random() : mesh.scale.x + Math.random()
        camera.lookAt(mesh.position)
        mesh.rotateX(Math.random())
        mesh.rotateZ(Math.random())
        
        renderer.render(scene,camera)
        return
}, 1000);