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
</script>

<section use:dndzone={{items, flipDurationMs}} on:consider={handleConsider} on:finalize={handleFinalize}>
    {#each items as item(item.id)}
        <div animate:flip={{duration:flipDurationMs}}>
            {item.name}
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

    div {
        background: rgba(0, 0, 0, 0.50);

        display: flex;
        align-items: center;

        width: 90%;
        padding: 10px;

        border: 2px solid #222;
        border-radius: 8px;

        transition: all .3s linear;
    }

    div:hover {
        border-color: #333;
    }
</style>
