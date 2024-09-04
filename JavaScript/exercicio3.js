/* 3Vamos criar uma lista de compras. 
Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.
Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". 
Peça novamente para o usuário digitar o nome de uma fruta para ser removida. 
Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". 
Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada". 
*/

//array
var frutas = ["Manga", "Banana", "Uva", "Melancia", "Morango"];

// exibe a lista inicial de frutas
alert("Bem-vindo ao mercado! No momento temos as seguintes frutas no estoque:\n" +
      frutas.join('\n'));

      //laço while
while (frutas.length > 0) {
    var compra = prompt("Escolha uma fruta para remover da lista:");

    // condições que verifica se a fruta está na lista e remove se estiver
    if (frutas.includes(compra)) {
        frutas.splice(frutas.indexOf(compra), 1);
        alert("Fruta foi retirada da lista.");
    } else {
        alert("Fruta indisponível no nosso mercado!");
    }

    // if caso ainda houver frutas, exibe a lista atualizada
    if (frutas.length > 0) {
        alert("No momento temos as seguintes frutas no estoque:\n" +
              frutas.join('\n'));
    } else {
        //se nao tiver mais frutas
        alert("Lista de compras finalizada.");
    }
}