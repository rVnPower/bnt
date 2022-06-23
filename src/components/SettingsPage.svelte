<script>
    import { config } from "../store.js";

    let title = $config.title;

    function confirm() {
        $config.title = title;
    }
</script>


<h2>Settings</h2>
<div class="settings">
    <h3>Title</h3>
    <input bind:value={title}>
    <span class="confirm button" on:click={confirm}>OK</span>
    <hr/>
    <h3>Background image</h3>
    <small><a href="https://github.com/rvnpower/bnt/README.md#bg">Read about this</a></small>
    <input bind:value={$config.bgPath}/>
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
