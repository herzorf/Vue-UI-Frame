import Vue from "vue"
import Button from "./button.vue"
import Icon from "./icon"
import ButtonGroup from "./g-button-group.vue"
Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group",ButtonGroup)
new Vue({
    el: "#app",
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false,
            loading4: false,
            loading5: false,
        }
    }
})

//单元测试
import chai from "chai"
const expect = chai.expect;
import spies from "chai-spies"
chai.use(spies)
{
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:"settings"
        }
    })
    button.$mount(div)
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute("xlink:href");
    expect(href).to.eq("#icon-settings");
    button.$el.remove();
    button.$destroy();
}

{
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:"settings",
            loading:true,
        }
    })
    button.$mount(div)
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute("xlink:href");
    expect(href).to.eq("#icon-loading");
    button.$el.remove();
    button.$destroy();
}

{
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:"settings",
            iconPosition:"right"
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq("2");
    button.$el.remove();
    button.$destroy();
}

{
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:"settings",
            iconPosition:"left"
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq("1");
    button.$el.remove();
    button.$destroy();
}
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon:"left"
        }
    })
    vm.$mount()
    let spy = chai.spy(function(){})
    vm.$on("click",spy);
    let button = vm.$el;
    button.click();
    expect(spy).to.have.been.called()
}