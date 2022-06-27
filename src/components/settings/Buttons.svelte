<script>
  import {dndzone} from 'svelte-dnd-action';
  import {flip} from 'svelte/animate';
  import ButtonsForm from "./Form.svelte";

  const flipDurationMs = 150;
  export let items;
  export let save;

  let state = "" // addition, edit

  function handleConsider(e) {
    items = e.detail.items;
  }

  function handleFinalize(e) {
    const {items:newItems} = e.detail;
    save(newItems);
  }

  function handleAddition(newItem) {
    save([...items, newItem]);
    state = "";
  }

  function handleRemoval(name) {
    for (let i = 0; i < items.length; i++) {
      if (name === items[i].name) {
        items.splice(i, 1);
        save(items);
        break;
      }
    }
  }

  function getButtonsName() {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
      arr.push(items[i].name.toLowerCase());
    }

    return arr;
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
        {#each items as item(item.id)}
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
        <div class="card add" on:click={() => state = "addition"}>
            +
        </div>
    </div>
</section>

{#if state === "addition"}
  <ButtonsForm state={state} item={{}} save={handleAddition}/>
{/if}

<style>
    section {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 8px;

        background-color: rgba(255, 255, 255, 0.2);
        opacity: 0.9;
        border-radius: 10px;
        padding: 0.5rem 0.75rem;
        transition: opacity 0.2s;

    }

    section:hover {
      opacity: 1;
    }

    .card {
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        padding: 10px;
        border-radius: 8px;

    }

    .card:hover {
        transform: translateY(-3px);
    }

    .add {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 2em;
        border: 2px dashed #888;
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
