import { formProps } from 'vant'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/noteclass'
    },  
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register.vue'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/noteclass',
      name: 'noteclass',
      component: () => import('@/views/noteclass.vue'),
      meta: {
        title: '笔记分类'
      }
    },
    {
      path: '/noteList',
      name: 'noteList',
      component: () => import('@/views/noteList.vue'),
      meta: {
        title: '日记分类'
      }
    },
    {
      path: '/noteDetail',
      name: 'noteDetail',
      component: () => import('@/views/noteDetail.vue'),
      meta: {
        title: '日记详情'
      }
    },
    {
      path: '/notePublish',
      name: 'notePublish',
      component: () => import('@/views/notePublish.vue'),
      meta: {
        title: '日记编辑'
      }
    }
  ]
})

// 全局路由守卫
const whitePath = ['/login', '/register', '/noteclass']; // 白名单, 不需要登录
router.beforeEach((to, from, next) => {
  // 设置标题
  document.title = to.meta.title;

  // console.log(to, form);
  if (!whitePath.includes(to.path)) {
    // 判断本地有无本数据
    if (!localStorage.getItem('userInfo')) {
      router.push('/login');
      return;
    }
  }
  next();
  router
})

export default router
