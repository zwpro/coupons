module.exports = {
  title: 'Coupons',
  description: '外卖红包开源项目',
  // plugins: {
  //   "vuepress-plugin-auto-sidebar": {
  //   	titleMap: {
  //   		"guide": "基础",
  //   	}
  //   }
  // }
  themeConfig: {
    repo: 'zwpro/coupons',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/' },
    ],
		sidebar: {
      '/guide/': [{
        title: '基础',
				collapsable: false, 
				children: [
					{ title: '前序准备', path:'/guide/ready'},
					{ title: '云开发版', path:'/guide/cloud'},
					{ title: '静态版', path:'/guide/static'}
				]
      }],
    }
  }
}