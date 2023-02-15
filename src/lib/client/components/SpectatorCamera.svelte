<script>
  import {T, useFrame} from '@threlte/core'
  import * as THREE from 'three'
	import { isPointerCaptured } from '../input/isPointerCaptured.store';
	import { keyboard } from '../input/keyboard.store';
	import { pointerMove } from '../input/pointermove.store';

  const movementMultiplier = 1.5

  /** @type THREE.PerspectiveCamera */
  let camera
  /** @type THREE.Vector3Tuple */
  let cameraPosition = [0, 7, 10]
  /** @type THREE.Vector3Tuple */
  let cameraRotation = [-0.5, 0, 0]

  useFrame((ctx, delta) => {
    if (!camera) return 
    const dir = camera.getWorldDirection(new THREE.Vector3())

    if ($keyboard.has('w')) {
      const [x, z] = calculateNewPosition(dir.clone())
      cameraPosition = camera.position.addScaledVector(
          new THREE.Vector3(x, 0, z),  movementMultiplier * delta
      ).toArray()
    }
    if ($keyboard.has('s')) {
      const relativeBack = dir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI)
      const [x, z] = calculateNewPosition(relativeBack)
      cameraPosition = camera.position.addScaledVector(
          new THREE.Vector3(x, 0, z),  movementMultiplier * delta
      ).toArray()
    }
    if ($keyboard.has('a')) {
      const relativeLeft = dir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2)
      const [x, z] = calculateNewPosition(relativeLeft)
      cameraPosition = camera.position.addScaledVector(
          new THREE.Vector3(x, 0, z),  movementMultiplier * delta
      ).toArray()
    }
    if ($keyboard.has('d')) {
      const relativeRight = dir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), (3 * Math.PI) / 2)
      const [x, z] = calculateNewPosition(relativeRight)
      cameraPosition = camera.position.addScaledVector(
          new THREE.Vector3(x, 0, z),  movementMultiplier * delta
      ).toArray()
    }
    if ($keyboard.has(' ')) {
      cameraPosition = [
        cameraPosition[0],
        cameraPosition[1] + movementMultiplier * delta,
        cameraPosition[2]
      ]
    }
    if ($keyboard.has('q')) {
      cameraPosition = [
        cameraPosition[0],
        cameraPosition[1] - movementMultiplier * delta,
        cameraPosition[2]
      ]
    }
  })

  $: cameraRotation = !$isPointerCaptured ? cameraRotation : [
    getClampedXRotation($pointerMove),
    cameraRotation[1] - ($pointerMove.movementX * 0.005),
    0
  ]

  /** @param event {PointerEvent} */
  function getClampedXRotation(event) {
    const newX = cameraRotation[0] - (event.movementY * 0.005)
    return newX >= -(Math.PI / 2) && newX <= (Math.PI / 2)
            ? newX  
            : cameraRotation[0]
  }

  /** @param direction {THREE.Vector3}*/
  function calculateNewPosition(direction) {
    const worldAngle = Math.atan(direction.z / direction.x)
    const newX = Math.cos(worldAngle) * Math.sign(direction.x)
    const newZ = Math.sin(worldAngle) * Math.sign(direction.z) * Math.sign(worldAngle)
    return [newX, newZ]
  }
</script>

<T.PerspectiveCamera 
  bind:ref={camera} 
  bind:position={cameraPosition} 
  bind:rotation={cameraRotation} 
  makeDefault 
  rotation.order="YXZ" 
  fov="70"
/>
