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