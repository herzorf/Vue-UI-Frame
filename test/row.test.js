const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Column from '../src/column'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    });
    it('可以接受gutter属性', (done) => {
        Vue.component("g-row", Row);
        Vue.component("g-column", Column);
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
        <g-row gutter="20">
            <g-column span="12"></g-column>
            <g-column span="12"></g-column>
        </g-row>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const columns = vm.$el.querySelectorAll('.column')
            expect(getComputedStyle(columns[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(columns[1]).paddingLeft).to.eq('10px')
            done();
            vm.$el.remove();
            vm.$destroy();
        },0)
    });
    it('可以接受align属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Row);
        const vm = new Constructor({
            propsData:{
                align:"right"
            }
        }).$mount(div);
        const element = vm.$el;
        expect(getComputedStyle(element).justifyContent).to.equal("flex-end");
        div.remove();
        vm.$destroy()
    })
});