import { writable } from 'svelte-local-storage-store'

export const title = writable("title", "Hello, World!");
export const bgPath = writable("bgPath", "assets/background/dark.png");
