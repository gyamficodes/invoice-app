<template>
  <div class="home container">
    <!-- header -->

    <div class="push container">

    <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are 4 total invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" @keypress="Mouse" class="filter flex" ref="filter">
          <span>filter by status</span>
          <img :src="image" alt="" />
          <ul v-show="FilterMenu" class="filter-menu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice" @keypress="mouse" class="button flex">
          <div class="inner-button flex">
            <img :src="image2" alt="" />
          </div>
          <span>new invoice</span>
        </div>
      </div>
    </div>
    <!-- <div class="hearder flex">

    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import pic from '@/assets/icon-arrow-down.svg';
import pic2 from '@/assets/icon-plus.svg';

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      image: pic,
      image2: pic2,
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style lang="scss" >
$text-color: #fff;

.home {
  color: $text-color;

  .header {
    margin-bottom: 65px;
    .left,
    .right {
      flex: 1;
    }
    .right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .button,
      .filter {
        align-items: center;
        span {
          font-size: 12px;
        }
      }
      .filter{
        position: relative;
        margin-right: 40px;
      }
    }
  }
  .push{
    display: flex;
      justify-content: space-between;
      align-items: center;
  }
}
</style>
