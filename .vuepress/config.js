module.exports = {
  "title": "HAO Lit 前端",
  "description": '紀錄、關注及靈活運用技術，創造自我價值', // 網站的描述 會以meta渲染到當前的頁面中
  "serviceWorker": true, // 輕PWA 會緩存訪問過的頁面 用於離線瀏覽(若需要 可以在 public 生成 Manifest 和 icons)
  "dist": '.vuepress/dist', // build 後輸出的目錄 預設為 .vuepress/dist
  "port": '8000', // 開發指定的Port。
  "head": [
    [
      "link", {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta", {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "meta", {
        name: 'google-site-verification',
        content: 'LRcITAcDzreJqGsLpnduN7qLfxWmuoyeMdAJ7UWfzJg'
      }
    ]
  ],
  "locales": {
    '/': {
      lang: 'zh-TW', // this will be set as the lang attribute on <html>
    }
  },
  "sidebarDepth": 2,
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/EasonChang0115",
            "icon": "reco-github"
          },
          {
            "text": "CodePen",
            "link": "https://codepen.io/JasonChang/",
            "icon": "fa-codepen"
          },
          {
            "text": "FaceBook",
            "link": "https://www.facebook.com/EasonChang0115",
            "icon": "fa-facebook-square"
          },
          {
            "text": "CakeResume",
            "link": "https://www.cakeresume.com/s8710606",
            "icon": "fa-file"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 3,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    // "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "EasonChang",
    "authorAvatar": "/avatar.png",
    "record": "MIT Licensed | Copyright © 2021-present EasonChang | Power by Vuepress-theme-reco",
  },
  "markdown": {
    anchor: { permalink: true }, // 文件內部連結。
    lineNumbers: true, // 程式碼區塊是否顯示行號
    toc: { includeLevel: [2, 3] }, // 目錄顯示標題的層級
  },
  "plugins": [
    ['@vuepress/google-analytics', {
        ga: 'UA-140161482-1' //你的Google Analytics ID
    }],
    ['@vuepress/last-updated', {
      transformer: timestamp => {
        return new Date(timestamp).toISOString()
      }
    }]
    [require('./theme/plugins/vuepress-plugin-back-to-top')],
    [require('./theme/plugins/vuepress-plugin-comments')],
    [require('./theme/plugins/vuepress-plugin-loading-page')],
    [require('./theme/plugins/vuepress-plugin-pagation')]
  ]
}