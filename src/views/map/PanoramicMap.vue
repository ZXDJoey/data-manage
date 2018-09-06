<template>
  <div>
    <div class="containers" @click="switchWin">
      <!-- 地图 -->
      <all-map></all-map>
      <!-- 站点目录 -->
      <dir-tree></dir-tree>
      <!-- 图例信息 -->
      <figure-info></figure-info>
      <!-- 报警信息 -->
      <alarm-info></alarm-info>
      <popup-info v-show="isShow"></popup-info>
    </div>
  </div>
</template>

<script>
import AllMap from './components/all-map'
import DirTree from './components/dir-tree'
import FigureInfo from './components/figure-info'
import AlarmInfo from './components/alarm-info'
import PopupInfo from './components/popup-info'

export default {
  name: 'PanoramicMap',
  components: {
    AllMap,
    DirTree,
    FigureInfo,
    AlarmInfo,
    PopupInfo
  },
  data() {
    return {
      isShow: ''
    }
  },
  mounted() {

  },
  methods: {
    switchWin() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>

</style>
