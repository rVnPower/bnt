import { writable } from 'svelte-local-storage-store'

export const title = writable("title", "Hello, World!");
export const bgPath = writable("bgPath", "/public/assets/dark.png");

export const config = writable("config", {
    title: "Hello, World!",
    bgPath: "/public/assets/dark.png",
    services: [
        {
            name: "Discord",
            url: "#",
            iconUrl: "assets/discord.png",
            iconW: 40,
            iconH: 32,
        },
        {
            name: "Pixiv",
            url: "https://pixiv.net",
            iconUrl: "assets/pixiv.png",
            iconW: 40,
            iconH: 40,
        },
        {
            name: "YouTube",
            url: "https://youtube.com",
            iconUrl: "assets/youtube.png",
            iconW: 40,
            iconH: 27,
        },
        {
            name: "GitHub",
            url: "https://github.com",
            iconUrl: "assets/github.png",
            iconW: 40,
            iconH: 40,
        },
    ]
})
