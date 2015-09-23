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
		var currentRecord = Ext.Viewport.down('container#MainView').down('list#offerList').getStore().getAt(id).data;
		var newRecord = Ext.create('Massave.model.OfferDetailsSummary');
		newRecord.setData(currentRecord.offerDetails);
		//console.log(newRecord.getData().offerType);
		Ext.Viewport.down('container#offerDetails').setRecord(newRecord);
		Ext.Viewport.down('container#offerDetails').copyStoreToChildren(newRecord);
		//Ext.Viewport.down('container#offerDetails').setData(currentRecord.offerDetails);
		Ext.Viewport.down('container#offerDetails').setOfferData(currentRecord.items);
		var mainContainer = Ext.Viewport.down('container#mainContainer').activateView('offerDetails');
		//console.log(Ext.Viewport.down('container#offerDetails').down('label#offerTypeLabel').getRecord().getData().offerType);
	}
});