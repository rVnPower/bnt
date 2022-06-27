<script>
  export let title;
  export let value;
  export let handleSubmit;
</script>

<h3>{title}</h3>
<input bind:value={value}>

<span class="confirm button"
      on:click={handleSubmit(value)}>
    OK
</span>
