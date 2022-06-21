<script>
    import Title from "./components/Title.svelte";
    import Clock from "./components/Clock.svelte";
    import Icon from "./components/Icon.svelte";

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
                <a href="{service.url}">
                    <div class="service">
                        <img src="{service.iconUrl}"
                             width="{service.iconW}"
                             height="{service.iconH}"/>
                        <p>{service.name}</p>
                    </div>
                </a>
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
        height: 75%;
        width: 70vw;

        border-radius: 30px;
    }

    .header {
        flex-direction: column;
        padding-top: 100px;
    }

    .services {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;

        width: 60%;
        column-gap: 10px;
        row-gap: 15px;
    }

    @media screen and (max-width: 900px) {
        .services {
            grid-template-columns: 1fr 1fr;
            width: 90%;
        }

        .container {
            font-size: 18px;
        }
    }

    /* mobile */
    @media screen and (max-width: 500px) {
        .services {
            width: 95%;
        }

        .service {
            padding: 0.2em;
        }

        .interface {
            height: 90%;
            width: 90vw;

            border-radius: 30px;
        }
    }

    .service {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        transition: all .5s ease;
        border: 1px solid #777;
        padding: 0.6em;
    }

    .service:hover {
        background-color: #101010;
    }
</style>
