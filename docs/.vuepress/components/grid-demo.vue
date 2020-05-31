<template>
    <div>
        <g-layout>
            <g-row class="row">
                <g-column span="8" >
                    <div class="content">8</div>
                </g-column>
                <g-column span="8" >
                    <div class="content">8</div>
                </g-column>
                <g-column span="8" >
                    <div class="content">8</div>
                </g-column>
            </g-row>
        </g-layout>
        <g-layout>
            <g-row class="row">
                <g-column span="6" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="6" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="6" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="6" >
                    <div class="content">6</div>
                </g-column>
            </g-row>
        </g-layout>
        <g-layout>
            <g-row class="row">
                <g-column span="4" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="4" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="4" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="4" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="4" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="4" >
                    <div class="content">6</div>
                </g-column>
            </g-row>
        </g-layout>
        <g-layout>
            <g-row class="row">
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
            </g-row>
        </g-layout>
        <p>使用方法：</p>
        <code><pre style="color: white;">{{code}}</pre></code>
        <p>可以设置gutter,gutter得值是每个单元块之间得间隔，单位是像素</p>
        <hr>
        <g-layout >
            <g-row gutter="20" class="row">
                <g-column span="8" >
                    <div class="content">8</div>
                </g-column>
                <g-column span="8" >
                    <div class="content">8</div>
                </g-column>
                <g-column span="8" >
                    <div class="content">8</div>
                </g-column>
            </g-row>
        </g-layout>
        <g-layout>
            <g-row class="row" gutter="30">
                <g-column span="6" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="6" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="6" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="6" >
                    <div class="content">6</div>
                </g-column>
            </g-row>
        </g-layout>
        <g-layout>
            <g-row class="row" gutter="40">
                <g-column span="4" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="4" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="4" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="4" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="4" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="4" >
                    <div class="content">6</div>
                </g-column>
            </g-row>
        </g-layout>
        <g-layout>
            <g-row class="row" gutter="5">
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
                <g-column span="2" >
                    <div class="content">2</div>
                </g-column>
            </g-row>
        </g-layout>
        <p>使用方法：</p>
        <code><pre style="color: white;">{{code1}}</pre></code>
        <p>可以传入参数offset的设置来控制之间的空缺</p>
        <hr>
        <g-layout >
            <g-row gutter="20" class="row">
                <g-column span="8" >
                    <div class="content">8</div>
                </g-column>
                <g-column span="8" offset="2">
                    <div class="content">8</div>
                </g-column>
                <g-column span="6" >
                    <div class="content">8</div>
                </g-column>
            </g-row>
        </g-layout>
        <g-layout>
            <g-row class="row" >
                <g-column span="6" >
                    <div class="content">6</div>
                </g-column>
                <g-column span="6" offset="6">
                    <div class="content">6</div>
                </g-column>

                <g-column span="6" >
                    <div class="content">6</div>
                </g-column>

            </g-row>
        </g-layout>
        <code><pre style="color: white;">{{code2}}</pre></code>
    </div>
</template>

<script>

    import Row from "../../../src/row"
    import Column from "../../../src/column"
    import Layout from "../../../src/layout"
    export default {
        name: "grid-demo",
        components:{
            "g-row":Row,
            "g-column":Column,
            "g-layout":Layout
        },
        data(){
            return{
                code2: `
        <g-row gutter="20" class="row">
            <g-column span="8" >
                <div class="content">8</div>
            </g-column>
            <g-column span="8" offset="2">
                <div class="content">8</div>
            </g-column>
            <g-column span="6" >
                <div class="content">8</div>
            </g-column>
        </g-row>


        <g-row class="row" >
            <g-column span="6" >
            <div class="content">6</div>
        </g-column>
            <g-column span="6" offset="6">
                <div class="content">6</div>
            </g-column>

            <g-column span="6" >
                <div class="content">6</div>
            </g-column>

        </g-row>`,
                code:`
*{
    box-sizing:border-box;
}
<style scoped>
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #728cbb;
        color: white;
        border: 1px solid #b1aac6;
        height: 50px;
    }

</style>

            <g-row class="row">
                <g-column span="8" >
                    <div class="content">8</div>
                </g-column>
                <g-column span="8" >
                    <div class="content">8</div>
                </g-column>
                <g-column span="8" >
                    <div class="content">8</div>
                </g-column>
            </g-row>


        <g-row class="row">
            <g-column span="6" >
                <div class="content">6</div>
            </g-column>
            <g-column span="6" >
                <div class="content">6</div>
            </g-column>
            <g-column span="6" >
                <div class="content">6</div>
            </g-column>
            <g-column span="6" >
                <div class="content">6</div>
            </g-column>
        </g-row>


        <g-row class="row">
            <g-column span="4" >
                <div class="content">6</div>
            </g-column>
            <g-column span="4" >
                <div class="content">6</div>
            </g-column>
            <g-column span="4" >
                <div class="content">6</div>
            </g-column>
            <g-column span="4" >
                <div class="content">6</div>
            </g-column>
            <g-column span="4" >
                <div class="content">6</div>
            </g-column>
            <g-column span="4" >
                <div class="content">6</div>
            </g-column>
        </g-row>


        <g-row class="row">
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
        </g-row>
   `,
                code1:`
        <g-row gutter="20" class="row">
            <g-column span="8" >
                <div class="content">8</div>
            </g-column>
            <g-column span="8" >
                <div class="content">8</div>
            </g-column>
            <g-column span="8" >
                <div class="content">8</div>
            </g-column>
        </g-row>


        <g-row class="row" gutter="30">
            <g-column span="6" >
                <div class="content">6</div>
            </g-column>
            <g-column span="6" >
                <div class="content">6</div>
            </g-column>
            <g-column span="6" >
                <div class="content">6</div>
            </g-column>
            <g-column span="6" >
                <div class="content">6</div>
            </g-column>
        </g-row>


        <g-row class="row" gutter="40">
            <g-column span="4" >
                <div class="content">6</div>
            </g-column>
            <g-column span="4" >
                <div class="content">6</div>
            </g-column>
            <g-column span="4" >
                <div class="content">6</div>
            </g-column>
            <g-column span="4" >
                <div class="content">6</div>
            </g-column>
            <g-column span="4" >
                <div class="content">6</div>
            </g-column>
            <g-column span="4" >
                <div class="content">6</div>
            </g-column>
        </g-row>


        <g-row class="row" gutter="5">
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
            <g-column span="2" >
                <div class="content">2</div>
            </g-column>
        </g-row>
    `
            }
        }
    }
</script>

<style scoped>
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #728cbb;
        color: white;
        border: 1px solid #b1aac6;
        height: 50px;
    }

</style>