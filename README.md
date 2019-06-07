#  vue-DataManage项目

##  一、目录结构

```javascript
├── build                      // 构建相关
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filters                // 全局filter
│   ├── icons                  // 项目所有svg icons
│   ├── mock                   // 项目mock模拟数据
│   ├── router                 // 路由
│   ├── lang                   // 语言
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── vendor                 // 公用vendor
│   ├── views                  // views所有页面
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口文件 加载组件 初始化等
│   └── permission.js          // 权限管理
├── static                     // 第三方不打包资源
│   └── css                    // 全局css样式重置
├── .babelrc                   // babel-loader 配置
├── .eslintrc.js               // eslint 配置项
├── .gitignore                 // git 忽略项
├── .travis.yml                // 自动化CI配置
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json
```

##  二、项目安装与运行

```javascript
//  安装依赖项
npm install

//  运行    localhost:9528
npm run dev

// 打包
npm run build:prod
```
