$(document).ready(function(){ 

	
	$("#bildiite1").hide();
	$("#bildiite2").hide();
	$("#bildiite3").hide();
	$("#bildiite4").hide();
	$("#bildiite5").hide();
	$("#bildiite6").hide();
	$("#tests").hide();
	$(".labojumi").hide();
	$(".list").hide();



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

	$("#ttt").click(function(){
			
			$(".labojumi").show();
			
			
	});

	$("#ddd").click(function(){
			
			$(".labojumi").hide();
			
			
	});


	    $('#komentet').click(function(){
	    	$(".list").show();
        var toAdd = $('textarea[name=checkListItem]').val();
        $('.list').append('<div class="list2">' + toAdd + '</div>');
        });

        $('#pluss').click(function(){
	    	 $('#komentars').addClass('highlighted'); 
	    	 $('.virsraksts').addClass('highlighted'); 
        });

        $('#minuss').click(function(){
	    	$('#komentars').removeClass('highlighted'); 
	    	$('.virsraksts').removeClass('highlighted'); 
        });




$("#googleMap").googleMap();
    $("#googleMap").addMarker({
      coords: [56.9359921, 24.16445580000004], // GPS coords
      url: 'https://www.facebook.com/juris.jenerts', // Link to redirect onclick (optional)
      id: 'marker1' // Unique ID for your marker
    });






});

function changeText(){
	document.getElementById('prof-vards').innerHTML = 'Juris';
}

function changeText2(){
	var userInput1 = document.getElementById('userInput1').value;
	document.getElementById('location').innerHTML = userInput1;
	var userInput2 = document.getElementById('userInput2').value;
	document.getElementById('education').innerHTML = userInput2;
	var userInput3 = document.getElementById('userInput3').value;
	document.getElementById('ieteikumi').innerHTML = userInput3;
}
