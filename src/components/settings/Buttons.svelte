<script>
  import {dndzone} from 'svelte-dnd-action';
  import {flip} from 'svelte/animate';
  const flipDurationMs = 150;
  export let items;
  export let onDrop;

  function handleConsider(e) {
    items = e.detail.items;
  }

  function handleFinalize(e) {
    const {items:newItems} = e.detail;
    onDrop(newItems);
  }

  function handleAddition() {

  }

  function handleRemoval(name) {
    for (let i = 0; i < items.length; i++) {
      if (name === items[i].name) {
        items.splice(i, 1);
        onDrop(items);
        break;
      }
    }
  }

  function transformDraggedElement(draggedEl, data, index) {
      draggedEl.querySelector(".card").style.transform = "rotate(15deg)";
  }
</script>

<section>
    <div
        use:dndzone={{items, flipDurationMs, transformDraggedElement}}
        on:consider={handleConsider}
        on:finalize={handleFinalize}
    >
        {#each items as item(item.name)}
            <div animate:flip={{duration:flipDurationMs}}>
                <div class="card">
                    {item.name}
                    <div class="tray">
                        <div class="delete" on:click={handleRemoval(item.name)}>
                            <img src="assets/trash.png" alt="D" width="20" height="23"/>
                        </div>
                        <div class="edit" on:click={() => console.log("asd")}>
                            <img src="assets/pen.png" alt="E" width="23" height="23"/>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <div>
        <div class="card add" on:click={handleAddition}>
            +
        </div>
    </div>
</section>

<style>
    section {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 8px;

        background: rgba(0, 0, 0, 0.40);
        border-radius: 10px;
        border: 1px solid #333;
        padding: 0.5rem 0.75rem;

    }

    section:focus {
        outline: none;
    }

    .card {
        background: rgba(0, 0, 0, 0.50);
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        padding: 10px;

        border: 2px solid #222;
        border-radius: 8px;

    }

    .card:hover {
        border-color: #333;
        transform: translateY(-3px);
    }

    .add {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 2em;
        border: 2px dashed #222;
        cursor: pointer;
    }

    .tray {
        display: flex;
        gap: 5px;
    }

    .card > .tray {
        display: flex;
        visibility: hidden;
    }

    .card:hover > .tray {
        visibility: visible;
    }

    .tray > div {
        padding: 3px;
        cursor: pointer;
        border-radius: 8px;
    }

    .tray > div:hover {
        transform: translateY(-1px);
    }

</style>
