;(function(){
	
	$.fn.extend({
		"nav":function(color,background){
			$(this).find(".nav").css({
				"list-style":"none",
				"margin":0,
				"padding":0,
				"display":"none",
				"color":color,	
				"background":background
			})
			$(this).find(".nav").parent().hover(function(){
				$(this).find(".nav").slideDown()
			},function(){
				$(this).find(".nav").stop(true).slideUp()
			})
			return this;
		}
	});
	
})(jQuery);
$(".list").nav();

