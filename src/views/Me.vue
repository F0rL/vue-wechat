<template>
  <div class="me-container">
    <div class="me-header">
      <div class="me-img">
        <img src="@/assets/avatar/1.jpg" alt="">
      </div>
      <div class="me-info">
        <p>熊</p>
        <p>微信号：KumaLovesLife</p>
      </div>
    </div>
    <div class="me-check me-first-check">
      <img src="@/assets/logo/me_more-my-bank-card.png" alt="">
      <div class="check-option-word">
        <span>支付</span>
        <span>></span>
      </div>
    </div>
    <div class="me-check">
      <img src="@/assets/logo/me_more-my-favorites.png" alt="">
      <div class="check-option-word">
        <span>收藏</span>
        <span>></span>
        <p class="me-line"></p>
      </div>
    </div>
    <div class="me-check">
      <img src="@/assets/logo/me_more-my-album.png" alt="">
      <div class="check-option-word">
        <span>相册</span>
        <span>></span>
        <p class="me-line"></p>
      </div>
    </div>
    <div class="me-check">
      <img src="@/assets/logo/me_my-card-package-icon.png" alt="">
      <div class="check-option-word">
        <span>卡包</span>
        <span>></span>
        <p class="me-line"></p>
      </div>
    </div>
    <div class="me-check">
      <img src="@/assets/logo/me_more-expression.png" alt="">
      <div class="check-option-word">
        <span>表情</span>
        <span>></span>
      </div>
    </div>
    <div class="me-check">
      <img src="@/assets/logo/me_more-setting.png" alt="">
      <div class="check-option-word">
        <span>设置</span>
        <span>></span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "me"
  }
</script>

<style scoped lang="scss">
  @mixin background {
    background-color: #fff;
  }
  .me-container {
    background-color: #f6f5f5;
    height: 100vh;
    > .me-header {
      display: flex;
      align-items: start;
      padding: 3rem 1rem 2rem 1rem;
      background-color: #FFF;
      img {
        height: 60px;
        margin-left: 20px;
      }
      > .me-info {
        margin-left: 2rem;
        height: 100%;
        >p:first-child {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }
      }
    }
    > .me-check {
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 1rem 0;
      @include background;
      > img {
        width: 30px;
        margin-left: 1rem;
      }
      > .check-option-word span:first-child {
        margin-left: 1rem;
      }
      > .check-option-word span:nth-child(2) {
        position: absolute;
        right: 1.5rem;
        color: #dadddf;
      }
    }
  }
  .me-first-check {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .me-container > .me-check:last-child {
    margin-top: 1rem;
  }
  .me-line {
    background-color: #f6f5f5;
    height: 1px;
    width: 100vw;
    position: relative;
    left: 1rem;
    top: 22px;
  }

</style>
