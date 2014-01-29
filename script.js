$(document).ready(function(){
	function menuToggle() {
		var self = $('#menubutton');
		$('#menu').fadeToggle();
		self.fadeOut(200,function(){
			self.text() == self.data("text-swap")
			? self.text(self.data("text-original"))
			: self.text(self.data("text-swap"));
			self.fadeIn(200);
		});
	}

	// click menu button
	$('#menubutton').click(function(e){
		e.preventDefault();
		menuToggle();
	});

	// click menu items
	$('.menuopt').click(function(){
		menuToggle();
	});
});