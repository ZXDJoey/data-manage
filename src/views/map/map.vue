<template>
  <div>
    <!-- 地图 -->
    <map-nav></map-nav>
    <!-- 站点目录 -->
    <dir-tree></dir-tree>
    <!-- 图例信息 -->
    <figure-info></figure-info>
    <!-- 报警信息 -->
    <alarm-info></alarm-info>
    <popup-info></popup-info>
  </div>
</template>

<script>
import MapNav from './components/map-nav'
import DirTree from './components/dir-tree'
import FigureInfo from './components/figure-info'
import AlarmInfo from './components/alarm-info'
import PopupInfo from './components/popup-info'

export default {
  name: 'PanoramicMap',
  components: {
    MapNav,
    DirTree,
    FigureInfo,
    AlarmInfo,
    PopupInfo
  }
}
</script>

<style scoped>

</style>
