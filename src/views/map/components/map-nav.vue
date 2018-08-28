<template>
  <div>
    <div id="allmap"></div>
  </div>
</template>

<script>
import BMap from 'BMap'
import {
  getReductionIcon,
  getLightIcon } from '@/utils/map'
import axios from 'axios'

export default {
  name: 'map-nav',
  data() {
    return {
      map: '',
      icon: '',
      isLightMarker: false,
      lastMarker: '',
      lastData: ''
    }
  },
  mounted() {
    this.mapReady()
    this.getMapPoint()
  },
  methods: {
    // 地图初始化
    mapReady() {
      this.map = new BMap.Map('allmap', {
        enableMapClick: false // 关闭默认地图POI事件
      })
      const point = new BMap.Point(114.086, 22.540) // 创建点坐标
      this.map.centerAndZoom(point, 13)
      this.map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
      // 控件类型
      const CtlOpt = { type: BMAP_NAVIGATION_CONTROL_SMALL }
      this.map.addControl(new BMap.NavigationControl(CtlOpt))
      // 地图类型
      this.map.addControl(new BMap.MapTypeControl())
      // 缩略地图
      const OverOpt = { anchor: BMAP_ANCHOR_BOTTOM_RIGHT, offset: new BMap.Size(12, 160) }
      this.map.addControl(new BMap.OverviewMapControl(OverOpt))
      this.map.setMapStyle({ style: 'googlelite' }) // 地图主题
    },
    getMapPoint() {
      axios.get('../src/components/nx-map/mapPoint.json')
        .then(this.handleGetMapPointSucc)
    },
    handleGetMapPointSucc(res) {
      res = res.data
      const json_data1 = res.EquipMent
      const json_data2 = res.AirEquipMent
      const json_data3 = res.TestEquipMent
      const pointArray = []
      const data = []

      for (let i = 0; i < json_data1.length; i++) {
        if (json_data1[i].longitude && json_data1[i].latitude) {
          json_data1[i].type = 'yj'
          data.push(json_data1[i])
        }
      }

      for (let i = 0; i < json_data2.length; i++) {
        if ((json_data2[i].longitude && json_data2[i].latitude) && (json_data2[i].longitude !== 0 && json_data2[i].latitude !== 0)) {
          json_data2[i].type = 'qx'
          data.push(json_data2[i])
        }
      }

      for (let i = 0; i < json_data3.length; i++) {
        if ((json_data3[i].longitude && json_data3[i].latitude) && (json_data3[i].longitude !== 0 && json_data3[i].latitude !== 0)) {
          json_data3[i].type = 'test'
          data.push(json_data3[i])
        }
      }

      for (let j = 0; j < data.length; j++) {
        pointArray[j] = new BMap.Point(data[j].longitude, data[j].latitude)
        this.addMarker(data[j])
      }
    },
    // 添加标注
    addMarker(data) {
      const newPoint = new BMap.Point(data.longitude, data.latitude)
      const icon = getReductionIcon(data.status, data.type)
      const marker = new BMap.Marker(newPoint, {
        icon: icon
      })

      marker.Record = data
      this.map.addOverlay(marker)

      marker.addEventListener('click', (e) => {
        const p = e.target
        const data = [p.getPosition().lng, p.getPosition().lat]
        const point = new BMap.Point(data[0], data[1])

        this.map.panTo(point)
        this.reductionMarker()
        this.map.removeOverlay(marker)
        this.lightMarker(marker.Record)
        // getRealData(marker.Record)
      })
    },
    // 高亮图标
    lightMarker(data) {
      const lightPoint = new BMap.Point(data.longitude, data.latitude)
      const lightIcon = getLightIcon(data.status, data.type)
      const lightMarker = new BMap.Marker(lightPoint, {
        icon: lightIcon
      })

      this.isLightMarker = true
      this.lastMarker = this.isLightMarker
      this.lastData = data
      this.map.addOverlay(lightMarker)
    },
    // 还原普通图标
    reductionMarker() {
      if (this.isLightMarker) {
        this.map.removeOverlay(this.lastMarker)
        const icon = getReductionIcon(this.lastData.status, this.lastData.type)
        const point = new BMap.Point(this.lastData.longitude, this.lastData.latitude)
        const marker = new BMap.Marker(point, {
          icon: icon
        })

        marker.Record = this.lastData
        this.isLightMarker = false
        this.lastMarker = ''
        this.lastData = ''
        this.map.addOverlay(marker)

        marker.addEventListener('click', (e) => {
          const p = e.target
          const data = [p.getPosition().lng, p.getPosition().lat]
          const point = new BMap.Point(data[0], data[1])

          this.reductionMarker()
          this.map.removeOverlay(marker)
          this.map.panTo(point)
          this.lightMarker(marker.Record)
          // getRealData(marker.Record)
        })
      }
    }
  }
}
</script>

<style scoped>
  #allmap {
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
    z-index: 0;
    text-align: left;
    height: 768px;
  }
</style>
