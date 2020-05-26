<template>
    <div class="tabs-item" @click="changeItem" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "G-tabs-item",
        data() {
            return {
                active: false,
            }
        },
        inject: ["eventBus"],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: [String, Number],
                require: true
            }
        },
        created() {
            this.eventBus.$on("update:selected", (name) => {
                this.active = name === this.name;
            })
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
            },
        methods: {
            changeItem() {
                this.eventBus.$emit("update:selected", this.name, this);
            }
        }
    }
</script>

<style scoped lang="scss">
    $blue: #4d5aeb;
    .tabs-item {
        flex-shrink: 0;
        display: flex;
        cursor: pointer;
        height: 100%;
        padding: 0 2em;
        justify-content: center;
        align-items: center;
        &.active{
            color: $blue;
        }
    }
</style>