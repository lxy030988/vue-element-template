<template>
  <div class="container">
    <div class="handle-box"></div>
    <el-table class="table" :data="brands" style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        align="center"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        align="center"
        width="200"
      ></el-table-column>
      <el-table-column
        prop="desc"
        label="描述"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <!-- <el-table-column label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleSee(scope.row.id)"
              >查看</el-button
            >
          </template>
        </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
// import { getUser } from "@/api/test";
export default {
  data() {
    return {
      brands: []
    };
  },
  async created() {
    // this.getBrands();
    // const res = await getUser();
    // console.log(res);
  },
  methods: {
    async getBrands() {
      const {
        data: { data }
      } = await this.$axios.get("/demo/brands");
      // console.log(data);
      this.brands = data;
    }
  }
};
</script>

<style lang="scss" scoped>
.handle-box {
  margin-bottom: 20px;
}
</style>
