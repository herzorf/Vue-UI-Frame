<template>
    <div>
        <g-layout style="height: 200px;">
            <g-sider class="demo"style="background-color: #7ec699;width: 60px">sider</g-sider>
            <g-layout>
                <g-header style="background-color: #4ec654;height: 40px;">header
                </g-header>
                <g-content style="background-color: #4e6e8e">content</g-content>
                <g-footer style="background-color: #6b5900;height: 40px">footer</g-footer>
            </g-layout>
        </g-layout>

        <p>使用方法</p>
        <code style="color: white"><pre> {{code1}}</pre></code>

    <g-layout style="color: white; margin-bottom:50px;">
        <g-header style="height: 50px; background:lightskyblue;">
            header
        </g-header>
        <g-content style="height: 100px; background:deepskyblue;">
            content
        </g-content>
        <g-footer style="height: 50px; background:lightskyblue;">
            footer
        </g-footer>
    </g-layout>

    <p>使用方法</p>
    <code style="color: white"><pre> {{code}}</pre></code>
    </div>
</template>

<script>

    import Layout from "../../../src/layout"
    import Sider from "../../../src/sider"
    import Header from "../../../src/header"
    import Content from "../../../src/content"
    import Footer from "../../../src/footer"
    export default {
        name: "layout",
        components:{
            "g-layout":Layout,
            "g-sider":Sider,
            "g-header":Header,
            "g-content":Content,
            "g-footer":Footer
        },
        data(){
            return{
                code:` <g-layout style="color: white; margin-bottom:50px;">
        <g-header style="height: 50px; background:lightskyblue;">
            header
        </g-header>
        <g-content style="height: 100px; background:deepskyblue;">
            content
        </g-content>
        <g-footer style="height: 50px; background:lightskyblue;">
            footer
        </g-footer>
    </g-layout>`,
                code1:` <g-layout style="height: 200px;">
        <g-sider class="demo"style="background-color: #7ec699;width: 60px">sider</g-sider>
        <g-layout>
            <g-header style="background-color: #4ec654;height: 40px;">header
            </g-header>
            <g-content style="background-color: #4e6e8e">content</g-content>
            <g-footer style="background-color: #6b5900;height: 40px">footer</g-footer>

        </g-layout>
    </g-layout>`
            }
        }
    }
</script>

<style scoped>

</style>