//Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. 
//Verifique se o planeta que o usuário informou está na array e informe ao usuário.

//varial e array
var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
var planeta = "";

//entrada de dados
planeta = prompt("Insira o nome de um planeta: ");

//condições e sáida
if (planetas.includes(planeta)){
    alert("O planeta que você digitou está dentro do array!");
}else{
    alert("O planeta que você digitou não está dentro do array!");
}