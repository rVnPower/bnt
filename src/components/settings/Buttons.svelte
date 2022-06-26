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
    // This is the JS way to style the dragged element, notice it is being passed into the dnd-zone
    function transformDraggedElement(draggedEl, data, index) {
        draggedEl.querySelector(".card").style.transform = "rotate(10deg)";
    }
</script>

<section use:dndzone={{items, flipDurationMs, transformDraggedElement}} on:consider={handleConsider} on:finalize={handleFinalize}>
    {#each items as item(item.id)}
        <div animate:flip={{duration:flipDurationMs}}>
            <div class="card">
                {item.name}
            </div>
        </div>
    {/each}
</section>

<style>
    section {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 8px;

        background: rgba(0, 0, 0, 0.40);
        border-radius: 10px;
        border: 1px solid #333;
        padding: 0.5rem 0.75rem;

        transition: all .3s linear;
    }

    section:focus {
        outline: none;
    }

    section:hover {
        border: 1px solid #aaa;
    }

    .card {
        background: rgba(0, 0, 0, 0.50);

        display: flex;
        align-items: center;

        width: 90%;
        padding: 10px;

        border: 2px solid #222;
        border-radius: 8px;
    }

    .card:hover {
        border-color: #333;
        transform: translateY(-1px);
    }
</style>
