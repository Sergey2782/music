// --- function  bypasses images and add class - random

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

	   

//--- function to hide mail

  var btnClickMail = document.querySelector('.cl');
  var m = new Array('moc.liamg@432nugresm'); // -- few emails

  btnClickMail.onclick = function () {
      var w = window.open();
      w.window.location="mailto:" + m[0].split('').reverse().join('');
    }
;

   


