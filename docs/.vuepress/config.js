module.exports = {
    base:"Vue-UI-Frame",
    title: 'Vue 组件库',
    description: '一个在我学习了Vue之后写的组件库，其中有按钮，文本框，网格系统，默认布局，toast，tabs，popover，手风琴',
    themeConfig: {
        sidebar: [
            {
                title: "入门",
                children: ['/install/',
                    '/getStart/',],
            },
            {
                title: '组件',
                children: ['/components/button',
                ]
            }
        ]
    }
}