function cadastro( nome,idade){
    if(nome == undefined || idade == undefined){
        console.log("Preencha o nome e a idade");
    }else{
        console.log("Olá" + nome + "Bem vindo");
    }
}
cadastro("Caio",5);
cadastro("Caio");