var app = app || {};


app.mainView = Backbone.View.extend({
	el: '#app',

	events:{
		'keyup #buscador-home' : 'buscarRestaurante',
		'click #ciudad a' : 'selectCiudad',
		'click .categoria': 'selectCategoria',
		'click .pago': 'selectPago',

	},

	initialize: function(){

	},





	selectCiudad:function(ev){
		window.ciudad = $(ev.target).attr('id');
		app.restaurantCiudad = Backbone.model.extend({
			urlRoot: 'api/ciudades/' + window.ciudad + '/restaurants/'
		});

		var restaurantCiudades = Backbone.Collection.extend({
			model: app.restaurantCiudad,
			url:'/api/ciudades' + window.ciudad + '/restaurants/'

		});
		app.restauranCiudadCollection = new restaurantCiudades();


	},


	selectCategoria: function(ev){
		window.categoria = $(ev.target).attr('id');
		app.restaurantCategoria = Backbone.model.extend({
			urlRoot: 'api/categorias/' + window.categoria + '/restaurants/'
		});

		var restaurantCategorias = Backbone.Collection.extend({
			model: app.restaurantCiudad,
			url:'/api/categotias' + window.categoria + '/restaurants/'

		});
		app.restauranCategoriaCollection = new restaurantCategorias();

	},



	selectPago: function(ev){
		window.pago = $(ev.target).attr('id');
		app.restaurantPago = Backbone.model.extend({
			urlRoot: 'api/pago/' + window.ciudad + '/restaurants/'
		});

		var restaurantPagos = Backbone.Collection.extend({
			model: app.restaurantPago,
			url:'/api/pagos' + window.pago + '/restaurants/'

		});
		app.restauranPagoCollection = new restaurantPagos();
	},


})
