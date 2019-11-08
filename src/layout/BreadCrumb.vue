<template>
  <div class="crumbs" v-if="$route.path !== '/403' && $route.path !== '/404'">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in crumbs" :key="item.index">
        <svg-icon v-if="item.icon" :icon-class="item.icon" />
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("nav");

export default {
  computed: {
    ...mapState(["crumbs"])
  }
};
</script>

<style lang="scss" scoped>
.crumbs {
  margin: 10px 0;
}
</style>
