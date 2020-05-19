const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Column from '../src/column'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Column', () => {
    it('存在.', () => {
        expect(Column).to.be.ok
    });

    it('可以接受 span 属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Column);
        const vm = new Constructor({
            propsData:{
                span:"1"
            }
        }).$mount(div);
        const element = vm.$el;
        expect(element.classList.contains('column-1')).to.eq(true);
        div.remove();
        vm.$destroy()
    })
    it('可以接受 offset 属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Column);
        const vm = new Constructor({
            propsData:{
                offset:"1"
            }
        }).$mount(div);
        const element = vm.$el;
        expect(element.classList.contains('offset-1')).to.eq(true);
        div.remove();
        vm.$destroy()
    })
    it('可以接受 phone 属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Column);
        const vm = new Constructor({
            propsData:{
                phone:{span:1,offset: 2}
            }
        }).$mount(div);
        const element = vm.$el;
        expect(element.classList.contains('column-phone-1')).to.eq(true);

        expect(element.classList.contains('offset-phone-2')).to.eq(true);
        div.remove();
        vm.$destroy()
    })
    it('可以接受 iPad 属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Column);
        const vm = new Constructor({
            propsData:{
                iPad:{span:1,offset: 2}
            }
        }).$mount(div);
        const element = vm.$el;
        expect(element.classList.contains('column-iPad-1')).to.eq(true);

       expect(element.classList.contains('offset-iPad-2')).to.eq(true);
        div.remove();
        vm.$destroy()
    })
    it('可以接受 laptop 属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Column);
        const vm = new Constructor({
            propsData:{
                laptop:{span:1,offset: 2}
            }
        }).$mount(div);
        const element = vm.$el;
        expect(element.classList.contains('column-laptop-1')).to.eq(true);
        expect(element.classList.contains('offset-laptop-2')).to.eq(true);
        div.remove();
        vm.$destroy()
    })
});