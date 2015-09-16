Ext.define('Massave.controller.Main',{
	extend:'Ext.app.Controller',
	requires:[
		'Ext.app.Route'
	],
	config:{
		routes:{
			'offerDetails/ :id': 'onOfferDetails',
			'testroute':'testRoute'
		}
	},
	onOfferDetails:function(params){
		console.log('Read the url rewrite');
	},
	onTestRoute:function(){
		Ext.Msg.alert('I was called');
	}
});