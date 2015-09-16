Ext.define('Massave.view.ProductDetails',{
	extend:'Ext.Component',
	xtype:'productDetailsTemplate',
	config:{
		constructor:function(){
				console.log('I was called');
				
		}
	},
	setValue:function(text){
		var dataObject = Ext.JSON.decode(text);
		var tpl = [
			"<div style='float:left;width:100px;margin-left:25px;text-align:center'>",
				"<div style='margin-left:37.5px;margin-bottom:5px;margin-top:5px;border-radius:5%;height: 50px !important; width: 50px !important; background-image: url(",dataObject.productPicUrl,");background-position:center;background-size:50px'>",
				"</div>",
				"<div style='margin-bottom:5px'>",dataObject.productName,"</div>",
			"</div>",
			"<div style='width:30%;text-align:center;float:left;vertical-align:middle;line-height:70px'>",dataObject.productQuantity,"</div>",
			"<div style='width:20%;text-align:right;margin-right:1%;float:left;vertical-align:middle;line-height:70px'>",dataObject.productValue,"</div>",
		].join("");
		this.setHtml(tpl);
	}

});