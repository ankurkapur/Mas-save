Ext.define('Massave.view.addProduct.Home',{
	extend:'Ext.Container',
	xtype:'addproducthome',
	requires:[
		'Massave.store.RecommendedProducts'
	],
	config:{
		layout:'vbox',
		flex:1,
		items: [
                    {
                        docked: 'top',
                        xtype: 'toolbar',
                        layout:{type:'hbox',pack:'center'},
                        items:[
                            {
                                xtype:'button',
                                text:'<span style="font-family:icomoon;font-size:24px;vertical-align:middle">&#xe61a;</span>',
                                style:'height:20px;vertical-align:middle;margin-top:6px;',
                                height:25,
                                ui:'plain',
                                listeners:{
                                	tap:function( me, e, eOpts ){
                                		me.up('container#mainContainer').activateView('offerDetails');
                                	}
                                }
                            },
                            {
                                xtype:'label',
                                html:[  '<div>',
                                            '<span style="display:inline-block;margin:5px;text-align:center">Amazon Free Shipping</span>',
                                        '</div>',
                                        '<div>',
                                            '(<span style="font-family:icomoon">&#xe609;</span> $35.00)',
                                        '</div>'
                                    ].join(""),
                                style:'margin:5px;text-align:center',
                                flex:1
                            },
                            {
                                xtype: 'component',
                                html:[
                                    "<div style='font-family:icomoon;font-size:24px;margin-top:5px;text-align:right' class='multiColor'>",
                                        "&#xe607;",
                                    "</div>",
                                ].join("")
                            }
                        ]
                    },{
                        xtype:'component',
                        html:[
                            '<div style="width=100%;height:2px;border:0">',
                              '<span style="width: 75%;height:2px;display:block;background-color:green"></span>',
                            '</div>'
                            ].join("")
                    },
                    {
                        xtype:'container',
                        layout:{type:'hbox',pack:'center'},
                        items:[
                                {
                                    xtype:'label',
                                    html:'2 days left <span style="font-family:icomoon;vertical-align:middle">&#xe602;</span>',
                                    style:'font-size:14px;text-align:left;line-height:40px;vertical-align:middle;margin-left:10px',
                                    flex:1
                                },
                                {
                                    xtype:'label',
                                    html:'5 items',
                                    style:'font-size:14px;text-align:center;line-height:40px;vertical-align:middle;',
                                    flex:1
                                },
                                {
                                    xtype:'label',
                                    html:'$27.00',
                                    style:'font-size:14px;text-align:right;line-height:40px;vertical-align:middle;margin-right:10px',
                                    flex:1                                  
                                }
                            ]
                    },
                    {
			            xtype: 'fieldset',
			            items: [
			                {
			                    xtype: 'searchfield',
			                    name: 'products',
			                    style:{
			                    	margin:'2px',
			                    	padding:'0',
			                    	height:'35px'
			                    }
			                }
			            ]
			        },
			        {
			        	xtype:'panel',
			        	title:'Recommended for you, Ankur',
			        	ui:'plain',
			        	layout:'vbox',
			        	flex:2,
			        	items:[
			        		{
			        			xtype:'titlebar',
			        			docked:'top',
			        			ui:'plain',
			        			layout:{type:'hbox',pack:'center'},
			        			items:[
			        				{
			        					xtype:'label',
			        					html:'Recommended for you, Ankur'
			        				}
			        			]
			        		},
			        		{
			        			xtype:'list',
			        			flex:1,
			        			itemTpl:[
									"<div style='height:80px;'>",
										"<div style='float:left;width:100px;'>",
											"<div style='margin-bottom:5px;margin-top:5px;height: 70px!important;background-repeat:no-repeat; background-image: url({productPicURL});background-size:50px'>",
											"</div>",
										"</div>",
										"<div style='height:80px'>",
											"<div style='float:left;display:table;height:100%'>",
												"<div style='display:table-cell;vertical-align:middle'>",
													"<div style='margin-bottom:5px'>{productDescription}</div>",
												"</div>",
											"</div>",
											"<div class='buttonContainer' style='width:0px;float:right;display:block;height:100%;background-color:tomato'>",
											"</div>",
											"<div style='display:table;float:right;height:100%;width:40px'>",
													"<div style='display:table-cell;vertical-align:middle;text-align:center'>",
														"<div style='margin-bottom:5px'>$2.00</div>",
													"</div>",
											"</div>",
										"</div>",
									"</div>"
			        			].join(""),
			        			store:Ext.create('Massave.store.RecommendedProducts')
			        		},
			        		{
					        	xtype:'button',
					        	height:50,
					        	html:'<div style="line-height:30px;vertical-align:middle;padding-top:5px;border-top:1px solid grey;width:98%;margin-left:1%"><span style="color:blue;text-align:left">See More</span><span style="display:block;float:right;font-family:icomoon;font-size:12px;font-weight:300">&#xe61c;</span></div>',
					        	style:{
    								'border-radius': '0;'
					        	},
					        	ui:'plain',
					        	cls:'plainButton',
					        	labelCls:'plainButtonLeft'
					        }
			        	]
			        },
			        {
			        	xtype:'panel',
			        	title:'Recommended for you, Ankur',
			        	ui:'plain',
			        	layout:'vbox',
			        	flex:1,
			        	items:[
			        		{
			        			xtype:'titlebar',
			        			docked:'top',
			        			ui:'plain',
			        			layout:{type:'hbox',pack:'center'},
			        			items:[
			        				{
			        					xtype:'label',
			        					html:'Recently Viewed'
			        				}
			        			]
			        		},
			        		{
			        			xtype:'dataview',
			        			scrollable:'horizontal',
			        			inline:{
			        				wrap:false
			        			},
			        			flex:1,
			        			itemTpl:[
			        				"<div style='float:left;overflow:hidden;display:inline-block;padding-right:20px;'>",
										"<div style='width:70px;margin-left:5px;margin-bottom:5px;margin-top:5px;height: 70px!important;background-repeat:no-repeat; background-image: url({productPicURL});background-position:center;background-size:50px'>",
										"</div>",
										"<div style='text-align:center;'>",
											"{productDescription}",
										"</div>",
									"</div>"
			        			].join(""),
			        			store:Ext.create('Massave.store.RecommendedProducts')
			        		}
			        	]
			        }
                   ]
	}
});