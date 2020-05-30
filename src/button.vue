<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')">
        <g-icon v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon v-if="loading"  class="loading icon"  name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from "./icon"
    export default {
        components:{
          "g-icon":Icon,
        },
        name: "G-button",
        props: {
            "icon": {},
            "iconPosition": {
                type: String,
                default: "left",
                validator(value) {
                    return (!(value !== "left" && value !== "right"));
                }
            },
            "loading": {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-button {
        $font-size:14px;
        $color: #333;
        $height:32px;
        $background-color:#eee;
        $border-color:#999;
        $border-radius:4px;
        $hover-color:#fff;
        $active-color:#ddd;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        line-height: 14px;
        font-size: $font-size;
        height: $height;
        background-color: $background-color;
        color: $color;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        cursor: pointer;
        vertical-align: middle;

        &:hover {
            background-color: $hover-color;
        }

        &:active {
            background-color:$active-color;
        }

        &:focus {
            outline: none;
        }

        > .content {
            order: 2;
        }

        > .icon {
            order: 1;
            margin-right: 0.3em;
            margin-left: 0;
        }

        &.icon-right {
            > .content {
                order: 1;
            }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: 0.3em;
            }
        }
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loading {
        animation: loading 1s infinite linear;
    }
</style>