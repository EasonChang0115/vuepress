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
        ]
      }, { 
        title: 'css',
        collapsable: true,
        children: []
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