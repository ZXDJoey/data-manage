import BMap from 'BMap'

/*
* 获取普通图标
* */
export function getReductionIcon(status, type, icon) {
  if (type === 'yj') {
    if (status === '在线') {
      icon = new BMap.Icon('../src/icons/svg/p_1.svg', new BMap.Size(36, 36), { anchor: new BMap.Size(36, 36) })
    } else if (status === '异常') {
      icon = new BMap.Icon('../src/icons/svg/p_4.svg', new BMap.Size(36, 36), { anchor: new BMap.Size(36, 36) })
    } else {
      icon = new BMap.Icon('../src/icons/svg/p_5.svg', new BMap.Size(36, 36), { anchor: new BMap.Size(36, 36) })
    }
  } else {
    if (status === '在线') {
      icon = new BMap.Icon('../src/icons/svg/p_2.svg', new BMap.Size(36, 36), { anchor: new BMap.Size(36, 36) })
    } else {
      icon = new BMap.Icon('../src/icons/svg/p_3.svg', new BMap.Size(36, 36), { anchor: new BMap.Size(36, 36) })
    }
  }
  return icon
}

/*
* 获取高亮图标
* */
export function getLightIcon(status, type, icon) {
  if (type === 'yj') {
    if (status === '在线') {
      icon = new BMap.Icon('../src/icons/svg/p_4.svg', new BMap.Size(36, 36), { anchor: new BMap.Size(36, 36) })
    } else if (status === '异常') {
      icon = new BMap.Icon('../src/icons/svg/p_4.svg', new BMap.Size(36, 36), { anchor: new BMap.Size(36, 36) })
    } else {
      icon = new BMap.Icon('../src/icons/svg/p_4.svg', new BMap.Size(36, 36), { anchor: new BMap.Size(36, 36) })
    }
  } else {
    if (status === '在线') {
      icon = new BMap.Icon('../src/icons/svg/p_4.svg', new BMap.Size(36, 36), { anchor: new BMap.Size(36, 36) })
    } else {
      icon = new BMap.Icon('../src/icons/svg/p_4.svg', new BMap.Size(36, 36), { anchor: new BMap.Size(36, 36) })
    }
  }
  return icon
}

export function getRealData(data) {

}
