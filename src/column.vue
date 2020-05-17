<template>
    <div class="column" :class="columnClasses" :style="columnStyle">
            <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            span: {
                type: [String, Number]
            },
            offset: {
                type: [String, Number]
            }
        },
        data() {
            return {
                gutter: 0,
            }
        },
        computed: {
            columnStyle() {
                return{
                    paddingLeft: this.gutter/2 + 'px',
                    paddingRight: this.gutter/2 + 'px'
                }
            },
            columnClasses(){
                return  [this.span && `column-${this.span}`, this.offset &&`offset-${this.offset}`]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .column {
        width: 50%;
        $class: column-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class: offset-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }

</style>