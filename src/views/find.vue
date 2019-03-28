<template>
  <div class="find">
    <div class="check-option">
      <img src="@/assets/logo/find-album-reflash-icon.png" alt="">
      <div class="check-option-word">
        <span>朋友圈</span>
        <span>></span>
      </div>
    </div>
    <div class="check-option">
      <img src="@/assets/logo/find_icon-qrcode.png" alt="">
      <div class="check-option-word">
        <span>扫一扫</span>
        <span>></span>
        <p class="me-line"></p>
      </div>
    </div>
    <div class="check-option">
      <img src="@/assets/logo/find_icon-shake.png" alt="">
      <div class="check-option-word">
        <span>摇一摇</span>
        <span>></span>
      </div>
    </div>
    <div class="check-option">
      <img src="@/assets/logo/find_icon-bottle.png" alt="">
      <div class="check-option-word">
        <span>看一看</span>
        <span>></span>
        <p class="me-line"></p>
      </div>
    </div>
    <div class="check-option">
      <img src="@/assets/logo/me_more-my-favorites.png" alt="">
      <div class="check-option-word">
        <span>搜一搜</span>
        <span>></span>
      </div>
    </div>
    <div class="check-option">
      <img src="@/assets/logo/find-album-reflash-icon.png" alt="">
      <div class="check-option-word">
        <span>附近的人</span>
        <span>></span>
        <p class="me-line"></p>
      </div>
    </div>
    <div class="check-option">
      <img src="@/assets/logo/find_icon-bottle.png" alt="">
      <div class="check-option-word">
        <span>漂流瓶</span>
        <span>></span>
      </div>
    </div>
    <div class="check-option">
      <img src="@/assets/logo/find_icon-shopping.png" alt="">
      <div class="check-option-word">
        <span>购物</span>
        <span>></span>
        <p class="me-line"></p>
      </div>
    </div>
    <div class="check-option">
      <img src="@/assets/logo/find_icon-moregame.png" alt="">
      <div class="check-option-word">
        <span>游戏</span>
        <span>></span>
      </div>
    </div>
    <div class="check-option">
      <img src="@/assets/logo/find_icon-bottle.png" alt="">
      <div class="check-option-word">
        <span>小程序</span>
        <span>></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "find",
  }
</script>

<style scoped lang="scss">
  $font-color: #CBCBCB;
  ::-webkit-scrollbar {
    display:none
  }
  @mixin background {
    background-color: #fff;
  }
  .find {
    position: relative;
    top: 4rem;
    height: calc(100vh - 8rem);
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: #f6f5f5;
    > .check-option {
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 1rem 0;
      @include background;
      &:nth-child(2n){
        margin-top: 1rem;
      }
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
    .me-line {
      background-color: #f6f5f5;
      height: 1px;
      width: 100vw;
      position: relative;
      left: 1rem;
      top: 22px;
    }
  }
</style>
