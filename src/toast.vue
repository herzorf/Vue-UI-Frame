<template>
    <div class="container" :class="toastClasses">
        <div class="toast" ref="wrapper">
            <slot v-if="!enableHTML"></slot>
            <div v-else v-html="$slots.default[0]"></div>
            <div  v-if=" closeButton " class="line" ref="line"></div>
            <span v-if=" closeButton " @click="closeToast">{{closeButton.text}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "G-toast",
        props: {
            autoClose: {
                type: [Boolean,Number],
                default: false,
                validator(value){
                    return value === false || typeof value === "number"
                }
            },
            closeButton: {
                type: [Object,Boolean],
                default: () => {
                    return {
                        text: "关闭", callback: undefined
                    }
                }
            },
            enableHTML: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: "top",
                validator(value) {
                    return ["top", "bottom", "middle"].indexOf(value) >= 0
                }
            }
        },
        computed: {
            toastClasses() {
                return {[`position-${this.position}`]: true}
            }
        },
        mounted() {
            if(this.closeButton){this.updateStyle();}
            this.execAutoClose();
        },
        methods: {
            updateStyle() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close();
                    }, this.autoClose * 1000)
                }
            },
            close() {
                this.$el.remove();
                this.$emit("close");
                this.$destroy();
            },
            log() {
                console.log("他说他知道错了")
            },
            closeToast() {
                this.close();
                if (this.closeButton && typeof this.closeButton.callback === "function") {
                    this.closeButton.callback(this);
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $min-height: 40px;
    $border-radius: 4px;
    $line-height: 1.8;
    $background-color: rgb(0, 0, 0, 0.75);
    @keyframes fade-from-down {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fade-from-up {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fade-from-middle {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .container {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        z-index: 21;
        &.position-top {
            top: 0;
            .toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: fade-from-up 0.5s;
            }
        }

        &.position-bottom {
            bottom: 0;

            .toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: fade-from-down 0.5s;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
            .toast {
                animation: fade-from-middle 0.5s;
            }
        }

    }

    .toast {
        display: flex;
        min-height: $min-height;
        line-height: $line-height;
        font-size: $font-size;
        align-items: center;
        justify-content: center;
        background-color: $background-color;
        color: white;
        padding: 3px 10px;
        border-radius: $border-radius;
        box-shadow: 0 0 3px 0 rgb(0, 0, 0, 0.5);

        & > .line {
            height: 100%;
            border: 1px solid #ccc8c4;
            margin: 0 14px;
        }

        & > span {
            cursor: pointer;
            flex-shrink: 0;
        }

    }
</style>