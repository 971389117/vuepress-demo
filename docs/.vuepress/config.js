module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base:'/vuepress-demo/',
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'External',
                link: 'https://google.com'
            },
            {
                text: 'Languages',
                items: [{
                        text: '简体中文',
                        link: '/language/chinese'
                    },
                    {
                        text: 'Japanese',
                        link: '/language/japanese'
                    }
                ]
            }
        ],
        sidebar: [{
                title: '快速启动',
                collapsable: true,
                children: [
                    '/get-started/',
                    '/install/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/cat/',
                    '/dog/',
                ]
            }
        ]
    }
}
