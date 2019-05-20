module.exports = {
  articlesSidebarConfig: function (title) {
    return [
      { 
        title: 'canvas',
        collapsable: true,
        children: []
      },
      { 
        title: 'javascript',
        collapsable: true,
        children: [
          'javascript/20190514_1',
          'javascript/20190514_2',
          'javascript/20190514_3',
          'javascript/20190516_1',
          'javascript/20190518_1',
          'javascript/20190520_1'
        ]
      }, { 
        title: 'css',
        collapsable: true,
        children: [
          'css/20190514_4',
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