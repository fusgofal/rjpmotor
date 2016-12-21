
var detalleView = Backbone.View.extend({
	restaurante: [],
	initialize: function(){
		this.template = _.template($('#tplDetalle').html());
	},
	events:{
		"keyup .textarea-modal" : "contadorModal",
		'keypress': 'TeclaPresionada',
		"click #enviar-modal" : "guardarToModel",
		"click .eliminar-tip" : "eliminarTip",
		"click .editar-tip" : "editarTip",
	},
	editarTip: function(e){
		console.log("editado");

	},
	eliminarTip: function(e){
		swal({
		  title: 'Estas seguro?',
		  text: "Tu comentario será eliminado",
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Si, eliminarlo',
		  cancelButtonText: 'Cancelar',
		}).then(function (respuesta) {
			swal(
				'Eliminado',
				'Tu comentario fue eliminado¡',
				'success'
			);
			console.log("eliminado");


			var instanciaTips2 = new tipsModel();
			var datoId = $(e.target).attr("data-id");
			console.log(datoId);
			instanciaTips2.deleteTipById(datoId,{type: 'POST'});
		});
	},
	guardarToModel : function(){
		if (window.cadena.length  <= 200) {
			var datos = {
				content: window.cadena,
				restaurant: window.id_restaurante,
				user: window.usuario_id,
				usuario: "asdasd",
			};
			var instanciaTips = new tipsModel();
			instanciaTips.save(datos,{
				type: 'POST',
				success: function(a){
					$('.textarea-modal').val("");
					swal(
						'Comentario enviado',
						'------------',
						'success'
					);
					$('#contador').html($('.textarea-modal').val().length);
					window.cadena = "";
			    },
			    error: function(a){
					swal(
						'Error al enviar',
						'------------',
						'error'
					);
			    },

			    
			});
		}else{
			console.log("la cadena es muy larga");
		};		
	},
	TeclaPresionada:function(e){
		var code = e.keyCode;
        if(code == 13) { 
			$("#enviar-modal").trigger("click");
        }
	},
	contadorModal : function(e){
		window.cadena = $('.textarea-modal').val();
		$('#contador').html(window.cadena.length);


	},
	render: function(){
		this.$el.html(this.template({
			item: this.restaurante,
		}));
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
		"click .restaurantes" : "verDetalleRestaurante",
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
			error: function(a, b){},
		});
	},
});






var bodyView = Backbone.View.extend({
	initialize: function(){
		this.template = _.template($("#tplBody").html());
	},
	render: function(){
		this.$el.html(this.template());
	},
	events:{
		'keyup #buscador-ciudades' : 'buscar_ciudades',
		'focus #buscador-ciudades' : 'r_ciudades',

	},
	r_ciudades: function(){
	},

	buscar_ciudades: function(){
		var cadena_ciudades = $('#buscador-ciudades').val();
		Inicializar_Dom();


		function Inicializar_Dom(){
			console.log("Hello World");
			if (cadena_ciudades == 0) {
				var RestaurantesView = new restaurantsView({el: '#container-restaurantes'});
				RestaurantesView.render();
			}else{
				$('#container-restaurantes').html("");
				$('#container-restaurantes').append("<div class='list-group'>																	<a data-id='' class='list-group-item containers-restaurantes'>				     											<div class='col-sm-4 div_imagen'>																								<img src='/media/{{restaurant.imagen.name}}' class='imgg_ img-rounded media-object img-responsive' alt='image'>			</div>																														<div class='col-sm-5'>																											<center><h3>Nombre restaurante</h3>																							<p>Toodo esto es la descripcion del restaurante </p></center>															</div>																														<div class='col-sm-3 text-center'>																								<h2>3 <small>tips</small></h2>		     																				</div>																														<button type='button' data-id='{{restaurant.id}}' class='btn btn-lg btn-primary restaurantes' >Ver Detalle </button>	</a></div>");

			};
		};
	},


});

var BodyView = new bodyView({el: '#container-body'});
BodyView.render();




var RestaurantesView = new restaurantsView({el: '#container-restaurantes'});
RestaurantesView.render();




var pieDePaginaView = Backbone.View.extend({
	initialize: function(){
		this.template = _.template($('#tplFooter').html());
	},
	render: function(){
		this.$el.html(this.template());
	},
	events: {

	},

});
var FooterView = new pieDePaginaView({el: '#container-pie-de-pagina'});
FooterView.render();






//para corregir el error        CSRF Failed: CSRF token missing or incorrect.

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        
        if (!(/^http:./.test(settings.url) || /^https:./.test(settings.url))) {
            // Only send the token to relative URLs i.e. locally.
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
        }
    }
});