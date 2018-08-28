<template>
  <div>
    <!-- 地图 -->
    <nx-map></nx-map>
    <!-- 站点目录 -->
    <nx-dir-tree></nx-dir-tree>
    <!-- 图例信息 -->
    <nx-figure></nx-figure>
    <!-- 报警信息 -->
    <nx-alarm></nx-alarm>
  </div>
</template>

<script>
import nxMap from '@/components/nx-map/index'
import nxDirTree from '@/components/nx-dir-tree/index'
import nxFigure from '@/components/nx-figure/index'
import nxAlarm from '@/components/nx-alarm/index'

export default {
  name: 'PanoramicMap',
  components: {
    nxMap,
    nxDirTree,
    nxFigure,
    nxAlarm
  }
}
</script>

<style scoped>

</style>
