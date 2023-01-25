import { browser } from "$app/environment";
import {writable} from "svelte/store";
/** @type {import("svelte/store").Readable<PointerEvent> & {bindToPointermove: (event: PointerEvent) => void} } */
export let pointerMove

if (browser) {
  const {subscribe, set} = writable(new PointerEvent('pointermove'))

  pointerMove = { 
    subscribe,

    bindToPointermove(event) {
      if (!document.pointerLockElement) return
      set(event)
    },
  }
}
