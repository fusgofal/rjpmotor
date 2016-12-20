window.restauranteModel = Backbone.Model.extend({
	url: "/api/restaurants/",
	url_base: "/api/restaurants/",

});

window.tipsModel = Backbone.Model.extend({
	url: "api/tips/",
	url_base: "api/tips/",

});

var todosRestaurantes = new restauranteModel();
