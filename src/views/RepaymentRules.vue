<template>
  <div class="RepaymentRules">
    <div class="part1">
      <div class="bg2"></div>
      <div class="title1">
        Repayment Rules
      </div>
      <div class="content-box">
        <div class="content">
          Yunus Loop DeFi is a TRON based open source money market protocol. Developed on the Tron chain, Yunus Loop
          Defi is a smart contract where anyone can offer or borrow cryptocurrencies without risk. In order to receive
          rewards, Cryptocurrency holders can store their funds in the Yunus Loop decentralized borrowing smart contract
          to carry out risk-free short-term loans and risk-free ultra-short futures business.
        </div>
        <div class="content">
          Yunus Loop DeFi smart borrowing contract improves turnover to ensure returns on profits. And the fund users
          can skip the complicated process of traditional loan finance application, quickly borrow funds to solve their
          urgent needs, and get more opportunities.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "RepaymentRules",
  components: {}
}
</script>

<style lang="scss" scoped>

.part1 {
  padding: 2em 6%;
  overflow: hidden;
  width: 100%;
  position: relative;
  background: linear-gradient(110deg, rgba(255,192,0,0.2) 0%, rgba(255,192,0,0) 50%);
  .bg2{
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../assets/borrow_bg2.png")  no-repeat;
    background-position: 90% -1em;
  }
  .title1 {
    font-size: 32px;
    font-family: BigJohn, sans-serif;
    color: #FFC000;
    line-height: 40px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .content-box {
    position: relative;
    z-index: 1;
    margin-top: 2em;
    background: linear-gradient(180deg, #3A3A3C 0%, #242526 100%);
    border-radius: 30px;
    padding: 1.5em;
    color: #999;

    .content:nth-child(2){
      margin-top: 1em;
    }
  }
}
</style>
