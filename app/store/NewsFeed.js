Ext.define('Massave.store.NewsFeed',{
	extend:'Ext.data.Store',
	requires:[
		'Massave.model.NewsFeed'
	],
	config:{
		model:'Massave.model.NewsFeed',
		data:[
			{disclosure:true,cartowner:'me',userlist:'3 Participants',type:'Amazon free shipping',timeleft:'2 days',offervalue:'$27.00',progress:20,imagesrc:'/Massave/images/ProfilePic.png',target:'$35',timeRemaining:'2 days left',userName:'Ankur Kapur',
			items : [{
						userIndex:1,
                        "userDetails" : "{userName:'Ishita Kapur',itemsCount:'5 items',itemsValue:'$5.00',userProfilePic:'/Massave/images/Unknown.png'}",
                        "items" : [ 
                        			{
                        			"productDetails":'{"productName" : "Apple Watch","productQuantity":"5","productValue":"$5","productPicUrl":"/Massave/images/product.png"}',
                                    "leaf" : true
                                	}
                                ]
                    }, {
                    	userIndex:2,
                        "userDetails" : "{userName:'Gautam Naik',itemsCount:'5 items',itemsValue:'$5.00',userProfilePic:'/Massave/images/Unknown.png'}",
                        "items" : 	[
	                        			{
	                        			"productDetails":'{"productName" : "Macbook Air 13","productQuantity":"5","productValue":"$5","productPicUrl":"/Massave/images/product.png"}',
	                                    "leaf" : true
	                                	},
	                                	{
	                        			"productDetails":'{"productName" : "Macbook Air 13","productQuantity":"5","productValue":"$5","productPicUrl":"/Massave/images/product.png"}',
	                                    "leaf" : true
	                                	},
	                                	{
	                        			"productDetails":'{"productName" : "Macbook Air 13","productQuantity":"5","productValue":"$5","productPicUrl":"/Massave/images/product.png"}',
	                                    "leaf" : true
	                                	},
	                                	{
	                        			"productDetails":'{"productName" : "Macbook Air 13","productQuantity":"5","productValue":"$5","productPicUrl":"/Massave/images/product.png"}',
	                                    "leaf" : true
	                                	}
                        			]
                    }, {
                    	userIndex:3,
                        "userDetails" : "{userName:'Trupti Naik',itemsCount:'5 items',itemsValue:'$5.00',userProfilePic:'/Massave/images/Unknown.png'}",
                        "items" : 	[
	                        			{
	                        			"productDetails":'{"productName" : "Jewellery","productQuantity":"5","productValue":"$5","productPicUrl":"/Massave/images/product.png"}',
	                                    "leaf" : true
	                                	}
                        			]
                    }, {
                    	userIndex:4,
                        "userDetails" : "{userName:'Sushant Mishra',itemsCount:'5 items',itemsValue:'$5.00',userProfilePic:'/Massave/images/Unknown.png'}",
                        "items" : 	[
	                        			{
	                        			"productDetails":'{"productName" : "Underwear","productQuantity":"5","productValue":"$5","productPicUrl":"/Massave/images/product.png"}',
	                                    "leaf" : true
	                                	}
                        			]
                    }]
			},
			{userlist:'3 Participants',type:'Amazon free shipping',timeleft:'2 days',offervalue:'$27.00',progress:60,imagesrc:'/Massave/images/Unknown.png',target:'$35',timeRemaining:'2 days left',userName:'Gautam Naik',
			items : [{
						disclosure:true,
						userIndex:1,
                        "userDetails" : "{userName:'Ankur Kapur',itemsCount:'5 items',itemsValue:'$5.00',userProfilePic:'/Massave/images/Unknown.png'}",
                        "items" : [ 
                        			{
                        			"productDetails":'{"productName" : "Apple Watch","productQuantity":"5","productValue":"$5","productPicUrl":"/Massave/images/product.png"}',
                                    "leaf" : true
                                	}
                                ]
                    }, {
                    	userIndex:2,
                        "userDetails" : "{userName:'Gautam Naik',itemsCount:'5 items',itemsValue:'$5.00',userProfilePic:'/Massave/images/Unknown.png'}",
                        "items" : 	[
	                        			{
	                        			"productDetails":'{"productName" : "Macbook Air 13","productQuantity":"5","productValue":"$5","productPicUrl":"/Massave/images/product.png"}',
	                                    "leaf" : true
	                                	}
                        			]
                    }, {
                    	userIndex:3,
                        "userDetails" : "{userName:'Trupti Naik',itemsCount:'5 items',itemsValue:'$5.00',userProfilePic:'/Massave/images/Unknown.png'}",
                        "items" : 	[
	                        			{
	                        			"productDetails":'{"productName" : "Jewellery","productQuantity":"5","productValue":"$5","productPicUrl":"/Massave/images/product.png"}',
	                                    "leaf" : true
	                                	}
                        			]
                    }, {
                    	userIndex:4,
                        "userDetails" : "{userName:'Sushant Mishra',itemsCount:'5 items',itemsValue:'$5.00',userProfilePic:'/Massave/images/Unknown.png'}",
                        "items" : 	[
	                        			{
	                        			"productDetails":'{"productName" : "Underwear","productQuantity":"5","productValue":"$5","productPicUrl":"/Massave/images/product.png"}',
	                                    "leaf" : true
	                                	}
                        			]
                    }]

			},
			{userlist:'3 Participants',type:'Amazon free shipping',timeleft:'2 days',offervalue:'$27.00',progress:90,imagesrc:'/Massave/images/Unknown.png',target:'$35',timeRemaining:'2 days left',userName:'Sushant Mishra'},
			{userlist:'3 Participants',type:'Amazon free shipping',timeleft:'2 days',offervalue:'$27.00',progress:20,imagesrc:'/Massave/images/Unknown.png',target:'$35',timeRemaining:'2 days left',userName:'Trupti Naik'},
			{userlist:'3 Participants',type:'Amazon free shipping',timeleft:'2 days',offervalue:'$27.00',progress:80,imagesrc:'/Massave/images/Unknown.png',target:'$35',timeRemaining:'2 days left',userName:'Ishita Kapur'},
			{userlist:'3 Participants',type:'Amazon free shipping',timeleft:'2 days',offervalue:'$27.00',progress:70,imagesrc:'/Massave/images/Unknown.png',target:'$35',timeRemaining:'2 days left',userName:'Ankur Kapur'},
			{userlist:'3 Participants',type:'Amazon free shipping',timeleft:'2 days',offervalue:'$27.00',progress:65,imagesrc:'/Massave/images/Unknown.png',target:'$35',timeRemaining:'2 days left',userName:'Ankur Kapur'},
			{userlist:'3 Participants',type:'Amazon free shipping',timeleft:'2 days',offervalue:'$27.00',progress:65,imagesrc:'/Massave/images/Unknown.png',target:'$35',timeRemaining:'2 days left',userName:'Ankur Kapur'},
			{userlist:'3 Participants',type:'Amazon free shipping',timeleft:'2 days',offervalue:'$27.00',progress:65,imagesrc:'/Massave/images/Unknown.png',target:'$35',timeRemaining:'2 days left',userName:'Ankur Kapur'},
			{userlist:'3 Participants',type:'Amazon free shipping',timeleft:'2 days',offervalue:'$27.00',progress:65,imagesrc:'/Massave/images/Unknown.png',target:'$35',timeRemaining:'2 days left',userName:'Ankur Kapur'},
			{userlist:'3 Participants',type:'Amazon free shipping',timeleft:'2 days',offervalue:'$27.00',progress:65,imagesrc:'/Massave/images/Unknown.png',target:'$35',timeRemaining:'2 days left',userName:'Ankur Kapur'},
			{userlist:'3 Participants',type:'Amazon free shipping',timeleft:'2 days',offervalue:'$27.00',progress:65,imagesrc:'/Massave/images/Unknown.png',target:'$35',timeRemaining:'2 days left',userName:'Ankur Kapur'}
		]
	}
});