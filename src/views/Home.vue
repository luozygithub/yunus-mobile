<template>
  <div class="home">
    <div class="swiper swiper-container swiper-initialized swiper-horizontal swiper-pointer-events">
      <div class="swiper-wrapper"
           style="transition-duration: 0ms; transform: translate3d(-2880px, 0px, 0px);">
        <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="10"
             style="width: 160px;"><img src="../assets/nft11.png" alt="NFTcard"></div>
        <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="11"
             style="width: 160px;"><img src="../assets/nft12.png" alt="NFTcard"></div>
        <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="12"
             style="width: 160px;"><img src="../assets/nft13.png" alt="NFTcard"></div>
        <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="13"
             style="width: 160px;"><img src="../assets/nft14.png" alt="NFTcard"></div>

        <div class="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0"
             style="width: 160px;"><img src="../assets/nft1.png" alt="NFTcard"></div>
        <div class="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index="1"
             style="width: 160px;"><img src="../assets/nft2.png" alt="NFTcard"></div>

        <div class="swiper-slide" data-swiper-slide-index="3" style="width: 160px;"><img
            src="../assets/nft4.png" alt="NFTcard"></div>
        <div class="swiper-slide" data-swiper-slide-index="4" style="width: 160px;"><img
            src="../assets/nft5.png" alt="NFTcard"></div>
        <div class="swiper-slide" data-swiper-slide-index="5" style="width: 160px;"><img
            src="../assets/nft6.png" alt="NFTcard"></div>
        <div class="swiper-slide" data-swiper-slide-index="6" style="width: 160px;"><img
            src="../assets/nft7.png" alt="NFTcard"></div>
        <div class="swiper-slide" data-swiper-slide-index="7" style="width: 160px;"><img
            src="../assets/nft8.png" alt="NFTcard"></div>
        <div class="swiper-slide" data-swiper-slide-index="8" style="width: 160px;"><img
            src="../assets/nft9.png" alt="NFTcard"></div>
        <div class="swiper-slide" data-swiper-slide-index="9" style="width: 160px;"><img
            src="../assets/nft10.png" alt="NFTcard"></div>
        <div class="swiper-slide" data-swiper-slide-index="10" style="width: 160px;"><img
            src="../assets/nft11.png" alt="NFTcard"></div>
        <div class="swiper-slide" data-swiper-slide-index="11" style="width: 160px;"><img
            src="../assets/nft12.png" alt="NFTcard"></div>
        <div class="swiper-slide" data-swiper-slide-index="12" style="width: 160px;"><img
            src="../assets/nft13.png" alt="NFTcard"></div>
        <div class="swiper-slide" data-swiper-slide-index="13" style="width: 160px;"><img
            src="../assets/nft14.png" alt="NFTcard"></div>

        <div class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0"
             style="width: 160px;"><img src="../assets/nft1.png" alt="NFTcard"></div>
        <div class="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="1"
             style="width: 160px;"><img src="../assets/nft2.png" alt="NFTcard"></div>

        <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3"
             style="width: 160px;"><img src="../assets/nft4.png" alt="NFTcard"></div>
        <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4"
             style="width: 160px;"><img src="../assets/nft5.png" alt="NFTcard"></div>
      </div>
    </div>
    <div class="yunus-defi">
      <img src="../assets/YUNUSLOOPDEFI.png" alt="">
    </div>
    <div class="yunus-info">
      Join Yunus Loop DeFi and make money by helping people in developing countries.
    </div>
    <div class="operate-btns">
      <div class="operate">
        How to join
      </div>
      <div class="operate">
        Intro Yunus Loop
      </div>
      <div class="operate">
        Open Source
      </div>
    </div>
    <div class="content1">
      Through blockchain technology-based DeFi, capital is allowed to
      <span>flow around the world</span>, allowing people <span>
      in developing countries
    </span> to borrow money and access development opportunities at a lower cost, while <span>
      allowing investors to profit.
    </span>
    </div>
    <div class="start-circulate">
      <div class="title">
        Start Circulate
      </div>
      <div class="input-header">
        <div class="balance">
          Balance
        </div>
        <div class="usdt">
          USDT
        </div>
      </div>

      <div class="input-box">
        <input v-model="amount" type="text" placeholder="0">
        <button class="max-btn">
          Max
        </button>
      </div>
      <div class="duration-box">
        <div class="name">
          Circulate Duration
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

      </div>
      <div class="input-bottom">
        <div class="left">
          {{ chooseDay }} Day
        </div>
        <div class="right">
          1.07
        </div>
      </div>
      <div class="operate" :class="{'active':isFilled}">
        How to join
      </div>
    </div>
    <div class="my-order">
      <div class="title">
        My Orders
      </div>
      <div class="line-box">
        <div class="name">
          Circulate
        </div>
        <div class="value">
          7 Days
        </div>
      </div>
      <div class="line-box">
        <div class="name">
          Circulate Receiving
        </div>
        <div class="value">
          1 -> 1.07
        </div>
      </div>
      <div class="line-box">
        <div class="name">
          Status
        </div>
        <div class="value">
          Waiting
        </div>
      </div>
      <div class="line">

      </div>
      <div class="line-box">
        <div class="name">
          Circulate
        </div>
        <div class="value">
          7 Days
        </div>
      </div>
      <div class="line-box">
        <div class="name">
          Circulate Receiving
        </div>
        <div class="value">
          1 -> 1.07
        </div>
      </div>
      <div class="line-box">
        <div class="name">
          Status
        </div>
        <div class="value">
          Waiting
        </div>
      </div>
    </div>
    <div class="statistic-box">
      <div class="nav-box">
        <div class="nav-item" @click="statisticsNavIdx=0" :class="{'active':statisticsNavIdx==0}">
          Statistics
        </div>
        <div class="nav-item" @click="statisticsNavIdx=1" :class="{'active':statisticsNavIdx==1}">
          Personal Statistics
        </div>
      </div>
      <div class="statistic-content">
        <div class="statistic-content1" :style="'left:'+(statisticsNavIdx==0? '0':'-103%')">
          <div class="part-box">
            <img src="../assets/icon-PPAd.png" alt="">
            <div class="part-content">
              <div class="part-title">
                1 344 666
              </div>
              <div class="part-info">
                Previous Participate Address
              </div>
            </div>
          </div>
          <div class="part-box">
            <img src="../assets/icon-PPAm.png" alt="">
            <div class="part-content">
              <div class="part-title">
                18 277 108
              </div>
              <div class="part-info">
                Previous Participate Amount
              </div>
            </div>
          </div>
          <div class="part-box">
            <img src="../assets/icon-PPAd.png" alt="">
            <div class="part-content">
              <div class="part-title">
                5 972 189
              </div>
              <div class="part-info">
                Funds Pool
              </div>
            </div>
          </div>
        </div>
        <div class="statistic-content2" :style="'left:'+(statisticsNavIdx==0? '103%':'0')">
          <div class="statistic-content2-list">
            <div class="list-item">
              <div class="left">
                <img src="../assets/icon-Personalcirculation.png" alt="">
                <div class="name">
                  Personal circulation
                </div>
              </div>
              <div class="right">
                3
              </div>
            </div>
            <div class="list-item">
              <div class="left">
                <img src="../assets/icon-PersonalReceive.png" alt="">
                <div class="name">
                  Personal Receive
                </div>
              </div>
              <div class="right">
                3 347
              </div>
            </div>
            <div class="list-item">
              <div class="left">
                <img src="../assets/icon-share.png" alt="">
                <div class="name">
                  Share Profit
                </div>
              </div>
              <div class="right">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="share-page-box">
      <div class="title">
        Share Link
        <div class="copy-box">
          <img src="../assets/icon-copy.png" alt="">
          Copy
        </div>

      </div>
      <div class="info">
        Become part of the community Become part of the community
      </div>
      <div class="number-box">
        <div class="number">
          89 167
        </div>
        <div class="number-info">
          Number of friend addresses
        </div>
      </div>
      <div class="number-box">
        <div class="number">
          000
        </div>
        <div class="number-info">
          Friend Circulation Volume
        </div>
      </div>
      <div class="friend-box">
        <div class="title">
          Friend Address
        </div>
        <div class="line-box">
          <div class="left">
            1st 代
          </div>
          <div class="right">
            0
          </div>
        </div>
        <div class="line-box">
          <div class="left">
            2nd 代
          </div>
          <div class="right">
            0
          </div>
        </div>
        <div class="line-box">
          <div class="left">
            3rd-7th 代
          </div>
          <div class="right">
            0
          </div>
        </div>
        <div class="line-box">
          <div class="left">
            8th-10th 代
          </div>
          <div class="right">
            0
          </div>
        </div>
        <div class="line-box">
          <div class="left">
            11th-21th 代
          </div>
          <div class="right">
            0
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-content-box">
      <div class="title">
        The New Opportunities Blockchain and Smart Contracts Bring to the World
      </div>
      <div class="center-box">
        <div class="content">
          DeFi, brought about by decentralized blockchain and open and transparent smart contracts, is a revolutionary
          technological change for finance, which achieves decentralized, open and transparent finance, and efficient
          operation, while having security far beyond that of traditional finance.
        </div>
        <div class="swiper-container2 swiper ">
          <div class="swiper-wrapper">
            <div class=" swiper-slide ">
              <div
                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                <svg class="w-[30px] h-[30px]" viewBox="0 0 30 30" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15 4.75C9.34 4.75 4.75 9.339 4.75 15c0 5.66 4.59 10.25 10.25 10.25S25.25 20.66 25.25 15c0-5.661-4.59-10.25-10.25-10.25zM2.75 15C2.75 8.234 8.235 2.75 15 2.75S27.25 8.234 27.25 15c0 6.765-5.485 12.25-12.25 12.25S2.75 21.765 2.75 15z"
                        fill="#fff"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.25 12.5a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm7.5 0a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm-6.575 5.535a1 1 0 0 1 1.414.015 3.375 3.375 0 0 0 4.822 0 1 1 0 0 1 1.428 1.4 5.375 5.375 0 0 1-7.678 0 1 1 0 0 1 .014-1.415z"
                        fill="#fff"></path>
                </svg>
              </div>

              <div class="slide-title">
                {{ $t('Autonomy') }}
              </div>
              <div class="slide-content">
                The YUNUS LOOP DEFI ecosystem is built around the technology of smart contracts and NFTs, which are
                completely autonomous and exclude the influence of the human factor.
              </div>
            </div>
            <div class=" swiper-slide">
              <div
                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                <svg class="w-[30px] h-[30px]" viewBox="0 0 30 30" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M17.5 2.75a1 1 0 0 1 1 1v5a.25.25 0 0 0 .25.25h5a1 1 0 1 1 0 2h-5a2.25 2.25 0 0 1-2.25-2.25v-5a1 1 0 0 1 1-1z"
                        fill="#fff"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.75 4.75a1.5 1.5 0 0 0-1.5 1.5V10a1 1 0 1 1-2 0V6.25a3.5 3.5 0 0 1 3.5-3.5h8.75a1 1 0 0 1 .707.293l6.25 6.25a1 1 0 0 1 .293.707v13.75a3.5 3.5 0 0 1-3.5 3.5H15a1 1 0 1 1 0-2h6.25a1.5 1.5 0 0 0 1.5-1.5V10.414L17.086 4.75H8.75z"
                        fill="#fff"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.5 14.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zM2.75 17.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"
                        fill="#fff"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.912 20.292a1 1 0 0 1 .67 1.245l-1.21 4.034 1.68-.84a1 1 0 0 1 .895 0l1.68.84-1.21-4.034a1 1 0 1 1 1.916-.574l1.875 6.25a1 1 0 0 1-1.405 1.181L7.5 26.745l-3.303 1.65a1 1 0 0 1-1.405-1.181l1.875-6.25a1 1 0 0 1 1.245-.67z"
                        fill="#fff"></path>
                </svg>
              </div>
              <div class="slide-title">
                {{ $t("Unchangingconditions") }}
              </div>
              <div class="slide-content">
                {{ $t('page4listContent2') }}
              </div>
            </div>
            <div class=" swiper-slide">
              <div
                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                <svg class="w-[30px] h-[30px]" viewBox="0 0 30 31" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15 13.503a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                        fill="#fff"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.658 15.003c3.02 5.055 6.604 7.51 10.714 7.733a1 1 0 0 1-.108 1.998c-5.154-.28-9.35-3.491-12.632-9.234a1 1 0 0 1 0-.993C5.074 8.484 9.52 5.253 15 5.253s9.926 3.23 13.368 9.254a1 1 0 0 1 0 .992 27.71 27.71 0 0 1-1.7 2.636 1 1 0 1 1-1.614-1.18c.44-.602.87-1.252 1.288-1.951-3.168-5.301-6.957-7.75-11.342-7.75-4.385 0-8.174 2.449-11.342 7.75z"
                        fill="#fff"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M26.957 20.546a1 1 0 0 1 0 1.415l-5 5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 1.414-1.415l1.793 1.793 4.293-4.293a1 1 0 0 1 1.414 0z"
                        fill="#fff"></path>
                </svg>
              </div>
              <div class="slide-title">
                {{ $t('Transparency') }}
              </div>
              <div class="slide-content">
                {{ $t('page4listContent3') }}
              </div>
            </div>
            <div class=" swiper-slide">
              <div
                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                <svg class="w-[30px] h-[30px]" viewBox="0 0 31 31" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.011 5.029a3.5 3.5 0 0 1 2.475-1.026h12.5a2.25 2.25 0 0 1 2.25 2.25v2.75h.25a2.25 2.25 0 0 1 2.25 2.25v3.75a1 1 0 1 1-2 0v-3.75a.25.25 0 0 0-.25-.25h-15a3.5 3.5 0 0 1-1.5-.337v11.837a1.5 1.5 0 0 0 1.5 1.5h15a.25.25 0 0 0 .25-.25v-3.75a1 1 0 1 1 2 0v3.75a2.25 2.25 0 0 1-2.25 2.25h-15a3.5 3.5 0 0 1-3.5-3.5v-15A3.5 3.5 0 0 1 6.011 5.03zm.975 2.474a1.5 1.5 0 0 0 1.5 1.5h12.75v-2.75a.25.25 0 0 0-.25-.25h-12.5a1.5 1.5 0 0 0-1.5 1.5z"
                        fill="#fff"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M20.986 16.003a1.5 1.5 0 0 0 0 3h4v-3h-4zm-2.474-.975a3.5 3.5 0 0 1 2.474-1.025h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a3.5 3.5 0 0 1-2.474-5.975z"
                        fill="#fff"></path>
                </svg>
              </div>
              <div class="slide-title">
                {{ $t('Full automation') }}
              </div>
              <div class="slide-content">
                {{ $t('page4listContent4') }}
              </div>
            </div>
            <div class=" swiper-slide">
              <div
                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                <svg class="w-[30px] h-[30px]" viewBox="0 0 30 31" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.25 21.003a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm21-16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                        fill="#fff"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M23.75 9.003a1 1 0 0 1 1 1v6.25a7.25 7.25 0 0 1-7.25 7.25h-1.336l2.043 2.043a1 1 0 0 1-1.414 1.415l-3.75-3.75a1 1 0 0 1 0-1.415l3.75-3.75a1 1 0 0 1 1.414 1.415l-2.043 2.042H17.5a5.25 5.25 0 0 0 5.25-5.25v-6.25a1 1 0 0 1 1-1zM11.793 3.046a1 1 0 0 1 1.414 0l3.75 3.75a1 1 0 0 1 0 1.415l-3.75 3.75a1 1 0 0 1-1.414-1.415l2.043-2.043H12.5a5.25 5.25 0 0 0-5.25 5.25v6.25a1 1 0 1 1-2 0v-6.25a7.25 7.25 0 0 1 7.25-7.25h1.336l-2.043-2.042a1 1 0 0 1 0-1.415z"
                        fill="#fff"></path>
                </svg>
              </div>

              <div class="slide-title">
                {{ $t('Decentralization') }}
              </div>
              <div class="slide-content">
                {{ $t('page4listContent5') }}

              </div>
            </div>
            <div class="swiper-slide">
              <div
                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                <svg class="w-[30px] h-[30px]" viewBox="0 0 31 31" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.986 11.003a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5zm0-2a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 1 1-7 0v-5a3.5 3.5 0 0 1 3.5-3.5z"
                        fill="#fff"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.986 4.753c-5.66 0-10.25 4.59-10.25 10.25 0 5.661 4.59 10.25 10.25 10.25 5.661 0 10.25-4.589 10.25-10.25 0-5.66-4.589-10.25-10.25-10.25zm-12.25 10.25c0-6.765 5.485-12.25 12.25-12.25 6.766 0 12.25 5.485 12.25 12.25 0 6.766-5.484 12.25-12.25 12.25-6.765 0-12.25-5.484-12.25-12.25z"
                        fill="#fff"></path>
                </svg>
              </div>
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
        <div class="transpatent-box">
          <div class="title">
            Transpatent Address
          </div>
          <div class="address-list">
            <div class="address-item">
              <div class="address">
                TD9KJHF&DUCM8EVKR6ldfpyKJH…
              </div>
              <div class="check-btn">
                Check
              </div>
            </div>
            <div class="address-item">
              <div class="address">
                TD9KJHF&DUCM8EVKR6ldfpyKJH…
              </div>
              <div class="check-btn">
                Check
              </div>
            </div>
            <div class="address-item">
              <div class="address">
                TD9KJHF&DUCM8EVKR6ldfpyKJH…
              </div>
              <div class="check-btn">
                Check
              </div>
            </div>
            <div class="address-item">
              <div class="address">
                TD9KJHF&DUCM8EVKR6ldfpyKJH…
              </div>
              <div class="check-btn">
                Check
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="frequently-box flex flex-col items-center ">
        <div class="py-[100px] flex flex-col max-w-desktop-full w-full  ">
          <div class="flex flex-col items-center text-center  sm:text-left sm:items-start"><span
              class="max-w-[870px] text-white text-[48px] leading-[60px] font-bold  mb-[60px] sm:mb-5 sm:text-[30px] sm:leading-[36px]">{{
              $t('page6title')
            }}</span>
          </div>
          <div data-accordion-component="Accordion" class="accordion">
            <div class="relative flex flex-col w-full">
              <svg class="absolute top-1/3 -left-10 h-40 sm:left-5 sm:top-10" viewBox="0 0 60 100" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.551 63.978c0-2.69.187-5.239.561-7.65.467-2.41 1.495-4.682 3.084-6.815 1.589-2.225 4.066-4.219 7.43-5.98a146.221 146.221 0 0 1 4.346-2.226 47.366 47.366 0 0 0 5.888-3.338c1.962-1.298 3.598-2.735 4.906-4.311 1.402-1.67 2.103-3.477 2.103-5.424 0-2.133-.841-3.802-2.523-5.007-1.682-1.298-3.645-1.947-5.888-1.947s-4.112.556-5.607 1.668a14.35 14.35 0 0 0-3.505 3.617c-.841 1.298-1.636 2.41-2.383 3.338L0 17.942c2.43-5.656 6.262-10.06 11.495-13.213C16.73 1.576 22.71 0 29.44 0c3.552 0 7.103.51 10.654 1.53a30.12 30.12 0 0 1 9.954 4.868c2.99 2.225 5.374 5.146 7.15 8.762C59.064 18.776 60 23.18 60 28.373c0 4.45-.841 8.53-2.523 12.239-1.683 3.616-4.58 6.815-8.692 9.597a53.935 53.935 0 0 1-8.411 4.728c-2.804 1.299-5.187 2.643-7.15 4.034-1.962 1.298-2.944 2.967-2.944 5.007H8.551ZM8.972 100V77.19h21.729V100H8.972Z"
                    fill="#fff" fill-opacity=".1"></path>
              </svg>
              <svg class="absolute bottom-4 right-14 h-36 rotate-180" viewBox="0 0 60 100" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.551 63.978c0-2.69.187-5.239.561-7.65.467-2.41 1.495-4.682 3.084-6.815 1.589-2.225 4.066-4.219 7.43-5.98a146.221 146.221 0 0 1 4.346-2.226 47.366 47.366 0 0 0 5.888-3.338c1.962-1.298 3.598-2.735 4.906-4.311 1.402-1.67 2.103-3.477 2.103-5.424 0-2.133-.841-3.802-2.523-5.007-1.682-1.298-3.645-1.947-5.888-1.947s-4.112.556-5.607 1.668a14.35 14.35 0 0 0-3.505 3.617c-.841 1.298-1.636 2.41-2.383 3.338L0 17.942c2.43-5.656 6.262-10.06 11.495-13.213C16.73 1.576 22.71 0 29.44 0c3.552 0 7.103.51 10.654 1.53a30.12 30.12 0 0 1 9.954 4.868c2.99 2.225 5.374 5.146 7.15 8.762C59.064 18.776 60 23.18 60 28.373c0 4.45-.841 8.53-2.523 12.239-1.683 3.616-4.58 6.815-8.692 9.597a53.935 53.935 0 0 1-8.411 4.728c-2.804 1.299-5.187 2.643-7.15 4.034-1.962 1.298-2.944 2.967-2.944 5.007H8.551ZM8.972 100V77.19h21.729V100H8.972Z"
                    fill="#fff" fill-opacity=".1"></path>
              </svg>
              <div data-accordion-component="AccordionItem" class="accordion__item">
                <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5">
                  <div data-accordion-component="AccordionItemHeading" role="heading"
                       class="accordion__heading" aria-level="3"
                       @click="hide1=!hide1"
                  >
                    <div class="accordion__button" id="accordion__heading-raa-0" aria-disabled="false"
                         aria-expanded="false" aria-controls="accordion__panel-raa-0" role="button"
                         tabindex="0" data-accordion-component="AccordionItemButton">
                      <div class="flex items-center justify-between space-x-2.5"><span
                          class=" text-white gray-color leading-[28px]  ">{{
                          $t('page6listTitle1')
                        }}</span>
                        <div
                            :class="{'bg-orange rotate-180':!hide1}"
                            class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                          <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path d="m1 1 6 6 6-6" stroke="#FFC000" stroke-width="2"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                       aria-hidden="true" id="accordion__panel-raa-0" :hidden="hide1">
                    <div
                        class="font-light text-white-700  text-[18px] mt-5  leading-[28px] transition-all duration-500 ease-in-out   ">
                                        <span class="transition-opacity  duration-500 ease-in-out"><div
                                            class="space-y-1.5">{{ $t('page6listContent1') }}</div></span>
                    </div>
                  </div>
                </div>
              </div>
              <div data-accordion-component="AccordionItem" class="accordion__item">
                <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5"
                     @click="hide2=!hide2"
                >
                  <div data-accordion-component="AccordionItemHeading" role="heading"
                       class="accordion__heading" aria-level="3">
                    <div class="accordion__button" id="accordion__heading-raa-1" aria-disabled="false"
                         aria-expanded="false" aria-controls="accordion__panel-raa-1" role="button"
                         tabindex="0" data-accordion-component="AccordionItemButton">
                      <div class="flex items-center justify-between space-x-2.5"><span
                          class="text-white gray-color">{{
                          $t('page6listTitle2')
                        }}</span>
                        <div
                            :class="{'bg-orange rotate-180':!hide2}"
                            class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                          <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path d="m1 1 6 6 6-6" stroke="#FFC000" stroke-width="2"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                       aria-hidden="true" id="accordion__panel-raa-1" :hidden="hide2">
                    <div
                        class="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5  duration-500 ease-in-out   ">
                        <span class="transition-opacity duration-500 ease-in-out">{{
                            $t('page6listContent2part1')
                          }}
                        </span>
                      <p>
                        <span>
                          {{ $t('page6listContent2part2') }}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-accordion-component="AccordionItem" class="accordion__item">
                <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5"
                     @click="hide3=!hide3"
                >
                  <div data-accordion-component="AccordionItemHeading" role="heading"
                       class="accordion__heading" aria-level="3">
                    <div class="accordion__button" id="accordion__heading-raa-2" aria-disabled="false"
                         aria-expanded="false" aria-controls="accordion__panel-raa-2" role="button"
                         tabindex="0" data-accordion-component="AccordionItemButton">
                      <div class="flex items-center justify-between space-x-2.5"><span
                          class="  text-white  gray-color">{{
                          $t('page6listTitle3')
                        }}</span>
                        <div
                            :class="{'bg-orange rotate-180':!hide3}"
                            class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                          <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path d="m1 1 6 6 6-6" stroke="#FFC000" stroke-width="2"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                       aria-hidden="true" id="accordion__panel-raa-2" :hidden="hide3">
                    <div
                        class=" font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5  duration-500 ease-in-out   ">
                        <span class="transition-opacity duration-500 ease-in-out">{{
                            $t('page6listContent3part1')
                          }}</span>
                      <span style="width: 100%; overflow: hidden">
                        {{ $t('page6listContent3part2') }}
                        <a target="_blank" style="color: #acd1f8"
                           href="https://front.pascalfinance.com/pdf/web/viewer.html?file=safeAudit.pdf">
                          https://front.pascalfinance.com/pdf/web/
                          <br/>viewer.html?file=safeAudit.pdf</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div data-accordion-component="AccordionItem" class="accordion__item">
                <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5"
                     @click="hide4=!hide4">
                  <div data-accordion-component="AccordionItemHeading" role="heading"
                       class="accordion__heading" aria-level="3">
                    <div class="accordion__button" id="accordion__heading-raa-3" aria-disabled="false"
                         aria-expanded="false" aria-controls="accordion__panel-raa-3" role="button"
                         tabindex="0" data-accordion-component="AccordionItemButton">
                      <div class="flex items-center justify-between space-x-2.5"><span
                          class="  text-white  gray-color">{{
                          $t('page6listTitle4')
                        }}</span>
                        <div
                            :class="{'bg-orange rotate-180':!hide4}"
                            class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                          <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path d="m1 1 6 6 6-6" stroke="#FFC000" stroke-width="2"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                       aria-hidden="true" id="accordion__panel-raa-3" :hidden="hide4">
                    <div
                        class="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5  duration-500 ease-in-out   ">
                        <span class="transition-opacity duration-500 ease-in-out"><span>{{
                            $t('page6listContent4part1')
                          }}
                           <a target="_blank" style="color: #acd1f8" href="https://www.yunusloopdefi.com">www.yunusloopdefi.com</a>

                        {{ $t('page6listContent4part2') }}</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div data-accordion-component="AccordionItem" class="accordion__item">
                <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5"
                     @click="hide5=!hide5">
                  <div data-accordion-component="AccordionItemHeading" role="heading"
                       class="accordion__heading" aria-level="3">
                    <div class="accordion__button" id="accordion__heading-raa-4" aria-disabled="false"
                         aria-expanded="false" aria-controls="accordion__panel-raa-4" role="button"
                         tabindex="0" data-accordion-component="AccordionItemButton">
                      <div class="flex items-center justify-between space-x-2.5"><span
                          class="  text-white  gray-color">{{
                          $t('page6listTitle5')
                        }}</span>
                        <div
                            :class="{'bg-orange rotate-180':!hide5}"
                            class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                          <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path d="m1 1 6 6 6-6" stroke="#FFC000" stroke-width="2"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                       aria-hidden="true" id="accordion__panel-raa-4" :hidden="hide5">
                    <div
                        class="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5  duration-500 ease-in-out   ">
                                        <span class="transition-opacity duration-500 ease-in-out"><div
                                            class="space-y-1.5">{{ $t('page6listContent5part1') }}<ul
                                            class="space-y-1.5"><li>{{ $t('page6listContent5part2') }}

                                          <li>{{
                                              $t('page6listContent5part3')
                                            }}</li>
                                          <li>{{
                                              $t('page6listContent5part4')
                                            }}</li>
                                          <li>{{
                                              $t('page6listContent5part5')
                                            }}</li>
                                          <li>{{
                                              $t('page6listContent5part6')
                                            }}</li>
                                          <li>{{
                                              $t('page6listContent5part7')
                                            }}</li>
                                          <li>{{
                                              $t('page6listContent5part8')
                                            }}</li>
                                          <li>{{
                                              $t('page6listContent5part9')
                                            }}</li>
                                        </ul></div></span>
                    </div>
                  </div>
                </div>
              </div>
              <div data-accordion-component="AccordionItem" class="accordion__item">
                <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5"
                     @click="hide6=!hide6">
                  <div data-accordion-component="AccordionItemHeading" role="heading"
                       class="accordion__heading" aria-level="3">
                    <div class="accordion__button" id="accordion__heading-raa-5" aria-disabled="false"
                         aria-expanded="false" aria-controls="accordion__panel-raa-5" role="button"
                         tabindex="0" data-accordion-component="AccordionItemButton">
                      <div class="flex items-center justify-between space-x-2.5"><span
                          class="  text-white  gray-color">{{
                          $t('page6listTitle6')
                        }}</span>
                        <div
                            :class="{'bg-orange rotate-180':!hide6}"
                            class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                          <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path d="m1 1 6 6 6-6" stroke="#FFC000" stroke-width="2"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                       aria-hidden="true" id="accordion__panel-raa-5" :hidden="hide6">
                    <div
                        class="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5  duration-500 ease-in-out   ">
                        <span class="transition-opacity duration-500 ease-in-out"><span>{{
                            $t('page6listContent6')
                          }}</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div data-accordion-component="AccordionItem" class="accordion__item">
                <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5"
                     @click="hide7=!hide7">
                  <div data-accordion-component="AccordionItemHeading" role="heading"
                       class="accordion__heading" aria-level="3">
                    <div class="accordion__button" id="accordion__heading-raa-6" aria-disabled="false"
                         aria-expanded="false" aria-controls="accordion__panel-raa-6" role="button"
                         tabindex="0" data-accordion-component="AccordionItemButton">
                      <div class="flex items-center justify-between space-x-2.5"><span
                          class="  text-white  gray-color">{{
                          $t('page6listTitle7')
                        }}</span>
                        <div
                            :class="{'bg-orange rotate-180':!hide7}"
                            class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                          <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path d="m1 1 6 6 6-6" stroke="#FFC000" stroke-width="2"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                       aria-hidden="true" id="accordion__panel-raa-6" :hidden="hide7">
                    <div
                        class="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5  duration-500 ease-in-out   ">
                        <span class="transition-opacity duration-500 ease-in-out"><span>{{
                            $t('page6listContent7')
                          }}</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="partners-box">
      <div class="title">
        Partners
      </div>
      <div class="link-list">
        <div class="link-item">
          <img src="../assets/logo-coinbase.png" alt="">
        </div>
        <div class="link-item">
          <img src="../assets/logo-matamask.png" alt="">
        </div>
        <div class="link-item">
          <img src="../assets/logo-token.png" alt="">
        </div>
        <div class="link-item">
          <img src="../assets/logo-tronlink.png" alt="">
        </div>
        <div class="link-item">
          <img src="../assets/logo-huobi.png" alt="">
        </div>
        <div class="link-item">
          <img src="../assets/logo-crypto.png" alt="">
        </div>
      </div>
    </div>
    <footer>
      <img src="../assets/logo-touming.png" alt="">
      <div class="link-list">
        <div class="link-item">
          <a :href="telegramChannel" target="_blank">
            <img src="../assets/icon-link.png" alt="">
          </a>
        </div>
        <div class="link-item">
          <a :href="telegramChat" target="_blank">
            <img src="../assets/icon-link.png" alt="">
          </a>
        </div>
      </div>

      <div class="copyright">
        @ 2022 All Rights Reserved
      </div>
    </footer>
  </div>
</template>

<script>
/*eslint-disable*/
const TronWeb = require('tronweb')
import abiUtil from "../abi/index"
import ChooseNav from "../components/ChooseNav";

export default {
  name: "Home",
  data() {
    return {

      statisticsNavIdx: 0,
      chooseDay: 1,
      tronWeb: {},
      documentUrl: "https://documentation.yunusloopdefi.com/",
      websideUrl: "#",
      Disclaimer: "#",
      telegramChat: "https://t.me/+1xx-sOgmbns3YzFl",
      telegramChannel: "https://t.me/YunusLoopDeFiChannel",
      insUrl: "#",
      twitterUrl: "#",
      youtubeUrl: "#",
      contractAddress: "TUtsRXcAAgC9FfFyhHzNZkqCByLXytmVii",
      tronAddress1: "TUA9cFnwkSMtHnEKmSN9HRXwpMtdr7drBq",
      navIndex1: 2,
      navIndex2: 0,
      hide1: true,
      hide2: true,
      hide3: true,
      hide4: true,
      hide5: true,
      hide6: true,
      hide7: true,
      hide8: true,
      hide9: true,
      hide0: true,
      nodePath: "https://api.trongrid.io",
      contractTrxBalance: 0,
      amount: undefined,
      curLng: "en",
      curLngName: "English"
    }
  },
  components: {ChooseNav},
  computed: {
    isFilled() {
      if (this.amount && this.chooseDay) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    if (this.IsPhone()) {

    }
  },
  methods: {
    bindEvent() {
      var hidden, visibilityChange;
      if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
      } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
      } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
      }
      $(document).bind(visibilityChange, function () {
        if (document[hidden]) {
          //监听浏览器挂起时（即调起APP）清除定时
          clearTimeout(TIMER);
        }
      });
    },
    IsPhone() {
      var info = navigator.userAgent;
      var isPhone = /mobile/i.test(info);
      return isPhone;
    },

    handelChooseLng(type) {
      switch (type) {
        case "en" :
          this.curLngName = "English";
          this.curLng = "en";
          break
        case "de" :
          this.curLngName = "German";
          this.curLng = "de";
          break
        case "fr" :
          this.curLngName = "Franch";
          this.curLng = "fr";
          break
        case "it" :
          this.curLngName = "Italian";
          this.curLng = "it";
          break
      }
    },
    chooseLng(type) {
      localStorage.setItem("language", type);
      this.$i18n.locale = type;
      this.handelChooseLng(type)
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
      // tronWeb.setAddress(this.contractAddress);
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
    async getUSDTBalance() {
      let contract = await abiUtil.getContractByName("USDT", window.tronWeb)
      let res = await contract.balanceOf(this.contractAddress).call({})
      this.contractUSDTBalance = parseInt(window.tronWeb.toDecimal(res._hex) / 10 ** 6).toString()
      this.contractUSDTBalance = this.contractUSDTBalance.split('').reverse().join('');
      this.contractUSDTBalance = this.contractUSDTBalance.replace(/(.{3})/g, "$1 ")
      this.contractUSDTBalance = this.contractUSDTBalance.split('').reverse().join('');
    }
  },
  async mounted() {


    await this.getConnect()
    setTimeout(() => {
      this.getData()
    }, 2000)

    new Swiper('.swiper-container2', {
      paginationClickable: true,
      pagination: {
        el: ".swiper-pagination1",
      },
    });
    new Swiper('.swiper-container', {
      autoplay: 3000,
      paginationClickable: true,
      slidesPerView: 5,
      loop: true,
      effect: 'coverflow',
      centeredSlides: true,
      coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.home {
  footer {
    margin-top: 2em;
    background: #242526;
    padding: 3em 6%;

    .link-list {
      display: flex;

      .link-item {
        margin: 1em 1em 1em 0;

        img {
          width: 43px;
        }
      }
    }

    .copyright {
      color: #999;
    }
  }

  .partners-box {
    padding: 0 6%;

    .title {
      font-size: 30px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 42px;
    }

    .link-list {
      margin-top: 2em;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .link-item {
        width: 48%;
        margin-top: 1em;

        img {
          width: 100%;
        }
      }
    }
  }

  .bottom-content-box {
    padding: 50px 6%;

    .title {
      font-size: 30px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 42px;

    }

    .content {
      color: #aaa;
      margin-top: 30px;
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
          transform: none !important;
          width: 100%;
          min-height: 300px;
          padding: 30px 20px;
          background: linear-gradient(180deg, #3A3A3C 0%, #242526 100%);
          border-radius: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;

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

    .transpatent-box {
      .address-list {
        margin-top: 30px;

        .address-item {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
          align-items: center;

          .check-btn {
            text-align: center;
            width: 68px;
            height: 34px;
            background: #FFC000;
            border-radius: 24px;
            line-height: 34px;
            font-size: 16px;
            font-weight: 500;
            color: #18191A;
          }
        }
      }
    }

    .frequently-box {
      .flex-shrink-0 {
        border-color: #FFC000 !important;

        svg {

        }
      }
    }
  }

  .share-page-box {
    background: url("../assets/share_bg.png");
    background-size: 100% 100%;
    padding: 50px 6%;

    .title {
      font-size: 30px;
      font-family: PingFangSC-Semibold, PingFang SC, sans-serif;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 42px;
      display: flex;
      justify-content: space-between;

      .copy-box {
        display: flex;
        align-items: center;
        width: 98px;
        height: 34px;
        background: #FFC000;
        border-radius: 24px;
        font-size: 16px;
        font-weight: 600;
        color: #18191A;
        line-height: 22px;
        justify-content: center;

        img {
          margin-right: 10px;
        }
      }
    }

    .number-box {
      margin-top: 50px;
      text-align: center;

      .number {
        font-size: 48px;
        font-family: PingFangSC-Semibold, PingFang SC, sans-serif;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 67px;
      }

      .number-info {
        color: #ddd;
      }
    }

    .friend-box {
      width: 100%;
      margin: 30px 0;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 30px;
      padding: 40px 30px;

      .line-box {
        padding: 4px 0;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .statistic-box {
    padding: 0 6%;
    margin: 50px 0;
    width: 100%;
    background: url("../assets/image-map.png") no-repeat;
    background-size: contain;
    background-position: bottom;

    .nav-box {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;

      .nav-item {
        width: 170px;
        height: 48px;
        border-radius: 24px;
        border: 1px solid #999;
        line-height: 48px;
        text-align: center;

        &.active {
          color: #FFC000;
          border: 1px solid #FFC000;
        }
      }
    }

    .statistic-content {
      position: relative;
      min-height: 400px;
      width: 100%;
      overflow: hidden;

      .statistic-content1 {
        top: 0;
        transition: 0.3s;
        position: absolute;
        width: 100%;
        background: linear-gradient(180deg, #3A3A3C 0%, #242526 100%);
        border-radius: 30px;
        padding: 40px 20px;

        .part-box {
          display: flex;

          &:nth-child(n+2) {
            margin-top: 30px;
          }

          img {
            width: 66px;
            height: 66px;
          }

          .part-content {
            padding-left: 20px;
          }

          .part-title {
            font-size: 28px;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 40px;
          }

          .part-info {
            color: #999;
            font-size: 16px;
          }
        }
      }

      .statistic-content2 {
        top: 0;
        transition: 0.3s;
        position: absolute;
        width: 100%;

        .statistic-content2-list {
          .list-item {
            background: url("../assets/bg-list.png");
            background-size: 100% 100%;
            padding: 30px 20px;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;

            .right {
              font-size: 28px;
              font-family: Arial-BoldMT, Arial, sans-serif;
              font-weight: normal;
              color: #FFFFFF;
              line-height: 32px
            }

            .name {
              color: #bbb;
              margin-top: 6px;
              font-size: 16px;
            }
          }
        }
      }
    }


  }

  .start-circulate {
    width: 86%;
    margin: 50px auto;
    padding: 32px 19px;
    background: linear-gradient(180deg, #3A3A3C 0%, #242526 100%);
    border-radius: 30px;
    position: relative;

    &:after {
      position: absolute;
      width: 100%;
      height: 50%;
      bottom: -50px;
      background: linear-gradient(90deg, rgba(255, 192, 0, 0.2) 0%, rgba(255, 192, 0, 0) 100%);
    }

    .title {
      font-size: 30px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 42px;
    }

    .input-header, .input-bottom {
      margin-top: 30px;
      padding-bottom: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC, sans-serif;
    }

    .input-box {
      display: flex;
      width: 100%;
      height: 48px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 0 15px;
      align-items: center;
    justify-content: space-between;
      .max-btn {
        padding: 8px 1em;
        background: #FFC000;
        border-radius: 24px;
        font-size: 16px;
        font-weight: 500;
        color: #18191A;
      }

      input {
        background: none;
        padding: 0 5px;
        flex: 1;
        width: 80%;
        &:focus-visible {
          outline: none;
        }

      }
    }

    .duration-box {
      margin-top: 30px;

      .name {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC, sans-serif;
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
    }

    .operate {
      height: 52px;

      border-radius: 24px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC, sans-serif;
      font-weight: 500;
      line-height: 50px;
      color: #18191A;
      text-align: center;
      background: rgba(#fff, 0.5);

      &.active {
        background: #FFC000;
      }
    }
  }

  .my-order {
    padding: 0 6%;

    .title {
      font-size: 30px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 42px;
    }

    .line {
      margin: 16px 0;
      border-top: 1px solid;
    }

    .line-box {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      padding: 0 6px;

      .name {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #999;
        line-height: 22px;
      }
    }
  }

  .content1 {
    padding: 0 6%;
    word-spacing: 2px;
    text-align: center;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;

    span {
      font-family: PingFangSC-Medium, PingFang SC;
      color: #FFFFFF;
      line-height: 25px;
      background: linear-gradient(90deg, #FAA04F 0%, #C542B9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .operate-btns {
    width: 100%;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .operate {
      width: 80%;
      height: 52px;
      background: #FFC000;
      border-radius: 24px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #18191A;
      line-height: 50px;
      text-align: center;
      margin: 10px 0;
    }
  }

  .yunus-defi {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 40px 0;

    img {
      width: 80%;
    }
  }

  .yunus-info {
    margin: 30px 0;
    width: 100%;
    padding: 3%;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    text-align: center;
  }


  .swiper-container {
    overflow: hidden;

    .swiper {
      width: 800px;
      height: 218px
    }

    .swiper-slide img {
      display: block;
      min-width: 218px;
      min-height: 218px
    }

    .swiper-container {
      position: relative;
      width: 90vw;
      height: 300px
    }

    .swiper-container > .swiper-slide__content {
      position: absolute;
      top: 0
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .3s linear;
      -webkit-transform: scale(.65);
      transform: scale(.65);
      -webkit-filter: brightness(50%);
      filter: brightness(50%)
    }

    .swiper-slide.swiper-slide-active {
      -webkit-transform: scale(1);
      transform: scale(1);
      z-index: 10;
      -webkit-filter: brightness(1);
      filter: brightness(1)
    }

    .swiper-slide.swiper-slide-next, .swiper-slide.swiper-slide-prev {
      z-index: 8;
      -webkit-transform: scale(.8);
      transform: scale(.8);
      -webkit-filter: brightness(75%);
      filter: brightness(75%)
    }

    .swiper-slide__content {
      height: 300px
    }

    @media screen and (max-width: 800px) {
      .swiper {
        width: 325px;
        height: 100px
      }

      .swiper-slide img {
        display: block;
        min-width: 100px;
        min-height: 100px
      }
    }

    &.swiper {
      position: relative;
      overflow: hidden;
      list-style: none;
      z-index: 1;
      width: 80%;
      margin: 30px auto;
    }


    .swiper-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      transition-property: -webkit-transform;
      transition-property: transform;

    }


    .swiper-slide {
      img {
        border-radius: 20px;
      }

      &.swiper-slide-next, &.swiper-slide-prev {
        transform: scale(0.8) !important;
      }

      transform: scale(0.6) !important;
    }

    .swiper-slide-active {
      transform: scale(1) !important;
      z-index: 10 !important;
    }


  }


}


</style>
