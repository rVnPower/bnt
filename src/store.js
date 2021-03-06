import { writable } from 'svelte-local-storage-store'

export const config = writable("config", {
    title: "Hello, World!",
    bgPath: "./assets/dark.png",
    services: [
        {
            name: "Discord",
            url: "#",
            iconUrl: "assets/discord.png",
            iconW: 40,
            iconH: 32,
            id: 1,
        },
        {
            name: "Pixiv",
            url: "https://pixiv.net",
            iconUrl: "assets/pixiv.png",
            iconW: 40,
            iconH: 40,
            id: 2,
        },
        {
            name: "YouTube",
            url: "https://youtube.com",
            iconUrl: "assets/youtube.png",
            iconW: 40,
            iconH: 27,
            id: 3,
        },
        {
            name: "GitHub",
            url: "https://github.com",
            iconUrl: "assets/github.png",
            iconW: 40,
            iconH: 40,
            id: 4,
        },
    ]
})
