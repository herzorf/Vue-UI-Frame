const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from "../src/tabs-head"
import TabsBody from "../src/tabs-body"
import TabsItem from "../src/tabs-item"
import TabsPane from "../src/tabs-pane"
Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-head", TabsHead);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-pane", TabsPane);

describe('tabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    });

    it("可以接受name", () => {
        const Constructor = Vue.extend(TabsItem);
        const vm = new Constructor({
            propsData: {
                name: "xxx"
            }
        }).$mount()
        expect(vm.$el.getAttribute("data-name")).to.eq("xxx");
    })
    it("可以接受 disabled", () => {
        const Constructor = Vue.extend(TabsItem);
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        console.log("dd");
        expect(vm.$el.classList.contains("disabled")).to.be.true;
        const callback = sinon.fake();
        vm.$on('click', callback);
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
});