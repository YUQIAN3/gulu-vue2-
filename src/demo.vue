
<!--  <div class="wrapper">-->
<!--    <g-slides :selected.sync="selected">-->
<!--      <g-slides-item name="1">-->
<!--        <div class="demo">1</div>-->
<!--      </g-slides-item >-->
<!--      <g-slides-item name="2">-->
<!--        <div class="demo">2</div>-->
<!--      </g-slides-item>-->
<!--      <g-slides-item name="3">-->
<!--        <div class="demo">3</div>-->
<!--      </g-slides-item>-->

<!--    </g-slides>-->
<!--  </div>-->
<!--  <div>-->
<!--    <p>{{selected&&selected[0]&&selected[0].name||'空'}}</p>-->
<!--    <p>{{selected&&selected[1]&&selected[1].name||'空'}}</p>-->
<!--    <p>{{selected&&selected[2]&&selected[2].name||'空'}}</p>-->
<!--    <div style="padding:20px">-->
<!--      <g-cascader :source.sync="source" popover-height="200px"-->
<!--                  @update:source="onUpdateSource"-->
<!--                  @update:selected="onUpdateSelected"-->
<!--                  :selected.sync="selected" :load-data="loadData"></g-cascader>-->
<!--    </div>-->
<!--    {{selected.map(item=>item.name)}}-->
<!--  </div>-->
<!--<template>-->
<!--  <div>-->
<!--    <g-nav :selected.sync="selected">-->
<!--      <g-nav-item name="home">主页</g-nav-item>-->
<!--      <g-sub-nav name="about">-->
<!--        <template slot="title">关于</template>-->
<!--        <template>-->
<!--        <g-nav-item name="culture">企业文化</g-nav-item>-->
<!--        <g-nav-item name="developers">开发团队</g-nav-item>-->
<!--        </template>-->
<!--          <g-sub-nav name="contact">-->
<!--            <template slot="title">联系方式</template>-->
<!--            <g-nav-item name="wechat">微信</g-nav-item>-->
<!--            <g-nav-item name="qq">qq</g-nav-item>-->
<!--            <g-sub-nav name="phone">-->
<!--              <template slot="title">电话</template>-->
<!--              <g-nav-item name="cm">移动</g-nav-item>-->
<!--              <g-nav-item name="cu">联通</g-nav-item>-->
<!--              <g-nav-item name="cn">电信</g-nav-item>-->
<!--            </g-sub-nav>-->


<!--          </g-sub-nav>-->


<!--      </g-sub-nav>-->

<!--      <g-nav-item name="hire">招聘</g-nav-item>-->
<!--    </g-nav>-->

<!--  <g-nav :selected.sync="selected" vertical style=" margin: 20px; margin-top: 200px;">-->
<!--    <g-nav-item name="home">首页</g-nav-item>-->
<!--    <g-sub-nav name="about">-->
<!--      <template slot="title">关于</template>-->
<!--      <g-nav-item name="culture">企业文化</g-nav-item>-->
<!--      <g-nav-item name="developers">开发团队</g-nav-item>-->
<!--      <g-sub-nav name="contacts">-->
<!--        <template slot="title">联系方式</template>-->
<!--        <g-nav-item name="wechat">微信</g-nav-item>-->
<!--        <g-nav-item name="qq">QQ</g-nav-item>-->
<!--        <g-sub-nav name="phone">-->
<!--          <template slot="title">手机</template>-->
<!--          <g-nav-item name="cm">移动</g-nav-item>-->
<!--          <g-nav-item name="cu">联通</g-nav-item>-->
<!--          <g-nav-item name="cn">电信</g-nav-item>-->
<!--        </g-sub-nav>-->
<!--      </g-sub-nav>-->
<!--    </g-sub-nav>-->
<!--    <g-nav-item name="hire">招聘</g-nav-item>-->
<!--  </g-nav>-->
<!--  </div>-->
<!--</template>-->
<template>
  <div class="form-wrapper">
    <form class="form" @submit.prevent="onSubmit">
      <h1>登录</h1>
      <demo-form-row label="邮箱" :error="errors.email">
        <g-input type="text" v-model="user.email"></g-input>
      </demo-form-row>
      <demo-form-row label="密码" :error="errors.password">
        <g-input type="password" v-model="user.password"></g-input>
      </demo-form-row>
      <div>
        <g-button class="ok" type="submit">提交</g-button>
      </div>
    </form>
  </div>
</template>
<style>
body {background: #888;}
</style>
<script>
import GButton from './button'
import GInput from './input'
import DemoFormRow from './demo-form-row'
import formMixin from './form-mixin'
import Button from './button'
import GNav from '../src/nav/nav'
import GNavItem from '../src/nav/nav-item'
import GSubNav from '../src/nav/subnav'
import Cascader from './cascader'
import Icon from './icon'
import db from './db'
import Popover from './popover'
import Slides from './slides'
import SlidesItem from './slides-item'
import {removeListener} from './click-outside'
// function ajax (parentId=0) {
//   return new Promise((success,fail)=>{
//     setTimeout(()=>{
//       let result=db.filter((item)=>item.parent_id===parentId)
//       result.forEach(node=>{
//         if(db.filter((item)=>item.parent_id===node.id).length>0){
//           node.isLeaf=false
//         }else{
//           node.isLeaf=true
//
//         }
//           }
//       )
//       success(result)
//     },2000)
//
//   })
// }
 export default {
  name:'demo',
   components: {GButton, GInput, DemoFormRow},
   mixins: [formMixin],
   data(){
    return {user: {
        email: '',
        password: ''
      },
      rules: [
        {key: 'email', pattern: 'email', required: true},
        {key: 'password', minLength: 6, required: true}
      ]
    };
  },
   methods:{
     onSubmit () {
       this.validate(this.user)
       console.log(this.errors)
     }
   },


 }
</script>
//   components:{
//     'g-button':Button,
//     'g-cascader':Cascader,
//     'g-icon':Icon,
//     'g-popover':Popover,
//     'g-slides':Slides,
//     'g-slides-item':SlidesItem
//   },
//   data(){
//     return {selected:undefined}
//   },
  // data(){
  //   return {
  //     selected:[],
  //     source:[]
  //   }
  // },
  // created(){
  //  ajax(0).then((result)=>{
  //    console.log(result);
  //     this.source=result
  //   })
  //   ajax(1).then((result)=>{
  //     console.log(result);
  //   })
  // },
  // methods:{
  //   loadData ({id}, updateSource) {
  //     ajax(id).then(result => {
  //       updateSource(result) // 回调:把别人传给我的函数调用一下
  //     })
  //   },
  //   xxx () {
  //     ajax(this.selected[0].id).then(result => {
  //       let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
  //       this.$set(lastLevelSelected, 'children', result)
  //     })
  //   },
  //   onUpdateSource () {
  //   },
  //   onUpdateSelected () {
  //   }
  // }


<style>
*{margin:0;padding:0;box-sizing: border-box;}
html{
  margin:20px;
}
body{
  font-size: 14px;
}
.form {
  background: white;
  padding: 24px;
  border-radius: 8px;
  margin-top: 36px;
  min-height: 60vh;
&-wrapper {
   display: flex;justify-content: center;
 }
.controls {
}
.ok {
  display: block;
  width: 100%;
  margin-top: 24px;
}
}
.wrapper{
  margin: 40px;
}
.demo{
  background: #ddd;
  width:100%;
  height:100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}

</style>
