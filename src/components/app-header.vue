<template>
  <div class="header">
    <div class="header-title">
      <p>微信</p>
    </div>
    <div class="header-icon">
      <router-link to="/search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-search"></use>
        </svg>
      </router-link>
      <svg class="icon" aria-hidden="true" @click="toggle">
        <use xlink:href="#icon-add"></use>
      </svg>
    </div>
    <ul class="header-toast" v-show="showToast">
      <li>
        <img src="@/assets/logo/header-chat.png" alt="">
        <span>发起群聊</span>
      </li>
      <li>
        <img src="@/assets/logo/header-friend.png" alt="">
        <span>添加朋友</span>
      </li>
      <li>
        <img src="@/assets/logo/header-sao.png" alt="">
        <span>扫一扫</span>
      </li>
      <li>
        <img src="@/assets/logo/header-money.png" alt="">
        <span>收付款</span>
      </li>
      <li>
        <img src="@/assets/logo/header-help.png" alt="">
        <span>帮助与反馈</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        showToast: false
      }
    },
    methods: {
      toggle() {
        this.showToast = !this.showToast
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    background-color: #f6f5f5;
    > .header-title {
      margin-left: 1rem;
    }
    > .header-icon {
      margin-right: 1rem;
      & .icon:first-child {
        padding: 1rem;
      }
      & .icon:not(:first-child) {
        padding: 1rem;
      }
    }
    > .header-toast {
      position: absolute;
      right: 1rem;
      top: 4.5rem;
      background: #33313b;
      color: #FFF;
      z-index: 9;
      border-radius: 8px;
      > li {
        padding: 1.2rem .6rem;
        border-bottom: 1px solid #e9e4e6;
        > img {
          vertical-align: middle;
        }
        > span {
          vertical-align: middle;
          margin: 0 1rem 0 2rem;
        }
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 9.5rem;
        top: -.5rem;
        border-left: 1rem solid transparent;
        border-right: 1rem solid transparent;
        border-bottom: 1rem solid #33313b;
      }
    }


  }

</style>
