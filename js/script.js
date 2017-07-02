/*$(document).ready(function(){

    var imgStar = $(".sm_image");
    for(i = 0; i < imgStar.length; i++){

	$(imgStar[i]).click(function(){
		imageBig();
	});
   }
   $(".exit").click(function(){
		imageSm();
	});

   var imgSm = $(".sm_image");
   			var parentImg = imgSm.parentNode;


    function imageBig (){
             
   			
   			if($(imgSm).hasClass("sm_image")) {   
   		         $(parentImg).addClass("col-md-6");
   		           
   	         }

       }

    function imageSm (){

   			var imgBig = $(".imgbig");
   			if($(imgBig).hasClass("imgbig")) {   
   		         $(imgBig).removeClass("imgbig"); 
   	         }

       }

})
*/

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
