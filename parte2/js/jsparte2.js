$(document).ready(function() {
	
	$("#inicio-button").click(function(){
		$("html, body").animate({
			scrollTop: $("#inicio").offset().top -100
		}, 500);
	});

	$("#conteudo-button").click(function(){
		$("html, body").animate({
			scrollTop: $("#conteudo").offset().top -70
		}, 500);
	});
	
	$("#palestrante-button").click(function(){
		$("html, body").animate({
			scrollTop: $("#palestrante").offset().top
		}, 500);
	});
	
	$("#contato-button").click(function(){
		$("html, body").animate({
			scrollTop: $("#contato").offset().top
		}, 500);
	});
	
	$("#btEnviar").on('click', function(){
		camposValidos();
    });
	
	function isEmail(email){
		var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if(filtro.test(email)) {
			return true;
		} else {
			return false;
		}
	}
	
	function camposValidos() {
		var inputEmailVal = $('#inputEmail').val();
		//alert('passou da declaração '+ isEmail(inputEmailVal));
		if(!isEmail(inputEmailVal)) {
			$('#formMsg').text('E-mail inválido.').css('color', 'red').show( "slow" );
		}
	}
});