<script>
    export let service;
</script>


<a href="{service.url}">
    <div class="service">
        <img src="{service.iconUrl}"
                width="{service.iconW}"
                height="{service.iconH}"/>
        <p>{service.name}</p>
    </div>
</a>

<style>
    .service {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        transition: all .5s ease;
        border: 1px solid #777;
        padding: 0.3em;
    }

    .service:hover {
        background-color: #101010;
    }
</style>
