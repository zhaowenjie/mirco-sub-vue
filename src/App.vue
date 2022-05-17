<template>
  <div id="app">
    <img alt="Vue logo" src="https://pages.anjukestatic.com/usersite/cms/common/logo_2022@3x.png">
      <baidu-map class="bm-view" :center="markerPoint" :zoom="16"> 
        <bm-marker :position="markerPoint" :dragging="true" @click="infoWindowOpen">
            <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen" style="font-size:13px">
                北京xxxx <br><br>
                地址：北京市
            </bm-info-window>
          </bm-marker> 
      </baidu-map>
  </div>
</template>

<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'RngOQTmAG2Z8Qa1OVEWB0i2qGeoYGGzG',
});

export default {
  data() {
    return {
        markerPoint:{lng: 116.4, lat: 39.9},
        show:false
    };
  },
  methods: {
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    }
  },
  mounted(){
    console.log('mounted', window)
    console.log('mounted', window.BMap)
  }
}
</script>

<style>
.bm-view {
  width: 100%;
  height: 300px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
