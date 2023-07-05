module.exports = {
    title: '前端学习文档',
    description: '最新前端学习笔记，卷不动了就跑路',
    base: '/learn-coding/',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'hyy 的卷纸',
                items: [
                    { text: 'Github', link: 'https://github.com/singleGou' },
                    { text: '掘金', link: 'https://juejin.cn/' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: '学前必读', path: '/' }
                ]
            },
            {
                title: 'JavaScript',
                path: '/handbook/JavaScript/Basic',
                collapsable: false,
                children: [
                    { title: '基础知识', path: '/handbook/JavaScript/Basic' },
                    { title: '基本类型', path: '/handbook/JavaScript/ES6' }
                ]
            },
            {
                title: 'CSS',
                path: '/handbook/CSS/Layout',
                collapsable: false,
                children: [
                    { title: '布局', path: '/handbook/CSS/Layout' },
                ]
            }
        ],
        subSidebar: 'auto'
    }
}