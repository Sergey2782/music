//   --- modal window in LETTER- button

$(document).ready(function(){
  //при нажатию на любую кнопку, имеющую класс .btn
  $(".modal_m").click(function() {
    //открыть модальное окно с id="myModal"
    $("#myModal").modal('show');
  });
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
