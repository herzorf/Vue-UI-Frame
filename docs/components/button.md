---
title: button
---
# button组件
组件说明：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个组件可以使用icon参数来设置按钮的图标，目前支持的图标样式为：`error,loading,right,left,download
settings,down`,可以使用icon-position来控制图标出现的位置(默认出现在左边)

样式展示:

<ClientOnly>
<button-demo></button-demo>
</ClientOnly>

使用方法

```html
        <g-button>文字</g-button>
        <g-button icon="settings">文字</g-button>
        <g-button icon="settings" icon-position="right">文字</g-button>
        <g-button icon="error">文字</g-button>
        <g-button icon="left">文字</g-button>
        <g-button icon="download">文字</g-button>
        <g-button icon="loading" loading>文字</g-button>
        <g-button icon="thumbs-up">文字</g-button>
        <g-button icon="right">文字</g-button>
```
