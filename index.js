function dice() {
	var msg = "you lose";
	var dice = [];
	dice[0] = Math.floor(Math.random()*6)+1;
	dice[1] = Math.floor(Math.random()*6)+1;
	dice[2] = Math.floor(Math.random()*6)+1;
	dice[3] = dice[0]+dice[1]+dice[2];
  document.getElementById("dice1").innerHTML = dice[0];
  document.getElementById("dice2").innerHTML = dice[1];
  document.getElementById("dice3").innerHTML = dice[2];
  document.getElementById("total").innerHTML = dice[3];
  if(dice[3] > 9){
	msg = "you win";
  }
  document.getElementById("winner").innerHTML = msg;
  
}