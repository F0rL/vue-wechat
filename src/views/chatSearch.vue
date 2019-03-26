<template>
  <div class="chat-search">
    <div class="chat-search-header">
      <router-link to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </router-link>
      <input type="text" placeholder="搜索">
    </div>
    <div class="chat-search-link">
      <p class="chat-search-item">搜索指定内容</p>
      <p class="chat-search-item">朋友圈</p>
      <p class="chat-search-item">文章</p>
      <p class="chat-search-item">公众号</p>
      <p class="chat-search-item">小程序</p>
      <p class="chat-search-item">音乐</p>
      <p class="chat-search-item">表情</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "chatSearch"
  }
</script>

<style scoped>
  .chat-search {
    background-color: #f6f5f5;
    height: 100vh;
  }
  .chat-search-header {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    padding: 0 1rem;
    border-bottom: 1px solid #b8b2a6;
  }
  input {
    position: absolute;
    left: 3rem;
    height: 2.5rem;
    width: 60vw;
    outline: none;
    border: none;
    background: #f6f5f5;
    padding: 0 .5rem;

  }
  input::placeholder {
    color: #dae1e7;
    font-size: 1em;
  }
  .chat-search-link {
    display: flex;
    padding: 0 3rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .chat-search-item:first-child {
    color: #dae1e7;
    width: 100%;
    padding: 2rem;
  }
  .chat-search-item:not(:first-child){
    color: #115173;
    width: 33%;
    padding-bottom: 2rem;
    cursor: pointer;
  }

</style>

