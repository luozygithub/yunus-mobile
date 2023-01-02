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
            <img src="../assets/english.webp" alt="">
          </div>
          <div class="lng-item" :class="{'active':activeLngInx==1}">
            <img src="../assets/ferman.webp" alt="">
          </div>
          <div class="lng-item" :class="{'active':activeLngInx==2}">
            <img src="../assets/france.webp" alt="">
          </div>
          <div class="lng-item" :class="{'active':activeLngInx==3}">
            <img src="../assets/Italy.webp" alt="">
          </div>
          <div class="lng-item" :class="{'active':activeLngInx==3}">
            <img src="../assets/rusia.webp" alt="">
          </div>
          <div class="lng-item" :class="{'active':activeLngInx==3}">
            <img src="../assets/spain.webp" alt="">
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
  components: {},
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
  position: fixed;
  height: calc(100% - 100px);
  width: 100%;
  top: 100px;
  left: 0;
  z-index: 100;
  background: #18191A;
  .choose-nav {
    background: #18191A;
    display: flex;
    flex-direction: column;
    height: 100%;
    .nav-list {
      padding: 1em 8% 2em;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
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
      background: #18191A;
      padding-left: 6%;
      padding-top: 2em;
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
