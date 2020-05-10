<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')">
        <g-icon v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon v-if="loading"  class="loading" v-if="icon" name="loading"></g-icon>
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
        name: "button",
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

<style lang="scss">
    .g-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        line-height: 14px;
        font-size: var(--font-size);
        height: var(--button-height);
        background-color: var(--button-bg);
        color: var(--color);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        cursor: pointer;
        vertical-align: middle;

        &:hover {
            background-color: var(--button-hover-bg);
        }

        &:active {
            background-color: var(--button-active-bg);
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