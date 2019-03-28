<template>
  <div class="userInfo">
    <div class="userInfo-header">
      <svg class="icon" aria-hidden="true" @click="goback">
        <use xlink:href="#icon-back"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-more"></use>
      </svg>
    </div>
    <div class="userInfo-info">
      <img src="@/assets/avatar/1.jpg" alt="">
      <div class="userInfo-msg">
        <p>{{msg.name}}</p>
        <p>微信号： {{msg.wechatName}}</p>
        <p>地区： {{msg.location}}</p>
      </div>
    </div>
    <p>设置备注</p>
    <p>电话号码: {{msg.phoneNum}}</p>
    <div class="userInfo-activity">
      <span>朋友圈</span>
      <div class="userInfo-img">
        <img src="@/assets/avatar/1.jpg" alt="">
        <img src="@/assets/avatar/1.jpg" alt="">
        <img src="@/assets/avatar/1.jpg" alt="">
      </div>
    </div>
    <p>更多信息</p>
    <div class="userInfo-chatbar">
      <p>发消息</p>
      <p>音视频通话</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userInfo",
    data() {
      return {
        msg: null,
      }
    },
    created() {
      this.getInfo()
    },
    methods: {
      getInfo() {
        this.msg = this.$route.params.listItem
      },
      goback() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="scss">
  .userInfo {
    background-color: #f6f5f5;
    height: 100vh;
    >p {
      padding: 1rem;
      background-color: #fff;
      border-top: 1px solid #eee;
    }
  }
  .userInfo-header {
    padding: 0 1rem;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    background-color: #fff;
  }
  .userInfo-info {
    background-color: #fff;
    padding: 10px 1rem 2rem;
    > img {
      width: 80px;
      border-radius: 10px;
    }
    > .userInfo-msg {
      float: right;
      margin-right: 70px;
      >p:first-child {
        font-size: 2rem;
      }
      >p:not(:first-child) {
        padding-top: 5px;
        color: #ccc;
      }
    }
  }
  .userInfo-activity {
    margin-top: 10px;
    background-color: #fff;
    padding: 1rem;
    > .userInfo-img {
      display: inline-block;
      vertical-align: middle;
      margin-left: 20px;
      padding: .4rem 0;
      > img {
        margin-left: 10px;
      }
    }
  }
  .userInfo-chatbar {
    margin-top: 10px;
    background-color: #fff;
    text-align: center;
    > p {
      padding: 1rem 0;
      background-color: #fff;
      border-top: 1px solid #eee;
    }
  }



</style>
