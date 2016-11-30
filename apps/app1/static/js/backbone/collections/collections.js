window.coleccion = Backbone.Collection.extend({
	url:'/api/restaurants/',
	url_base:'/api/restaurants/',

	asd: function(){
		this.fetch({
			success: function(f, g){
				console.log(g);
			},
			error:function(f, g){

			},
		});
	},

});

