<template>
  <div class="chatroom-header">
    <router-link to="/">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-back"></use>
      </svg>
    </router-link>
    <span>{{userName}}</span>
    <router-link :to="{name: 'chatinfo', params: {userName: userName}}">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-more"></use>
      </svg>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "chatroom-header",
    data() {
      return {
        userName: null,
      }
    },
    mounted() {
      this.getUserName()
    },
    methods: {
      getUserName(){
        this.userName = this.$route.params.userName
      }
    }
  }
</script>

<style scoped lang="scss">
  .chatroom-header {
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
</style>
