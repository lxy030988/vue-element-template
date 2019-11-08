<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <sidebar-item v-for="item in navs" :key="item.id" :item="item" />
    </el-menu>
  </div>
</template>

<script>
import bus from "../bus";
import SidebarItem from "./SidebarItem";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("nav");

export default {
  components: { SidebarItem },
  data() {
    return {
      collapse: false
    };
  },
  computed: {
    ...mapState(["navs"]),
    onRoutes() {
      return this.$route.path;
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped lang="scss">
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
  /deep/ .svg-icon {
    margin-right: 14px;
    font-size: 18px;
  }
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
.el-menu--collapse /deep/ {
  .el-submenu > .el-submenu__title > span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
  .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
    display: none;
  }
}
</style>
