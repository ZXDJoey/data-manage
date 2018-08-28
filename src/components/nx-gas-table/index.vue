<template>
  <div>
    <div class="date-select">
      <span class="demonstration">时间类型:</span>
      <el-select v-model="value" placeholder="全部">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span class="demonstration">选择时间:</span>
      <el-date-picker
        v-model="day"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
      <span class="demonstration">至</span>
      <el-date-picker
        v-model="day"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">导出Excel</el-button>
      <el-button type="primary">导出Word</el-button>
    </div>
    <div class="m_t_16">
      <el-table
        :data="tableData"
        height="auto"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="站点名称">
        </el-table-column>
        <el-table-column
          prop="receivetime"
          label="数据时间">
        </el-table-column>
        <el-table-column
          prop="hx"
          label="风速(m/s)">
        </el-table-column>
        <el-table-column
          prop="hj"
          label="雨量(mm/min)">
        </el-table-column>
        <el-table-column
          prop="hj"
          label="日雨量累计(mm)">
        </el-table-column>
        <el-table-column
          prop="hj"
          label="气温(℃)">
        </el-table-column>
        <el-table-column
          prop="hj"
          label="风向(°)">
        </el-table-column>
        <el-table-column
          prop="hj"
          label="湿度(%)">
        </el-table-column>
        <el-table-column
          prop="hj"
          label="气压(hpa)">
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
    name: 'nx-gas-table',
    data() {
      return {
        tableData: [
          {
            receivetime: '2018-08-02',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-08-01',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-31',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-30',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-29',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-28',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          },
          {
            receivetime: '2018-07-27',
            name: 'HTYLH00009',
            hj: 0.3,
            hx: -2.7
          }
        ]
      }
    }
  }
</script>

<style>
  .el-table thead tr th.is-leaf {
    color: #707070;
    background: #f5f7fa;
  }
  .el-table th, .el-table tr {
    text-align: center;
  }
  .el-pagination {
    position: absolute;
    right: 0px;
    margin-bottom: 20px;
  }
</style>