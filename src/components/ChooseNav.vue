<template>
  <div class="choose-nav-box" @click="$emit('handleClick')">
    <div class="choose-nav" >
      <div class="nav-list">
        <div class="choose-item" @click="goPath('/')" :class="{'active':$route.path=='/'}">
          Home
        </div>
        <div class="choose-item" @click="goPath('/about')" :class="{'active':$route.path=='/about'}">
          About Yunus Loop
        </div>
        <div class="choose-item" @click="goPath('/SponsorExhaustion')"
             :class="{'active':$route.path=='/SponsorExhaustion'}">
          Sponsor Exhaustion
        </div>
        <div class="choose-item" @click="goPath('/BorrowProposition')"
             :class="{'active':$route.path=='/BorrowProposition'}">
          Borrowing Proposition
        </div>
        <div class="choose-item">
          Security Audit
        </div>
        <div class="choose-item" @click="goPath('/Security')">
          Security
        </div>
        <div class="choose-item">
          Circulation Certificate
        </div>
        <div class="choose-item">
          Join Community
        </div>
      </div>
      <div class="select-lng">
        <div class="title">
          Select Language
        </div>
        <div class="lng-list">
          <div class="lng-item" :class="{'active':activeLngInx==0}">
            <img src="../assets/english.png" alt="">
          </div>
          <div class="lng-item" :class="{'active':activeLngInx==1}">
            <img src="../assets/ferman.png" alt="">
          </div>
          <div class="lng-item" :class="{'active':activeLngInx==2}">
            <img src="../assets/france.png" alt="">
          </div>
          <div class="lng-item" :class="{'active':activeLngInx==3}">
            <img src="../assets/Italy.png" alt="">
          </div>
          <div class="lng-item" :class="{'active':activeLngInx==3}">
            <img src="../assets/rusia.png" alt="">
          </div>
          <div class="lng-item" :class="{'active':activeLngInx==3}">
            <img src="../assets/spain.png" alt="">
          </div>
          <div class="lng-item" :class="{'active':activeLngInx==3}">
            <img src="../assets/מדינת ישראל.png" alt="">
          </div>
          <div class="lng-item" :class="{'active':activeLngInx==3}">
            <img src="../assets/Azərbaycan.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseNav",
  data() {
    return {
      activeIndex: 0,
      activeLngInx:0
    }
  },
  methods: {
    goPath(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.choose-nav-box{
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .choose-nav {
    position: fixed;
    top: 100px;
    background: #18191A;
    height: calc(100vh - 100px);
    z-index: 100;
    width: 100vw;

    .nav-list {
      padding: 0 10%;
      display: flex;
      flex-direction: column;

      .choose-item {
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC, sans-serif;
        font-weight: 600;
        color: #fff;
        line-height: 22px;
        padding: 1em 0;

        &.active {
          color: #FFC000;
        }
      }
    }

    .select-lng {
      position: fixed;
      bottom: 1em;
      padding-left: 6%;
      width: 100%;
      .title{
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC,sans-serif;
        font-weight: 600;
        color: #999;
        line-height: 22px;
        border-bottom: 1px solid #999;
        padding-bottom: 1em;
        width: 100%;
      }
      .lng-list{
        padding: 0.5em 0;
        display: flex;
        overflow-y: scroll;
        align-items: center;
        .lng-item{
          margin-right: 1em;
          border-radius: 50%;
          img{
            border-radius: 50%;
          }
          &.active{
            padding: 0.5em;
            border: 1px solid #FFFFFF;
          }
        }
      }
    }
  }
}

</style>
