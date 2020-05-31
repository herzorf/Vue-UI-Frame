<template>
    <div>
        <g-popover position="bottom" trigger="click">
            <template>
                <div slot="content">我出现在下面</div>
            </template>
            <g-button>点我</g-button>
        </g-popover>
        <g-popover position="top" trigger="click">
            <template>
                <div slot="content">我出现在上面</div>
            </template>
            <g-button>点我</g-button>
        </g-popover>
        <g-popover position="left" trigger="click">
            <template>
                <div slot="content">我出现在左边</div>
            </template>
            <g-button>点我</g-button>
        </g-popover>
        <g-popover position="right" trigger="click">
            <template>
                <div slot="content">
                    我会出现在右边
                </div>
            </template>
            <g-button>点我</g-button>
        </g-popover>
        <code style="color: white"><pre>{{code}}</pre></code>

        <hr>
        <p>这个组件不仅支持鼠标的点击事件，还支持鼠标的hover事件</p>

        <g-popover position="bottom" trigger="hover">
            <template>
                <div slot="content">我出现在下面</div>
            </template>
            <g-button>鼠标悬浮</g-button>
        </g-popover>
        <g-popover position="top" trigger="hover">
            <template>
                <div slot="content">我出现在上面</div>
            </template>
            <g-button>鼠标悬浮</g-button>
        </g-popover>
        <g-popover position="left" trigger="hover">
            <template>
                <div slot="content">我出现在左边</div>
            </template>
            <g-button>鼠标悬浮</g-button>
        </g-popover>
        <g-popover position="right" trigger="hover">
            <template>
                <div slot="content">
                    我会出现在右边
                </div>
            </template>
            <g-button>鼠标悬浮</g-button>
        </g-popover>
        <p>代码展示</p>
        <code style="color: white"><pre>{{code1}}</pre></code>
        <p>说明：我们通过position来展示浮窗的位置，可以是top,bottom,left,right,triggle是触发浮窗的事件，可以是click或者hover</p>
    </div>
</template>

<script>
    import Popover from "../../../src/popover"
    import Button from "../../../src/button"

    export default {
        data(){
            return{
                code1:`<g-popover position="bottom" trigger="hover">
        <template>
            <div slot="content">我出现在下面</div>
        </template>
        <g-button>点我</g-button>
    </g-popover>
    <g-popover position="top" trigger="hover">
        <template>
            <div slot="content">我出现在上面</div>
        </template>
        <g-button>点我</g-button>
    </g-popover>
    <g-popover position="left" trigger="hover">
        <template>
            <div slot="content">我出现在左边</div>
        </template>
        <g-button>点我</g-button>
    </g-popover>
    <g-popover position="right" trigger="hover">
        <template>
            <div slot="content">
                我会出现在右边
            </div>
        </template>
        <g-button>点我</g-button>
    </g-popover>`,
                code:`<g-popover position="bottom" trigger="click">
            <template>
                <div slot="content">我出现在下面</div>
            </template>
            <g-button>点我</g-button>
        </g-popover>
        <g-popover position="top" trigger="click">
            <template>
                <div slot="content">我出现在上面</div>
            </template>
            <g-button>点我</g-button>
        </g-popover>
        <g-popover position="left" trigger="click">
            <template>
                <div slot="content">我出现在左边</div>
            </template>
            <g-button>点我</g-button>
        </g-popover>
        <g-popover position="right" trigger="click">
            <template>
                <div slot="content">
                    我会出现在右边
                </div>
            </template>
            <g-button>点我</g-button>
        </g-popover>`,
            }
        },
        name: "popover",
        components:{
            "g-popover":Popover,
            "g-button":Button
        }
    }
</script>

<style scoped>

</style>