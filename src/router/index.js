import Vue from "vue";
import Router from "vue-router";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

import Layout from "@/layout";

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/dashboard"
    },
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/dashboard",
          component: () =>
            import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue"),
          meta: {
            title: "系统首页"
          }
        },
        {
          path: "/brand",
          component: () =>
            import(/* webpackChunkName: "brand" */ "@/views/Brand.vue"),
          meta: { title: "品牌管理" }
        },
        {
          path: "/peasant",
          component: () =>
            import(/* webpackChunkName: "peasant" */ "@/views/Peasant.vue"),
          meta: { title: "农户管理" }
        },
        {
          path: "/order",
          component: () =>
            import(/* webpackChunkName: "order" */ "@/views/Order.vue"),
          meta: { title: "订单管理" }
        },
        {
          path: "/404",
          component: () =>
            import(/* webpackChunkName: "404" */ "@/views/404.vue"),
          meta: {
            title: "404"
          }
        },
        {
          path: "/403",
          component: () =>
            import(/* webpackChunkName: "403" */ "@/views/403.vue"),
          meta: {
            title: "403"
          }
        }
      ]
    },
    {
      path: "/login",
      component: () =>
        import(/* webpackChunkName: "login" */ "@/views/Login.vue")
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
