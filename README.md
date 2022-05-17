# 微前端测试子应用 - vue

启动：`yarn dev` or `yarn serve`

## 百度地图问题

启动子应用，打开 `http://localhost:8080/` 页面正常

接入主应用，地图无法打开

控制台网络请求里面无 https://api.map.baidu.com/api?v=2.0&ak=RngOQTmAG2Z8Qa1OVEWB0i2qGeoYGGzG&callback=_initBaiduMap 请求

在 node_modules/vue-baidu-map/index.js 中，搜索代码： `/api?v=2.0&ak=`, 打印当前函数的 i, 是最外层的window对象


```javascript
  const $script = document.createElement('script')
  global.document.body.appendChild($script)
  $script.src = `https://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=_initBaiduMap`
```

修改压缩后的代码

```javascript
var o=document.createElement("script");
o.src="https://api.map.baidu.com/api?v=2.0&ak="+t+"&callback=_initBaiduMap";
i.document.body.appendChild(o);
```

页面打开正常，但是切换其他子应用时失败