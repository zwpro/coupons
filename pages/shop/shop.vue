<template>
  <view class="uni-product-list">
    <view class="uni-product" v-for="(product,index) in productList" :key="index" @click="toShop(index)">
      <view class="image-view">
        <image v-if="renderImage" class="uni-product-image" :src="product.image" lazy-load @load="onoff='1'"></image>
      </view>
      <view class="uni-product-title">{{product.title}}</view>
      <view class="uni-product-price">
        <text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
        <text class="uni-product-price-original"> ￥{{product.favourPrice}}</text>
        <text class="uni-product-tip">{{product.tip}}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'product-list',
      productList: [],
      renderImage: false
    };
  },
  methods: {
    loadData(action = 'add') {
      const data = [
        {
          image: '/static/shop/iphone12.jpg',
          title: '京东商城好货优选',
          originalPrice: 10099,
          favourPrice: '****',
          tip: '京东',
          url: 'https://c.mktdatatech.com/track.php?site_id=448253&aid=61&euid=&t=https%3A%2F%2Fwww.jd.com&dm_fid=16052',
          minapp: {
            appid: 'wx91d27dbf599dff74',
            path: 'pages/union/proxy/proxy?spreadUrl=https%3A%2F%2Funion-click.jd.com%2Fjdc%3Fe%3D16282%26p%3DAyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrCW1adkw%252BbTh1eBFxEUUAYUpocFMdKxkOIgBQHF0cCxcDZRtcFgsRN1cSUhwKFg5WK1sUMllpVCtaJQIVB1AfUx0AEgZTHVIlAhoAZc%252FOvtqZkAdaGcyyt9H%252FtWslMhE3VRxYHAEiN1UbaxYyTGlUSFhGUBVUXHUBSEJKRxRDHnsCEw9XE1ITABE3VxpaFwA%253D&EA_PTAG=17078.27.503'
          }
        },

      ];

      if (action === 'refresh') {
        this.productList = [];
      }

      data.forEach(item => {
        this.productList.push(item);
      });
    },
    toShop(i) {
      //#ifdef H5
      window.location.href = this.productList[i].url
      //#endif

      //#ifdef MP-WEIXIN
      if(this.productList[i].minapp){
        wx.navigateToMiniProgram({
          appId: this.productList[i].minapp.appid,
          path: this.productList[i].minapp.path,
          success(res) {
            // 打开成功
          }
        })
      }
      //#endif
    },
  },
  onLoad() {
    this.loadData();
    setTimeout(() => {
      this.renderImage = true;
    }, 300);
  },
  // onPullDownRefresh() {
  //   this.loadData('refresh');
  //   setTimeout(() => {
  //     uni.stopPullDownRefresh();
  //   }, 2000);
  // },
  // onReachBottom() {
  //   this.loadData();
  // }
};
</script>

<style>
/* product */
page {
  background: #F8F8F8;
}

view {
  font-size: 28upx;
}

.uni-product-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
}

.uni-product {
  padding: 20upx;
  display: flex;
  flex-direction: column;
}

.image-view {
  height: 330upx;
  width: 330upx;
  margin: 12upx 0;
}

.uni-product-image {
  height: 330upx;
  width: 330upx;
}

.uni-product-title {
  width: 300upx;
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  line-height: 1.5;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.uni-product-price {
  margin-top: 10upx;
  font-size: 28upx;
  line-height: 1.5;
  position: relative;
}

.uni-product-price-original {
  color: #e80080;
}

.uni-product-price-favour {
  color: #888888;
  text-decoration: line-through;
  margin-left: 10upx;
}

.uni-product-tip {
  position: absolute;
  right: 10upx;
  background-color: #ff3333;
  color: #ffffff;
  padding: 0 10upx;
  border-radius: 5upx;
}
</style>
