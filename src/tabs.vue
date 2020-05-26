<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from "vue"

    export default {
        name: "G-tabs",
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.$children.forEach((vm)=>{
                if(vm.$options.name === "G-tabs-head"){
                    vm.$children.forEach((item)=>{
                        if(item.$options.name === "G-tabs-item" && item.name === this.selected){
                            console.log(item.$el);
                            this.eventBus.$emit("update:selected", this.selected,item);
                        }
                    })
                }
            })
        }
    }
</script>

<style scoped>

</style>