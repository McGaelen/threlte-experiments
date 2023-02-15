<script>
	import SpectatorCamera from "$lib/client/components/SpectatorCamera.svelte";
  import Cube from "$lib/client/components/Cube.svelte";
	import { useThrelte, T } from "@threlte/core";
	import { onMount } from "svelte";
	import Plane from "$lib/client/components/Plane.svelte";
	import Player from "$lib/client/components/Player.svelte";
	import Light from "$lib/client/components/Light.svelte";

  const {renderer} = useThrelte()

  onMount(() => {
    const canvas = renderer?.domElement
    if (!canvas) {
      console.error('No canvas!')
      return
    }

    // WARNING: For some reason, cannot pass reference to `canvas.requestPointerLock`.
    // Must actually call the function here. No idea why! So don't change this!
		document.addEventListener('click', () => canvas.requestPointerLock())
  })
</script>

<!-- <SpectatorCamera /> -->

<Light />

<Player />
<Cube />
<Plane />
