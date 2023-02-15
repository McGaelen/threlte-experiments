<script>
	import '../app.postcss';
	import { Canvas } from '@threlte/core';
	import {World} from '@threlte/rapier'
	import { onMount } from 'svelte';

	let width = 0
	let height = 0

	onMount(() => {
		width = window.innerWidth
		height = window.innerHeight
	})
</script>

<div class="h-full w-full">
	<Canvas size={{width, height}} frameloop="always">
		<World>
			<slot />
		</World>
	</Canvas>
	<h1 class="text-white">Hi there!!!</h1> 
</div>
