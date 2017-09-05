function getMaiorNum(arr) {
  var max = Number.NEGATIVE_INFINITY;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function getMenorNum(arr) {
  var min = Number.POSITIVE_INFINITY;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function returnResult() {
	var arr = [10, 3, 22, 6, 18, 11, 45, 7, 9];
	var lenArr = arr.length;
	var maiorNum = getMaiorNum(arr);
	var menorNum = getMenorNum(arr);

	var resultado = 'Array: [' + arr + ']';
	resultado += '\nTamanho do array: ' + lenArr;
	resultado += '\nMaior número: ' + maiorNum;
	resultado += '\nMenor número: ' + menorNum;	
	
	return resultado;
}

function resultAlert() {
	alert(returnResult());
}

var h2Alerta = document.getElementById('h2Alerta');
h2Alerta.innerText = returnResult();
resultAlert();