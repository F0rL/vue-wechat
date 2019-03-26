<template>
  <div class="address" v-cloak>
    <mt-index-list>
      <div class="address-top">
        <div class="address-top-item">
          <img src="@/assets/logo/contact_top-friend-notify.png" alt="">
          <p>新的朋友</p>
        </div>
        <div class="address-top-item">
          <img src="@/assets/logo/contact_add-friend-addgroup.png" alt="">
          <p>新的朋友</p>
        </div>
        <div class="address-top-item">
          <img src="@/assets/logo/contact_top-tag.png" alt="">
          <p>新的朋友</p>
        </div>
        <div class="address-top-item">
          <img src="@/assets/logo/contact_top-offical.png" alt="">
          <p>新的朋友</p>
        </div>
      </div>
      <mt-index-section :index="list.group" v-for="list in lists" :key="list.gid">
        <mt-cell :title="listItem.name" class="address-index" v-for="listItem in list.info">
          <img slot="icon" src="@/assets/avatar/1.jpg" width="48" height="48">
        </mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import url from '@/assets/api.js'

  import { IndexList, IndexSection, Cell } from 'mint-ui';

  Vue.component(IndexList.name, IndexList);
  Vue.component(IndexSection.name, IndexSection);
  Vue.component(Cell.name, Cell);

  export default {
    name: "addressList",
    data() {
      return {
        lists: null
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        axios.get(url.friendsList,{}).then(res => {
          this.lists = res.data.friends
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  [v-cloak] {
    display: none;
  }
  .address {
    position: relative;
    top: 4rem;
    height: calc(100vh - 8rem);
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .address-top {
    vertical-align: middle;
    > .address-top-item {
      display: flex;
      align-items: center;
      height: 3rem;
      padding: .5rem 10px .5rem 10px;
      > p {
        margin-left: 1rem;
      }
    }
  }
  .address-index {
    margin: 1rem 0;
    > .mint-cell {
      margin-left: 1rem;
    }
  }
  img {
    height: 100%;
    border-radius: 6px;
  }
</style>
