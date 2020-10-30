# 美团饿了吗CPS红包，别人领红包下单，你拿推广佣金
<img src="https://github.com/zwpro/coupons/blob/master/static/demo.png" width="300"/><br/>
### 使用方法

源码为uniapp项目，需使用hbuilder打包，可编译成h5或小程序(跳转地址需改为小程序路径)

### 常见问题
1. 如何获取美团饿了吗的推广链接

美团联盟：https://union.meituan.com/

饿了么、双十一：https://pub.alimama.com/

​	2.如何打包成小程序

编译成小程序的话，需要把coupons里的跳转地址改成小程序的，点击立即领取也要改成跳转小程序

比如跳转美团小程序：

```
/index/pages/h5/h5?weburl=https%3A%2F%2Frunion.meituan.com%2Furl%3Fkey%3Dcd23768d09c339d1641b2738df39aa67%26url%3Dhttps%253A%252F%252Fi.meituan.com%252Fawp%252Fhfe%252Fblock%252Fa13b87919a9ace9cfab4%252F89400%252Findex.html%253Fappkey%253Dcd23768d09c339d1641b2738df39aa67%253Ajuhe%26sid%3Djuhe&lch=cps:waimai:5:cd23768d09c339d1641b2738df39aa67:juhe&f_token=1&f_userId=1
```
