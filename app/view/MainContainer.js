Ext.define('Massave.view.MainContainer',{
	extend:'Ext.Container',
	requires:[
		'Massave.view.Main',
		'Massave.view.OfferDetails'
	],
	config:{
		layout:{
				type:'card',
				animation: {
		         type: 'flip'
		    	}
		},
		itemId:'mainContainer',
		items:[
			
			{
				xtype:'offerdetails',
				itemId:'offerDetails'
			},
			{
				xtype:'main'
			}
		],
		listeners:{
			initialize:function(){
				this.setActiveItem(1);
			}
		}
	}
})