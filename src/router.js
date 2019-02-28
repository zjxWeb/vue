
import VueRouter from 'vue-router'
//导入对应的路由组件
import HomeContainer from './component/tabber/HomeContainer.vue'
import  MemberContainer from './component/tabber/MemberContainer.vue'
import ShopcarContainer from './component/tabber/ShopcarContainer.vue'
import SearchContainer from './component/tabber/SearchContainer.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [//配置路由规则
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer}
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类 叫做router-link-active
})

// 把路由对象暴露出去
export default router