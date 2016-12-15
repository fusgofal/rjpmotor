var app = app || {};

var ruta = Backbone.Router.extend({

	routes : {
		'':'restaurant',
		'restaurant/:id': 'detalleRestaurant',


	},

	restaurant: function(){
		window.stadeUrl = 'principal';
	},

	detalleRestaurant: function(id){
		window.stadeUrl = 'detalle';
		window.restaurantID = Id;
	},


});


app.route = new ruta();
Backbone.history.start();
//Backbone.history.navigate('Inicio');