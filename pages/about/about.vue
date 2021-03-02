<template>
	<view class="container">

    <!--  header  -->
    <view class="header-container">
      <view class="header">
        <view class="logo-img">
          <image src="/static/logo.jpg" mode="widthFix" lazy-load @load="onoff='1'" :style="{opacity:logoOpacity}"/>
        </view>
      </view>
      <view class="title">
        <p>干饭组</p>
        <p>Version1.0.0</p>
      </view>
    </view>

    <view class="about">
        <view>敬广大干饭组用户：</view>
        <view>1. 欢迎您使用干饭组小程序，干饭组小程序旨为广大用户提供每日领取外卖红包的快捷方式。</view>
        <view>2. 其中第三方外卖平台皆为官方小程序平台，本项目不会未经允许收集您的任何私人信息。</view>
        <view>3. 首次使用外卖平台小程序领取红包需授权微信登录，领取的红包可在该平台下的任何客户端查询与使用。</view>
        <view>4. 建议您添加到“我的小程序”中，方便每次领取红包以及一站式下单。</view>
        <view>5. 干饭组会持续为广大用户提供每日外卖红包、优质商品推荐等内容。</view>
        <view>6. 最后感谢每位小可爱的支持，不积跬步，无以至千里，愿与君共勉，冲啊，干饭人！</view>
      </view>
	</view>
</template>

<script>
import { getShareObj } from "@/common/share.js";

export default {
  data() {
    return {
      logoOpacity: 0
    };
  },
  onReady(e) {
    this.logoOpacity = 1
  },
  onShareAppMessage(res) {
    return getShareObj()
  },
};
</script>

<style lang="scss">
page {
	background-color: #fff;
}
.container {
	font-size: 14px;
	line-height: 24px;
	position: relative;
  .header-container {
    .header {
      text-align: center;
      .logo-img {
        height: 68px;
        padding-top: 200rpx;
        image {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          transition: all 0.5s linear;
        }
      }
    }
    .title {
      margin-top: 12px;
      text-align: center;
      font-size: 16px;
    }
  }

	.about {
    padding: 52rpx;
    view {
      padding-top: 20px;
    }
	}
}
</style>
