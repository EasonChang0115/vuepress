module.exports = {
  title: 'HAO Lit 前端',
  description: '紀錄、關注及靈活運用技術，創造自我價值', // 網站的描述 會以meta渲染到當前的頁面中
  serviceWorker: true, // 輕PWA 會緩存訪問過的頁面 用於離線瀏覽(若需要 可以在 public 生成 Manifest 和 icons)
  dist: '.vuepress/dist', // build 後輸出的目錄 預設為 .vuepress/dist
  port: '8000', // 開發指定的Port。
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'LRcITAcDzreJqGsLpnduN7qLfxWmuoyeMdAJ7UWfzJg',
      },
    ],
  ],
  sidebarDepth: 2,
  themeConfig: {
    mode: 'dark',
    subSidebar: 'auto',
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/EasonChang0115',
            icon: 'reco-github',
          },
          {
            text: 'CodePen',
            link: 'https://codepen.io/JasonChang/',
            icon: 'reco-api',
          },
          {
            text: 'FaceBook',
            link: 'https://www.facebook.com/EasonChang0115',
            icon: 'reco-facebook',
          },
          {
            text: 'CakeResume',
            link: 'https://www.cakeresume.com/s8710606',
            icon: 'reco-blog',
          },
        ],
      },
    ],
    type: 'blog',
    blogConfig: {
      category: {
        location: 3,
        text: 'Category',
      },
      tag: {
        location: 3,
        text: 'Tag',
      },
    },
    vssueConfig: {
      platform: 'github-v4',
      owner: 'Hao_Lit_Blog',
      repo: 'EasonChang0115.github.io',
      clientId: '7332e8b40c6629c9c0f6',
      clientSecret: '16ff65a5b3a0ec362ab25b8aeb864a5147116e0e',
    },
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'EasonChang',
    authorAvatar: '/avatar.png',
    record:
      'MIT Licensed | Copyright © 2021-present EasonChang | Power by Vuepress-theme-reco',
  },
  markdown: {
    anchor: { permalink: true }, // 文件內部連結。
    lineNumbers: true, // 程式碼區塊是否顯示行號
    toc: { includeLevel: [2, 3] }, // 目錄顯示標題的層級,
    plugins: {
      '@centerforopenscience/markdown-it-video': {},
    },
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-140161482-1', //你的Google Analytics ID
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return new Date(timestamp).toISOString();
        },
      },
    ],
    [require('./theme/plugins/vuepress-plugin-back-to-top')],
    [require('./theme/plugins/vuepress-plugin-comments')],
    [require('./theme/plugins/vuepress-plugin-loading-page')],
    [require('./theme/plugins/vuepress-plugin-pagation')],
  ],
};
