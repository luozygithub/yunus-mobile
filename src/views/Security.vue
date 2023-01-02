<template>
  <div class="Security">
    <div class="part1">
      <div class="title1">
        Five Safety <br/> Features
      </div>
      <div class="swiper-container2 swiper ">
        <div class="swiper-wrapper">
          <div class="swiper-slide ">
            <img src="../assets/icon-autonomy@2x.png" alt="">
            <div class="slide-title">
              {{ $t('Autonomy') }}
            </div>
            <div class="slide-content">
              The YUNUS LOOP DEFI ecosystem is built around the technology of smart contracts and NFTs, which are
              completely autonomous and exclude the influence of the human factor.
            </div>
          </div>
          <div class=" swiper-slide">
            <img src="../assets/icon-Unchangingconditions@2x.png" alt="">
            <div class="slide-title">
              {{ $t("Unchangingconditions") }}
            </div>
            <div class="slide-content">
              {{ $t('page4listContent2') }}
            </div>
          </div>
          <div class=" swiper-slide">
            <img src="../assets/icon-Transparency.png" alt="">
            <div class="slide-title">
              {{ $t('Transparency') }}
            </div>
            <div class="slide-content">
              {{ $t('page4listContent3') }}
            </div>
          </div>
          <div class=" swiper-slide">
            <img src="../assets/icon-Fullautomation@2x.png" alt="">
            <div class="slide-title">
              {{ $t('Full automation') }}
            </div>
            <div class="slide-content">
              {{ $t('page4listContent4') }}
            </div>
          </div>
          <div class=" swiper-slide">
            <img src="../assets/icon-Decentralization@2x.png" alt="">

            <div class="slide-title">
              {{ $t('Decentralization') }}
            </div>
            <div class="slide-content">
              {{ $t('page4listContent5') }}

            </div>
          </div>
          <div class="swiper-slide">
            <img src="../assets/icon-100%online@2x.png" alt="">
            <div class="slide-title">
              {{ $t('100% online') }}
            </div>

            <div class="slide-content">
              {{ $t('page4listContent6') }}
            </div>
          </div>
        </div>
        <div class="swiper-pagination1"></div>
      </div>
      <div class="title1">
        How Safe ？
      </div>
      <div class="content-list">
        <div class="content-box">
          <div class="bg">
          </div>
          <div class="content">
            <div class="content-value">
              At Yunus Loop DeFi, each participant can become a project initiator, invite new users to join and get shared
              rewards.
            </div>
          </div>
        </div>
        <div class="content-box">
          <div class="bg">
          </div>
          <div class="content">
            <div class="content-value">
              Users can get the sharing reward of one generation of friends for every 100USDT more circulation, up to 21
              generations of friends. For example: If you circulate 100USDT by yourself, you can get 20% of the revenue
              per circulation of your 1st generation friends. If you circulate 200USDT by yourself, you can get 10% of the
              revenue per circulation of your 2nd generation friends. If you circulate 300USDT-70OUSDT by yourself, 5% of
              each circulation revenue of 3 to 7 generations of friends €93% per circulation revenue of 8 to 10
              generations of friends €93% per circulation revenue of 1100USDT-2100USDT per circulation revenue of 11 to 21
              generations of friends £91% per circulation revenue
            </div>
          </div>
        </div>
        <div class="content-box">
          <div class="bg">
          </div>
          <div class="content">
            <div class="content-value">
              Each shared reward will automatically go to the initiator's wallet address via a smart contract
            </div>
          </div>
        </div>
        <div class="content-box">
          <div class="bg">
          </div>
          <div class="content">
            <div class="content-value">
              At Yunus Loop DeFi, each participant can become a project initiator, invite new users to join and get shared
              rewards.
            </div>
          </div>
        </div>
        <div class="content-box">
          <div class="bg">
          </div>
          <div class="content">
            <div class="content-value">
              Users can get the sharing reward of one generation of friends for every 100USDT more circulation, up to 21
              generations of friends. For example: If you circulate 100USDT by yourself, you can get 20% of the revenue
              per circulation of your 1st generation friends. If you circulate 200USDT by yourself, you can get 10% of the
              revenue per circulation of your 2nd generation friends. If you circulate 300USDT-70OUSDT by yourself, 5% of
              each circulation revenue of 3 to 7 generations of friends €93% per circulation revenue of 8 to 10
              generations of friends €93% per circulation revenue of 1100USDT-2100USDT per circulation revenue of 11 to 21
              generations of friends £91% per circulation revenue
            </div>
          </div>
        </div>
        <div class="content-box">
          <div class="bg">
          </div>
          <div class="content">
            <div class="content-value">
              Each shared reward will automatically go to the initiator's wallet address via a smart contract
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
export default {
  name: "Security",
  mounted() {
    new Swiper('.swiper-container2', {
      paginationClickable: true,
      pagination: {
        el: ".swiper-pagination1",
      },
    });
  }
}
</script>

<style lang="scss" scoped>
.Security {
  .part1 {
    padding: 2em 6%;
  }
  .swiper-container2 {
    width: 100%;
    margin-top: 30px;
    position: relative;
    padding-bottom: 50px;

    .swiper-pagination1 {
      margin-top: 1em;
      display: flex;
      justify-content: center;

      ::v-deep .swiper-pagination-bullet {
        width: 9px;
        height: 9px;
        background: rgba(#FFFFFF, 0.5);
      }

      ::v-deep .swiper-pagination-bullet-active {
        width: 9px;
        height: 9px;
        background: #FFFFFF !important;
      }
    }

    .swiper-wrapper {
      width: 100%;

      .swiper-slide {
        min-height: 300px;
        transform: none !important;
        width: 100%;
        padding: 30px 20px;
        background: linear-gradient(180deg, #3A3A3C 0%, #242526 100%);
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          width: 4em;
          height: 4em;
        }
        .slide-title {
          font-size: 24px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 33px;
          padding: 10px 0 30px;
        }

        .slide-content {
          color: #aaa;
          font-size: 16px;
        }
      }
    }
  }
  background: linear-gradient(180deg, rgba(255, 192, 0, 0) 100%, rgba(255, 192, 0, 0.2) 0%, rgba(255, 192, 0, 0) 100%);

  .title1 {
    font-size: 32px;
    font-family: BigJohn, sans-serif;
    color: #FFC000;
    line-height: 36px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .content-box {
    background: linear-gradient(90deg, rgba(233, 115, 127, 1), rgba(197, 66, 185, 1), rgba(147, 54, 220, 1));
    padding: 1px;
    overflow: hidden;
    border-radius: 30px;
    margin-top: 1em;
    position: relative;

    .content {
      border-radius: 30px;
      background: #18191A;

      .content-value {
        padding: 1.5em;

        color: #999999;
      }
    }
    &:nth-child(1){
      .content-value{
        background: url("../assets/1.png") 95% 20% no-repeat;
      }
    }
    &:nth-child(2){
      .content-value{
        background: url("../assets/2.png") 95% 20% no-repeat;
      }
    }
    &:nth-child(3){
      .content-value{
        background: url("../assets/3.png") 95% 20% no-repeat;
      }
    }
    &:nth-child(4){
      .content-value{
        background: url("../assets/4.png") 95% 20% no-repeat;
      }
    }
    &:nth-child(5){
      .content-value{
        background: url("../assets/5.png") 95% 20% no-repeat;
      }
    }
    &:nth-child(6){
      .content-value{
        background: url("../assets/6.png") 95% 20% no-repeat;
      }
    }
  }
}
</style>
