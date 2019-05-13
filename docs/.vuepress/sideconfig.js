module.exports = {
  articlesSidebarConfig: function (title) {
    return [
      { 
        title: 'javascript',
        collapsable: true,
        children: [
          'javascript/20190509_2',
          'javascript/20190509_3',
          'javascript/20190509_4',
        ]
      }, { 
        title: 'css',
        collapsable: true,
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