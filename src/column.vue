<template>
    <div class="column" :class="[span && `column-${span}`, offset &&`offset-${offset}`]" :style="{paddingLeft:gutter/2 + 'px',paddingRight:gutter/2 + 'px'}">
       <div style=" border: 1px solid red; height: 100px;"><slot></slot></div>
    </div>

</template>

<script>
    export default {
        props:{
            span:{
                type:[String,Number]
            },
            offset:{
                type:[String,Number]
            }
        },
        data(){
            return{
                gutter:0,
            }
        },

    }
</script>
<style lang="scss" scoped>
    .column{


        width: 50%;

        $class: column-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                width:($n/24)*100%;
            }
        }
        $class:offset-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                margin-left:($n/24)*100% ;
            }
        }
    }

</style>