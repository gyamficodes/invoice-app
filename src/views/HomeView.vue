<template>
  <div class="home container">
    <!-- header -->

    <div class="push container">
      <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are 4 total invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" @keypress="Mouse" class="filter flex">
          <span>filter by status</span>
          <img :src="image" alt="" />
          <ul v-show="FilterMenu" class="filter-menu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice"  class="button flex">
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
// import { mapMutations } from 'vuex';
import pic from '@/assets/icon-arrow-down.svg';
import pic2 from '@/assets/icon-plus.svg';

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      image: pic,
      image2: pic2,
      FilterMenu: false,
    };
  },
  computed: {
    invoModal() {
      return this.$store.state.invoiceModal;
    },
  },
  methods: {
    // ...mapMutations([' TOGGLE_INVOICE']),
    newInvoice() {
      this.$store.commit('TOGGLE_INVOICE');
    },
    toggleFilterMenu() {
      this.FilterMenu = !this.FilterMenu;
    },
    toggleModal() {
      return this.$store.commit('TOGGLE_INVOICE');
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
$text-color: #fff;

.home {
  color: $text-color;

  .push {
    margin-bottom: 65px;
    display: flex;
    align-items: center;
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
      .filter {
        position: relative;
        margin-right: 40px;
        span {
          cursor: pointer;
        }
        img {
          margin-left: 12px;
          width: 9px;
          height: 5px;
          cursor: pointer;
        }
        .filter-menu {
          width: 120px;
          position: absolute;
          top: 25px;
          list-style: none;
          background-color: #1e2139;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

          li {
            cursor: pointer;
            font-size: 12px;
            padding: 10px 20px;

            &:hover {
              color: #1e2139;
              background-color: #fff;
            }
          }
        }
      }
      .button {
        padding: 8px 10px;
        background-color: #7c5dfa;
        border-radius: 40px;

        .inner-button {
          margin-right: 8px;
          border-radius: 50%;
          padding: 8px;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
}
</style>
