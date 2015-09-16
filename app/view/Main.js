Ext.define('Massave.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Menu',
        'Ext.dataview.List',
        'Massave.store.NewsFeed',
        'Ext.Label',
        'Ext.SegmentedButton'
    ],
    createMenu: function(){
            var menu = Ext.create('Ext.Menu', {
                width: 275,
                scrollable: 'vertical',
                flex:5,
                items: [
                        {
                            xtype: 'button',
                            text: 'Option 1',
                        },
                        {
                            xtype: 'button',
                            text: 'Option 2',
                        }
                    ]
                });
            return menu;
        },
    isOpen:false,
    config: {
        flex:1,
        itemId:'MainView',
        scrollable:{
            direction:'both',
            indicators:{
                y:{
                    autoHide:false
                }
            }
        },
        listeners:{
        initialize: function(){

            Ext.Viewport.setMenu(this.createMenu(),{
                side: 'left',
                reveal: true
            });

        }},
         
        
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Offers',
                iconCls: 'news',
                layout:'vbox',
                items:[
                    {
                        docked:'top',
                        pack:'center',
                        flex:1,
                        xtype:'toolbar',
                        layout:{type:'hbox',pack:'center'},
                        items: [

                                {
                                    xtype:'button',
                                    html:'<span style="font-family:icomoon;font-size:18px;color:grey;">&#xe613;</span>',
                                    listeners:{
                                        tap:function(me,btn,opts){
                                            //Ext.Msg.alert('I was pressed');
                                            if(this.up('container#MainView').isOpen == false)
                                            {
                                                Ext.Viewport.showMenu('left');
                                                this.up('container#MainView').isOpen = true;   
                                            }
                                            else
                                            {
                                                Ext.Viewport.hideMenu('left');
                                                this.up('container#MainView').isOpen = false;
                                            }
                                        }
                                    }                             
                                },
                                {
                                    xtype:'spacer',
                                    flex:1
                                },
                                {
                                    xtype: 'segmentedbutton',
                                    layout:{pack:'center'},
                                    flex:4,
                                        items: [{
                                                    text: '  All  ',
                                                    allowBlank:true,
                                                    pressed: true,
                                                    flex:1
                                                }, {
                                                    text: '   My  ',
                                                    flex:1
                                                }, {
                                                    text: 'History',
                                                    flex:1
                                                }], // items
                                        listeners: {
                                                toggle: function (segBtn, btn, isPressed) {
                                                Ext.Msg.alert('Ext.SegmentedButton toggle:',btn.config.text + ' (pressed:' + isPressed + ')');
                                                } // toggle
                                        } // listeners
                                },
                                {
                                    xtype:'spacer',
                                    flex:1
                                },
                                {
                                    xtype:'button',                                    
                                    iconCls:'add'
                                }] // items
                    },
                    {
                        xtype:'list',
                        title:'Offers',
                        itemId:'offerList',
                        itemTpl: [
                                    "<div style='width:100%'>",
                                        "<div style='float:left;width:100px;text-align:center;margin-left:10px'>",
                                            '<div class="progress-radial progress-{progress}" style:"border:1px solid black;">',
                                                "<div class='overlay' style='height: 70px !important; width: 70px !important; background-image: url({imagesrc});background-position:center;background-size:68px'>",
                                                    
                                                "</div>",
                                                "<div style='vertical-align:bottom;line-height: 180px;width: 150px;/ height: 180px; /margin-left: -32px;color: #0e2d66;'>",
                                                    "<span style='width:100%;display:block;float:left;font-size:14px;text-align:center;margin-left:-35px;'>",
                                                        "<tpl if='cartowner == \"me\"'>",
                                                        " <span style='font-family:icomoon;font-size:24px;vertical-align:middle'>&#xe60a;</span>",
                                                        "</tpl>",
                                                        "{userName}",
                                                        "</span>",
                                                "</div>",
                                            "</div>",
                                        "</div>",
                                        "<div style='max-width:45%;float:left;line-height:25px;'>",
                                            "<div>{type}</div>",
                                            "<div>{offervalue}   (<span style='font-family:icomoon'>&#xe609;</span> {target})</div>",
                                            "<div>{timeleft} <span style='font-family:icomoon;vertical-align:middle'>&#xe602;</span></div>",
                                        "</div>",
                                        "<div style='width:100%;'>",
                                        "<div style='font-family:icomoon;font-size:32px;text-align:right' class='multiColor'>",
                                            "&#xe607;",
                                        "</div>",
                                        "<div style='vertical-align:middle;line-height:50px;font-family:icomoon;font-size:24px;text-align: right;color: lightgrey;height: 50%;'>",
                                            "<span>&#xe60f;</span>",
                                        "</div>",
                                        "<div style='font-size:12px;color:#0e2d66;'>",
                                            "<span style='text-align:right;display:block;'>{userlist}",

                                            "<tpl if='cartowner != \"me\"'>",
                                            " <span style='font-family:icomoon;font-size:24px;vertical-align:middle'>&#xe60a;</span>",
                                            "</tpl>",

                                            "</span>",
                                        "</div>",    
                                        "</div>",
                                    "</div>"
                                    


                                    
                                ].join(""),
                        flex:1,
                        store:Ext.create('Massave.store.NewsFeed'),
                        listeners:{
                            disclosure:function(){
                                console.log('item disclosure added');
                            },
                            itemsingletap:function( me, index, target, record, e, eOpts ){
                                //console.log(me.getStore().getAt(index));
                               // me.up('container#mainContainer').setActiveItem(0);
                               Massave.app.redirectTo('offerDetails/' + index);
                            }
                        }
                    }
                ]
            },
            {
                title: 'Groups',
                iconCls: 'group',
                itemId:'groupsTab',
                xtype:'container'
                
            },
            {
                title: 'Trends',
                iconCls: 'trend',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    }
                ]
            },
            {
                title: 'Notifications',
                iconCls: 'alerts',
                badgeText:'2',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'component',
                        html:'This will be content'
                    }
                ]
            },
            {
                title: 'Settings',
                iconCls: 'settings',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'component',
                        html:'This will be the content'
                    }
                ]
            }
        ]
    }
});
