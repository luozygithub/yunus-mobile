<template>
  <div class="header">
    <ChooseNav v-show="isShowNav" class="choose-nav" @handleClick="hideChoose"/>
    <div class="top-box sticky bg-darkGray">
      <div class="flex-1 flex justify-center items-center space-x-5 flex-shrink-0 sm:flex-none">
        <div class="flex items-center space-x-1.5 flex-shrink-0">
          <span class="flex-shrink-0 text-white">Circulation </span>
          <span class="text-lightBlue text-[15px] leading-[18px] num-bold-style">{{ contractUSDTBalance }}</span>
        </div>
      </div>
    </div>
    <div class="header-box">
      <img src="../assets/logo.webp" alt="" class="logo">
      <div class="address-box">
        <div class="address">
          TAbgFNGCgKHv…
        </div>
        <div class="connect-button">
          <div class="dot">

          </div>
          connected
        </div>
      </div>
      <div class="menu-box" @click="showChoose">
        <img src="../assets/icon-nav.webp" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import ChooseNav from "./ChooseNav";
import abiUtil from "../abi";
const TronWeb = require('tronweb')
export default {
  name: "YunusHeader",
  components: {ChooseNav},
  data() {
    return {
      isShowNav: false,
      contractUSDTBalance: 0,
      nodePath: "https://api.trongrid.io",
      contractAddress: "TUtsRXcAAgC9FfFyhHzNZkqCByLXytmVii",
      tronAddress1: "TUA9cFnwkSMtHnEKmSN9HRXwpMtdr7drBq",
    }
  },
  methods:{
    hideChoose(){
      this.isShowNav = false
      document.querySelector('body').style.overflow = ''
    },
    showChoose(){
      this.isShowNav = true
      document.querySelector('body').style.overflow = 'hidden'
    },
    async getUSDTBalance() {
      let contract = await abiUtil.getContractByName("USDT", window.tronWeb)
      let res = await contract.balanceOf(this.contractAddress).call({})
      this.contractUSDTBalance = parseInt(window.tronWeb.toDecimal(res._hex) / 10 ** 6).toString()
      this.contractUSDTBalance = this.contractUSDTBalance.split('').reverse().join('');
      this.contractUSDTBalance = this.contractUSDTBalance.replace(/(.{3})/g, "$1 ")
      this.contractUSDTBalance = this.contractUSDTBalance.split('').reverse().join('');
    },
    async getConnect() {
      const HttpProvider = TronWeb.providers.HttpProvider;
      const fullNode = new HttpProvider(this.nodePath);
      const solidityNode = new HttpProvider(this.nodePath);
      const eventServer = new HttpProvider(this.nodePath);

      const tronWeb = new TronWeb(
          fullNode,
          solidityNode,
          eventServer,
      );
      tronWeb.setAddress('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t');
      window.tronWeb = tronWeb
    },
    async getData() {
      try {
        let balance = await window.tronWeb.trx.getBalance(this.contractAddress);
        this.contractTrxBalance = parseInt(parseInt(balance) / 10 ** 6).toString()
        this.contractTrxBalance = this.contractTrxBalance.split('').reverse().join('');
        this.contractTrxBalance = this.contractTrxBalance.replace(/(.{3})/g, "$1 ")
        this.contractTrxBalance = this.contractTrxBalance.split('').reverse().join('');
        this.getUSDTBalance()
      } catch (e) {
        console.log(e)
      }
    },
  },
  async mounted() {
    await this.getConnect()
    setTimeout(() => {
      this.getData()
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>

.header-box {
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  .logo {
    height: 32px;
    width: 45px;
  }

  .address-box {
    display: flex;
    align-items: center;

    .address {
      font-size: 12px;
      color: #999;
    }

    .connect-button {
      width: 84px;
      height: 24px;
      border-radius: 12px;
      border: 1px solid #999;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 22px;

      .dot {
        width: 4px;
        height: 4px;
        background: #2CD9FF;
        border-radius: 50%;
        box-shadow: 0px 0px 4px 0px #2CD9FF;
        margin-right: 5px;
      }
    }
  }

}

.top-box {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: rgba(0, 0, 0, 0.8);
  border-color: hsla(0, 0%, 100%, .2);
  border-bottom-width: 1px;
  backdrop-filter: blur(10px);
}
</style>
