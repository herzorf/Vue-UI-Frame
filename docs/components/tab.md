---
title: tab
---
# tab组件
tab组件可以切换文本框，当切换item的时候下面相对应的pane也会相应的切换

样式预览：

<ClientOnly>

<tab></tab>

</ClientOnly>

参考代码：
```html
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
             


           data:{
             return{
                selected::sport",
            }
```

说明：在g-tabs中的selected是tab的默认值，g-tabs-item中的name要和g-tabs-pane中的name一一对应才能达到效果