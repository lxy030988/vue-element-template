<template>
  <div class="Order">
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
        <el-select
          v-model="peasantId"
          placeholder="请选择农户"
          @change="changePeasant"
        >
          <el-option
            v-for="item in peasants"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </div>
      <el-table class="table" :data="orders" style="width: 100%">
        <el-table-column
          prop="createTime"
          label="创建时间"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="订单名称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="weight"
          label="重量"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleSee(scope.row.id)"
              >查看详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandId: null,
      peasantId: null,
      brands: [],
      peasants: [],
      orders: []
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
      this.peasantId = null;
      this.orders = [];
    },
    changePeasant(val) {
      // console.log(val);
      this.getOrders(val);
    },
    async getOrders(peasantId) {
      const {
        data: { data }
      } = await this.$axios.get(`/demo/products/?peasantId=${peasantId}`);
      this.orders = data;
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
    },
    handleSee(id) {
      // console.log(id);
      this.$router.push({ path: "/orderDetails", query: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.handle-box {
  margin-bottom: 20px;
}
</style>
