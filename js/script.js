$("ul").on("click", "li", function(){
	if($(this).css("color") == "rgb(128, 128, 128)"){
		$(this).css({
			color: "#444",
			textDecoration: "none"
		});
	} else {
		$(this).css({
			color: "rgb(128, 128, 128)",
			textDecoration: "line-through"
		});
	}
});

$("ul").on("click", "span", function(event){
	event.stopPropagation();
  $(this).parent().fadeOut(400, function(){
			$(this).remove();
	})
});

$("input[type=text]").keypress(function(e){
	if(e.which == 13){
		let todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + todoText + "</li>");
	}
})