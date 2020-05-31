<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "G-tabs-body",
        inject:["eventBus"],
        created(){
        }
    }
</script>

<style scoped lang="scss">

</style>