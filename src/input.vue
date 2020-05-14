<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :placeholder="placeholder"  :disabled="disabled" :readonly="readonly">
    </div>

</template>

<script>
    export default {
        name: "input",
        props: {
            placeholder: {
                type: String

            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly:{
                type:Boolean
            },
            error:{
                type:String,
            }
        }
    }
</script>

<style scoped lang="scss">

    $height: 32px;
    $border-color: #666;
    $border-color-hover: #333;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgb(0, 0, 0, 0.5);
    $error: #F1453d;
    .wrapper {
        display: inline-block;

        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: 14px;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled]{
                border-color: #cccccc;
                color: #ccc;
                cursor: not-allowed;
            }
        }
        &.error{
            > input{
            border-color: $error;
        }}

    }
</style>