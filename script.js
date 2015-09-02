$(document).ready(function() {
	grid(getSize());
	//Draw the main grid
	function grid(num) {
		cleanGrid();
		var square = (700/num) + "px";
		for (var i = 1; i <= num; i++) {
			for (var k = 1; k <= num; k++) {
				$(".grid").append('<div class="pixel"></div>');
			};
		};
		$(".pixel").css("width", square);
		$(".pixel").css("height", square);
		$(".pixel").css("opacity", "0");		
	};

	//Returns grid size
	function getSize() {
		return document.getElementsByClassName("size")[0].value;
	};

	//Remove current grid
	function cleanGrid() {
		$("div.pixel").remove();
	};

	var solid = false;
	var fade = true;
	$(document).on("mouseover", ".pixel", function() {
		if (solid) {
			this.style.opacity = 1;
		}
		else if (fade) { 
			var opacity = this.style.opacity;
    		this.style.opacity = parseFloat(opacity) + 0.1;
    	}
	});

	$("#fade").click(function() {
		fade = true;
		solid = false;
		$("#fade").addClass("active");
		$("#solid").removeClass("active");
	});
	$("#solid").click(function() {
		fade = false;
		solid = true;
		$("#fade").removeClass("active");
		$("#solid").addClass("active");
	});
	$(".submit").click(function() {
		grid(getSize());
	});

});