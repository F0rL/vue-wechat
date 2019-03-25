<template>
  <div class="header">
    <div class="header-title">
      <p>微信</p>
    </div>
    <div class="header-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-add"></use>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="scss">
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    background-color: #f6f5f5;
    > .header-title {
      margin-left: 1rem;
    }
    > .header-icon {
      margin-right: 1rem;
    }
    > .header-icon > .icon:first-child {
      margin-right: 3rem;
    }
  }

</style>
