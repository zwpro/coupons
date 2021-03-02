<template>
  <!-- 小程序顶部提示 -->
  <view>
    <view
      class="tip_box"
      :class="{ anScale: isAm }"
      v-if="showTip"
      :style="{ top: isCustom ? boxTop + 'px' : '0px' }"
    >
      <view class="arrow" :style="{ 'margin-right': arrowMargin + 'px', borderBottomColor: bgColor }"></view>
      <view
        class="container"
        :style="{
          'margin-right': cotainerMargin + 'px',
          backgroundColor: bgColor,
          borderRadius: borderR + 'px',
        }"
      >
        <!-- 提示文字 -->
        <view
          class="tips"
          :style="{ color: fontObj.color, fontSize: fontObj.fontSize, fontWeight: fontObj.fontWeight }"
          >{{ text }}</view
        >
        <view class="close" @tap="neverDisplay">
          <image
            class="closeImg"
            v-if="closeColor"
            src="data:image/png;base64,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"
          />
          <image
            v-else
            class="closeImg"
            src="data:image/png;base64,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"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      showTip: false,
      boxTop: 0,
      arrowMargin: 0,
      cotainerMargin: 0,
      screenWidth: 0,
    };
  },
  props: {
    /* 是否是自定义头部 */
    isCustom: {
      type: Boolean,
      default: false,
    },
    /* 背景颜色 */
    bgColor: {
      type: String,
      default: "#E6F0FF",
    },
    /* 提示文字 */
    text: {
      type: String,
      default: "添加到我的小程序",
    },
    /* 提示文字样式 */
    fontObj: {
      type: Object,
      default: function () {
        return {
          color: "#fff",
          fontSize: "13px",
          fontWeight: "0",
        };
      },
    },
    /* 圆角大小  px*/
    borderR: {
      type: Number,
      default: 5,
    },
    /* 延时出现 */
    delay: {
      type: Number,
      default: 2000,
    },
    /* 关闭btn黑白两色 或者自行添加 */
    closeColor: {
      type: Boolean,
      default: true,
    },
    /* 动画效果 */
    isAm: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    neverDisplay: function () {
      let that = this
      uni.showModal({
        title: '提示',
        content: '关闭本提示?',
        cancelText: '永久',
        cancelColor: '#656464',
        confirmText: '本次',
        success: function (res) {
          if (res.cancel) {
            uni.setStorageSync("ganfanzu_collect_key_2021", "true");
          }
        },
        complete: function(res) {
          that.showTip = false;
        }
      });
    },
    tipHidden: function () {
      this.showTip = false;
    },
    timeOut() {
      setTimeout(() => {
        this.showTip = true;
        setTimeout(() => {
          this.tipHidden();
        }, this.delay + 2000);
      }, this.delay);
    },
    init() {
      if (uni.getStorageSync("ganfanzu_collect_key_2021")) return;

      let rect = uni.getMenuButtonBoundingClientRect();
      let screenWidth = uni.getSystemInfoSync().screenWidth;
      this.boxTop = rect.bottom;
      this.arrowMargin = rect.width * 0.75 + 4;
      this.cotainerMargin = screenWidth - rect.right;
      this.timeOut();
    },
  },
  onReady() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
@keyframes anScale {
  from {
    -webkit-transform: scale3d(0.96, 0.96, 0.96);
    transform: scale3d(0.96, 0.96, 0.96);
  }

  50% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  to {
    -webkit-transform: scale3d(0.96, 0.96, 0.96);
    transform: scale3d(0.96, 0.96, 0.96);
  }
}

.anScale {
  animation: anScale 1s linear infinite;
}
.tip_box {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  .arrow {
    width: 0;
    height: 0;
    border: 10rpx solid;
    border-color: transparent;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16rpx 24rpx;
    .tips {
      flex: 1;
      padding-right: 12rpx;
    }
    .close {
      height: 30rpx;
      width: 30rpx;
      .closeImg {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
