---
title: toast
---
# toast组件
组件说明：toast组件为弹窗组件，弹窗中的内容，按钮，是否自动关闭都是通过构造函数传递的。弹窗中的内容还支持HTML文件，点击关闭按钮之后还可以触发回调函数

样式展示：

<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

# 代码展示
```html
<g-button @click='$toast("知道错了没?", {
    enableHTML: true,
    position: "top",
    closeButton: {
    text: "知道了",
    callback(toast) {
    toast.log()
    }
    },
    autoClose: false
    })'>上方弹出</g-button>


    <g-button @click='$toast("<p>知道错了没?</p>", {
    enableHTML: true,
    position: "bottom",
    closeButton: {
    text: "知道了",
    callback(toast) {
    toast.log()
    }
    },
    autoClose: false
    })'>下方弹出</g-button>

    <g-button @click='$toast("<p>知道错了没?</p>", {
    enableHTML: true,
    position: "middle",
    closeButton: {
    text: "知道了",
    callback(toast) {
    toast.log()
    }
    },
    autoClose: false
    })'>中间弹出</g-button>
```

特殊说明:其中传递的字符串`<p>知道错了没?</p>`可以是字符串也可以是html标签，当是html标签的时候
enableHTMl的值要为true的时候才可以生效，position表示标签出现的地方，closeButton是关闭按钮，callback是回调函数