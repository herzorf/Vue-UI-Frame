<template>
    <div class="popover" ref="popover">
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
        mounted() {
            if (this.trigger === "click") {
                this.$refs.popover.addEventListener("click", this.onClick)
            } else {
                this.$refs.popover.addEventListener("mouseenter", this.onShow);
                this.$refs.popover.addEventListener("mouseleave", this.close)
            }
        },
        // destroyed(){
        //     if(this.trigger === "click"){
        //         this.$refs.popover.removeEventListener("click",this.onClick)
        //     }else{
        //         this.$refs.popover.removeEventListener("mouseenter",this.onShow);
        //         this.$refs.popover.removeEventListener("mouseleave",this.close)
        //     }
        // },
        computed: {
            openEvent() {
                if (this.trigger === "click") {
                    return "click"
                } else {
                    return "mouseenter"
                }
            },
            closeEvent() {
                if (this.trigger === "click") {
                    return "click"
                } else {
                    return "mouseleave"
                }
            }
        },
        props: {
            position: {
                type: String,
                default: "top",
                validator(value) {
                    return ["top", "bottom", "left", "right"].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: "click",
                validator(value) {
                    return ["click", "hover"].indexOf(value) >= 0
                }
            }
        },
        methods: {
            positionContent() {
                const {contentWrapper, triggerWrapper} = this.$refs;
                document.body.appendChild(contentWrapper);
                const contentWrapperHeight = contentWrapper.getBoundingClientRect().height;
                const {width, height, top, left} = triggerWrapper.getBoundingClientRect();
                let position = {
                    top: {
                        left: left + window.scrollX,
                        top: top + window.scrollY,
                    },
                    left: {
                        left: left + window.scrollX,
                        top: top + window.scrollY + (height - contentWrapperHeight) / 2
                    },
                    bottom: {
                        left: left + window.scrollX,
                        top: top + window.scrollY + height,
                    },
                    right: {
                        left: left + window.scrollX + width,
                        top: top + window.scrollY + (height - contentWrapperHeight) / 2
                    }
                }
                contentWrapper.style.left = position[this.position].left + "px";
                contentWrapper.style.top = position[this.position].top + "px"
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
                this.visible = true;
                this.$nextTick(() => {
                    this.positionContent();
                    this.listenToDocument();
                })
            },
            close() {
                this.visible = false;
                document.removeEventListener("click", this.onClickDocument);
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

        &.position-top {
            transform: translateY(-100%);
            margin-top: -0.5em;

            &::before {
                top: 100%;
                border-top-color: $background-color;
                border-bottom: none;
            }

            &::after {
                border-top-color: white;
                top: 99%;
                border-bottom: none;
            }
        }

        &.position-bottom {
            margin-top: 0.5em;

            &::before {
                bottom: 100%;
                border-top: none;
                border-bottom-color: $background-color;
            }

            &::after {
                border-top: none;
                border-bottom-color: white;
                bottom: 99%;
            }
        }

        &.position-left {
            transform: translateX(-100%);
            margin-left: -0.5em;

            &::before {
                top: 50%;
                transform: translateY(-50%);
                left: 100%;
                border-left-color: $background-color;
                border-right:none;
            }

            &::after {
                transform: translateY(-50%);
                border-left-color: white;
                top: 50%;
                border-right:none;
                left: calc(100% - 1px);
            }
        }

        &.position-right {
            margin-left: 0.5em;
            &::before {
                top: 50%;
                transform: translateY(-50%);
                right: 100%;
                border-right-color: $background-color;
                border-left: none;
            }

            &::after {
                border-left: none;
                transform: translateY(-50%);
                border-right-color: white;
                top: 50%;
                right: calc(100% - 1px);
            }
        }

    }
</style>