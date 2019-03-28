<template>
  <div class="tabBar">
    <router-link to="/" class="tab-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-duihaoqipao2"></use>
      </svg>
      <p>微信</p>
    </router-link>
    <router-link to="/addressList" class="tab-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tongxunlu"></use>
      </svg>
      <p>通讯录</p>
    </router-link>
    <router-link to="/find" class="tab-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-faxian"></use>
      </svg>
      <p>发现</p>
    </router-link>
    <router-link to="/me" class="tab-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wode"></use>
      </svg>
      <p>我</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "TabBar",

  }
</script>

<style scoped lang="scss">
  .tabBar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4rem;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: #EDEDED;
    > .tab-item {
      width: 20vw;
      > .icon {
        font-size: 1.5rem;
        margin-top: .4rem;
      }
      > p {
        margin-top: 2px;
        font-size: .5rem;
      }
    }
    a.router-link-exact-active {
      color: #85ef47;
    }
  }
</style>
