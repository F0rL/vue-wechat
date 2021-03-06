import Vue from 'vue'
import Router from 'vue-router'
import Chat from './views/Chat.vue'
import ChatSearch from './views/ChatSearch.vue'
import ChatInfo from './views/ChatInfo.vue'
import ChatRoom from './views/ChatRoom.vue'
import AppHeader from './components/app-header'
import AppTab from './components/app-tab'
import AddressList from './views/AddressList'
import UserInfo from "./views/UserInfo";
import find from "./views/Find";
import me from './views/Me'

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
      path: '/chatinfo',
      name: 'chatinfo',
      components: {
        default: ChatInfo
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
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      components: {
        default: UserInfo
      }
    },
    {
      path: '/find',
      name: 'find',
      components: {
        header: AppHeader,
        main: find,
        tab: AppTab
      }
    },
    {
      path: '/me',
      name: 'me',
      components: {
        main: me,
        tab: AppTab
      }
    },
  ]
})
