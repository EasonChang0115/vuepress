module.exports = {
  articlesSidebarConfig: function (title) {
    return [
      { 
        title: 'javascript',
        collapsable: false,
        children: [
          'javascript/20190509_2',
          'javascript/20190509_3',
          'javascript/20190509_4',
        ]
      }, { 
        title: 'css',
        collapsable: false,
        children: [
          'css/20190509_1',
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
          'bazier',
        ]
      }
    ]
  }
};