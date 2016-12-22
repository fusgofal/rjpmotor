
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
			};
			var instanciaTips = new tipsModel();
			instanciaTips.save(datos,{
				type: 'POST',
				success: function(a){
					$('.textarea-modal').val("");
					$('#contador').html($('.textarea-modal').val().length);
					window.cawdena = "";

					swal(
						'Comentario enviado',
						'------------',
						'success'
					);
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