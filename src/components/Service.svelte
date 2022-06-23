<script>
    export let name;
    export let url;
    export let iconUrl;
    export let iconW;
    export let iconH;
</script>


<a href="{url}">
    <div class="button">
        <img src="{iconUrl}"
             width="{iconW}"
             height="{iconH}"/>
        <p>{name}</p>
    </div>
</a>

<style>
    .button {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        transition: all .5s ease;
        border-radius: 10px;
        padding: 5px;

        animation-duration: 0.2s;
    }

    .button:hover {
        transform: translateY(-3px);
        background: rgba(0, 0, 0, 0.4);
    }

    .button:active {
        transform: translateY(1px);
    }
</style>
