<script>
	import '../app.postcss';
	import { Canvas } from '@threlte/core';
	import { onMount } from 'svelte';

	let width = 0
	let height = 0

	function setSize() {
		width = window.innerWidth
		height = window.innerHeight
	}

	onMount(() => {
		setSize()
	})
</script>

<svelte:window on:load={setSize} on:resize={setSize}/>

<Canvas size={{width, height}}>
	<slot />
</Canvas>
		