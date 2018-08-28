<template>
  <div>
    <span class="demonstration">时间类型:</span>
    <el-select v-model="value" placeholder="全部">
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <span class="demonstration">选择日期:</span>
    <el-date-picker
      v-model="value1"
      :type="type"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
    <span class="demonstration">设备:</span>
    <el-select v-model="value2" placeholder="全部">
      <el-option
        v-for="item in options2"
        :key="item.value2"
        :label="item.label2"
        :value="item.value2">
      </el-option>
    </el-select>
    <el-button type="primary">查询</el-button>
    <div class="m_t_16">
      <div id="datachart" style="height:568px"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nx-chart',
    data() {
      return {
        type: 'month',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        options1: [{
          value: '一分钟',
          label: '一分钟'
        }, {
          value: '十分钟',
          label: '十分钟'
        }, {
          value: '日',
          label: '日'
        }, {
          value: '月',
          label: '月'
        }, {
          value: '年',
          label: '年'
        }],
        options2: [{
          value2: 'FH118',
          label2: 'FH118'
        }],
        value: '',
        value1: '',
        value2: ''
      }
    },
    mounted() {
      this.drawLine()
    },
    methods: {
      drawLine() {
        const myChart = this.$echarts.init(document.getElementById('datachart'), 'macarons')

        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          toolbox: {
            feature: {
              // dataView: {show: true, readOnly: false},
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          legend: {
            data: ['颗粒物', '颗粒物(折算)', '二氧化硫', '二氧化硫(折算)', '碳氧化物', '碳氧化物(折算)', '含氧量']
          },
          xAxis: [
            {
              type: 'category',
              // boundaryGap: false,
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                rotate: 45
              },
              data: ['2018-07-01', '2018-07-02', '2018-07-03', '2018-07-04', '2018-07-05', '2018-07-06', '2018-07-07', '2018-07-08', '2018-07-09', '2018-07-10', '2018-07-11', '2018-07-12', '2018-07-13']
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '浓度',
              scale: true,
              position: 'left',
              axisLabel: {
                formatter: '{value} mg/m3'
              }
            },
            {
              type: 'value',
              name: '含氧量',
              scale: true,
              position: 'right',
              axisLabel: {
                formatter: '{value} %'
              }
            }
          ],
          series: [
            {
              name: '颗粒物',
              type: 'line',
              data: [21.7, 21.9, 22.1, 22.4, 22.6, 22.7, 22.7, 22.7, 22.8, 22.9, 22.9, 23, 34]
            },
            {
              name: '颗粒物(折算)',
              type: 'line',
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3, 4.3]
            },
            {
              name: '二氧化硫',
              type: 'line',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 8.7, 18.8, 6.0, 2.3, 7.1]
            },
            {
              name: '二氧化硫(折算)',
              type: 'line',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 71.6, 52.2, 48.7, 18.8, 6.0, 2.3, 17.9]
            },
            {
              name: '碳氧化物',
              type: 'line',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 53.6, 72.2, 48.7, 18.8, 6.0, 2.3, 32.1]
            },
            {
              name: '碳氧化物(折算)',
              type: 'line',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 47.6, 32.2, 48.7, 18.8, 6.0, 2.3, 11.9]
            },
            {
              name: '含氧量',
              type: 'line',
              yAxisIndex: 1,
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2, 23.1]
            }
          ]
        })
      }
    }
  }
</script>

<style scoped>
  /*.el-input {*/
    /*width: 220px;*/
  /*}*/

  /*.m_t_16 {*/
    /*margin-top: 16px;*/
  /*}*/
</style>
