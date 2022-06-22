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
        border-radius: 10px;
        padding: 5px;
    }

    .service:hover {
        background: #101010;
    }
</style>
