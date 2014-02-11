$(document).ready(function(){
	var animated = false;
	var clicked = false;

	/* Scroll according to link. Also, indicate current corresponding link */
	$("a").click(function(){
		if(this.hash)
		{
			clicked = true; // a link has been clicked

			/* Scroll */
			var hash = this.hash.substr(1);
			var $toElement = $("a[name="+hash+"]");
			var toPosition = $toElement.position().top;
			$("body,html").animate({
				scrollTop : toPosition
			},600,"easeOutExpo",
			function(){
				animated = true; // animation is finished
			});

			/* Change current state in nav bar */
			var $currLoc = $('li[class="current"]');
			$currLoc.removeClass("current");
			var inthash = parseInt(hash)+2;
			if(inthash == 2) // when "top" link has been clicked
				inthash--;
			$("#nav li:nth-child("+inthash.toString()+")").addClass("current");
			$(this).data('clicked', true);
			return false;
		}
	});

	/* Allow window to scroll top of the position */
	if(location.hash){
		var hash = location.hash;
		window.scroll(0,0);
		$("a[href="+hash+"]").click();
	}

	/* Change current state in nav bar in respect to scrolling*/
	$(window).scroll(function(){

		// various position variables used for comparisons
		var scrollTop = $(window).scrollTop()+190;
		var position1 = $('a[name="1"]').position().top;
		var position2 = $('a[name="2"]').position().top;
		var position3 = $('a[name="3"]').position().top;
		var position4 = $('a[name="4"]').position().top;
		var position5 = $('a[name="5"]').position().top;
		var position6 = $('a[name="6"]').position().top;
		var position7 = $('a[name="7"]').position().top;
		var position8 = $('a[name="8"]').position().top;
		var position9 = $('a[name="9"]').position().top;
		var position10 = $('a[name="10"]').position().top;

		var num = "1"; // holder variable

		/* Assign appropriate name regards to position of user */
		if($(window).scrollTop() + $(window).height() == $(document).height())
			num = "12";
		else if(scrollTop < position1)
			num = "1";
		else if(scrollTop >= position1 && scrollTop < position2)
			num = "3";
		else if(scrollTop >= position2 && scrollTop < position3)
			num = "4";
		else if(scrollTop >= position3 && scrollTop < position4)
			num = "5";
		else if(scrollTop >= position4 && scrollTop < position5)
			num = "6";
		else if(scrollTop >= position5 && scrollTop < position6)
			num = "7";
		else if(scrollTop >= position6 && scrollTop < position7)
			num = "8";
		else if(scrollTop >= position7 && scrollTop < position8)
			num = "9";
		else if(scrollTop >= position8 && scrollTop < position9)
			num = "10";
		else if(scrollTop >= position9 && scrollTop < position10)
			num = "11";
		else if(scrollTop >= position10)
			num = "12";


		/* Only remove class when nav bar is not clicked or not animating */
		if(!clicked && !animated)
			$('li[class="current"]').removeClass("current");

		/* 
		 * Only add class when user did not click anything on nav bar
		 * OR scroll animation is done
		 */
		if(!clicked || animated)
		{
			$('li[class="current"]').removeClass("current");
			$("#nav li:nth-child("+num+")").addClass("current");

			// reset conditional values
			clicked = false;
			animated = false;
		}
	});
}); // end of function