var sideconfig = require('./sideconfig');
module.exports = {
  base: '/', // 部署到DNS下的路徑
  title: 'GoodJason Lit', // 網站的標題
  description: '分享、關注技術，創造自我價值', // 網站的描述 會以meta渲染到當前的頁面中
  serviceWorker: true, // 輕PWA 會緩存訪問過的頁面 用於離線瀏覽(若需要 可以在 public 生成 Manifest 和 icons)
  //theme: 'ktquez', // 主題 若有設定則不會使用預設主題
  //ga: 'UA-123456789-0', 
  port: '8000', // 開發指定的Port。
  dist: '.vuepress/dist', // build 後輸出的目錄 預設為 .vuepress/dist
  head: [ // HTML <head>
    ['link', { rel: 'icon', href: '/favicon.ico' }], 
  ],
  sidebarDepth: 2,
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '前端技術', link: '/articles/' },
      { text: '演算法大小事', link: '/algorithm/' },
      { text: '關於我', link: '/about' },
    ],
    sidebar: {
      '/articles/': sideconfig.articlesSidebarConfig('前端技術'), // 设置侧边栏的链接目录、文字和函数名。
      '/algorithm/': sideconfig.algorithmSidebarConfig('演算法大小事'), // 设置侧边栏的链接目录、文字和函数名。
      '/': [
        'about'    /* /about.html */
      ]
    }
  },
  markdown: {
    anchor: { permalink: true }, // 文件內部連結。
    lineNumbers: true, // 程式碼區塊是否顯示行號
    toc: { includeLevel: [2, 3] }, // 目錄顯示標題的層級
    // config: md => { // 外部插件设置：markdown-it-plugin。
    //   md.set({ breaks: true })
    //   md.use(require('markdown-it-xxx')) // 使用 xxx 插件。
    // }
  },
}
