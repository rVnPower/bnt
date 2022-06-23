<script>
    import {title} from '../store.js';
</script>

<div class="title">
    <p>{$title}</p>
</div>

<style>
    .title {
        line-break: auto;
        line-height: 35px;
        text-align: center;
        width: 90%;
    }

    p {
        font-size: 1.6em;
    }

    @media screen and (max-width: 500px) {
        p {
            font-size: 1.3em;
        }
    }
</style>
