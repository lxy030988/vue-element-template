<template>
  <div class="Peasant">
    <div class="container">
      <div class="handle-box">
        <el-select
          v-model="brandId"
          placeholder="请选择品牌"
          @change="changeBrand"
          clearable
        >
          <el-option
            v-for="item in brands"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </div>
      <el-table class="table" :data="peasants" style="width: 100%">
        <el-table-column
          prop="createTime"
          label="创建时间"
          align="center"
          width="140"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="process"
          label="制作工艺"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="product"
          label="产品"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="sales"
          label="销量"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="commentCount"
          label="评价数量"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="commentScore"
          label="评分"
          align="center"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandId: null,
      brands: [],
      peasants: []
    };
  },
  created() {
    // this.getBrands();
    // this.getPeasants("");
  },
  methods: {
    changeBrand(val) {
      // console.log(val);
      this.getPeasants(val);
    },
    async getPeasants(brandId) {
      const {
        data: { data }
      } = await this.$axios.get(`/demo/peasants?brandId=${brandId}`);
      this.peasants = data;
    },
    async getBrands() {
      const {
        data: { data }
      } = await this.$axios.get("/demo/brands");
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
