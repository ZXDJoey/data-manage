<template>
  <div>
    <div class="alarm_info">
      <span>报警信息</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nx-alarm'
}
</script>

<style scoped>
  .alarm_info {
    position: fixed;
    right: 10px;
    bottom: 10px;
    width: 80px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #f7f7f7;
    text-align: center;
    background: #665bc6;
    border-radius: 6px;
  }
  .alarm_info:hover {
    cursor: pointer;
    background: #5447a4;
  }
</style>
