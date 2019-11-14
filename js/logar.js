var form = document.getElementById('paienlusuario');
var login = document.getElementById('login');
var senha = document.getElementById('senha');

form.addEventListener('submit', function(event){
    if(login.value == 'joel' & senha.value == 1596325852){
        alert("Logado com sucesso: Bem Vindo Joel");
        window.location.href = "page/painel.html";
    } else {
        alert("Login ou senha incorreto");
    }
    event.preventDefault();
});