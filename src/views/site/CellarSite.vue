<template>
  <div class="app-container">
    <span>站点类型:</span>
    <el-select placeholder="全部">
    </el-select>
    <span>站点选择:</span>
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
          label="序号">
        </el-table-column>
        <el-table-column
          label="名称">
        </el-table-column>
        <el-table-column
          label="河道名称">
        </el-table-column>
        <el-table-column
          label="IP">
        </el-table-column>
        <el-table-column
          label="经度">
        </el-table-column>
        <el-table-column
          label="纬度">
        </el-table-column>
        <el-table-column
          label="设备状态">
        </el-table-column>
        <el-table-column
          label="地址">
        </el-table-column>
        <el-table-column
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
  name: 'CellarSite'
}
</script>

<style scoped>

</style>
