$(document).ready(function(){ 

	
	$("#bildiite1").hide();
	$("#bildiite2").hide();
	$("#bildiite3").hide();
	$("#bildiite4").hide();
	$("#bildiite5").hide();
	$("#bildiite6").hide();
	$("#tests").hide();


	$("#PW1").keyup(function(e){
		if($("#PW1").val() == ""){
  			$("#bildiite2").show();
  			$("#bildiite1").hide();
			}
			else{
				$("#bildiite2").hide();
				$("#bildiite1").show();
			}
  		});


	$("#PW2").keyup(function(e){
		if($("#PW2").val() == ""){
  			$("#bildiite4").show();
  			$("#bildiite3").hide();
			}
			else{
				$("#bildiite4").hide();
				$("#bildiite3").show();
			}
  		});


	$("#PW3").keyup(function(e){
		if($("#PW3").val() == ""){
  			$("#bildiite6").show();
  			$("#bildiite5").hide();
			}
			else{
				$("#bildiite6").hide();
				$("#bildiite5").show();
			}
  		});




	$("#brand").mouseover(function(){
		$("#viss").fadeOut('slow');
	});
	
	$("#brand").mouseleave(function(){
		$("#viss").fadeIn('slow');
	});


	$("#sakttestu").click(function(){
		if(($("#PW1").val() != "") && ($("#PW2").val() != "") && ($("#PW3").val() != "")){
			
			$("#persondati").hide();
			$("#tests").show();

		} else alert("Aizpildi visus tukšos laukus!");
	});

	$("#beigttestu").click(function(){
			
			alert("Paldies par Jūsu veltīto laiku!");
			$("#persondati").show();
			$("#tests").hide();
			
			
	});



});