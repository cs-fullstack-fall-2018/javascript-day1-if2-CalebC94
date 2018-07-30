var cardInput =  parseInt(prompt("Give 3 cards"));

if (cardInput == 21){
    alert("BLACKJACK!!")
}
else if (cardInput > 21){
    alert("BUST!")
}
else {
    alert("The total is: " + cardInput)
}