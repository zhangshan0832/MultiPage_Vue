# vue-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 说明 (此版本只是初版还未全部完善，后续会继续完善)
- components 放置公共组件进行复用，可以建多个子文件件进行功能区分
- utils 文件夹下 封装的公共方法文件
- views 放置开发的单页面，每个子文件夹是一个独立的页面，需放置 main.js 作为入口文件
- vue.config.js 是webpack配置文件，所有webpack配置信息都放在此文件中，配置信息科参考 https://cli.vuejs.org/zh/config/
，多页面文件配置信息在此文件中有注释
- 集成了Vant UI框架，为了是页面体积尽可能缩小，所需UI框架组件可以在需要的地方按需引入 Vant 参考链接 https://youzan.github.io/vant/#/zh-CN/intro
- 对axios进行了简易封装和增加加解密功能，在main.js中添加 Vue.prototype.$http = http 可以在所有组件中调用；