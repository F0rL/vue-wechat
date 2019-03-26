<template>
  <div class="chat-input">
    <div class="chat-input-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yuyin"></use>
      </svg>
    </div>
    <input class="chat-enter" type="text">
    <div class="chat-input-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-biaoqing"></use>
      </svg>
    </div>
    <div class="chat-input-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jia"></use>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: "chatroom-input"
  }
</script>

<style scoped lang="scss">
  .chat-input {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4rem;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: #f6f5f5;
    border-top: 1px solid #b8b2a6;
    > .chat-input-icon {
      font-size: 1.8rem;
    }
    > .chat-enter {
      height: 2.5rem;
      width: 60vw;
      outline: none;
      border: none;
    }
  }

</style>
