<template>
    <button class="g-button">提交</button>
</template>

<script>
    export default {
        name: "button"
    }
</script>

<style lang = "scss">
    .g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        background-color: var(--button-bg);
        color:var(--color);
        padding: 0 1em;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        cursor:pointer;
        &:hover{
            background-color: var(--button-hover-bg);
        }
        &:active{
            background-color:var(--button-active-bg);
        }
        &:focus{
            outline:none;
        }
    }

</style>