<template>
    <div>
    <g-input placeholder="输入文字..." ></g-input>
    <g-input placeholder="无法操作的..." disabled></g-input>
    <g-input placeholder="只读的内容..." readonly></g-input>
        <br><br>
    <g-input placeholder="输入文字..." error="输入的内容不符合要求"></g-input>
        <br><br>
        <g-input value="message"  v-model="message"></g-input><br><br>
        {{message}}
    </div>
</template>

<script>
    import Input from "../../../src/input"

    export default {
        name: "input-demo",
        components:{
            "g-input":Input,
        },
        data(){
            return{
                message:"欢迎使用我的组件",
            }
        }
    }
</script>

<style scoped>

</style>