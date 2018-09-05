<template>
  <div>
    <div class="win">
      <div class="triangle_border_down">
        <span></span>
      </div>
      <div class="win_container">
        <div class="cont_colse">x</div>
        <div class="cont_title">
          <strong>一</strong>
          <span>窨井站点：XZ07-1</span>
        </div>
        <div class="cont_list">
          <ul>
            <li>
              <i></i>
              <span>数据时间：</span>
              <label>2018-07-23 14:23:00</label>
            </li>
            <li>
              <i></i>
              <span>相对液位：</span>
              <label>-2.36m</label>
            </li>
            <li>
              <i></i>
              <span>绝对液位：</span>
              <label>0.1m</label>
            </li>
          </ul>
          <div class="alarm_info">
            <ul>
              <li>
                <i></i>
                <span>报警类型：</span>
                <label>无</label>
              </li>
              <li>
                <i></i>
                <span>报警信息：</span>
                <label>无</label>
              </li>
              <li>
                <i></i>
                <span>开始时间：</span>
                <label>无</label>
              </li>
              <li>
                <i></i>
                <span>持续时间：</span>
                <label>无</label>
              </li>
            </ul>
          </div>
        </div>
        <div class="cont_btn">
            <el-button type="primary" plain size="mini">液位分析</el-button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .win {
    position: fixed;
    top: 35%;
    left: 58%;
    .triangle_border_down {
      position:relative;
      z-index: 99;
      span {
        display: block;
        border-width: 16px 16px 16px 0;
        border-style: solid;
        border-color: transparent #fff transparent transparent;
        position: absolute;
        top: 116px;
        left: -10px;
      }
    }
    .win_container {
      position: absolute;
      top: 0;
      left: 6px;
      min-width: 360px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 0px 10px rgba(0,0,0,0.2);
      .cont_colse {
        position: absolute;
        right: -12px;
        top: -12px;
        width: 26px;
        height: 26px;
        font-size: 16px;
        line-height: 23px;
        text-align: center;
        color: #fff;
        background-color: #6959cd;
        border-radius: 26px;
        cursor: pointer;
      }
      .cont_title {
        float: left;
        font-size: 16px;
        line-height: 32px;
        margin-top: -20px;
        margin-left: 30px;
        padding: 0 14px;
        color: #fff;
        background-color:#6959cd;
        border-radius: 5px;
        span {
          padding-left: 4px;
        }
      }
      .cont_list {
        padding: 10px 20px;
        .alarm_info {
          border-top: 1px solid #dce0e3;
        }
      }
      ul {
        padding-left: 0;
        list-style: none;
        li {
          display: block;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          white-space: nowrap;
          i {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background-color: #42b983;
          }
          span {
            padding-left: 8px;
          }
          label {
            color: #8276ce;
          }
        }
      }
      .cont_btn {
        padding: 10px 10px;
        border-top: 1px solid #dce0e3;
        text-align: center;
      }
    }
  } 
</style>
