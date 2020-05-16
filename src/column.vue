<template>
    <div class="column" :class="[`column-${span}`]">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        props:{
            span:{
                type:[String,Number]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .column{
        height: 100px;
        background-color: #cccccc;
        width: 50%;
        border: 1px solid red;
        $class: column-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                width:($n/24)*100%;
            }
        }
    }

</style>