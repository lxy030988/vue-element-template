<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <v-tags></v-tags>
      <div class="content">
        <bread-crumb></bread-crumb>
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import vHead from "./Header";
import vSidebar from "./Sidebar";
import vTags from "./Tags";
import BreadCrumb from "./BreadCrumb";
import bus from "./bus";

import { getUser } from "@/api/test";
import { filterTree } from "@/utils/treeOperations";

import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("nav");

export default {
  data() {
    return {
      tagsList: [],
      collapse: false
    };
  },
  components: {
    vHead,
    vSidebar,
    vTags,
    BreadCrumb
  },
  created() {
    // this.getUser();
    this.setCrumbs(this.$route.path);

    bus.$on("collapse", msg => {
      this.collapse = msg;
    });

    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on("tags", msg => {
      let arr = [];
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name);
      }
      this.tagsList = arr;
    });
  },
  methods: {
    ...mapMutations(["setCrumbs", "setNavs"]),
    async getUser() {
      const { data } = await getUser();
      //设置导航
      this.setNavs(filterTree(data.sysSourceTreeDTOList));
      //设置面包屑
      // console.log("created", this.$route.path);
    }
  },
  watch: {
    $route: {
      handler(val) {
        // console.log("watch", val.path);
        //更新面包屑
        this.setCrumbs(val.path);
      },
      deep: true
    }
  }
};
</script>
