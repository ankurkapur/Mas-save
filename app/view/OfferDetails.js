Ext.define('Massave.view.OfferDetails',{
	extend:'Ext.Container',
	xtype:'offerdetails',
	requires:[
		'Massave.store.OfferDetails',
		'Massave.view.OfferDetailsHeader',
		'Ext.ux.AccordionList',
		'Massave.view.ListItemTest'
	],
    count:1,
    setOfferData:function(dataObject){
        
        //var newStore = Ext.create('Massave.store.OfferDetails',{storeId:this.count});
        //newStore.setData(dataObject);
        //newStore.setRoot(dataObject);
        
        //this.down('container#userList').applyStore(newStore);
       
        //this.down('container#userList').setNewStore(newStore);

        //this.count = this.count+1
        //this.down('container#userList').down('list').removeAll(true);
        this.down('container#userList').down('list').getStore().removeAll(true);
        var newDataObject = Ext.JSON.decode(Ext.JSON.encode(dataObject));
        this.down('container#userList').down('list').getStore().setData(newDataObject);
        this.down('container#userList').doAllExpand();
        //this.down('container#userList').down('list').setData(dataObject);
        
    },
    deleteUser:function(index){
        var listStore = this.down('container#userList').down('list').getStore();
        console.log(index);
        console.log(listStore.getModel().getFields());
        var dataElementIndex = listStore.find('userIndex',index);
        console.log('deleting inside the container');
        console.log(dataElementIndex);
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
                                flex:1,
                                listeners:{
                                	tap:function( me, e, eOpts ){
                                		//console.log('I was here');
                                		me.up('container#mainContainer').setActiveItem(1);
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
                                flex:4
                            },
                            {
                                xtype: 'component',
                                flex:1,
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
                            '<div class="meter">',
                              '<span style="width: 75%"></span>',
                            '</div>'
                            ].join("")
                    },
                    {
                        xtype:'button',
                        text:'Continue to purchase',
                        cls:'button-Orange',
                        height:40
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
                    	xtype:'accordionlist',
                        itemId:'userList',
                    	fullscreen: false,
                   		store: {xtype:'offerdetailsstore',storeId:'offerDetailsStore'},
                   		flex:1,
                   		useComponents:true,
                   		defaultType:'examplelistitem',
                        listeners:{
                            itemtap:function(me,list,index,target,record,e){

                            },
                            afteritemtap:function(me, list, index, target, record, e){
                                var store = list.getStore();
                                store.each(function(curItem){
                                    var itemRef = list.getItemAt(store.indexOf(curItem));
                                    if(!curItem.isLeaf()){
                                        itemRef.offerHeaderTemplate.setDeleteOperation();
                                        itemRef.offerHeaderTemplate.setDeleteOperation(true);
                                    }

                                });
                                

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
                            onItemTapHold:function(me,list,index,record,e){
                                 console.log(index + list.getStore().indexOf(record));

                                var itemRef = list.getItemAt(list.getStore().indexOf(record));

                                console.log(itemRef);
                                itemRef.offerHeaderTemplate.collapseExpandDelete();
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
	                            ui:'plain'
	                        },
	                        {
	                            xtype:'spacer',
	                            flex:1
	                        },
	                        {
	                            xtype:'button',
	                            text:'<span style="font-family:icomoon;font-size:24px;width:100px;height:50px">&#xe618;</span>',
	                            style:'text-align:right;height:40px;width:75px',
	                            badgeText:'2',
	                            ui:'plain'
	                        }
	                    ]
                    }
                ]
	}
});