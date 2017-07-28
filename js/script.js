//   --- modal window in LETTER- button

$(document).ready(function(){
  //при нажатию на любую кнопку, имеющую класс .btn
  $(".modal_m").click(function() {
    //открыть модальное окно с id="myModal"
    $("#myModal").modal('show');
  });
   /*var img = $("img");
  var winW = $(window).width()/4 - img.width()/4;
  var hover = $(".hover .overlay");
 hover.width()=img.width();
  img.css("left", winW);
 */ 
});

window.onload = function(){
		var items = document.querySelectorAll('.active_one');
		
	function activeItem(){
		this.classList.toggle('active-item');
}
	
	setInterval(function(){
	var rand = mtRand(0, items.length - 1);
	activeItem.call(items[rand]);
	}, 1000);
}
		
	function mtRand(min, max){
		return Math.floor(Math.random() * (max - min +1));
}
