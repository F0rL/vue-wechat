<template>
  <div class="chatroom-info">
    <div class="chatroom-info-header">
      <router-link to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </router-link>
      <span>聊天信息</span>
    </div>
    <div class="chatroom-info-img">
      <img src="@/assets/avatar/1.jpg" alt="">
      <p>{{$route.params.userName}}</p>
    </div>
    <div class="chatroom-info-log">查找聊天记录</div>
    <div class="chatroom-info-log">
      <div class="chatroom-info-content">
        <span>置顶聊天</span>
        <mt-switch v-model="value"></mt-switch>
      </div>
      <div class="chatroom-info-content">
        <span>消息免打扰</span>
        <mt-switch v-model="value"></mt-switch>
      </div>
      <div class="chatroom-info-content">
        <span>强提醒</span>
        <mt-switch v-model="value"></mt-switch>
      </div>
    </div>
    <div class="chatroom-info-log">设置当前聊天背景</div>
    <div class="chatroom-info-log">清空聊天记录</div>
    <div class="chatroom-info-log">投诉</div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Switch } from 'mint-ui';
  Vue.component(Switch.name, Switch);
  export default {
    name: "chatInfo"
  }
</script>

<style scoped lang="scss">
  $backcolor: #fff;
  .chatroom-info {
    height: 100vh;
    background-color: #f6f5f5;
  }
  .chatroom-info-header {
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
    border-bottom: 1px solid #b8b2a6;
    z-index: 9;
    .icon {
      padding: 1rem;
    }
    > span {
      position: absolute;
      left: 3rem;
    }
  }
  .chatroom-info-img {
    margin-top: 4rem;
    padding: 1rem 1rem;
    background-color: $backcolor;
    img {
      border-radius: 8px;
    }
    p {
      margin-left: 8px;
    }
  }
  .chatroom-info-log {
    padding: 1rem;
    margin-top: .5rem;
    background-color: $backcolor;
  }
  .chatroom-info-content {
    display: flex;
    justify-content: space-between;
    padding: .8rem 0;
    &:not(:last-child) {
      border-bottom: 1px solid #f6f5f5;
    }
  }

</style>
