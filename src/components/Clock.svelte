<script>
 	import { onMount } from 'svelte';
	let time = new Date();

	$: hours = (time.getHours() < 10 ? "0" : "") + time.getHours();
	$: minutes = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
	$: seconds = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();


	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<h1>{hours}:{minutes}:{seconds}</h1>

<style>
	h1 {
		font-size: 4.5em;
		text-shadow: 2px 1px 1px #777;
	}

 	@media screen and (max-width: 500px) {
		h1 {
			font-size: 3.4em;
		}
	}
</style>
