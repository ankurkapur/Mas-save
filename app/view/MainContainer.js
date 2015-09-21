Ext.define('Massave.view.MainContainer',{
	extend:'Ext.Container',
	requires:[
		'Massave.view.Main',
		'Massave.view.OfferDetails',
		'Massave.view.addProduct.Home'
	],
	curActiveView:null,
	childAnimation:'reveal',
	parentAnimation:'slide',
	activateView:function(viewName){

		if(this.isChildView(this.viewNest,this.curActiveView,viewName,false)){
			this.getLayout().setAnimation(this.childAnimation);
		}else{
			this.getLayout().setAnimation(this.parentAnimation);
			this.getLayout().getAnimation().getInAnimation().setDirection('right');
		}
		switch(viewName){
			case 'offerDetails':
				this.setActiveItem(1);
				break;
			case 'addProductHome':
				this.setActiveItem(0);
				break;
			default:
				this.setActiveItem(2);
		}
		this.curActiveView = viewName;
	},
	isChildView:function(curRoot,parentViewName,childViewName,foundParent){

		for(var curViewName in curRoot){
			
			if(curRoot.hasOwnProperty(curViewName)){
					if(curViewName == parentViewName)
					{
						return this.isChildView(curRoot[curViewName],parentViewName,childViewName,true);
					}else if(curViewName == childViewName && foundParent)
					{
						return true;
					}else if(curViewName == childViewName && !foundParent)
					{
						return false;
					}
					else
					{
						return this.isChildView(curRoot[curViewName],parentViewName,childViewName,foundParent);
					}
			}
		}
		return false;
	},
	viewNest:{
		'Main':{
			'offerDetails':{
					'addProductHome':{
					}
			}
		}
	},
	config:{
		layout:{
				type:'card',
				animation: {
		         type: 'reveal'
		    	}
		},
		itemId:'mainContainer',
		items:[
			{
				xtype:'addproducthome',
				itemId:'addProductHome'
			},
			{
				xtype:'offerdetails',
				itemId:'offerDetails'
			},
			{
				xtype:'main'
			},

		],
		listeners:{
			initialize:function(){
				this.activateView('Main');
			}
		}
	}
})