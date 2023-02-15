import { browser } from "$app/environment"
import { readable } from "svelte/store"

/** @type import('svelte/store').Readable<boolean> */
export let isPointerCaptured

if (browser) {
  isPointerCaptured = readable(false, (set) => 
    document.addEventListener('pointerlockchange', 
        () => set(!!document.pointerLockElement))
  )
}