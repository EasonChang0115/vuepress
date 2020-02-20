module.exports = {
  frontEndsSidebarConfig: function (title) {
    return [
      { 
        title: 'Canvas',
        collapsable: true,
        children: []
      }, { 
        title: 'JavaScript 基礎功',
        collapsable: true,
        children: [
          'javascript/20190514_1',
          'javascript/20190514_2',
          'javascript/20190514_3',
          'javascript/20190516_1',
          'javascript/20190518_1',
          'javascript/20190520_1',
          'javascript/20190524_1',
          'javascript/20190527_1',
          'javascript/20190603_1',
          'javascript/20190724_1',
          'javascript/20200130_1'
        ]
      }, { 
        title: 'JavaScript 技術分享',
        collapsable: true,
        children: [
          'javascript/20190609_1',
          'javascript/20190731_1'
        ]
      }, { 
        title: 'Css & Html',
        collapsable: true,
        children: [
          'css/20190514_4',
        ]
      }, { 
        title: 'Vue 相關技術',
        collapsable: true,
        children: [
          'vue/20190621_1',
          'vue/20190808_1',
        ]
      }, { 
        title: 'Vuepress',
        collapsable: true,
        children: [
          'vuepress/20190523_1',
        ]
      }
    ]
  },
  backEndsSidebarConfig: function (title) {
    return [
      { 
        title: 'Node 初心者',
        collapsable: true,
        children: [
          'node/20191210_1',
          'node/20191213_1',
          'node/20191223_1'
        ]
      }
    ]
  },
  algorithmSidebarConfig: function (title) {
    return [
      { 
        title,
        collapsable: false,
        children: [
          '20200220_1'
        ]
      }
    ]
  },
  theF2ESidebarConfig: function (title) {
    return [
      { 
        title,
        collapsable: false,
        children: [
          '20190716_1',
          '20190722_1',
        ]
      }
    ]
  }
};