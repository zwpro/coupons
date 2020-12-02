最新版即为云开发版，配置数据来自云数据库，需开通unicloud云开发

## 创建云服务空间

右键  cloudfunctions-aliyun，选择 创建云服务空间，会自动打开 [云开发首页](https://unicloud.dcloud.net.cn/home)，选择阿里云，填写信息创建。
## 云函数域名绑定
创建完成后，点击左侧云函数->函数列表->云函数域名绑定 ->启用域名，此处的域名即为你的api接口域名。
## 关联云服务空间
回到hbuilderx，右键  cloudfunctions-aliyun  关联云服务空间，选择刚刚创建的云服务空间。
## 上传云函数
右键  cloudfunctions-aliyun 上传所有云函数（如提示请在manifest.json文件中获取新的AppID，打开manifest.json重新获取appid）。
## 云函数URL化
去云服务空间，云点击左侧云函数->函数列表->刷新，可以看到刚刚上传的api函数， 点击详情->云函数URL化->编辑，填写路径  /http/api，确定后复制路径，即为你的api接口地址。
## 初始化云数据库
回到hbuilderx，右键  cloudfunctions-aliyun  目录下的 db_init.json ，初始化云数据库。初始化后可在云服务空间->云数据库 看到有两个数据表，tab是导航栏，coupon是优惠券列表，后续可直接在这更改数据。
## 修改前端请求域名
App.vue 中修改globalData.api.home为你的云函数域名。