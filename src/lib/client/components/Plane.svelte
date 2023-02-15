<script>
  import {T} from '@threlte/core'
	import { RigidBody, Collider } from '@threlte/rapier';
	import { degToRad } from 'three/src/math/MathUtils';
</script>

<RigidBody type="fixed" position={{x: 0, y: 0, z: 0}} rotation={{x: degToRad(-90), y: 0, z: 0}}>
  <Collider args={[10, 10, 0.05]} shape="cuboid"/>
  <T.Mesh>
    <T.BoxGeometry args={[20, 20, 0.1]}></T.BoxGeometry>
    <T.MeshStandardMaterial color="#333333"></T.MeshStandardMaterial>
  </T.Mesh>
</RigidBody>
