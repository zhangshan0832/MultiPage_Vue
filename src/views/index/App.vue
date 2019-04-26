<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="../../assets/logo.png"
      @click="http"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
  </div>
</template>

<script>
import HelloWorld from "../../components/HelloWorld.vue";
import { Button } from "vant";

export default {
  name: "app",
  components: {
    HelloWorld,
    [Button.name]: Button
  },
  methods: {
    http() {
      // this.$post(null, {data: '111', name: 'Jon'})
      console.log(
        this.$http
          .post(null, { AccountId: "F1232598", Func: "News-GetMoreList" })
          .then(data => {
            console.log(data);
          })
      );
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
