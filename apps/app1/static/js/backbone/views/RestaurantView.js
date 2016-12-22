

var restaurantsView = Backbone.View.extend({
	fetch_restaurantes: " ",
	el : '#container-restaurantes',
	events: {
		"click .restaurantes" : "verDetalleRestaurante",
	},
	initialize: function(){
		this.fetch_restaurantes = new coleccion_restaurantes();		
		this.template = _.template($('#tplRestaurantes').html());
	},
	render: function(){
		var self = this;
		$.each(this.fetch_restaurantes.toJSON(),function(cont, model){
			self.$el.append(self.template({
				restaurant: model,
			}));
		});
	},
	antesRender: function(){
		var self = this;
		self.fetch_restaurantes.fetch({
			success: function(){
				self.render();
			},
			error: function(){},
		});

	},
	verDetalleRestaurante : function(e){
		window.id_restaurante = $(e.target).attr('data-id');
		todosRestaurantes.url = todosRestaurantes.url_base + window.id_restaurante +"/"
		window.restaurantes = todosRestaurantes.fetch({
			data: function(){},
			success: function(a, b){
				var Vistadetalle = new detalleView({el: '#continer-detalle'});
				Vistadetalle.restaurante = todosRestaurantes.toJSON();
				Vistadetalle.render();
				$("#myModal").modal();
			},
			error: function(a, b){
				swal(
				  'Oops...',
				  'Algo va mal!',
				  'error'
				);
			},
		});
	},
});
