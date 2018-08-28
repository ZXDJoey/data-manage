<template>
  <!--<div>-->
  <!--<el-tooltip effect="dark" placement="bottom">-->
  <!--<div slot="content">-->
  <!--<a class="link" :href="url" target="_blank">转到 Github</a>-->
  <!--</div>-->
  <!--<el-button class="btn-text can-hover" type="text" @click="handleClick">-->
  <!--<nx-icon name="github" style="font-size: 20px"/>-->
  <!--</el-button>-->
  <!--</el-tooltip>-->
  <!--</div>-->
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
      <span class="demonstration">日期类型:</span>
      <el-date-picker
        v-model="day"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">导出Excel</el-button>
    </div>
    <!--table-->
    <div class="m_t_16">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="ID"
          label="序号"
          >
        </el-table-column>
        <el-table-column
          prop="DATE"
          label="时间"
          >
        </el-table-column>
        <el-table-column label="颗粒物">
          <el-table-column label="实测">
            <el-table-column
              prop="KLW"
              label="mg/m3"
              >
            </el-table-column>
          </el-table-column>
          <el-table-column label="折算">
            <el-table-column
              prop="KLWZS"
              label="mg/m3"
              >
            </el-table-column>
          </el-table-column>
          <el-table-column label="排放量">
            <el-table-column
              prop="KLWZSPF"
              label="Kg/m"
              >
            </el-table-column>
          </el-table-column>
        </el-table-column>
        <el-table-column label="二氧化硫">
          <el-table-column label="实测">
            <el-table-column
              prop="EYHL"
              label="mg/m3"
              >
            </el-table-column>
          </el-table-column>
          <el-table-column label="折算">
            <el-table-column
              prop="EYHLZS"
              label="mg/m3"
              >
            </el-table-column>
          </el-table-column>
          <el-table-column label="排放量">
            <el-table-column
              prop="EYHLZSPF"
              label="Kg/m"
              >
            </el-table-column>
          </el-table-column>
        </el-table-column>
        <el-table-column label="氮氧化物">
          <el-table-column label="实测">
            <el-table-column
              prop="DYHW"
              label="mg/m3"
              >
            </el-table-column>
          </el-table-column>
          <el-table-column label="折算">
            <el-table-column
              prop="DYHWZS"
              label="mg/m3"
              >
            </el-table-column>
          </el-table-column>
          <el-table-column label="排放量">
            <el-table-column
              prop="KLWZSPF"
              label="Kg/m"
              >
            </el-table-column>
          </el-table-column>
        </el-table-column>
        <el-table-column label="标态流量">
          <el-table-column
            prop="BTLL"
            label="mg/m3"
            >
          </el-table-column>
        </el-table-column>
        <el-table-column label="含氧量">
          <el-table-column
            prop="YQHL"
            label="%"
            >
          </el-table-column>
        </el-table-column>
        <el-table-column label="温度">
          <el-table-column
            prop="YQWD"
            label="℃"
            >
          </el-table-column>
        </el-table-column>
        <el-table-column label="流速">
          <el-table-column
            prop="YQLS"
            label="m/s"
            >
          </el-table-column>
        </el-table-column>
        <el-table-column label="负荷">
          <el-table-column
            prop="FH"
            label="%"
            >
          </el-table-column>
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
// import nxIcon from '@/components/nx-icon'
export default {
  name: 'nx-github',
  // components: { nxIcon },
  // data() {
  //   return {
  //     url: 'https://github.com/mgbq/nxAdmin-template/'
  //   }
  // },
  // methods: {
  //   handleClick() {
  //     window.open(this.url)
  //   }
  // }
  data() {
    return {
      day: '',
      month: '',
      years: '',
      tableData: [
        {
          ID: '01',
          DATE: '2018-06',
          KLW: '2.49',
          KLWZS: '4.02',
          KLWZSPF: '-173659.98',
          EYHL: '0.38',
          EYHLZS: '0.45',
          EYHLZSPF: '-19439.55',
          DYHW: '2.866',
          DYHWZS: '3.37',
          DYHWZSPF: '-145580.63',
          BTLL: '656471.68',
          YQHL: '8',
          YQWD: '79.6',
          YQLS: '17.66',
          FH: '/'
        },
        {
          ID: '02',
          DATE: '2018-05',
          KLW: '2.49',
          KLWZS: '4.02',
          KLWZSPF: '-173659.98',
          EYHL: '0.38',
          EYHLZS: '0.45',
          EYHLZSPF: '-19439.55',
          DYHW: '2.866',
          DYHWZS: '3.37',
          DYHWZSPF: '-145580.63',
          BTLL: '656471.68',
          YQHL: '8',
          YQWD: '79.6',
          YQLS: '17.66',
          FH: '/'
        },
        {
          ID: '03',
          DATE: '2018-04',
          FH: '/',
          EYHL: '0.5',
          DYHW: '1.123',
          KLWZS: '6.91',
          KLWZSPF: '-308455.4',
          EYHLZS: '1.01',
          EYHLZSPF: '-45085.39',
          YQHL: '12.1',
          YQWD: '77.7',
          KLW: '2.69',
          YQLS: '12.83',
          DYHWZS: '1.87',
          DYHWZSPF: '-83474.93',
          BTLL: '478187.74'
        },
        {
          ID: '04',
          DATE: '2018-05',
          FH: '/',
          EYHL: '0.5',
          DYHW: '1.123',
          KLWZS: '6.91',
          KLWZSPF: '-308455.4',
          EYHLZS: '1.01',
          EYHLZSPF: '-45085.39',
          YQHL: '12.1',
          YQWD: '77.7',
          KLW: '2.69',
          YQLS: '12.83',
          DYHWZS: '1.87',
          DYHWZSPF: '-83474.93',
          BTLL: '478187.74'
        }
      ]
    }
  }
}
</script>

<style>
/*.link {*/
  /*color: #FFF;*/
  /*text-decoration: none;*/
/*}*/
  /*.el-table__header, .el-table__body {*/
    /*width: auto !important;*/
  /*}*/
  /*.el-table--border {*/
    /*border-radius: 4px;*/
  /*}*/
  /*.m_t_16 {*/
    /*margin-top: 16px;*/
  /*}*/
  /*.el-table thead.is-group th {*/
    /*text-align: center;*/
    /*color: #707070;*/
  /*}*/
  /*.el-table__row {*/
    /*text-align: center;*/
  /*}*/
  /*.el-pagination {*/
    /*position: absolute;*/
    /*right: 0px;*/
    /*margin-bottom: 20px;*/
  /*}*/
</style>
