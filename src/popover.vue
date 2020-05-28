<template>
    <div class="popover" @click="onClick">
        <div ref="contentWrapper" v-if="visible" class="content-wrapper">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "G-popover",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper);
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
                this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
                this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
            },
            onClickDocument(e) {
                if (  this.$refs.contentWrapper && !(this.$refs.triggerWrapper.contains(e.target) || this.$refs.contentWrapper.contains(e.target))) {
                    this.visible = false;
                    document.removeEventListener("click", this.onClickDocument);
                }
            },
            listenToDocument() {
                document.addEventListener("click", this.onClickDocument);
            },
            onShow() {
                this.$nextTick(() => {
                    this.positionContent();
                    this.listenToDocument();
                })
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    this.visible = !this.visible;
                    document.removeEventListener("click", this.onClickDocument);
                    if (this.visible === true) {
                        this.onShow();
                    }
                }
            },
            mounted() {
            }
        }
    }
</script>

<style scoped lang="scss">
    $background-color:#333;
    $border-radius:4px;
    .popover {
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }

    .content-wrapper {
        border: 1px solid $background-color;
        border-radius: $border-radius;
        /*box-shadow: 0 0 3px rgba(0,0,0,0.5);*/
        filter: drop-shadow(0 1px 3px rgba(0,0,0,0.5));
        background-color: white;
        margin-top: -0.5em;
        position: absolute;
        transform: translateY(-100%);
        padding: 0.5em 1em;
        max-width: 24em;
        word-break: break-all;
        &::before,&::after {
            content: '';
            border: 10px solid transparent;
            display: inline-block;
            position: absolute;
        }
            &::before{
                top:100%;
                border-top-color: $background-color;
            }
            &::after{
                border-top-color: white;
                top: 99%;
            }

    }
</style>