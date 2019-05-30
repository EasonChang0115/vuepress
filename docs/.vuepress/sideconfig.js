module.exports = {
  articlesSidebarConfig: function (title) {
    return [
      { 
        title: 'Canvas',
        collapsable: true,
        children: []
      }, { 
        title: 'Javascript',
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
          'javascript/20190530_1'
        ]
      }, { 
        title: 'Css & Html',
        collapsable: true,
        children: [
          'css/20190514_4',
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
  algorithmSidebarConfig: function (title) {
    return [
      { 
        title,
        collapsable: false,
        children: []
      }
    ]
  }
};