Ext.define('Massave.store.OfferDetails',{
	extend:'Ext.data.TreeStore',
	xtype:'offerdetailsstore',
	requires:[
		'Massave.model.OfferDetails'
	],
	config:{
		defaultRootProperty: 'items',
		model:'Massave.model.OfferDetails'
	}
});