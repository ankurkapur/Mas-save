Ext.define('Massave.model.NewsFeed',{
	extend: "Ext.data.Model",
    config: {
        fields: [
            {name: "userlist", type: "string"},
            {name:"progress", type:"number"},
            {name: "type",  type: "string"},
            {name: "offervalue", type: "string"},
            {name: "timeleft",  type: "string"},
            {name: "imagesrc", type:"string"},
            {name: "target", type:"string"},
            {name: "userName", type:"string"},
            {name: "cartowner", type:"string"},
            {name:"items",type:"object"},
            {name:"disclosure",type:"object"},
            {name:'offerDetails',type:'object'}
        ]
    }
});