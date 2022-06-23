<script>
    import { config } from "../store.js";
</script>


<h2>Settings</h2>
<div class="settings">
    <h3>Title</h3>
    <input bind:value={$config.title}>
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
</style>
