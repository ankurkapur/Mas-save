Ext.define('Massave.model.RecommendedProducts', {
    extend: 'Ext.data.Model',
    config: {
      fields: [{
        name: 'productPicURL',
        type: 'string'
      },
      {
        name:'productDescription',
        type:'string'
      }
    ]
  }
});