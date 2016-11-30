var app = app || {};

var ruta = Backbone.Router.extend({

	routes : {
		'':'restaurant',
		'restaurant/:id': 'detalleRestaurant',


	},

	restaurant: function(){
		console.log("His is a real shiitt MotherFacker")

	},

	detalleRestaurant: function(id){
		console.log(id)
	},


});


app.route = new ruta();
Backbone.history.start();
Backbone.history.navigate('Home');