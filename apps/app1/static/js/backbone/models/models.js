window.restauranteModel = Backbone.Model.extend({
	url: "/api/restaurants/",
	url_base: "/api/restaurants/",

});

window.tipsModel = Backbone.Model.extend({
	url: "api/tips/",
	url_base: "api/tips/",

	deleteTipById: function(id, success, error){
		this.url = this.url_base+id + "/deleteTipById/";
		this.fetch({});
	},
});

var todosRestaurantes = new restauranteModel();
