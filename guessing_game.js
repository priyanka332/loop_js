var a = require("readline-sync");
var name = a.question("enter user name: ");
console.log("Hello***",name,"***WELCOME TO GUESSING GAME")
var num1 = a.questionInt("enter range: ");
var level = a.question("enter medium easy or hard: ");
if (level=="easy"){
    low=[]
    high=[]
    right=[]
    if (num1==10){
        var chance=5;
        console.log("you have total",chance,"turn");
        secret_number=Math.floor(Math.random()*num1)
        console.log(secret_number)
        for (i=1;i<=chance;i++){
            var guess_number=a.questionInt("enter a number between 1 to 10: ")
            if (guess_number==secret_number){
                right.push(guess_number)
                console.log("Congratulations!!**",name,"**you took",i," chance to guess my number, which was",right);
                break;
            }
            else if (guess_number<secret_number){
                low.push(guess_number)
                console.log("your guess",guess_number,"is too low");
                console.log("you have",chance-i,"turn left",low);
            }
            else if (guess_number>secret_number){
                high.push(guess_number)
                console.log("your guess",guess_number,"is too high");
                console.log("you have",chance-i,"turn left",high);
            }
        }if (i>chance){
            console.log("Opps!! Not a single turn is left");
        }
    }
    else if (num1==100){
        var chance=7;
        console.log("you have total",chance,"turn");
        secret_number=Math.floor(Math.random()*num1)
        console.log(secret_number)
        for (i=1;i<=chance;i++){
            var guess_number=a.questionInt("enter a number between 1 to 100: ")
            if (guess_number==secret_number){
                right.push(guess_number)
                console.log("Congratulations!!**",name,"**you took",i," chance to guess my number, which was",right);
                break;
            }
            else if (guess_number<secret_number){
                low.push(guess_number)
                console.log("your guess",guess_number,"is too low");
                console.log("you have",chance-i,"turn left",low);
            }
            else if (guess_number>secret_number){
                high.push(guess_number)
                console.log("your guess",guess_number,"is too high");
                console.log("you have",chance-i,"turn left",high);
            }
        }
        if (i>chance){
            console.log("Opps!! Not a single turn is left");
        }
    }
    else if (num1==1000){
        var chance=10;
        console.log("you have total",chance,"turn");
        secret_number=Math.floor(Math.random()*num1)
        console.log(secret_number)
        for (i=1;i<=chance;i++){
            var guess_number=a.questionInt("enter a number between 1 to 1000: ")
            if (guess_number==secret_number){
                right.push(guess_number)
                console.log("Congratulations!!**",name,"**you took",i,"chance to guess my number, which was",right);
                break;
            }
            else if (guess_number<secret_number){
                low.push(guess_number)
                console.log("your guess",guess_number,"is too low");
                console.log("you have",chance-i,"turn left",low);
            }
            else if (guess_number>secret_number){
                high.push(guess_number)
                console.log("your guess",guess_number,"is too high");
                console.log("you have",chance-i,"turn left",high);
            }
        }
        if (i>chance){
            console.log("Opps!! Not a single turn is left");
        }
    }
}
if (level=="hard"){
    low=[]
    high=[]
    right=[]
    if (num1==10){
        var chance=5;
        console.log("you have total",chance,"turn");
        secret_number=Math.floor(Math.random()*num1)
        console.log(secret_number)
        for (i=1;i<=chance;i++){
            var guess_number=a.questionInt("enter a number between 1 to 10: ")
            if (guess_number==secret_number){
                right.push(guess_number)
                console.log("Congratulations!!**",name,"**you took",i,"chance to guess my number, which was",right);
                break;
            }
            else if (guess_number<secret_number){
                low.push(guess_number)
                console.log("your guess",guess_number,"is too low");
                console.log("you have",chance-i,"turn left",low);
            }
            else if (guess_number>secret_number){
                high.push(guess_number)
                console.log("your guess",guess_number,"is too high");
                console.log("you have",chance-i,"turn left",high);
            }
        }
        if (i>chance){
            console.log("Opps!! Not a single turn is left");
        }
    }
    else if (num1==100){
        var chance=7;
        console.log("you have total",chance,"turn");
        secret_number=Math.floor(Math.random()*num1)
        // console.log(secret_number)
        for (i=1;i<=chance;i++){
            var guess_number=a.questionInt("enter a number between 1 to 100: ")
            if (guess_number==secret_number){
                right.push(guess_number)
                console.log("Congratulations!!**",name,"**you took",i,"chance to guess my number, which was",right);
                break;
            }
            else if (guess_number<secret_number){
                low.push(guess_number)
                console.log("your guess",guess_number,"is too low");
                console.log("you have",chance-i,"turn left",low);
            }
            else if (guess_number>secret_number){
                high.push(guess_number)
                console.log("your guess",guess_number,"is too high");
                console.log("you have",chance-i,"turn left",high);
            }
        }
        if (i>chance){
            console.log("Opps!! Not a single turn is left");
        }
    }
    else if (num1==1000){
        var chance=10;
        console.log("you have total",chance,"turn");
        secret_number=Math.floor(Math.random()*num1)
        console.log(secret_number)
        for (i=1;i<=chance;i++){
            var guess_number=a.questionInt("enter a number between 1 to 1000: ")
            if (guess_number==secret_number){
                right.push(guess_number)
                console.log("Congratulations!!**",name,"**you took",i,"chance to guess my number, which was",right);
                break;
            }
            else if (guess_number<secret_number){
                low.push(guess_number)
                console.log("your guess",guess_number,"is too low");
                console.log("you have",chance-i,"turn left",low);
            }
            else if (guess_number>secret_number){
                high.push(guess_number)
                console.log("your guess",guess_number,"is too high");
                console.log("you have",chance-i,"turn left",high);
            }
        }
        if (i>chance){
            console.log("Opps!! Not a single turn is left");
        }
    }
}