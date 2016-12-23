var cadena_ciudades = "$";



var bodyView = Backbone.View.extend({
	text_search: "",
	initialize: function(){
		this.template = _.template($("#tplBody").html());
	},
	render: function(){
		this.$el.html(this.template());
	},
	events:{
		//'keyup #buscador-ciudades' : 'buscar_ciudades',
		'keyup #buscador-ciudades' : 'llamarOtraView',

	},
	
	llamarOtraView: function(){
		this.timer;
		if (this.timer) { window.clearTimeout(this.timer); }
		timer = setTimeout(function(){
			cadena_ciudades = $('#buscador-ciudades').val().toLowerCase();
			if (cadena_ciudades != self.text_search) {
				self.text_search = cadena_ciudades;
				$('#container-restaurantes').html("");

				var RestaurantesView = new restaurantsView({el: '#container-restaurantes'});
				RestaurantesView.cadena = cadena_ciudades;
				RestaurantesView.antesRender();
			};

		 }, 1000);
		this.timer = false;
	},
});






var BodyView = new bodyView({el: '#container-body'});
BodyView.render();


var RestaurantesView = new restaurantsView({el: '#container-restaurantes'});
RestaurantesView.antesRender(cadena_ciudades);


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