const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:"red"})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)//FOV,aspect ratio, 

camera.position.z = camera.position.z + 1
camera.position.x = 0
camera.position.y = 0
scene.add(camera)
const canvas = document.querySelector("canvas.webgl") 
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)
// console.log(mesh);
// setInterval(() => {
//     material.color ={b:1,r:0,g:0}
// }, 100);

// setInterval(() => {
//     camera.position.z = camera.position.z + 0.1
// }, 100);