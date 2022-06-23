<script>
    import Title from "./components/Title.svelte";
    import Clock from "./components/Clock.svelte";
    import Service from "./components/Service.svelte";

    import { config } from "./store.js";

    let settingsMode = false;

    function changeMode() {
        settingsMode = !settingsMode;
    }
</script>

<div class="container flex-center"
     style:--bgPath="url({$config.bgPath})">
    <!-- Bind the background path into --bgPath -->
    <div class="interface">
        <div class="settings">
            <button class="settingsBtn" on:click={changeMode}>
                <img src="assets/gear.png" alt="Settings" width="40" height="40"/>
            </button>
        </div>
        {#if !settingsMode}
            <div class="header flex-center">
                <Title/>
                <Clock/>
            </div>
            <div class="services">
                {#each $config.services as service}
                    <Service {...service}/>
                {/each}
            </div>
        {:else}
            <h2>Settings</h2>
            <div class="normal">
                <h3>Title</h3>
                <input bind:value={$config.title}>
                <hr/>
                <h3>Background image</h3>
                <small><a href="https://github.com/rvnpower/bnt/README.md#bg">Read about this</a></small>
                <input bind:value={$config.bgPath}/>
            </div>
        {/if}
    </div>
</div>

<style>
    small {
        font-size: 0.7em;
    }

    .container {
        width: 100%;
        height: 100vh;
        min-height: 100vh;

        background-image: var(--bgPath);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;

        font-size: 20px;
    }

    .settings {
        height: 90px;
        width: 95%;

        display: flex;
        align-items: center;
        justify-content: end;
    }

    .settingsBtn {
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .interface {
        display: flex;
        align-items: center;
        flex-direction: column;

        line-height: 20px;

        backdrop-filter: blur(5px);
        background: rgba(0, 0, 0, 0.32);
        box-shadow: 0px 10px 90px rgba(0, 0, 0, 1);

        width: 45%;

        border-radius: 30px;
    }

    .header {
        flex-direction: column;
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

    .normal {
        display: box;
        text-align: left;
        width: 80%;
        padding-bottom: 20px;
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

        .container {
            padding: 20px; /* avoid touching the screen */
            height: auto;
        }
    }
</style>
