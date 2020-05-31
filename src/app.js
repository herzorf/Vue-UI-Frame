import Vue from "vue"
import Button from "./button.vue"
import Icon from "./icon"
import ButtonGroup from "./g-button-group.vue"
import Input from "./input"

import Row from "./row"
import Column from "./column"

import Layout from "./layout"
import Sider from "./sider"
import Header from "./header"
import Content from "./content"
import Footer from "./footer"

import Toast from "./toast"
import plugin from "./plugin"

import  Tabs from "./tabs"
import  TabsHead from "./tabs-head"
import  TabsBody from "./tabs-body"
import  TabsItem from "./tabs-item"
import  TabsPane from "./tabs-pane"
import  Popover from "./popover"
import  Collapse from "./collapse"
import  CollapseItem from "./collapse-item"

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Input);
Vue.component("g-row", Row);
Vue.component("g-column", Column);
Vue.component("g-layout", Layout);
Vue.component("g-sider", Sider);
Vue.component("g-header", Header);
Vue.component("g-content", Content);
Vue.component("g-footer", Footer);
Vue.component("g-toast", Toast);
Vue.use(plugin);
Vue.component("g-tabs",Tabs);
Vue.component("g-tabs-head",TabsHead);
Vue.component("g-tabs-body",TabsBody);
Vue.component("g-tabs-item",TabsItem);
Vue.component("g-tabs-pane",TabsPane);
Vue.component("g-popover",Popover);
Vue.component("g-collapse",Collapse)
Vue.component("g-collapse-item",CollapseItem)

new Vue({
    el: "#app",
    data() {
        return {
            selectedTab:"sport",
//            selectedTab:["1","2"],
            loading1: false,
            loading2: false,
            loading3: false,
            loading4: false,
            loading5: false,
            message: "你好啊"
        }
    },
    created() {

    },
    methods: {
        inputChange($event) {
        },
        yyy(){
            console.log("yyy");
        },
        showToast() {
            this.$toast("<p>知道错了没?</p>", {
                enableHTML: true,
                position: "top",
                closeButton: {
                    text: "知道了",
                    callback(toast) {
                        toast.log()
                    }
                },
                autoClose: false
            });
        }
    }
})
