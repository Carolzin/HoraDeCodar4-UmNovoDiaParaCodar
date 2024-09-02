//1 Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. 

//declarção e=de váriaveis e array
var estudantes = []; 
var estudante = ""; 

// loop para cadastrar estudantes
while (estudante !== "PARE") { 
    estudante = prompt("Digite o nome do estudante. Para parar, digite 'PARE'.");

    if (estudante !== "PARE") { 
        //inserindo estudante dentro da array
        estudantes.push(estudante); 
    }
}

// exibindo a quantidade de estudantes e a lista de nomes cadastrados
alert("A quantidade de estudantes cadastrados é: " + estudantes.length + ".\nOs estudantes são: " + estudantes);
