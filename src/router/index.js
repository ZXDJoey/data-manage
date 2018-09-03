import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/login',
  //   name: 'login',
  //   hidden: true
  // },
  {
    path: '',
    component: Layout,
    // redirect: '/dashboard/dashboard'
    redirect: '/map/map'
  },
  { path: '/login', component: () => import('@/views/login'), name: '智慧城市大数据', hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },

  // 首页
  // {
  //   path: '/dashboard',
  //   component: Layout,
  //   meta: {
  //     title: 'dashboard',
  //     icon: 'dashboard'
  //   },
  //   children: [
  //     {
  //       path: 'dashboard',
  //       name: 'dashboard',
  //       component: () => import('@/views/dashboard/dashboard'),
  //       meta: { title: 'dashboard', icon: 'dashboard' }
  //     }
  //   ]
  // },

  // 全景地图
  {
    path: '/map',
    component: Layout,
    meta: {
      title: 'map'
    },
    children: [
      {
        path: 'map',
        name: 'map',
        component: () => import('@/views/map/panoramicmap'),
        meta: { title: 'map', icon: 'map' }
      }
    ]
  },

  // 站点管理
  {
    path: '/site',
    component: Layout,
    redirect: '/site/CellarSite',
    meta: {
      title: 'site',
      icon: 'site'
    },
    children: [
      {
        path: 'CellarSite',
        name: 'CellarSite',
        component: () => import('@/views/site/CellarSite'),
        meta: { title: 'CellarSite' }
      },
      {
        path: 'GasSite',
        name: 'GasSite',
        component: () => import('@/views/site/GasSite'),
        meta: { title: 'GasSite' }
      }
    ]
  },

  // 烟气报表
  {
    path: '/report',
    component: Layout,
    redirect: '/gas/DateReport',
    meta: {
      title: 'gas',
      icon: 'gas'
    },
    children: [
      {
        path: 'DateReport',
        name: 'DateReport',
        component: () => import('@/views/gas/DateReport'),
        meta: { title: 'DateReport' }
      },
      {
        path: 'CurveReport',
        name: 'CurveReport',
        component: () => import('@/views/gas/CurveReport'),
        meta: { title: 'CurveReport' }
      }
    ]
  },

  // 数据曲线
  {
    path: '/datacurve',
    component: Layout,
    meta: {
      title: 'datacurve'
    },
    children: [
      {
        path: 'DataCurve',
        name: 'DataCurve',
        component: () => import('@/views/datacurve/DataCurve'),
        meta: { title: 'datacurve', icon: 'curve' }
      }
    ]
  },

  // 数据报表
  {
    path: '/datareport',
    component: Layout,
    redirect: '/datareport/CellarReport',
    meta: {
      title: 'datareport',
      icon: 'datareport'
    },
    children: [
      {
        path: 'CellarReport',
        name: 'CellarReport',
        component: () => import('@/views/datareport/CellarReport'),
        meta: { title: 'CellarReport' }
      },
      {
        path: 'GasReport',
        name: 'GasReport',
        component: () => import('@/views/datareport/GasReport'),
        meta: { title: 'GasReport' }
      }
    ]
  },

  // 数据警报
  {
    path: '/alarm',
    component: Layout,
    meta: {
      title: 'alarm'
    },
    children: [
      {
        path: 'Alarm',
        name: 'Alarm',
        component: () => import('@/views/alarm/Alarm'),
        meta: { title: 'Alarm', icon: 'alarm' }
      }
    ]
  },

  // 系统管理
  {
    path: '/system',
    component: Layout,
    redirect: '/system/UserManage',
    meta: {
      title: 'system',
      icon: 'system'
    },
    children: [
      {
        path: 'UserManage',
        name: 'UserManage',
        component: () => import('@/views/system/UserManage'),
        meta: { title: 'UserManage' }
      },
      {
        path: 'RoleManage',
        name: 'RoleManage',
        component: () => import('@/views/system/RoleManage'),
        meta: { title: 'RoleManage' }
      },
      {
        path: 'RiverManage',
        name: 'RiverManage',
        component: () => import('@/views/system/RiverManage'),
        meta: { title: 'RiverManage' }
      },
      {
        path: 'LogManage',
        name: 'LogManage',
        component: () => import('@/views/system/LogManage'),
        meta: { title: 'LogManage' }
      }
    ]
  },

  // 表单
  {
    path: '/form',
    component: Layout,
    redirect: '/table/BaseForm',
    name: 'form',
    meta: {
      title: 'form',
      icon: 'form'
    },
    children: [
      {
        path: 'BaseForm',
        name: 'BaseForm',
        component: () => import('@/views/form/BaseForm'),
        meta: { title: 'BaseForm' }
      },
      {
        path: 'VueEditor',
        name: 'VueEditor',
        component: () => import('@/views/form/VueEditor'),
        meta: { title: 'VueEditor' }
      },
      {
        path: 'Upload',
        name: 'Upload',
        component: () => import('@/views/form/Upload'),
        meta: { title: 'Upload' }
      }
    ]
  },

  // 表格
  {
    path: '/table',
    component: Layout,
    redirect: '/table/complex-table',
    name: 'table',
    meta: {
      title: 'Table',
      icon: 'table'
    },
    children: [
      {
        path: 'complex-table',
        name: 'complex-table',
        component: () => import('@/views/table/complex-table'),
        meta: { title: 'complexTable' }
      },
      {
        path: 'TreeTable',
        name: 'TreeTable',
        component: () => import('@/views/table/tree-table/index'),
        meta: { title: 'treeTable' }
      }

    ]
  }
]

export default new Router({
  // 后端支持可开
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      { path: '401', component: () => import('@/views/errorPage/401'), name: 'page401', meta: { title: 'page401', noCache: true }},
      { path: '404', component: () => import('@/views/errorPage/404'), name: 'page404', meta: { title: 'page404', noCache: true }}
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
