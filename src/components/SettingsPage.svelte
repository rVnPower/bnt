<script>
    import { config } from "../store.js";
    import Buttons from "./settings/Buttons.svelte";

    let configTemp = $config;

    // If `variable` is blank, then we return the `initial` value
    function checkBlank(variable, initial) {
        if (variable === "") {
            return initial;
        }
        return variable;
    }

    // Update buttons list when dragged
    function handleDrop(newItems) {
        $config.services = newItems;
    }
</script>


<h2>Settings</h2>
<div class="settings">
    <!-- Title -->
    <h3>Title</h3>
    <input bind:value={configTemp.title}>
    <span class="confirm button"
          on:click={() =>
            {
                $config.title = configTemp.title;
            }
    }>
        OK
    </span>
    <hr/>
    <!-- Background -->
    <h3>Background image</h3>
    <small><a href="https://github.com/rvnpower/bnt/README.md#bg">Read about this</a></small>
    <input bind:value={configTemp.bgPath}/>
    <span class="confirm button"
          on:click={() =>
            {
                $config.bgPath = checkBlank(configTemp.bgPath, "./assets/dark.png");
            }
    }>
        OK
    </span>
    <!-- Buttons -->
    <h3>Buttons</h3>
    <Buttons items="{$config.services}" onDrop={handleDrop}/>
</div>

<style>
    .settings {
        display: box;
        text-align: left;
        width: 80%;
        padding-bottom: 20px;
    }

    .confirm {
        width: 15%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        border-radius: 10px;
        padding: 5px;
        margin: 5px;

        background: rgba(0, 0, 0, 0.4);
        animation-duration: 0.2s;
    }

    .confirm:active {
        transform: translateY(1px);
    }
</style>
