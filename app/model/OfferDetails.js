Ext.define('Massave.model.OfferDetails', {
                   extend: 'Ext.data.Model',
                   config: {
                       fields: [{
                           name: 'userDetails',
                           type: 'string'
                       },
                       {
                        name:'productDetails',
                        type:'string'
                        },
                          {
                        name:'userIndex',
                        type:'integer'
                        }
                       ]
                   }
               });