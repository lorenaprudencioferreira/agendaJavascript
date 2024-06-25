/* ==================== LOGIN ==========================*/

function validar(){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;


    if(usuario==="admin" && senha==="admin"){
        window.location.href = "cadastro.html";
        document.getElementById('usuario').style.borderColor = '';
        errousuario.innerHTML = ("");
        document.getElementById('senha').style.borderColor = '';
        errosenha.innerHTML = ("");
    }

    if(usuario!="admin"){
        errousuario.innerHTML = ("Usuário incorreto");
        document.getElementById('usuario').style.borderColor = 'red';
        
    }
    if(senha!="admin"){
        errosenha.innerHTML = ("Senha incorreta");
        document.getElementById('senha').style.borderColor = 'red';
       
    }

    if(usuario!="admin" && senha!="admin"){
        errousuario.innerHTML = ("Usuário incorreto");
        errosenha.innerHTML = ("Senha incorreta");
        document.getElementById('usuario').style.borderColor = 'red';
        document.getElementById('senha').style.borderColor = 'red';
       
    }

    if(usuario==="admin"){
        document.getElementById('usuario').style.borderColor = '';
        errousuario.innerHTML = ("");
      
    }
    
    if(senha==="admin"){
        document.getElementById('senha').style.borderColor = '';
        errosenha.innerHTML = ("");
    
    }
    
}


/* =================== BOTÕES - SETAS ======================= */

let meuarray = [];
let editando = false;
let pessoaCadastro = 0;
  
function proximo() {
    if (pessoaCadastro < meuarray.length - 1) {
        pessoaCadastro++;
        exibirCadastro(pessoaCadastro);
    }
}

function anterior() {
    if (pessoaCadastro > 0) {
        pessoaCadastro--;
        exibirCadastro(pessoaCadastro);
    }
}

function ultimo(){
    if (meuarray.length > 0) {
        pessoaCadastro = meuarray.length -1;
        exibirCadastro(pessoaCadastro);
    }
}

function primeiro(){
    if (meuarray.length > 0) {
        pessoaCadastro = 0;
        exibirCadastro(pessoaCadastro);
    }
}

function verificarCampo() {
    const nome = document.getElementById('inputnome').value.trim();
    const sobrenome = document.getElementById('inputsobrenome').value.trim();
    const endereco = document.getElementById('inputendereco').value.trim();
    const telefone = document.getElementById('inputtel').value.trim();

    return nome && sobrenome && endereco && telefone;
}

function adicionar() {
    habilitar();
    document.querySelector(".botaoamarelo").disabled = true;
    document.querySelector(".botaovermelho").disabled = true;
    document.querySelector(".botaoverde").disabled = true;
    editando = false;
    limparCampos();
}

function salvar() {
    if (!verificarCampo()) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    document.querySelector(".botaoverde").disabled = false;
    const nome = document.getElementById('inputnome').value.trim();
    const sobrenome = document.getElementById('inputsobrenome').value.trim();
    const endereco = document.getElementById('inputendereco').value.trim();
    const telefone = document.getElementById('inputtel').value.trim();

    const cadastro = {
        nome: nome,
        sobrenome: sobrenome,
        endereco: endereco,
        telefone: telefone
    };

    if (editando) {
        meuarray[pessoaCadastro] = cadastro;
    } else {
        meuarray.push(cadastro);
        pessoaCadastro = meuarray.length - 1;
    }

    desabilitar();
    document.querySelector(".botaoamarelo").disabled = false;
    document.querySelector(".botaovermelho").disabled = false;
    console.log(meuarray);
}

function cancelar() {
    if (confirm("Tem certeza que deseja cancelar? Todas as mudanças não salvas serão perdidas.")) {
        desabilitar();
        if (meuarray.length > 0) {
            exibirCadastro(pessoaCadastro);
        } else {
            limparCampos();
        }
    }
}

function editar() {
    habilitar();
    document.querySelector(".botaovermelho").disabled = true;
    editando = true;
}

function excluir() {
    if (confirm("Tem certeza que deseja excluir este contato?")) {
        meuarray.splice(pessoaCadastro, 1);
        if (meuarray.length > 0) {
            pessoaCadastro = Math.min(pessoaCadastro, meuarray.length - 1);
            exibirCadastro(pessoaCadastro);
        } else {
            limparCampos();
            desabilitar();
        }
    }
}

function habilitar() {
    document.querySelectorAll("#inputnome, #inputsobrenome, #inputendereco, #inputtel").forEach(input => input.disabled = false);
    document.querySelector(".botaoazul").disabled = false;
    document.querySelector(".botaobranco").disabled = false;
}

function desabilitar() {
    document.querySelectorAll("#inputnome, #inputsobrenome, #inputendereco, #inputtel").forEach(input => input.disabled = true);
    document.querySelector(".botaoazul").disabled = true;
    document.querySelector(".botaobranco").disabled = true;
    document.querySelector(".botaoamarelo").disabled = true;
    document.querySelector(".botaovermelho").disabled = true;
}

function exibirCadastro(index) {
    const cadastro = meuarray[index];
    document.getElementById('inputnome').value = cadastro.nome;
    document.getElementById('inputsobrenome').value = cadastro.sobrenome;
    document.getElementById('inputendereco').value = cadastro.endereco;
    document.getElementById('inputtel').value = cadastro.telefone;
}

function limparCampos() {
    document.getElementById('inputnome').value = "";
    document.getElementById('inputsobrenome').value = "";
    document.getElementById('inputendereco').value = "";
    document.getElementById('inputtel').value = "";
}