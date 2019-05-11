var sideconfig = require('./sideconfig');
module.exports = {
  base: '/', // 部署到DNS下的路徑
  title: 'HAO Lit', // 網站的標題
  description: '紀錄、關注及靈活運用技術，創造自我價值', // 網站的描述 會以meta渲染到當前的頁面中
  serviceWorker: true, // 輕PWA 會緩存訪問過的頁面 用於離線瀏覽(若需要 可以在 public 生成 Manifest 和 icons)
  //ga: 'UA-123456789-0', 
  port: '8000', // 開發指定的Port。
  dist: '.vuepress/dist', // build 後輸出的目錄 預設為 .vuepress/dist
  head: [ // HTML <head>
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', {
        rel: 'stylesheet', 
        href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
        integrity: 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay',
        crossorigin: 'anonymous'
      }
    ]
  ],
  sidebarDepth: 2,
  themeConfig: {
    logo: 'logo.png',
    repo: 'EasonChang0115/vuepress',
    personal: {
      name: 'Eason',
      photo: 'person.jpg',
    },
    nav: [
      { text: '首頁', link: '/' },
      { text: '前端技術', link: '/articles/' },
      { text: '演算法大小事', link: '/algorithm/' },
      { text: '關於我', items: [
        { text: 'GitHub', link: 'https://github.com/EasonChang0115', icon: 'fab fa-facebook'},
        { text: 'Facebook', link: 'https://www.facebook.com/EasonChang0115', icon: 'fab fa-github' },
        { text: 'CodePen', link: 'https://codepen.io/JasonChang/', icon: 'fab fa-codepen' },
      ]},
      
    ],
    sidebar: {
      '/articles/': sideconfig.articlesSidebarConfig('前端技術'), // 设置侧边栏的链接目录、文字和函数名。
      '/algorithm/': sideconfig.algorithmSidebarConfig('演算法大小事'), // 设置侧边栏的链接目录、文字和函数名。
    }
  },
  markdown: {
    anchor: { permalink: true }, // 文件內部連結。
    lineNumbers: false, // 程式碼區塊是否顯示行號
    toc: { includeLevel: [2, 3] }, // 目錄顯示標題的層級
    // config: md => { // 外部插件设置：markdown-it-plugin。
    //   md.set({ breaks: true })
    //   md.use(require('markdown-it-xxx')) // 使用 xxx 插件。
    // }
  },
}
