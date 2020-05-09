<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon"  class="icon" >
            <use :xlink:href="`#icon-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        name: "button",
        props: ['icon', 'iconPosition']
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
            margin-left: 0em;
        }
        &.icon-right{
            > .content {
                order: 1;
            }

            > .icon {
                order: 2;
                margin-right: 0em;
                margin-left: 0.3em;
            }
        }
    }

</style>