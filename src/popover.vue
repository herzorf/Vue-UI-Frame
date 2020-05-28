<template>
    <div class="popover" @click="onClick">
        <div ref="contentWrapper" v-if="visible" class="content-wrapper">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
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
    .popover {
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        transform: translateY(-100%);
        border: 1px solid red;
    }
</style>