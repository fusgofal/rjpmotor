
var bodyView = Backbone.View.extend({
	initialize: function(){
		this.template = _.template($("#tplBody").html());
	},
	render: function(){
		this.$el.html(this.template());
	},
	events:{
		'keyup #buscador-ciudades' : 'buscar_ciudades',

	},

	buscar_ciudades: function(){
		window.cadena_ciudades = $('#buscador-ciudades').val().toLowerCase();
			this.Inicializar_Dom();
		},


	Inicializar_Dom: function (){

		if (window.cadena_ciudades.length == 0) {
			var RestaurantesView = new restaurantsView({el: '#container-restaurantes'});
			RestaurantesView.antesRender();
		}else{
			$('#container-restaurantes').html("");
			var instancia = new coleccion_restaurantes();
			instancia.fetch({
				modelos_filtro: [],
				success: function(a,b){
					instancia.filter(function(modelo){
						var cadenaModelo = modelo.get("name").substring(0, window.cadena_ciudades.length).toLowerCase();
						if ((cadenaModelo == window.cadena_ciudades)) {
							$('#container-restaurantes').append("																					<div class='list-group'>																								<a data-id='"+ modelo.get('id') +"' class='list-group-item containers-restaurantes'>									<div class='col-sm-4 div_imagen'>																						<img src='/media/"+ modelo.get('imagen_name') +"' class='imgg_ img-rounded media-object img-responsive' alt='image'>																												</div>																												<div class='col-sm-5'>																									<center><h3>"+ modelo.get('name') +"</h3>																			<p>"+ modelo.get('desciption') +"</p></center>																	</div>																												<div class='col-sm-3 text-center'>																						<h2>"+ modelo.get('tip_set').length +"<small> tips</small></h2>													</div>																												<button type='button' data-id='"+ modelo.get('id') +"' class='btn btn-lg btn-primary restaurantes' >Ver Detalle </button>																												</a>																											</div>");
						};
					});
				},
				error: function(a,b){
					swal(
						"Oops",
						"Algo malo está pasando!",
						"error"
					);
				},
			});

			
		};
			
	},

});






var BodyView = new bodyView({el: '#container-body'});
BodyView.render();


var RestaurantesView = new restaurantsView({el: '#container-restaurantes'});
RestaurantesView.antesRender();


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