<script>
  import {Canvas, T, OrbitControls, InteractiveObject} from "@threlte/core";
	import { degToRad } from "three/src/math/MathUtils";
  import {spring} from 'svelte/motion'
	import { BoxGeometry, Group, Mesh, MeshStandardMaterial, WebGLRenderer } from "three";
	import { HTML } from "@threlte/extras";

  const scale = spring(1)
</script>


<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov="24">
  <OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} target={{ y: 0.5 }} />
</T.PerspectiveCamera>

<T.DirectionalLight castShadow position={[3, 10, 10]}></T.DirectionalLight>
<T.DirectionalLight position={[-3, 10, -3]} intensity="0.2"></T.DirectionalLight>

<T.Group scale={$scale}>
  <T.Mesh position.y="0.5" castShadow let:ref>
    <InteractiveObject 
      object={ref}
      interactive
      on:pointerenter={() => $scale = 2}
      on:pointerleave={() => $scale = 1}
    ></InteractiveObject>

    <!-- <HTML position={{ x: 5}} transform> -->
      <!-- <h1>Hi there!</h1> -->
    <!-- </HTML> -->

    <slot />

    <T.BoxGeometry />
    <T.MeshStandardMaterial color="#333333" />
  </T.Mesh>
</T.Group>
