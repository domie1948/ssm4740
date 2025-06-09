import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xuexiaogaikuang from '@/views/modules/xuexiaogaikuang/list'
    import news from '@/views/modules/news/list'
    import xueshenggongzuo from '@/views/modules/xueshenggongzuo/list'
    import keyankaifa from '@/views/modules/keyankaifa/list'
    import jiaoxueguanli from '@/views/modules/jiaoxueguanli/list'
    import jixujiaoyu from '@/views/modules/jixujiaoyu/list'
    import pinpaizhuanye from '@/views/modules/pinpaizhuanye/list'
    import zhaoshengxinxi from '@/views/modules/zhaoshengxinxi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import jiuyexinxi from '@/views/modules/jiuyexinxi/list'
    import xuexiaodongtai from '@/views/modules/xuexiaodongtai/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/xuexiaogaikuang',
        name: '学校概况',
        component: xuexiaogaikuang
      }
      ,{
	path: '/news',
        name: '学校新闻',
        component: news
      }
      ,{
	path: '/xueshenggongzuo',
        name: '学生工作',
        component: xueshenggongzuo
      }
      ,{
	path: '/keyankaifa',
        name: '科研开发',
        component: keyankaifa
      }
      ,{
	path: '/jiaoxueguanli',
        name: '教学管理',
        component: jiaoxueguanli
      }
      ,{
	path: '/jixujiaoyu',
        name: '继续教育',
        component: jixujiaoyu
      }
      ,{
	path: '/pinpaizhuanye',
        name: '品牌专业',
        component: pinpaizhuanye
      }
      ,{
	path: '/zhaoshengxinxi',
        name: '招生信息',
        component: zhaoshengxinxi
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/jiuyexinxi',
        name: '就业信息',
        component: jiuyexinxi
      }
      ,{
	path: '/xuexiaodongtai',
        name: '学校动态',
        component: xuexiaodongtai
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
