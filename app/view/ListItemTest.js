Ext.define('Massave.view.ListItemTest', {
       extend: 'Ext.ux.AccordionListItem',
       xtype : 'examplelistitem',
       requires:[
        'Massave.view.OfferDetailsHeader',
        'Massave.view.ProductDetails'
       ],
       offerHeaderTemplate:null,
 
       config: {
           layout: {
               type: 'vbox'
           },
 
            offerUser: {
                  
            },
           
           offerProduct: {
               docked: 'top'
           },

           headerDataMap: {
               getOfferUser: {
                   setValue: 'userDetails',
                   setUserIndex:'userIndex'
               }
           },
 
           contentDataMap: {
               getOfferProduct: {
                   setValue: 'productDetails'
               }
           }
       },
 
       applyOfferUser: function(config) {
            this.offerHeaderTemplate = Ext.factory(config, 'Massave.view.OfferDetailsHeader');
           return this.offerHeaderTemplate;
       },
 
       updateOfferUser: function(newText) {
           if (newText) {
               this.add(newText);
           }
       },
 
       applyOfferProduct: function(config) {
           return Ext.factory(config, 'Massave.view.ProductDetails');
       },
 
       updateOfferProduct: function(newMessage) {
           if (newMessage) {
               this.add(newMessage);
           }
       }
   });