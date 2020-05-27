<template>
    <div class="tabs-item" @click="changeItem" :class="classes" :data-name="name">
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
            if (this.eventBus) {
                this.eventBus.$on("update:selected", (name) => {
                    this.active = name === this.name;
                })
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        methods: {
            changeItem() {
                if (this.disabled) {
                    return
                }
                this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
                this.$emit("click",this)
            }
        }
    }
</script>

<style scoped lang="scss">
    $blue: #4d5aeb;
    $disabled-color: gray;
    .tabs-item {
        flex-shrink: 0;
        display: flex;
        cursor: pointer;
        height: 100%;
        padding: 0 2em;
        justify-content: center;
        align-items: center;

        &.active {
            color: $blue;
        }

        &.disabled {
            color: grey;
            cursor: not-allowed;
        }
    }
</style>