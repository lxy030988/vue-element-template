import { getTreeNow, getTreeArr } from "@/utils/treeOperations";

const state = {
  navs: [
    {
      id: 1,
      parentId: 0,
      icon: "wx",
      path: "/dashboard",
      name: "系统首页"
    },
    { id: 2, parentId: 0, icon: "wx", path: "/brand", name: "品牌管理" },
    {
      id: 3,
      parentId: 0,
      icon: "wx",
      path: "3",
      name: "表单相关",
      children: [
        { id: 4, parentId: 3, icon: "wx", path: "/order", name: "订单管理" },
        { id: 5, parentId: 3, path: "/form", name: "基本表单" },
        {
          id: 6,
          parentId: 3,
          path: "3-2",
          name: "三级菜单",
          children: [
            {
              id: 7,
              parentId: 6,
              icon: "wx",
              path: "/peasant",
              name: "农户管理"
            }
          ]
        }
      ]
    }
  ],
  crumbs: []
};

const mutations = {
  setCrumbs: (state, path) => {
    if (path !== "/403" && path !== "/404") {
      // console.log(state.navs);
      const now = getTreeNow(state.navs, path);
      state.crumbs = getTreeArr(state.navs, now, []);
    } else {
      state.crumbs = [];
    }
  },
  setNavs: (state, navs) => {
    state.navs = navs;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
