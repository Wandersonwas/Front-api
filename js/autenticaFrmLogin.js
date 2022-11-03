
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
    const usuario = frm.username.value;
    const senha = frm.password.value;
    if(usuario === "senac" && senha === "123"){
       // alert("Logado com Sucesso!")
       resp.innerText = `Usuário ${usuario} logado com sucesso!`
    }else{
        //alert("Usuário Inválido")
        resp.innerText = `Usuário ou senha inválida!`
    }
    e.preventDefault()//evita o envio do form
})
//const usuario = document.getElementById("username-a30d")
//const senha = document.getElementById("password-a30d")   

//Entrada de dados com JavaScript
/*const nome = prompt("Qual o seu nome?");
alert(nome)*/

//Função - pedaço de um programa
/*
  


*/
//Sempre utilizar um verbo no infinitivo
function autenticar(){
     
   
}


/*

  Operações:

      + - * / % 
      Math.

*/

const a = 20.66 //string
console.log(typeof a)
const b= a*2
console.log(typeof b)
console.log(b)