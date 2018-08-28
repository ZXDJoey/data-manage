<template>
  <div>
    <div class="figure_info">
      <span>图例信息</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nx-figure'
}
</script>

<style scoped>
  .figure_info {
    position: fixed;
    right: 100px;
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
  .figure_info:hover {
    cursor: pointer;
    background: #5447a4;
  }
</style>
