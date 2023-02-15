<script>
  import {T} from "@threlte/core";
	import { RigidBody, Collider } from "@threlte/rapier";
  import {Vector3} from '@dimforge/rapier3d-compat'

  /** @type import('@dimforge/rapier3d-compat').RigidBody */
  let rigidBody
  let isSpun = false

  $: if (rigidBody && !isSpun) {
    rigidBody.applyTorqueImpulse(
      new Vector3(Math.random() * -3, Math.random() * -3, Math.random() * -3),
      true
    )
    isSpun = true
  }
</script>

<RigidBody bind:rigidBody type="dynamic" position={{x: 0, y: 10, z: 0}}>
  <Collider args={[0.5, 0.5, 0.5]} shape='cuboid'></Collider>
  <T.Mesh castShadow>
    <T.BoxGeometry />
    <T.MeshStandardMaterial color="#000077" />
  </T.Mesh>
</RigidBody>

