



var detalleView = Backbone.View.extend({
	initialize: function(){
		this.template = _.template($('#tplDetalle').html());
	},
	render: function(){
		this.$el.html(this.template());
	},
});

var restaurantsView = Backbone.View.extend({
	initialize: function(){
		this.template = _.template($('#tplRestaurantes').html());
	},
	render: function(){
		this.$el.html(this.template());
	},
	events: {
		"click .restaurantes" : "verDetalleRestaurante"
	},
	verDetalleRestaurante : function(e){
		var id_restaurante = $(e.target).attr('data-id');
		todosRestaurantes.url = todosRestaurantes.url_base + id_restaurante +"/"
		window.restaurantes = todosRestaurantes.fetch({
			data: function(){},
			success: function(a, b){
				console.log(b);
				var Vistadetalle = new detalleView({el: '#continer-detalle'});
				Vistadetalle.render();
				$("#myModal").modal();


			},
			error: function(a, b){},
		});
	},
});


var RestaurantesView = new restaurantsView({el: '#container-restaurantes'});
RestaurantesView.render();


