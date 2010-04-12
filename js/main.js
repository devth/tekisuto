$(function(){
	
	$("input.text, textarea").keyup(function() {
		$(this).closest(".tekisuto").next('.code').find('.code-content').text(  $(this).val() );
	});
	
	
	sh_highlightDocument();
	
});
