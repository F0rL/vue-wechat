<template>
  <ul class="chat">
      <li class="chat-container" v-for="list in lists" :key="list.id">
        <router-link :to="{name:'chatroom',params:{userName: list.name,userContent: list.content}}" class="chat-item">
          <img src="@/assets/avatar/1.jpg" alt="">
          <div class="chat-words">
            <p class="chat-name">{{list.name}}</p>
            <p class="chat-content">{{list.content}}</p>
            <span>{{list.time}}</span>
          </div>
         </router-link>
      </li>
  </ul>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import url from '@/assets/api.js'

export default {
  name: 'home',
  data() {
    return {
      lists: null
    }
  },
  created() {
    this.getChat()
  },
  methods: {
    getChat() {
      axios.get(url.chat,{}).then(res => {
        this.lists = res.data.lists
      })
    }
  },
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

  .chat-container {
    position: relative;
  }

  .chat-container:not(:last-child):after {
    content: '';
    display: block;
    position: absolute;
    bottom: -.7rem;
    left: 4.2rem;;
    right: -5rem;
    height: 1px;
    background: $font-color;
  }

  .chat-item {
    position: relative;
    margin-top: 1rem;
    margin-left: 1rem;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    &:not(:last-child):after {
      content: '';
      display: block;
      position: absolute;
      bottom: -.7rem;
      left: 4.2rem;;
      right: -5rem;
      height: 1px;
      background: #f6f5f5;
    }
     img {
      width: 50px;
      height: 50px;
      border-radius: 6px;
    }
     .chat-words {
      margin-left: 1rem;
      width: 68vw;
       .chat-name {
        font-size: 1.2rem;
        padding-bottom: 5px;
      }
       .chat-content {
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
