
var frm = document.querySelector("form")
//querySelector versus getElementById( )
frm.addEventListener("submit",(e)=>{
    
    var nome = frm.name.value
    var telefone = frm.phone.value
    var email= frm.username.value
    var dataNascimento = frm.date.value
    var senha = frm.password.value

    //var dataFormatada = new Date(dataNascimento);
    //alert(dataFormatada)

    console.log(`o valor:${nome} tem o tipo: ${typeof nome}`)
    console.log(`o valor:${telefone} tem o tipo: ${typeof telefone}`)
    console.log(`o valor:${email} tem o tipo: ${typeof email}`)
    console.log(`o valor:${dataNascimento} tem o tipo: ${typeof dataNascimento}`)
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
