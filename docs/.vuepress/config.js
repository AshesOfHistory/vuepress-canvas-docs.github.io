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
                title: '编排系统中台',
                collapsable: false,
                children: [
                    {
                        title: '文档书写示例🌰',
                        collapsable: false,
                        path: '/pc-docs/code-group/example'
                    },
                    {
                        title: '项目架构',
                        collapsable: false,
                        children: ['/pc-docs/code-group/browser_render']
                    },
                ]
            },
            {
                title: '编排系统前端',
                collapsable: false,
                children: [
                    '/h5-docs/',
                ]
            }
        ],
        sidebarDepth: 2,
        nav: [
            { text: '主页', link: '/' },
            { text: '编排系统',
              items: [
                { text: 'canvas-pc文档', link: '/pc-docs/' },
                { text: 'canvas-h5文档', link: '/h5-docs/' },
              ] 
            },
            { text: 'Github', link: 'https://www.github.com/codeteenager' },
        ],
    }
}