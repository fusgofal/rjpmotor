var coleccion_restaurantes = Backbone.Collection.extend({
	url:'/api/restaurants/',
	url_base:'/api/restaurants/',

	datosRestaurante: function(){
		this.fetch({success: function(f, g){},error:function(f, g){},});
	},

});

