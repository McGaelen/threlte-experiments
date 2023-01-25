<script>
  import Main from "$lib/client/components/Main.svelte";
	import { keyboard } from "$lib/client/input/keyboard.store";
	import { pointerMove } from "$lib/client/input/pointermove.store";
  import { Canvas, useThrelte } from "@threlte/core";
  import {HTML} from '@threlte/extras'
	import { onMount } from "svelte";

  const {renderer} = useThrelte()

</script>


<Main>
  <HTML transform>
    <h3>hello!</h3>
    <button class='border-2 border-red-500 hover:bg-red-500 hover:text-white'>Click me</button>
  </HTML>
</Main>
