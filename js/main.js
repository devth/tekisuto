$(function(){
	
	var currentRowId = 3; // 1 and 2 are initialized by default
	sh_highlightDocument();
	init_keyup_listener();
	
	function init_keyup_listener() {
		$("input.text, textarea").keyup( input_keyup );
	}
	
	function input_keyup()
	{
		console.log("hi");
		$(this).closest(".tekisuto").next('.code').find('.code-content').text(  $(this).val() );
	}
	
	
	var tag_map = {
		paragraph: "p",
		headline: "h1"
	};
	
	$("#insert_menu a").click(function(){
		$this = $(this);
		
		var tag = tag_map[ $this.text().toLowerCase() ];
		
		console.log( tag + " : " + $this.text() );
		
		buildItem( tag );
		
		return false;
	});
	
	
	
	
	function buildItem( tag )
	{
		$template = $("#row_template").clone();
		
		$("table").append($template.show());
		
		init_keyup_listener();
	}
	

	
});
