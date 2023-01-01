<template>
  <div class="BorrowingOrder">
    <div class="part1">
      <div class="bg3">

      </div>
    </div>
    <div class="part2">
      <div class="nav-list">
        <div class="nav-item" :class="{'active':activeNav==0}" @click="activeNav=0">
          Borrowing
        </div>
        <div class="nav-item" :class="{'active':activeNav==1}" @click="activeNav=1">
          Repayment
        </div>
      </div>
      <div class="borrowing-list" v-show="activeNav==0">
        <div class="borrowing-item">
          <div class="borrowing-header">
            <div class="left">
              L1255745840218874
            </div>
            <div class="operate-btn">
              Repayment
            </div>
          </div>
          <div class="borrowing-content">
              <div class="name">
                Borrowing Amount
              </div>
            <div class="usdt">
              58,000 USDT
            </div>
            <div class="line-box">
              <div class="name">
                Collateral
              </div>
              <div class="value">
                105,410 RTX
              </div>
            </div>
            <div class="line-box">
              <div class="name">
                Repayment Countdown
              </div>
              <div class="value">
                10天5时20分37秒
              </div>
            </div>

          </div>
        </div>
        <div class="borrowing-item">
          <div class="borrowing-header">
            <div class="left">
              L1255745840218874
            </div>
            <div class="operate-btn">
              Repayment
            </div>
          </div>
          <div class="borrowing-content">
            <div class="name">
              Borrowing Amount
            </div>
            <div class="usdt">
              58,000 USDT
            </div>
            <div class="line-box">
              <div class="name">
                Collateral
              </div>
              <div class="value">
                105,410 RTX
              </div>
            </div>
            <div class="line-box">
              <div class="name">
                Repayment Countdown
              </div>
              <div class="value">
                10天5时20分37秒
              </div>
            </div>

          </div>
        </div>
        <div class="borrowing-item">
          <div class="borrowing-header">
            <div class="left">
              L1255745840218874
            </div>
            <div class="operate-btn">
              Repayment
            </div>
          </div>
          <div class="borrowing-content">
            <div class="name">
              Borrowing Amount
            </div>
            <div class="usdt">
              58,000 USDT
            </div>
            <div class="line-box">
              <div class="name">
                Collateral
              </div>
              <div class="value">
                105,410 RTX
              </div>
            </div>
            <div class="line-box">
              <div class="name">
                Repayment Countdown
              </div>
              <div class="value">
                10天5时20分37秒
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="borrowing-list isRepayment" v-show="activeNav==1">
        <div class="borrowing-item">
          <div class="borrowing-header">
            <div class="left">
              L1255745840218874
            </div>
            <div class="right">
              Repayment
            </div>
          </div>
          <div class="borrowing-content">
            <div class="name">
              Borrowing Amount
            </div>
            <div class="usdt">
              58,000 USDT
            </div>
            <div class="line-box">
              <div class="name">
                Collateral
              </div>
              <div class="value">
                105,410 RTX
              </div>
            </div>
            <div class="line-box">
              <div class="name">
                Repayment Countdown
              </div>
              <div class="value">
                10天5时20分37秒
              </div>
            </div>

          </div>
        </div>
        <div class="borrowing-item">
          <div class="borrowing-header">
            <div class="left">
              L1255745840218874
            </div>
            <div class="right">
              Repayment
            </div>
          </div>
          <div class="borrowing-content">
            <div class="name">
              Borrowing Amount
            </div>
            <div class="usdt">
              58,000 USDT
            </div>
            <div class="line-box">
              <div class="name">
                Collateral
              </div>
              <div class="value">
                105,410 RTX
              </div>
            </div>
            <div class="line-box">
              <div class="name">
                Repayment Countdown
              </div>
              <div class="value">
                10天5时20分37秒
              </div>
            </div>

          </div>
        </div>
        <div class="borrowing-item">
          <div class="borrowing-header">
            <div class="left">
              L1255745840218874
            </div>
            <div class="right">
              Repayment
            </div>
          </div>
          <div class="borrowing-content">
            <div class="name">
              Borrowing Amount
            </div>
            <div class="usdt">
              58,000 USDT
            </div>
            <div class="line-box">
              <div class="name">
                Collateral
              </div>
              <div class="value">
                105,410 RTX
              </div>
            </div>
            <div class="line-box">
              <div class="name">
                Repayment Countdown
              </div>
              <div class="value">
                10天5时20分37秒
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BorrowingOrder",
  components: {},
  data(){
    return{
      activeNav: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.BorrowingOrder{
  position: relative;
  .bg3{
    background: url("../assets/borrow_bg3.png") no-repeat;
    position: absolute;
  }
  .part1{
    padding: 2em 6%;
  }
  .part2 {
    background: #18191A;
    box-shadow: 0px -10px 20px 0px rgba(255,192,0,0.05);
    border-radius: 30px 30px 0px 0px;
    .nav-list{
      display: flex;
      border-bottom: 1px solid #999;
      .nav-item{
        padding: 1em 0;
        text-align: center;
        position: relative;
        width: 50%;
        color: #999;
        &.active{
          color: #FFC000;
        }
        &.active::after{
          position: absolute;
          bottom: 0;
          left: calc(50% - 18px);
          content: '';
          width: 36px;
          height: 1px;
          background: #FFC000;
          border: 2px solid #FFC000;
        }
      }
    }
    .borrowing-list{
      padding: 0.5em 5%;
      &.isRepayment{

      }
      .right{
        color: #999;
      }
      .borrowing-item{
        overflow: hidden;
        margin-top: 1em;
        background: linear-gradient(180deg, #3A3A3C 0%, #242526 100%);
        border-radius: 30px;
        .borrowing-header{
          background: linear-gradient(270deg, rgba(255,192,0,0) 0%, rgba(255,192,0,0.1) 100%);
          padding: 1.5em 1.2em 1em;
          display: flex;
          justify-content: space-between;
          .left{
            color: rgba(#FFC000,0.5);
          }
          .operate-btn{
            width: 106px;
            height: 34px;
            background: #FFC000;
            border-radius: 24px;
            text-align: center;
            line-height: 34px;
            color: #18191A;
          }
        }
        .borrowing-content{
          padding: 1.5em;
          .name{
            color: #999;
          }
          .usdt{
            font-size: 24px;
            font-family: Arial-BoldMT, Arial,sans-serif;
            font-weight: bold;
            margin: 0.4em 0 0.8em;
            color: #FFFFFF;
            line-height: 18px;
          }
          .line-box{
            display: flex;
            padding-bottom: 0.5em;
            justify-content: space-between;
          }
        }
      }
    }
  }

}
</style>
