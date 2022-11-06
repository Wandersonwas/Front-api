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


  //validar senha

  let senha = document.getElementById('senha');
let senhaC = document.getElementById('senhaC');

function validarSenha() {
  if (senha.value != senhaC.value) {
    senhaC.setCustomValidity("Senhas diferentes!");
    senhaC.reportValidity();
    return false;
  } else {
    senhaC.setCustomValidity("");
    return true;
  }
}

// verificar também quando o campo for modificado, para que a mensagem suma quando as senhas forem iguais
senhaC.addEventListener('input', validarSenha);

const botao = document.getElementById('btnEnviar');
botao.addEventListener("submit",recebeDados);
function recebeDados(){

    let nome = document.getElementById('nome'); 
    console.log(nome);

    


}



var frm = document.querySelector("form")
//querySelector versus getElementById( )
frm.addEventListener("submit",(e)=>{
    
    var nome = frm.name.value

    var dataNascimento = frm.date.value

    var telefone = frm.phone.value

    var fCpf = frm.cpf.value

    var fCep = frm.cep.value

    var end = frm.endereco.value

    var numbCas = frm.numero.value

    var comp = frm.complemento.value

    var bairro = frm.bairro.value

    var cidade = frm.cidade.value

    var estado = frm.estado.value

    var email= frm.username.value

    var imgPerf = frm.imagem.value

    var log = frm.login.value

    //var dataFormatada = new Date(dataNascimento);
    //alert(dataFormatada)

    console.log(`o valor:${nome} tem o tipo: ${typeof nome}`)

    console.log(`o valor:${dataNascimento} tem o tipo: ${typeof dataNascimento}`)

    console.log(`o valor:${telefone} tem o tipo: ${typeof telefone}`)

    console.log(`o valor:${email} tem o tipo: ${typeof email}`)

    console.log(`o valor:${senha} tem o tipo: ${typeof senha}`)


    if (localStorage.getItem("nome")){
        localStorage.setItem("nome" ,localStorage.getItem("nome")+";"+nome)
        localStorage.setItem("nome" ,localStorage.getItem("telefone")+";"+telefone)
    }else{
        //senão é a primeira inclusão
        localStorage.setItem("nome", nome)
        localStorage.setItem("telefone")
    }
    //verifica se salvou

    if(localStorage.getItem("nome")){
        alert (`Ok! Cliente ${nome} Cadastro com Sucesso`)
    }

   

    
    e.preventDefault();//evita o envio do form
    
}
);


