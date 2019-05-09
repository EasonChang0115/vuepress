module.exports = {
  title: 'GoodJason Lit',
  description: '分享、關注技術，創造自我價值',
  serviceWorker: true,
  //theme: 'ktquez', // 主題
  //ga: 'UA-123456789-0',
  //port: 8000, // 開發指定的Port。
  //  HTML <head>
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 部屬到github相關設定
  markdown: {
    anchor: { permalink: true }, // 文件內部連結。
    lineNumbers: false, // 程式碼區塊是否顯示行號
    toc: { includeLevel: [2, 3, 4] }, // 目錄顯示標題的層級
    // config: md => { // 外部插件设置：markdown-it-plugin。
    //   md.set({ breaks: true })
    //   md.use(require('markdown-it-xxx')) // 使用 xxx 插件。
    // }
  },
}
