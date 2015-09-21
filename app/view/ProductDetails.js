Ext.define('Massave.view.ProductDetails',{
	extend:'Ext.Component',
	xtype:'productDetailsTemplate',
	style:{'background-color':'beige'},
	height:80,
	config:{
		constructor:function(){
				console.log('I was called');
				
		},
		listeners:function(element,eopts){
			
		}
	},
	setValue:function(text){
		var dataObject = Ext.JSON.decode(text);
		var tpl = [
			"<div style='height:80px;background-color:beige'>",
			"<div style='float:left;width:100px;margin-left:1%;text-align:center'>",
				"<div style='margin-left:5px;margin-bottom:5px;margin-top:5px;height: 70px!important;background-repeat:no-repeat; background-image: url(",dataObject.productPicUrl,");background-position:center;background-size:50px'>",
				"</div>",
			"</div>",
			"<div style='height:80px'>",
				"<div style='float:left;display:table;height:100%'>",
					"<div style='display:table-cell;vertical-align:middle'>",
						"<div style='margin-bottom:5px'>",dataObject.productName,"</div>",
						"<div style='margin-bottom:5px'>",dataObject.productQuantity,"</div>",
					"</div>",
				"</div>",
				"<div class='buttonContainer' style='width:0px;float:right;display:block;height:100%;background-color:tomato'>",
				"</div>",
				"<div style='display:table;float:right;height:100%;width:40px'>",
						"<div style='display:table-cell;vertical-align:middle;text-align:center'>",
							"<div style='margin-bottom:5px'>",dataObject.productValue,"</div>",
						"</div>",
				"</div>",
			"</div>",
			"</div>"
		].join("");
		this.setHtml(tpl);

	}

});