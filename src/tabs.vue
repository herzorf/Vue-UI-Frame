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
            if(this.$children.length === 0){
              console && console.warn() &&  console.warn("tabs里面应该是tabs-head和tabs-body,但是你没有子组件")
            }
            this.$children.forEach((vm)=>{
                if(vm.$options.name === "G-tabs-head"){
                    vm.$children.forEach((item)=>{
                        if(item.$options.name === "G-tabs-item" && item.name === this.selected){
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