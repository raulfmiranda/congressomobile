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
	
	function isEmail(email){
		var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
		var check=/@[w-]+./;
		var checkend=/.[a-zA-Z]{2,3}$/;
		if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
		else {return true;}
	}
	
	function camposValidos() {
		var inputEmail = document.getElementById('inputEmail');
		if(isEmail(inputEmail.value)) {
			$('#formMsg').attr('d-none', '').text('E-mail válido');
			return true;
		} else {
			$('#formMsg').attr('d-none', '').text('E-mail inválido');
			return false;
		}
	}
});