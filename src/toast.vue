<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <slot v-if="!enableHTML"></slot>
        <div v-else v-html="$slots.default[0]"></div>
        <div class="line" ref="line"></div>
        <span v-if="closeButton" @click="closeToast">{{closeButton.text}}</span>
    </div>
</template>
<script>
    export default {
        name: "G-toast",
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 3
            },
            closeButton: {
                type: Object,
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
            position:{
                type:String,
                default:"top",
                validator(value){
                    return ["top","bottom","middle"].indexOf(value) >=0
                }

            }
        },
        computed:{
            toastClasses(){
                return {[`position-${this.position}`]:true}
            }
        },
        mounted() {
            this.updateStyle();
            this.execAutoClose();
        },
        methods: {
            updateStyle() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            execAutoClose() {
                if (this.autoClose && !this.closeButton) {
                    setTimeout(() => {
                        this.close();
                        console.log("他认为自己没错");
                    }, this.autoCloseDelay * 1000)
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
    @keyframes fadeIn {
        0%{opacity: 0%;}
        100%{opacity: 1;}
    }
    .toast {
        animation:fadeIn 0.3s linear;
        display: flex;
        min-height: $min-height;
        position: fixed;
        line-height: $line-height;
        transform: translateX(-50%);
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
        &.position-top{

            left: 50%;top: 0;
            transform: translateX(-50%);

        }
        &.position-bottom{
            left: 50%;bottom: 0;
            transform: translateX(-50%);
        }
        &.position-middle{
            left: 50%;top: 50%;
            transform: translate(-50%,-50%);
        }

    }
</style>