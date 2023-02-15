import { browser } from "$app/environment";
import {readable} from "svelte/store";

/** @type {import("svelte/store").Readable<PointerEvent>} */
export let pointerMove

if (browser) {
  pointerMove = readable(new PointerEvent('pointermove'),
    (set) => window.addEventListener('pointermove', set)
  )
}
