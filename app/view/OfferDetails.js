Ext.define('Massave.view.OfferDetails',{
	extend:'Ext.Container',
	xtype:'offerdetails',
	requires:[
		'Massave.store.OfferDetails',
		'Massave.view.OfferDetailsHeader',
		'Ext.ux.AccordionList',
		'Massave.view.ListItemTest',
        	'Massave.model.OfferDetailsSummary'
	],
    count:1,
    setOfferData:function(dataObject){
        this.down('container#userList').down('list').getStore().removeAll(true);
        var newDataObject = Ext.JSON.decode(Ext.JSON.encode(dataObject));
        this.down('container#userList').down('list').getStore().setData(newDataObject);
    },
    deleteUser:function(index){
        var listStore = this.down('container#userList').down('list').getStore();
        var dataElementIndex = listStore.find('userIndex',index);
        listStore.removeAt(dataElementIndex);
        this.down('container#userList').down('list').refresh();
        this.down('container#userList').down('list').setOnItemDisclosure(true);
    },
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
                                		me.up('container#mainContainer').activateView('Main');
                                	}
                                }
                            },
                            {
                                xtype:'label',
                                itemId:'offerTypeLabel',
                                tpl:[  '<div>',
                                            '<span style="display:inline-block;margin:5px;text-align:center">','{offerType}','</span>',
                                        '</div>',
                                        '<div>',
                                            '(<span style="font-family:icomoon">&#xe609;</span> {offerTarget})',
                                        '</div>'
                                    ],
                                style:'margin:5px;text-align:center',
                                flex:1,
                                listeers:{
                                    initialize:function(me,ops){
                                        me.setStore(me.up('container#OfferDetails').getStore());
                                    }
                                }
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
                              '<span style="width: ', '{offerCompletion}', '%;height:2px;display:block;background-color:green"></span>',
                            '</div>'
                            ].join("")
                    },
                    {
                        xtype:'container',
                        layout:{type:'hbox',pack:'center'},
                        items:[
                                {
                                    xtype:'label',
                                    tpl:'{offerDaysLeft} days left <span style="font-family:icomoon;vertical-align:middle">&#xe602;</span>',
                                    style:'font-size:14px;text-align:left;line-height:40px;vertical-align:middle;margin-left:10px',
                                    flex:1
                                },
                                {
                                    xtype:'label',
                                    tpl:'{offerTotalItems} items',
                                    style:'font-size:14px;text-align:center;line-height:40px;vertical-align:middle;',
                                    flex:1
                                },
                                {
                                    xtype:'label',
                                    tpl:'{offerTotalValue}',
                                    style:'font-size:14px;text-align:right;line-height:40px;vertical-align:middle;margin-right:10px',
                                    flex:1                                  
                                }
                            ]
                    },
                    {
                        xtype:'button',
                        text:'Continue to purchase',
                        cls:'button-Orange',
                        //ui:'plain',
                        height:40
                    },
                    {
                    	xtype:'accordionlist',
                        itemId:'userList',
                    	fullscreen: false,
                   		store: {xtype:'offerdetailsstore',storeId:'offerDetailsStore'},
                   		flex:1,
                   		useComponents:true,
                   		defaultType:'examplelistitem',
                        calculateNewHeight:function(){
                                var store = this.getList().getStore();
                                var totalHeight = 0;
                                store.each(function(curItem){
                                        totalHeight = totalHeight + 80;
                                });
                                this.getList().setHeight(totalHeight);
                        },
                        listeners:{
                            itemtap:function(me,list,index,target,record,e){
                               
                            },
                            afteritemtap:function(me, list, index, target, record, e){
                                var store = list.getStore();
                                store.each(function(curItem){
                                    var itemRef = list.getItemAt(store.indexOf(curItem));
                                    if(!curItem.isLeaf()){
                                        itemRef.offerHeaderTemplate.setDeleteOperation();
                                        itemRef.offerHeaderTemplate.collapseExpandDelete(true);
                                    }

                                });

                                 //me.calculateNewHeight();

                            },
                            recordsDeleted:function(me, list){
                                var store = list.getStore();
                                store.each(function(curItem){
                                    var itemRef = list.getItemAt(store.indexOf(curItem));
                                    if(!curItem.isLeaf()){
                                        itemRef.offerHeaderTemplate.setDeleteOperation();
                                    }

                                });
                            },
                            itemswipe:function(me,list,index,record,e){
                                var itemRef = list.getItemAt(list.getStore().indexOf(record));

                                if(e.direction == 'left'){
                                    //list.setScrollable(false);
                                    itemRef.offerHeaderTemplate.collapseExpandDelete();

                                }else if(e.direction == 'right'){
                                    itemRef.offerHeaderTemplate.collapseExpandDelete(true);
                                    //list.setScrollable(true);    
                                }else{

                                }

                                

                                e.stopEvent();
                            }
                        }
                    },
                    {
                    	xtype:'container',
	                    layout:{type:'hbox',pack:'center'},
	                    items:[
	                        {
	                            xtype:'button',
	                            text:'<span style="font-family:icomoon;font-size:24px;">&#xe60b;&#xe617;</span>',
	                            style:'text-align:left;height:40px',
	                            ui:'plain'
	                        },
	                        {
	                            xtype:'spacer',
	                            flex:1
	                        },
	                        {
	                            xtype:'button',
	                            text:'<span style="font-family:icomoon;font-size:24px;width:100px;height:50px">&#xe60b;&#xe619;</span>',
	                            style:'text-align:center;height:40px',
	                            ui:'plain',
                                listeners:{
                                    tap:function( me, e, eOpts){
                                        me.up('container#mainContainer').activateView('addProductHome');
                                    }
                                }
	                        },
	                        {
	                            xtype:'spacer',
	                            flex:1
	                        },
	                        {
	                            xtype:'button',
	                            text:'<span style="font-family:icomoon;font-size:27px;width:100px;height:50px">&#xe61b;</span>',
	                            style:'text-align:right;height:40px;width:75px',
	                            ui:'plain'
	                        },
                            {
                                xtype:'spacer',
                                flex:1
                            },
                            {
                                xtype:'button',
                                text:'<span style="font-family:icomoon;font-size:24px;width:100px;height:50px"> &#xe618;</span>',
                                style:'text-align:right;height:40px;width:75px',
                                badgeText:'2',
                                ui:'plain'
                            }
	                    ]
                    }
                ]
	}
});
