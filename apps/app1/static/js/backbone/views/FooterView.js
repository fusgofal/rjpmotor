


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