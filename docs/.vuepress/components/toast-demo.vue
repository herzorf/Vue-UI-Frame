<template>
<div>
    <g-button @click='$toast("知道错了没?", {
    enableHTML: true,
    position: "top",
    closeButton: {
    text: "知道了",
    callback(toast) {
    toast.log()
    }
    },
    autoClose: false
    })'>上方弹出</g-button>


    <g-button @click='$toast("<p>知道错了没?</p>", {
    enableHTML: true,
    position: "bottom",
    closeButton: {
    text: "知道了",
    callback(toast) {
    toast.log()
    }
    },
    autoClose: false
    })'>下方弹出</g-button>

    <g-button @click='$toast("<p>知道错了没?</p>", {
    enableHTML: true,
    position: "middle",
    closeButton: {
    text: "知道了",
    callback(toast) {
    toast.log()
    }
    },
    autoClose: false
    })'>中间弹出</g-button>
</div>
</template>

<script>
    import Button from "../../../src/button"
    import Vue from "vue"
    import Toast from "../../../src/toast"
    import plugin from "../../../src/plugin"
    Vue.use(plugin);
    export default {
        name: "toast-demo",
        components:{
            "g-toast": Toast,
            "g-button":Button
        }
    }
</script>

<style scoped>

</style>