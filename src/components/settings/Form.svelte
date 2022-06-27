<script>
  export let state;
  export let item;
  export let save;

  function handleSubmit() {
    if (item.iconUrl == undefined) {
      item.iconUrl = "assets/default-icon.png";
      item.iconW = "25";
      item.iconH = "40";
    }
    save(item);
  }
</script>


<form on:submit|preventDefault={handleSubmit}>
  {#if state === "addition"}
    <h4>Name</h4>
    <input bind:value={item.name}/>
    <h4>Icon path</h4>
    <input bind:value={item.iconUrl}/>
    <h4>Link</h4>
    <input bind:value={item.url}/>
    <h4>Icon width</h4>
    <input bind:value={item.iconW}/>
    <h4>Icon height</h4>
    <input bind:value={item.iconH}/>
  {/if}
  <button type="submit" class="confirm">
    OK
  </button>
</form>

<style>
  button {
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }
</style>
