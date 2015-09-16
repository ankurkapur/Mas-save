Ext.define('Massave.controller.RouteTest',{
	extend:'Ext.app.Controller',
	requires:[
		'Ext.app.Route'
	],
	config:{
		routes:{
			'offerDetails/:id': 'onOfferDetails'
		}
	},
	onOfferDetails:function(id){
		console.log('you just called offer details for id : ' + id);
		Ext.Viewport.down('container#offerDetails').setOfferData(Ext.Viewport.down('container#MainView').down('list#offerList').getStore().getAt(id).data.items);
		var mainContainer = Ext.Viewport.down('container#mainContainer').setActiveItem(0);
	}
});