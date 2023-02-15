<script>
  import {T, useFrame} from '@threlte/core'
  import {RigidBody, Collider} from '@threlte/rapier'
	import { onMount } from 'svelte';
	import { Spherical, Vector3 } from 'three';
	import { pointerMove } from '../input/pointermove.store';

  /** @type import('three').PerspectiveCamera */
  let camera;

  /** @type import('@dimforge/rapier3d-compat').RigidBody */
  let rigidBody

  /** @type import('@threlte/core').Position*/
  let position = {x: 0, y: 10, z: 0}

  /** @type import('three/src/math/Spherical').Spherical*/
  let spherical = new Spherical()
  onMount(() => {
    
  })
  
  /** @type import('three').Vector3*/
  let lookAt = new Vector3(0, 0, 0)
  useFrame(() => {
    if (!rigidBody || !camera) return
    const pos = rigidBody.translation()
    // console.log(pos)
    // camera.lookAt(new Vector3(pos.x, pos.y, pos.z))
  })
</script>

<T.Group >
  <T.PerspectiveCamera bind:ref={camera} makeDefault position={[0, 10, 5]} fov="70" bind:lookAt/>

  <RigidBody bind:rigidBody type="dynamic" bind:position>
    <T.Mesh>
      <T.SphereGeometry></T.SphereGeometry>
      <T.MeshStandardMaterial></T.MeshStandardMaterial>
    </T.Mesh>

    <Collider args={[1]} shape="ball" />
  </RigidBody>
</T.Group>
