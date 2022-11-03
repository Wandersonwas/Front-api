function is_cpf (c) {

	if((c = c.replace(/[^\d]/g,"")).length != 11)
	  return false
  
	if (c == "00000000000")
	  return false;
  
	var r;
	var s = 0;
  
	for (i=1; i<=9; i++)
	  s = s + parseInt(c[i-1]) * (11 - i);
  
	r = (s * 10) % 11;
  
	if ((r == 10) || (r == 11))
	  r = 0;
  
	if (r != parseInt(c[9]))
	  return false;
  
	s = 0;
  
	for (i = 1; i <= 10; i++)
	  s = s + parseInt(c[i-1]) * (12 - i);
  
	r = (s * 10) % 11;
  
	if ((r == 10) || (r == 11))
	  r = 0;
  
	if (r != parseInt(c[10]))
	  return false;
  
	return true;
  }
  
  
  function fMasc(objeto,mascara) {
  obj=objeto
  masc=mascara
  setTimeout("fMascEx()",1)
  }
  
	function fMascEx() {
  obj.value=masc(obj.value)
  }
  
  function mCPF(cpf){
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
  }
  
  cpfCheck = function (el) {
	  document.getElementById('cpfResponse').innerHTML = is_cpf(el.value)? '<span style="color:green">válido</span>' : '<span style="color:red">inválido</span>';
	  if(el.value=='') document.getElementById('cpfResponse').innerHTML = '';
  }


// validar numero telefone com mascara.
function mask(o, f) {
	setTimeout(function() {
	  var v = mphone(o.value);
	  if (v != o.value) {
		o.value = v;
	  }
	}, 1);
  }
  
  function mascaraFone(event) {
    var valor = document.getElementById("telefone").attributes[0].ownerElement['value'];
    var retorno = valor.replace(/\D/g, "");
    retorno = retorno.replace(/^0/, "");
    if (retorno.length > 10) {
      retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (retorno.length > 5) {
      if (retorno.length == 6 && event.code == "Backspace") { 
        // necessário pois senão o "-" fica sempre voltando ao dar backspace
        return; 
      } 
      retorno = retorno.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (retorno.length > 2) {
      retorno = retorno.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      if (retorno.length != 0) {
        retorno = retorno.replace(/^(\d*)/, "($1");
      }
    }
    document.getElementById("telefone").attributes[0].ownerElement['value'] = retorno;
  }