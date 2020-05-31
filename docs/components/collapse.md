---
title: collapse
---
# collapse组件

组件说明：这是一个手风琴的组件，你可以在这个组件中编辑你想要的内容，你可以让你的手风琴展示和隐藏，可以同时显示一个或者多个


<ClientOnly>

<collapse></collapse>

</ClientOnly>

代码示例

```html
    <g-collapse  :selected.sync="selectedTab"  >
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>

       data(){
            return{
                selectedTab:["3"],
            }
        }
```

说明：其中的selectedTab是一个数组，用于存放默认展示的item