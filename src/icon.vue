<template>
    <svg   class="icon" >
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    import "./svg.js"
    export default {
        name: "icon",
        props:["name"]
    }
</script>

<style scoped lang="scss">
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>