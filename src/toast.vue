<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "G-toast"
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $height: 40px;
    $border-radius: 5%;
    $line-height:1.8;
    $background-color: rgb(0,0,0,0.75);
    .toast {
        height: $height;
        position: fixed;
        line-height: $line-height;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        font-size: $font-size;
        display: flex;
        align-items: center;
        background-color: $background-color;
        color: white;
        padding: 0 10px;
        border-radius: $border-radius;
        box-shadow: 0 0 3px 0  rgb(0,0,0,0.5);
    }
</style>