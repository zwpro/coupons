<template>
  <view class="container">
    <!--  header  -->
    <view class="header-container">
      <view class="header">
        <view class="title">干饭推荐</view>
        <view class="header-button">
          <image src="/static/xiaomai_min.png" mode="widthFix" lazy-load @load="onoff='1'" @click="xiaoMai" />
        </view>
      </view>
    </view>

    <v-tabs v-model="current" :tabs="tabs" @change="changeTab" class="tab"></v-tabs>

    <!--  内容  -->
    <view class="coupon" ref="coupon">
      <view class="item" v-for="(v, i) in couponList" @click="toCoupon(i)" :key="i">
        <view class="top">
          <view class="left">
            <view class="content">
              <image :src="v.icon" class="icon" mode="widthFix" lazy-load @load="onoff='1'" />
              <view class="name">{{ v.name }}</view>
            </view>
          </view>
        </view>
        <view class="bottom"><image :src="v.bannerPic" class="banner-image" mode="widthFix" lazy-load @load="onoff='1'" /></view>
      </view>
    </view>
  </view>
</template>

<script>
import { getShareObj } from "@/common/share.js";

export default {
  data() {
    return {
      current: 0,
      tabs: [
        {
          text: '全部',
          tabId: 0,
        },
        {
          text: '京东',
          tabId: 1,
        },
        {
          text: '拼多多',
          tabId: 2,
        },
        {
          text: '天猫',
          tabId: 3,
        },
        {
          text: '苏宁',
          tabId: 4,
        },
      ],
      couponList: [],
      coupons: [
        {
          name: '京东商城好货优选',
          icon: '/static/coupon/jd.png',
          bannerPic: '/static/shop/jd.jpg',
          url: 'https://u.jd.com/iukFbv5',
          tabId: 1,
          minapp: {
            appid: 'wx91d27dbf599dff74',
            path: 'pages/union/proxy/proxy?spreadUrl=https://u.jd.com/iukFbv5'
          }
        },
      ]
    };
  },
  onLoad(e) {
    //#ifdef H5
    let tabId = this.$route.query.tabId ? parseInt(this.$route.query.tabId) : 0
    //#endif
    //#ifdef MP-WEIXIN
    let tabId = e.tabId ? parseInt(e.tabId) : 0
    //#endif
    for(let i in this.tabs){
      if(tabId == this.tabs[i].tabId){
        this.current = parseInt(i)
      }
    }
    this.changeTab(this.current)
  },
  onShareAppMessage(res) {
    return getShareObj()
  },
  methods: {
    changeTab(index) {
      console.log('当前选中的项：' + index);
      this.couponList = []
      uni.showLoading({
        title: '获取优惠中'
      });
      if(index == 0){
        this.couponList = this.coupons
      }else{
        for(let i in this.coupons){
          if(this.coupons[i].tabId == this.tabs[index].tabId){
            this.couponList.push(this.coupons[i])
          }
        }
      }
      //#ifdef H5
      this.$nextTick(() => {
        this.$refs.coupon.scrollTop= 0;
      })
      //#endif
      setTimeout(() => {
        uni.hideLoading()
      }, 500)
    },
    toCoupon(i){
      console.log(this.couponList[i])
      //h5
      //#ifdef H5
      window.location.href = this.couponList[i].url
      //#endif
      //微信小程序
      //#ifdef MP-WEIXIN
      if(this.couponList[i].minapp){
        wx.navigateToMiniProgram({
          appId: this.couponList[i].minapp.appid,
          path: this.couponList[i].minapp.path,
          success(res) {
            // 打开成功
          }
        })
      }
      //#endif
    },
    xiaoMai() {
      let messages = [{
        toast: '小埋自己要饿死了,嘤嘤嘤',
      },{
        toast: '小埋求大家多多推荐分享啦',
      },{
        toast: '嘘,这里是爸爸的广告位',
      },{
        toast: '小埋的财富自由就靠您老人家啦',
      },{
        toast: '放心吧,小埋不骗人',
      },{
        toast: '歪比巴卜',
      }];

      let message = messages[Math.floor(Math.random()*messages.length)]['toast'];
      this.$toast(message)
    }
  },

};
</script>

<style lang="scss">
page {
  background-color: #f8f8f8;
}

.header-container {
  background: #fff;
  .header {
    //background-color: #F46845;
    background: linear-gradient(#F46845, #fa856b);
    height: 380rpx;
    text-align: center;
    line-height: 230rpx;
    color: #fff;
    font-size: 16px;
  }

  .banner {
    text-align: center;
    margin-top: -200rpx;
    image {
      width: 92%;
      border-radius: 25px;
    }
  }
  .header-button {
    text-align: center;
    image {
      width: 20%;
      border-radius: 25px;
    }
  }
}

.container {
  font-size: 14px;
  line-height: 24px;
  position: relative;
  .tab {
    //position: fixed;
    top: var(--window-top);
    left: 0;
    z-index: 9999;
  }
  .coupon {
    // padding-top: 200rpx;
    .item {
      background-color: #ffffff;
      margin: 30rpx;
      border-radius: 10rpx;
      padding: 0 30rpx 30rpx 30rpx;
      .top {
        height: 116rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          height: 116rpx;
          width: 400rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .content {
            width: 100%;
          }
          .icon {
            display: inline-block;
            vertical-align: bottom;
            width: 44rpx;
            height: auto;
          }
          .name {
            text-align: left;
            display: inline-block;
            vertical-align: bottom;
            font-size: 34rpx;
            color: #000;
            line-height: 50rpx;
            font-weight: bold;
            margin-left: 15rpx;
          }
          .text {
            width: 150rpx;
            height: 38rpx;
            line-height: 38rpx;
            text-align: center;
            font-size: 24rpx;
            color: #61300e;
            background: linear-gradient(90deg, #f9db8d, #f8d98a);
            border-radius: 6rpx;
          }
        }

        .right {
          width: 170rpx;
          height: 60rpx;
          border-radius: 30rpx;
          background: linear-gradient(90deg, #4c4c4c, #988787);
          color: #e6d874;
          font-size: 28rpx;
          line-height: 60rpx;
          text-align: center;
        }
      }

      .bottom {
        height: auto;
        width: 100%;
        image {
          display: block;
          width: 100%;
          height: auto;
        }
      }
      .banner-image {
        border-radius: 8rpx;
      }
    }
  }
}
</style>
