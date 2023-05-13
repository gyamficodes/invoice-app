<template>
  <header class="flex">
    <div class="branding flex">
    <img :src="image2" alt="">
    </div>
  </header>
</template>

<script>
import pic from '@/assets/file-invoice-dollar-solid.png';

export default {
  name: 'NavigationPage',
  components: {},
  data() {
    return {
      image2: pic,
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},

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
