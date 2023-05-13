<template>
  <header class="flex">
    <div class="branding flex">
    <img src="@/assets/file-invoice-dollar-solid.png" alt="">
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavigationPage',
};
</script>

<style lang="scss" scoped>
header{
    z-index: 99;
    flex-direction: row;
    background: #1e2931;
    @media (min-width: 900px) {
        min-height: 100%;
        min-width: 90px;
        flex-direction: column;
        border-radius: 0 20px 20px 0;
    }
    .branding{
        border-radius: 0 20px 20px 0;
        background-color: #7c5dfa;
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: 900px) {
      width: 100%;
    }
    img{
        width: auto;
        height: 30px;
    }
    }

}
</style>
