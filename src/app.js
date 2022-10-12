import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-Group'
import Input from './input'
import Row from './row'
import Col from './column'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
new Vue({
    el:"#app",
  data:{
      loading1:false,
       loading2:false,
       message:'hi',
    },
    methods:{
        inputChange(e,x){
            console.log(e.target.value);
            console.log(x);
        },

    }
})