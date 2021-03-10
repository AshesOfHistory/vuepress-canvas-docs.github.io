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
            { text: '主页', link: '/' },
            { text: '个人文章',
              items: [
                { text: 'canvas文档', link: '/pages' },
                { text: '技术', link: '/pages/technology/test1' },
              ] 
            },
            { text: 'Github', link: 'https://www.github.com/codeteenager' },
        ],
    }
}