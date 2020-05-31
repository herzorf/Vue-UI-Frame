<template>
    <div>
        <g-button>文字</g-button>
        <g-button icon="settings">文字</g-button>
        <g-button icon="settings" icon-position="right">文字</g-button>
        <g-button icon="error">文字</g-button>
        <g-button icon="left">文字</g-button>
        <g-button icon="download">文字</g-button>
        <g-button icon="loading" loading>文字</g-button>
        <g-button icon="thumbs-up">文字</g-button>
        <g-button icon="right">文字</g-button>
    </div>
</template>

<script>
    import Button from "../../../src/button"
    export default {
        components:{
            "g-button":Button,
        }
    }
</script>

<style scoped>

</style>