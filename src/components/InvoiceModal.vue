<template>
  <div
    @click="checkClick"
    @keypress="Mouse"
    ref="invoiceWrap"
    class="invoice-wrap flex flex-column"
  >
    <form>
      <h1 style="margin-bottom: 40px" v-if="!editInvoice">New Invoice</h1>
      <h1 v-else>Edit Invoice</h1>

      <!-- Bill From -->
      <div class="bill-from flex flex-column">
        <h4>Bill From</h4>
        <div class="input flex flex-column">
          <label for="billerStreetAddress">Street Address</label>
          <input required type="text" id="billerStreetAddress" v-model="billerStreetAddress" />
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="billerCity">City</label>
            <input required type="text" id="billerCity" v-model="billerCity" />
          </div>
          <div class="input flex flex-column">
            <label for="billerZipCode">Zip Code</label>
            <input required type="text" id="billerZipCode" v-model="billerZipCode" />
          </div>
          <div class="input flex flex-column">
            <label for="billerCountry">Country</label>
            <input required type="text" id="billerCountry" v-model="billerCountry" />
          </div>
        </div>
      </div>

      <!-- Bill To -->
      <div class="bill-to flex flex-column">
        <h4>Bill To</h4>
        <div class="input flex flex-column">
          <label for="clientName">Client's Name</label>
          <input required type="text" id="clientName" v-model="clientName" />
        </div>
        <div class="input flex flex-column">
          <label for="clientEmail">Client's Email</label>
          <input required type="text" id="clientEmail" v-model="clientEmail" />
        </div>
        <div class="input flex flex-column">
          <label for="clientStreetAddress">Street Address</label>
          <input required type="text" id="clientStreetAddress" v-model="clientStreetAddress" />
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="clientCity">City</label>
            <input required type="text" id="clientCity" v-model="clientCity" />
          </div>
          <div class="input flex flex-column">
            <label for="clientZipCode">Zip Code</label>
            <input required type="text" id="clientZipCode" v-model="clientZipCode" />
          </div>
          <div class="input flex flex-column">
            <label for="clientCountry">Country</label>
            <input required type="text" id="clientCountry" v-model="clientCountry" />
          </div>
        </div>
      </div>

      <!-- Invoice Work Details -->
      <div class="invoices-works flex flex-column">
        <div class="payment flex">
          <div class="input flex flex-column">
            <label for="invoiceDate">Invoice Date</label>
            <input disabled type="text" id="invoiceDate" v-model="invoiceDate" />
          </div>
          <div class="input flex flex-column" style="margin-left: 20px;">
            <label for="paymentDueDate">Payment Due</label>
            <input disabled type="text" id="paymentDueDate" v-model="paymentDueDate" />
          </div>
        </div>
        <div class="input flex flex-column">
          <label for="paymentTerms">Payment Terms</label>
          <select required type="text" id="paymentTerms" v-model="paymentTerms">
            <option value="30">Net 30 Days</option>
            <option value="60">Net 60 Days</option>
          </select>
        </div>
        <div class="input flex flex-column">
          <label for="productDescription">Product Description</label>
          <input required type="text" id="productDescription" v-model="productDescription" />
        </div>

        <div class="work-items">
          <h3>Item List</h3>
          <table class="item-lists">
            <tr class="table-heading flex">
              <th class="item-name">Item Name</th>
              <th class="qty" style="margin-left: 160px " >Qty</th>
              <th class="price" style="margin-left: 80px">Price</th>
              <th class="total" style="margin-left: 170px">Total</th>
            </tr>
            <tr class="table-items flex" style="margin-bottom: 10px;" v-for="(item, index) in invoiceItemList" :key="index">
              <td class="item-name">
                <label></label> <input type="text" v-model="item.itemName" />
              </td>
              <td class="qty" style="margin-left: 9px;"><label></label> <input type="text" v-model="item.qty" /></td>
              <td class="price" style="margin-left: 10px;"><label></label> <input type="text" v-model="item.price" /></td>
              <td style="margin-left: 15px;" class="total flex" >${{ (item.total = item.qty * item.price) }}</td>
              <img style="margin-left: 15px;" @click="deleteInvoiceItem(item.id)" :src="pic" alt="" />
            </tr>
          </table>
          <div @click="addNewInvoiceItem" class="flex button">
            <img :src="Pic" alt="" />
            Add New Item
          </div>
        </div>
      </div>
      <!-- Save/Exit -->
      <div class="save flex">
        <div class="left">
          <button type="button" @click="closeInvoice" class="red">Cancel</button>
        </div>
        <div class="right flex">
          <button v-if="!editInvoice" type="submit" @click="saveDraft" class="dark-purple">
            Save Draft
          </button>
          <button v-if="!editInvoice" type="submit" @click="publishInvoice" class="purple">
            Create Invoice
          </button>
          <button v-if="editInvoice" type="sumbit" class="purple">Update Invoice</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import image from '@/assets/icon-delete.svg';
import Image from '@/assets/icon-plus.svg';
// import { uid } from 'uid';

export default {
  name: 'InvoiceModal',
  components: {},
  props: [],
  data() {
    return {
      pic: image,
      Pic: Image,
      dateOptions: { year: 'numeric', month: 'short', day: 'numeric' },
      docId: null,
      loading: null,
      billerStreetAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoicePending: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0,
    };
  },
  created() {
    // how to get invoice current date
    this.invoiceDateUnix = Date.now();
    this.invoiceDate = new Date(this.invoiceDateUnix).toLocaleDateString('en-us', this.dateOptions);
  },
  methods: {
    closeInvoice() {
      return this.$store.commit('TOGGLE_INVOICE');
    },
    addNewInvoiceItem(id) {
      this.invoiceItemList.push({
        id,
        itemName: '',
        qty: '',
        price: 0,
        total: 0,
      });
    },
    deleteInvoiceItem(id) {
      this.invoiceItemList = this.invoiceItemList.filter((item) => item.id !== id);
    },
    publishInvoice() {
      this.invoicePending = true;
    },
    saveDraft() {
      this.invoiceDraft = true;
    },
    async uploadInvoice() {
      if (this.invoiceItemList.length <= 0) {
        alert('Please ensure you fill work items');
      }
    },
    submitForm() {
      this.uploadInvoice();
    },
  },
  computed: {
    invoModal() {
      return this.$store.state.invoiceModal;
    },
  },
  watch: {
    paymentTerms() {
      const futureDate = new Date();
      this.paymentDueDateUnix = futureDate.setDate(futureDate.getDate());
      this.paymentDueDate = new Date(this.paymentDueDateUnix).toLocaleDateString('en-us', this.dateOptions);
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
/* width */
::-webkit-scrollbar {
  width: 9px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #f2f2f2a5;
}

.invoice-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  overflow: auto;
  overflow-x: hidden;
  color: #fff;
  background: #141625;
  padding: 50px;
  // &::-webkit-scrollbar {
  //   display: none;
  // }

  @media (min-width: 900px) {
    left: 90px;
  }

  .invoice-content {
    position: relative;
    padding: 56px;
    max-width: 700px;
    width: 100%;
    background-color: #141625;
    color: #fff;
    box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    h1 {
      margin-bottom: 48px;
      color: #fff;
    }

    h3 {
      margin-bottom: 16px;
      font-size: 18px;
      color: #777f98;
    }

    h4 {
      color: #7c5dfa;
      font-size: 12px;
      margin-bottom: 24px;
    }

    // Invoice Work

    .invoice-work {
      .payment {
        gap: 24px;
        div {
          flex: 1;
        }
      }
    }
  }

  .input {
    margin-bottom: 24px;
  }

  label {
    font-size: 12px;
    margin-bottom: 6px;
  }

  input,
  select {
    width: 100%;
    background-color: #1e2139;
    color: #fff;
    border-radius: 4px;
    padding: 12px 4px;
    border: none;

    &:focus {
      outline: none;
    }
  }
  .save {
    margin-top: 60px;

    div {
      flex: 1;
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 2em;
    }
  }

  // Bill To / Bill From
  .bill-to,
  .bill-from {
    margin-bottom: 48px;

    .location-details {
      gap: 2em;
      div {
        flex: 1;
      }
    }
  }

  .work-items {
    .button {
      color: #fff;
      background-color: #252945;
      align-items: center;
      justify-content: center;
      width: 100%;

      img {
        margin-right: 4px;
      }
    }
  }

  .item-list {
    width: 100%;

    // Item Table Styling

    .table-heading,
    .table-items {
      gap: 16px;
      font-size: 12px;

      .item-name {
        flex-basis: 50%;
      }

      .qty {
        flex-basis: 10%;
      }

      .price {
        flex-basis: 20%;
      }

      .total {
        flex-basis: 20%;
        align-self: center;
      }
    }

    .table-heading {
      margin-bottom: 16px;

      th {
        text-align: left;
      }
    }

    .table-items {
      position: relative;
      margin-bottom: 24px;

      img {
        position: absolute;
        top: 15px;
        right: 0;
        width: 12px;
        height: 16px;
      }
    }
  }
}
</style>
