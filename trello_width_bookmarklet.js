javascript:(function(w) { 
	$('.js-list').width(w); 
	$('.list').width(w); 
	$('.list-area').width($('.list').length * (w+12));
	$('.list-wrapper').css({'height': 'auto'}); 
	$('.list-wrapper').css({'display': 'block'}); 
	$('.list-wrapper').css({'margin': '0 5px 5px 10px'});
	$('.js-member-droppable').css({'max-width': '100%'});
	$('body').addClass('layout-horiz-scroll'); })('99.3%');
	$('head').append('<style type="text/css">#board{overflow-y:auto;}.list-card-cover{max-width:246px;}.list-card{max-width:100%;}{</style>')