window.restauranteModel = Backbone.Model.extend({
	url: "/api/restaurants/",
	url_base: "/api/restaurants/",

});

var todosRestaurantes = new restauranteModel();
