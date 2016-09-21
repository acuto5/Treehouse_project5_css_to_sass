$(document).ready(function(){
	$(".hamburger").click(function(e){
		var imgSrc = $(".hamburger img").attr("src");
		var result = imgSrc.split("/");
		result = result[1].split(".");
		var imgName = result[0];
		if (imgName === "x"){
			$(".hamburger img").attr("src", "images/menu.png");
		}else{
			$(".hamburger img").attr("src", "images/x.png");
		}
		$('.nav').toggleClass('show-menu');
	});
});

