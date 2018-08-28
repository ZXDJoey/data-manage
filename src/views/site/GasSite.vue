<template>
  <div class="app-container">
    <span>站点名称:</span>
    <el-input placeholder="请输入内容">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-button type="primary">查询</el-button>
    <el-button type="primary">添加</el-button>
    <el-button type="primary">导出Excel</el-button>

    <div class="m_t_16">
      <el-table
        height="auto"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="receivetime"
          label="名称">
        </el-table-column>
        <el-table-column
          prop="hj"
          label="经度">
        </el-table-column>
        <el-table-column
          prop="hj"
          label="纬度">
        </el-table-column>
        <el-table-column
          prop="hj"
          label="设备状态">
        </el-table-column>
        <el-table-column
          prop="hj"
          label="设备编码">
        </el-table-column>
        <el-table-column
          prop="hj"
          label="操作">
        </el-table-column>
      </el-table>
    </div>
    <!--分页-->
    <div class="m_t_16">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GasSite'
}
</script>

<style scoped>

</style>
