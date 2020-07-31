import Vue from 'vue'
// 导入路由插件
import Router from 'vue-router'
// 导入上面定义的组件
import HelloWorld from "../components/HelloWorld";

// 安装路由
Vue.use(Router);

// 配置路由
export default new Router({
  routes: [
    {
      // 路由路径
      path: '/hello',
      // 路由名称
      name: 'HelloWorld',
      // 跳转到组件
      component: HelloWorld
    }
  ]
});
