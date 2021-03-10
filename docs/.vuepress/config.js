module.exports = {
  host: '0.0.0.0',
  base: '/canvas/',
  title: '编排系统开发文档',
  description: '编排系统开发文档',
  dest: 'docs/.vuepress/canvas',
  head: [
      ['link', { rel: 'icon', type: "image/jpg", href: '/images/1.jpg' }] // 头部网址图标
  ],
  themeConfig: { // 主题配置
      locales: {
          '/': {
              selectText: '选择语言',
              label: '简体中文',
              sidebar: [
                  {
                      title: '技术',
                      collapsable: false,
                      children: [
                          '/pages/technology/browser_works',
                          '/pages/technology/browser_render',
                          '/pages/technology/test1'
                      ]
                  },
                  {
                      title: '分享',
                      collapsable: false,
                      children: [
                          '/pages/share/data_view',
                      ]
                  }
              ],
              sidebarDepth: 2,
              nav: [
                  // {text: '引导', link: '/guide/'},
              ]
          },
      }
  }
}