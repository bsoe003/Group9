/**
 * The function is used for scroll animation effect
 * for anchor hyperlinks.
 */
$(function(){
	$("a").click(function(){
		if(this.hash){
			var hash = this.hash.substr(1);
			var $toElement = $("a[name="+hash+"]");
			var toPosition = $toElement.position().top;
			$("body,html").animate({
				scrollTop : toPosition
			},700,"easeOutExpo");
			var $currLoc = $('li[class="current"]');
			$currLoc.removeClass("current");
			var inthash = parseInt(hash)+2;
			$("#nav li:nth-child("+inthash.toString()+")").addClass("current")
			return false;
		}
	});
	if(location.hash){
		var hash = location.hash;
		window.scroll(0,0);
		$("a[href="+hash+"]").click();
	}
	$(window).scroll(function(e){
		if($("a").hash){
			var hash = $("a").hash.substr(1);
			var $toElement = $("a[name="+hash+"]");
			var toPosition = $toElement.position().top;
			$("body,html").animate({
				scrollTop : toPosition
			},500,"easeOutExpo");
			var $currLoc = $('li[class="current"]');
			$currLoc.removeClass("current");
			var inthash = parseInt(hash)+2;
			$("#nav li:nth-child("+inthash.toString()+")").addClass("current")
			return false;
		}
	});
});