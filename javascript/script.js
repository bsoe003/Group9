$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 100)
		{
			$('.scrollup').fadeIn();
		}
		else
		{
			$('.scrollup').fadeOut();
		}
	});
});

$("#nav > li > div").click(function(){
	if(false == $(this).next().is(':visible'))
	{
		$('#nav ul').slideUp(350);
	}
	$(this).next().slideToggle(300);
});
$('#nav ul:eq(0)').show();
