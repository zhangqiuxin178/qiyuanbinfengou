<template>
  <div>
    <router-view />
    <nav v-show="!this.$route.meta.ShowAndHide">
      <router-link to="/home" tag="div">首页</router-link>
      <router-link to="/ShoppingMall" tag="div">商城</router-link>
      <router-link to="/LiveBroadcast" tag="div">直播</router-link>
      <router-link to="/my" tag="div">我</router-link>
    </nav>
  </div>
</template>

<style lang="scss">
nav {
  position: fixed;
  width: 100vw;
  bottom: 0;
  left: 0;
  height: 50px;
  line-height: 50px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;

  div {
    text-decoration: none;
    color: black;
    width: 25%;
    display: block;
    text-align: center;
    height: 50px;
    line-height: 50px;
    // border-left: 1px solid #555;
  }

  .router-link-active {
    color: red;
  }
}
</style>
