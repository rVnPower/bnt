<script>
    import { config } from "../store.js";
    import Buttons from "./settings/Buttons.svelte";
    import Section from "./settings/SettingsSection.svelte";


  // If `variable` is blank, then we return the `initial` value
    function checkBlank(variable, initial) {
        if (variable === "") {
            return initial;
        }
        return variable;
    }

    // Update buttons list when dragged, also sort the ids
    function handleDrop(newItems) {
        for (let i = 0; i < newItems.length; i++) {
          newItems[i].id = i+1;
        }

        $config.services = newItems;
    }
</script>


<h2>Settings</h2>
<div class="settings">
    <Section title="Title" value={$config.title} handleSubmit={
      (newValue) => $config.title = newValue
      }/>
    <hr/>
    <!-- Background -->
    <Section title="Background image" value={$config.bgPath} handleSubmit={
        (newValue) => $config.bgPath = (newValue === "") ? "./assets/dark.png": newValue 
      }/>
    <!-- Buttons -->
    <h3>Buttons</h3>
    <Buttons items="{$config.services}" save={handleDrop}/>
</div>

<style>
    .settings {
        display: box;
        text-align: left;
        width: 80%;
        padding-bottom: 20px;
    }
</style>
