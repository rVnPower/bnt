<script>
    import Title from "./components/Title.svelte";
    import Clock from "./components/Clock.svelte";
    import Service from "./components/Service.svelte";

    const config = {
        title: "Hello, VnPower!",
        services: [
            {
                name: "Discord",
                url: "https://discord.com/app",
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
                name: "Facebook",
                url: "https://facebook.com",
                iconUrl: "assets/facebook.png",
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
    }
</script>

<div class="container flex-center">
    <div class="interface">
        <div class="header flex-center">
            <Title title={config.title}/>
            <Clock/>
        </div>
        <div class="services">
            {#each config.services as service}
                <Service service="{service}"/>
            {/each}
        </div>
    </div>
</div>

<style>
    .container {
        width: 100%;
        height: 100vh;

        font-size: 20px;
    }

    .interface {
        display: flex;
        align-items: center;
        flex-direction: column;

        line-height: 20px;

        background-color: #101010CF;
        width: 45%;

        border-radius: 30px;
    }

    .header {
        flex-direction: column;
        padding-top: 60px;
    }

    .services {
        display: grid;
        grid-template-columns: 0.9fr 0.9fr 0.9fr;
        grid-template-rows: auto;

        width: 100%;
        column-gap: 10px;
        row-gap: 10px;
        padding: 20px;
    }

    @media screen and (max-width: 1000px) {
        .services {
            grid-template-columns: 1fr 1fr;
            width: 90%;
        }

        .container {
            font-size: 18px;
        }

        .interface {
            width: 80%;
        }
    }

    /* mobile */
    @media screen and (max-width: 500px) {
        .services {
            grid-template-columns: 1fr;
            width: 95%;
        }

        .interface {
            height: 90%;
            width: 90vw;

            border-radius: 30px;
        }
    }
</style>
