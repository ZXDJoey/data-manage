<template>
  <div>
    <div class="dir_tree">
      <div class="dir_title" @click="handleClickSwitch">
        <span>站点目录</span>
      </div>
      <el-collapse-transition>
      <div class="dir_tree_list" v-show="showTreeList">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <a href="Javascript:void(0)">
              <span class="site_title" @click="showToggle(item)">{{ item.name }}</span>
              <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
            </a>
            <ul style="background: #7171C6"  v-show="item.isSubShow">
              <li v-for="(subItem, index) in item.subItems" :key="index">
                <a href="Javascript:void(0)">
                  <span class="site_list_title">{{ subItem.name }}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nx-dir-tree',
  data() {
    return {
      showTreeList: false,
      items: [
        {
          name: '窨井站点',
          isSubShow: false,
          subItems: [
            {
              name: 'FT18'
            },
            {
              name: 'HTYLH00001'
            }
          ]
        },
        {
          name: '气象站点',
          isSubShow: false,
          subItems: [
            {
              name: '测试气象设备'
            }
          ]
        },
        {
          name: '测试站点',
          isSubShow: false,
          subItems: [
            {
              name: 'HTYCESHI03'
            },
            {
              name: 'HTYLH00003'
            }
          ]
        }
      ]
    }
  },
  mounted() {

  },
  methods: {
    handleClickSwitch() {
      this.showTreeList = !this.showTreeList
    },
    showToggle(item) {
      item.isSubShow = !item.isSubShow
    }
  }
}
</script>

<style scoped>
  .dir_tree {
    position: fixed;
    bottom: 10px;
    margin-left: 12px;
    width: 200px;
    background: #6959cd;
    border-radius: 6px;
  }
  .dir_title {
    font-size: 16px;
    font-weight: bold;
    line-height: 34px;
    text-align: center;
    width: 192px;
    border-radius: 6px;
    margin: 4px;
    border: 1px solid #fff;
    color: #fff;
  }
  .dir_title:hover {
    cursor: pointer;
    background: #5447a4;
  }
  .dir_tree_list {
    height: 320px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .dir_tree_list ul {
    list-style: none;
    width: 100%;
    color: #fff;
    padding-left: 0;
    margin-top: 0px;
  }
  .dir_tree_list ul li a{
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    position: relative;
  }
  .dir_tree_list ul li a:hover{
    background: #5447a4;
  }
  .site_title {
    display: block;
    padding-left: 22px;
  }
  .site_list_title {
    display: block;
    padding-left: 42px;
  }
</style>
