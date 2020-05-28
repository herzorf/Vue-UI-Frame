<template>
    <div class="popover" @click="onClick">
        <div ref="contentWrapper" v-if="visible" class="content-wrapper" :class="{[`position-${position}`]:true}">
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
        props: {
            position: {
                type: String,
                default: "top",
                validator(value) {
                    return ["top", "bottom", "left", "right"].indexOf(value) >= 0
                }
            }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper);
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
                if (this.position === "top") {
                    this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
                    this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
                } else if (this.position === "bottom") {
                    this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
                    this.$refs.contentWrapper.style.top = top + window.scrollY + height + "px";
                }else if(this.position === "left"){
                    this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
                    this.$refs.contentWrapper.style.top = top + window.scrollY+(height - this.$refs.contentWrapper.getBoundingClientRect().height)/2+ "px";
                }else if(this.position === "right"){
                    this.$refs.contentWrapper.style.left = left + window.scrollX + width + "px";
                    this.$refs.contentWrapper.style.top = top + window.scrollY+(height - this.$refs.contentWrapper.getBoundingClientRect().height)/2+ "px";
                }
            },
            onClickDocument(e) {
                if (this.$refs.contentWrapper && !(this.$refs.triggerWrapper.contains(e.target) || this.$refs.contentWrapper.contains(e.target))) {
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
    $background-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }

    .content-wrapper {
        border: 1px solid $background-color;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
        background-color: white;
        position: absolute;
        padding: 0.5em 1em;
        max-width: 24em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            border: 10px solid transparent;
            display: inline-block;
            position: absolute;
        }
        &.position-top{
            transform: translateY(-100%);
            margin-top: -0.5em;
            &::before {
                top: 100%;
                border-top-color: $background-color;
            }

            &::after {
                border-top-color: white;
                top: 99%;
            }
        }
        &.position-bottom{
            margin-top: 0.5em;
            &::before {
                bottom: 100%;
                border-bottom-color: $background-color;
            }

            &::after {
                border-bottom-color: white;
                bottom: 99%;
            }
        }
        &.position-left{
            transform: translateX(-100%);
            margin-left: -0.5em;
            &::before {
                top: 50%;
                transform: translateY(-50%);
                left: 100%;
                border-left-color: $background-color;
            }

            &::after {
                transform: translateY(-50%);
                border-left-color: white;
                top: 50%;
                left: calc(100% - 1px);
            }
        }
        &.position-right{
            margin-left: 0.5em;
            &::before {
                top: 50%;
                transform: translateY(-50%);
                right: 100%;
                border-right-color: $background-color;
            }

            &::after {
                transform: translateY(-50%);
                border-right-color: white;
                top: 50%;
                right: calc(100% - 1px);
            }
        }

    }
</style>