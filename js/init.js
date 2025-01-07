(function($){
  $(function(){

    $('.sidenav').sidenav();


  }); 
})(jQuery);

function shake(div){                                                                                                                                                                                            
	var interval = 100;                                                                                                 
	var distance = 10;                                                                                                  
	var times = 4;                                                                                                      
	
	$(div).css('position','relative');                                                                                  
	
	for(var iter=0;iter<(times+1);iter++){                                                                              
		$(div).animate({ 
			left:((iter%2==0 ? distance : distance*-1))
		},interval);                                   
	}                                                                                                            
	$(div).animate({ left: 0},interval);                                                                                
}

function writeText(id, text, speed,what){
		var ele = document.getElementById(id),
		txt = text.join("").split("");
		var interval = setInterval(function(){
			if(!txt[0]){
			return clearInterval(interval);
		};
		
		$('.reg_design p').append(txt.shift());
		}, speed != undefined ? speed : 50);
		return false;
	};