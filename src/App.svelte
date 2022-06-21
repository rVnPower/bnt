<script>
    import Clock from "./components/Clock.svelte";
</script>

<div class="container">
    <div class="interface">
		<p>Hello, VnPower!</p>
        <Clock/>
    </div>
</div>

<style>
    .container {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 20px;
    }

    .interface {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        line-height: 20px;

        background-color: #101010CF;
        height: 70%;
        width: 50%;

        border-radius: 30px;
    }
</style>
