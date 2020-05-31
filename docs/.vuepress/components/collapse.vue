<template>
    <g-collapse  :selected.sync="selectedTab"  >
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
</template>

<script>

    import Collapse from "../../../src/collapse"
    import CollapseItem from "../../../src/collapse-item"

    export default {
        name: "collapse",
        components:{
            "g-collapse":Collapse,
            "g-collapse-item":CollapseItem
        },
        data(){
            return{
                selectedTab:["3"],
            }
        }
    }
</script>

<style scoped>

</style>