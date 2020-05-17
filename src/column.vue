<template>
    <div class="column" :class="columnClasses" :style="columnStyle">
            <slot></slot>
    </div>
</template>

<script>
  let  validator = (value)=>{
        let keys = Object.keys(value);
        let valid  = true;
        keys.forEach(key => {
            if(!["span","offset"].includes(key)){
                valid = false;
            }
        })
        return valid
    }

    export default {
        props: {
            span: {
                type: [String, Number]
            },
            offset: {
                type: [String, Number]
            },
            phone: {
                type: Object,
                validator,
            },
            iPad:{
                type:Object,
                validator
            },
            laptop:{
                type:Object,
                validator
            },
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
                return  [
                    this.span && `column-${this.span}`,
                    this.offset &&`offset-${this.offset}`,
                    this.phone && `column-phone-${this.phone.span}`,
                    this.iPad && `column-iPad-${this.iPad.span}`,
                    this.laptop && `column-laptop-${this.laptop.span}`,

                ]
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
        @media (max-width : 576px){
            $class: column-phone-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }

        }
        @media (min-width : 768px){
            $class: column-iPad-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class: offset-iPad-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }

        }
        @media (min-width : 1080px) {
            $class: column-laptop-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class: offset-laptop-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }

        }

    }

</style>