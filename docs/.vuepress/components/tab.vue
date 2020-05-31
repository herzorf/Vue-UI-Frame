<template>
    <div>
            <g-tabs :selected.sync="selected">
                <g-tabs-head>
                    <g-tabs-item name="woman">
                        美女
                    </g-tabs-item>
                    <g-tabs-item name="sport" >体育</g-tabs-item>
                    <g-tabs-item name="finance">财经</g-tabs-item>
                    <template slot="actions">
                        <button>设置</button>
                    </template>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="woman">美女相关</g-tabs-pane>
                    <g-tabs-pane name="sport">体育相关</g-tabs-pane>
                    <g-tabs-pane name="finance">财经相关</g-tabs-pane>
                </g-tabs-body>
            </g-tabs>

    </div>
</template>

<script>

    import  Tabs from "../../../src/tabs"
    import  TabsHead from "../../../src/tabs-head"
    import  TabsBody from "../../../src/tabs-body"
    import  TabsItem from "../../../src/tabs-item"
    import  TabsPane from "../../../src/tabs-pane"

    export default {
        name: "tab",
        components:{
            "g-tabs":Tabs,
            "g-tabs-head":TabsHead,
            "g-tabs-item":TabsItem,
            "g-tabs-body":TabsBody,
            "g-tabs-pane":TabsPane,
        },
        data(){
            return{
                selected : "sport"
            }
        },

    }
</script>

<style scoped>

</style>