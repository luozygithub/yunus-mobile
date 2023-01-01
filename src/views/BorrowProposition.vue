<template>
  <div class="BorrowProposition">

    <div class="part1">
      <div class="borrow-box">
        <div class="name">
          Payment Address
        </div>
        <div class="content">
          TAbBgFNCgYHJvPRxG1wp57Va5Wae6chRwcR
        </div>
        <div class="name">
          Select a browsing method
        </div>
        <div class="input-name">
          Borrowing Amount
        </div>
        <div class="input-box">
          <input type="text" v-model="amount" placeholder="0.00">
          <div class="right">
            USDT
          </div>
        </div>
        <div class="input-name">
          Borrowing Period
        </div>
        <div class="choose-list">
          <div class="choose-item" @click="chooseDay=1" :class="{'active':chooseDay==1}">
            1 Day
          </div>
          <div class="choose-item" @click="chooseDay=7" :class="{'active':chooseDay==7}">
            7 Day
          </div>
          <div class="choose-item" @click="chooseDay=17" :class="{'active':chooseDay==17}">
            17 Day
          </div>
        </div>
        <div class="input-name">
          Receiving Address
        </div>
        <div class="input-box">
          <input type="text" v-model="address" placeholder="0.00">
          <div class="right">
            USDT
          </div>
        </div>
        <div class="borrow-btn" :class="{'active':isFilled}">
          Borrow Now
        </div>
      </div>
      <div class="nav-list">
        <div class="nav" @click="goPath('/BorrowingRules')">
          Borrowing Rules
        </div>
        <div class="nav" @click="goPath('/RepaymentRules')">
          Repayment Rules
        </div>
        <div class="nav"  @click="goPath('/BorrowingOrder')">
          Borrowing Order
        </div>
      </div>
      <div class="content" style="font-size: 14px;margin-top: 2em">
        Yunus Loop is a self-borrowing platform in the Tron and ETH ecosystem. We gather the best developers in the
        community and hope to provide affordable, safe and efficient self-borrowing services for everyone.
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: "BorrowProposition",
  components: {},
  data() {
    return {
      chooseDay: 1,
      amount: undefined,
      address: undefined
    }
  },
  computed: {

    isFilled() {
      if (this.chooseDay && this.amount && this.address) {
        return true
      } else {
        return false
      }
    }
  },
  methods:{
    goPath(path){
      this.$router.push(path)
    },
  }
}
</script>

<style lang="scss" scoped>
.BorrowProposition {

  .part1 {
    background: linear-gradient(180deg, rgba(255, 192, 0, 0.1) 10%, rgba(255, 192, 0, 0) 30%);
    padding: 2em 6%;
  }
  .nav-list{
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    .nav{
      width: 31%;
      border-radius: 10px;
      border: 1px solid #999;
      padding: 0.5em;
      text-align: center;
    }
  }
  .choose-list {
    display: flex;
    padding: 10px 0;

    .choose-item {
      width: 100px;
      height: 34px;
      border-radius: 24px;
      border: 1px solid #999;
      text-align: center;
      line-height: 32px;
      font-size: 16px;
      margin-left: 10px;

      &.active {
        border: 1px solid #FFC000;
        color: #FFC000;
      }

      &:nth-child(1) {
        margin-left: 0;
      }

    }
  }
  .content {
    word-break: break-all;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC, sans-serif;
    font-weight: 400;
    color: #999;
    line-height: 22px;
    margin-top: 1em;
    white-space: break-spaces;
    width: 100%;
  }

  .borrow-box {
    background: linear-gradient(180deg, #3A3A3C 0%, #242526 100%);
    border-radius: 30px;
    padding: 2em 1em;

    .name {
      font-size: 18px;
      font-family: Arial-BoldMT, Arial, sans-serif;
      font-weight: bold;
      color: #FFC000;
      line-height: 18px;
      margin-top: 1em;
    }


    .input-name {
      font-size: 16px;
      margin-top: 1.5em;
    }

    .input-box {
      width: 100%;
      border-radius: 24px;
      height: 48px;
      background: rgba(#fff, 0.1);
      display: flex;
      align-items: center;
      padding: 0 1em;
      margin-top: 1em;

      input {
        flex: 1;
        height: 48px;
        background: none;

        &:focus-visible {
          outline: none;
        }
      }

      .right {
        color: #999;
      }
    }

    .borrow-btn {
      width: 100%;
      color: #18191A;
      font-weight: bold;
      margin-top: 2em;
      line-height: 52px;
      text-align: center;
      height: 52px;
      background: rgba(#FFFFFF, 0.5);
      border-radius: 24px;

      &.active {
        background: #FFC000;
      }
    }
  }
}
</style>
