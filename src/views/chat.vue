<template>
  <ul class="chat">
    <li class="chat-item">
      <img src="https://source.unsplash.com/random/50x50" alt="">
      <div class="chat-words">
        <p class="chat-name">关羽</p>
        <p class="chat-content">大声道发发送大神的飞洒的方式大发送到发送到发送到发送大神东方闪电发</p>
        <span>昨天</span>
      </div>
    </li>
    <li class="chat-item">
      <img src="https://source.unsplash.com/random/50x50" alt="">
      <div class="chat-words">
        <p class="chat-name">关羽</p>
        <p class="chat-content">大声道发发送大神的飞洒的方式大发送到发送到发送到发送大神东方闪电发</p>
        <span>昨天</span>
      </div>
    </li>
    <li class="chat-item">
      <img src="https://source.unsplash.com/random/50x50" alt="">
      <div class="chat-words">
        <p class="chat-name">关羽</p>
        <p class="chat-content">大声道发发送大神的飞洒的方式大发送到发送到发送到发送大神东方闪电发</p>
        <span>昨天</span>
      </div>
    </li>
    <li class="chat-item">
      <img src="https://source.unsplash.com/random/50x50" alt="">
      <div class="chat-words">
        <p class="chat-name">关羽</p>
        <p class="chat-content">大声道发发送大神的飞洒的方式大发送到发送到发送到发送大神东方闪电发</p>
        <span>昨天</span>
      </div>
    </li>    <li class="chat-item">
    <img src="https://source.unsplash.com/random/50x50" alt="">
    <div class="chat-words">
      <p class="chat-name">关羽</p>
      <p class="chat-content">大声道发发送大神的飞洒的方式大发送到发送到发送到发送大神东方闪电发</p>
      <span>昨天</span>
    </div>
  </li>    <li class="chat-item">
    <img src="https://source.unsplash.com/random/50x50" alt="">
    <div class="chat-words">
      <p class="chat-name">关羽</p>
      <p class="chat-content">大声道发发送大神的飞洒的方式大发送到发送到发送到发送大神东方闪电发</p>
      <span>昨天</span>
    </div>
  </li>    <li class="chat-item">
    <img src="https://source.unsplash.com/random/50x50" alt="">
    <div class="chat-words">
      <p class="chat-name">关羽</p>
      <p class="chat-content">大声道发发送大神的飞洒的方式大发送到发送到发送到发送大神东方闪电发</p>
      <span>昨天</span>
    </div>
  </li>    <li class="chat-item">
    <img src="https://source.unsplash.com/random/50x50" alt="">
    <div class="chat-words">
      <p class="chat-name">关羽</p>
      <p class="chat-content">大声道发发送大神的飞洒的方式大发送到发送到发送到发送大神东方闪电发</p>
      <span>昨天</span>
    </div>
  </li>    <li class="chat-item">
    <img src="https://source.unsplash.com/random/50x50" alt="">
    <div class="chat-words">
      <p class="chat-name">关羽</p>
      <p class="chat-content">大声道发发送大神的飞洒的方式大发送到发送到发送到发送大神东方闪电发</p>
      <span>昨天</span>
    </div>
  </li>    <li class="chat-item">
    <img src="https://source.unsplash.com/random/50x50" alt="">
    <div class="chat-words">
      <p class="chat-name">关羽</p>
      <p class="chat-content">大声道发发送大神的飞洒的方式大发送到发送到发送到发送大神东方闪电发</p>
      <span>昨天</span>
    </div>
  </li>






  </ul>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
<style scoped lang="scss">
  $font-color: #CBCBCB;
  ::-webkit-scrollbar {
    display:none
  }
  .chat {
    position: relative;
    top: 4rem;
    height: calc(100vh - 8rem);
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .chat-item {
    position: relative;
    margin-top: 1rem;
    margin-left: 1rem;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -.7rem;
      left: 4.2rem;;
      width: 19rem;
      height: 1px;
      background: $font-color;
    }
    > img {
      width: 50px;
      height: 50px;
    }
    > .chat-words {
      margin-left: 1rem;
      width: 68vw;
      > .chat-name {
        font-size: 1.2rem;
        padding-bottom: 5px;
      }
      > .chat-content {
        color: $font-color;
        font-size: .9rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    span {
      color: $font-color;
      font-size: .5rem;
      position: absolute;
      right: -1.5rem;
      top: .5rem;
    }
  }

</style>
