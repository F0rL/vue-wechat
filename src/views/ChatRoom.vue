<template>
  <div class="chatroom">
      <chatroom-header/>
      <div class="chatroom-container">
        <div class="chatroom-message">
          <img src="@/assets/avatar/1.jpg" alt="">
          <keep-alive>
            <div class="chatroom-get">
              <p>{{$route.params.userContent}}</p>
            </div>
          </keep-alive>
        </div>
      </div>
      <chatroom-input/>
  </div>
</template>
<script>
  import ChatroomHeader from '@/components/chatroom-header'
  import ChatroomInput from '@/components/chatroom-input'
  export default {
    name: "chatRoom",
    components: {
      'chatroom-header' : ChatroomHeader,
      'chatroom-input' : ChatroomInput,
    }
  }
</script>

<style scoped lang="scss">
  img {
    width: 50px;
    height: 50px;
    border-radius: 6px;
  }
  .chatroom-container {
    position: relative;
    top: 4rem;
    height: calc(100vh - 8rem);
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background: #f6f5f5;
  }
  .chatroom-message {
    position: relative;
    top: 1rem;
    left: 1rem;
    > .chatroom-get {
      position: absolute;
      top: 1rem;
      left: 60px;
      right: 3rem;
      padding: .5rem;
      line-height: 1.5;
      background: #85ef47;
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 1rem;
      left: 52px;
      border-top: 1rem solid transparent;
      border-right: 1rem solid #85ef47;
      border-bottom: 1rem solid transparent;
    }
  }
</style>
