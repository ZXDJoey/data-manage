<template>
  <div>
    <div class="winContainer">
      <div class="winTitle">
        <span>窨井站点：XZ07-1</span>
      </div>
      <div>
        <span>数据时间：2018-07-23 14:23:00</span>
        <span>相对液位：-2.36m</span>
        <span>绝对液位：0.1m</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup'
}
</script>

<style lang="scss" scoped>
  .winContainer {
    position: absolute;
    top: 320px;
    left: 840px;
    width: 400px;
    height: 340px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0px 10px rgba(0,0,0,0.2);
    .winTitle {
      width: 20px;
      line-height: 20px;
    }
  }
</style>