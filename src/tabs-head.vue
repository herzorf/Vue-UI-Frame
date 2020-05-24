<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "G-tabs-head",
        inject: ["eventBus"],
        created() {

        }
    }
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;
        >.actions{
            margin-left: auto;
        }
    }
</style>