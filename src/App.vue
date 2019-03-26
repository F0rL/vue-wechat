<template>
  <div id="app" v-cloak>
    <router-view name="header"></router-view>
    <keep-alive>
      <router-view name="main"></router-view>
    </keep-alive>
    <router-view name="tab"></router-view>
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  a {
    text-decoration: none;
    color: black;
  }
  ul, li {
    list-style: none;
  }
  [v-cloak] {
    display: none;
  }
</style>
