<script>
  export let item;
  export let save;

  let nameFilled = false;

  function handleInput() {
    if (item.name != false) {
      nameFilled = true;
    } else {
      nameFilled = false;
    }
  }

  function handleSubmit() {
    if (item.iconUrl == false && item.url != false) {
      item.iconUrl = `${item.url}/favicon.ico`;
      item.iconW = "40";
      item.iconH = "40"
    } else if (item.iconUrl == false) {
      item.iconUrl = "assets/default-icon.png";
      item.iconW = "25";
      item.iconH = "40"
    }

    if (item.iconW == false) {
      item.iconW = "40"
    }
    if (item.iconH == false) {
      item.iconH = "40"
    }
    save(item);
  }
</script>


<form on:submit|preventDefault={handleSubmit}>
  <h4>Name</h4>
  {#if !nameFilled}
    <small>Name must be filled and not with whitespaces</small>
  {/if}
  <input bind:value={item.name} on:input={handleInput}/>
  <h4>Icon path</h4>
  <input bind:value={item.iconUrl}/>
  <h4>Link</h4>
  <input bind:value={item.url}/>
  <h4>Icon width</h4>
  <input bind:value={item.iconW}/>
  <h4>Icon height</h4>
  <input bind:value={item.iconH}/>
  <button type="submit" class="confirm" disabled={!nameFilled}>
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
