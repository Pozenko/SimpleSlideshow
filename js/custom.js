window.onload = function(){
	
	document.getElementById("btn_right").onclick = btnRight;
  	document.getElementById("btn_left").onclick = btnLeft;
  	
	var slides = document.getElementsByClassName("slide");
	var slidebar = document.getElementById("slidebar");
	slidebar.style.right = 0;

	function btnRight(){
		var position = parseInt(slidebar.style.right);
		if(position == 0 || slides.length * 100 > position + 100){
			slidebar.style.right = position == 0 ? 0 : position;
			slidebar.style.right = 100 + position + "%";
		}
		else{
			slidebar.style.right = 0;
		}
	};
	function btnLeft(){
		var position = parseInt(slidebar.style.right);
		if(position != ""){
			slidebar.style.right = position - 100 + "%";
		}
	};	
};
