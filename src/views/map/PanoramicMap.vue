<template>
  <div>
    <!-- 地图 -->
    <nx-map></nx-map>
    <!-- 站点目录 -->
    <dir-tree></dir-tree>
    <!-- 图例信息 -->
    <figure-info></figure-info>
    <!-- 报警信息 -->
    <alarm-info></alarm-info>
  </div>
</template>

<script>
import nxMap from '@/components/nx-map/index'
import DirTree from './components/dir-tree'
import FigureInfo from './components/figure-info'
import AlarmInfo from './components/alarm-info'

export default {
  name: 'PanoramicMap',
  components: {
    nxMap,
    DirTree,
    FigureInfo,
    AlarmInfo
  }
}
</script>

<style scoped>

</style>
