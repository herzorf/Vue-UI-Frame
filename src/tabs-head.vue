<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "G-tabs-head",
        inject: ["eventBus"],
        mounted() {
            this.eventBus.$on("update:selected", (item, vm) => {
                let {width, height, top, left} = vm.$el.getBoundingClientRect();
                this.$refs.line.style.width = `${width}px`;
                this.$refs.line.style.left = `${left}px`;
            })
        }
    }
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    $blue: #4d5aeb;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        border-bottom: 1px solid #dddddd;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid white;
            transition: all 250ms;
        }
        > .actions {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1em;
            margin-left: auto;
        }
    }
</style>