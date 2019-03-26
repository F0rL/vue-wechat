import Vue from 'vue'
import Router from 'vue-router'
import Chat from './views/chat.vue'
import ChatSearch from './views/chatSearch.vue'
import ChatRoom from './views/chatRoom.vue'
import AppHeader from './components/app-header'
import AppTab from './components/app-tab'
import AddressList from './views/addressList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        header: AppHeader,
        main: Chat,
        tab: AppTab
      }
    },
    {
      path: '/search',
      name: 'chatSearch',
      components: {
        default: ChatSearch
      }
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      components: {
        default: ChatRoom
      }
    },
    {
      path: '/addressList',
      name: 'addressList',
      components: {
        header: AppHeader,
        main: AddressList,
        tab: AppTab
      }
    }
  ]
})
