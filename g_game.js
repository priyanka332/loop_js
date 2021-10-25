var a = require("readline-sync");
var name = a.question("enter user name: ");
console.log("Hello***",name,"***WELCOME TO GUESSING GAME")
var num1 = a.questionInt("enter range: ");
var level = a.question("enter medium easy or hard: ");
if (num1==10){
    if (level=="easy"){
        var chance=5;
        console.log("you have total",chance,"turn");
        secret_number=Math.floor(Math.random()*num1)
        // console.log(secret_number)
        for (i=1;i<=chance;i++){
            var guess_number=a.questionInt("enter a number between 1 to 10: ")
            if (guess_number==secret_number){
                console.log("Congratulations!!**",name,"**you took",i," chance to guess my number, which was",secret_number);
                break;
            }
            else if (guess_number<secret_number){
                console.log("your guess",guess_number,"is too low");
                console.log("you have",chance-i,"turn left");
            }
            else if (guess_number>secret_number){
                console.log("your guess",guess_number,"is too high");
                console.log("you have",chance-i,"turn left");
            }
        }
        if (i>chance){
            console.log("Opps!! Not a single turn is left");
        }
    }
    if (level=="hard"){
        var chance=5;
        console.log("you have total",chance,"turn");
        secret_number=Math.floor(Math.random()*num1)
        // console.log(secret_number)
        for (i=1;i<=chance;i++){
            var guess_number=a.questionInt("enter a number between 1 to 10: ")
            if (guess_number==secret_number){
                console.log("Congratulations!!**",name,"**you took",i,"chance to guess my number, which was",secret_number);
                break;
            }
            else if (guess_number<secret_number){
                console.log("your guess",guess_number,"is too low");
                console.log("you have",chance-i,"turn left");
            }
            else if (guess_number>secret_number){
                console.log("your guess",guess_number,"is too high");
                console.log("you have",chance-i,"turn left");
            }
        }
        if (i>chance){
            console.log("Opps!! Not a single turn is left");
        }
    }
}
else{
    console.log("you are out of range");
}