const tbClientes = document.querySelector("table")
const ckMostrar =  document.querySelector("input[type='checkbox']")
const montarTabela = () =>{
    
    if(localStorage.getItem("nome")){
        const nomes = localStorage.getItem("nome").split(";")
        const telefones = localStorage.getItem("telefone").split(";")

        //percorrer elementos do vetor e os insere na tabela
        for(let i=0;i<nomes.length;i++){
            const linha = tbClientes.insertRow(-1) //criar uma linha na tabela            
            //nome
            const col1 = linha.insertCell(0) //criar as colunas
            //telefone
            const col2 = linha.insertCell(1) 
            //link de excluir
            const col3 = linha.insertCell(2)
         
            col1.innerText = nomes[i]
            col2.innerText = telefones[i]
            col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>"
           
        } //chave de fechamento do for
    } // chave do if
}; //chave do método

ckMostrar.addEventListener("change",()=>{
     console.log("testando evento")
     ckMostrar.checked ? montarTabela() : window.location.reload()
});
