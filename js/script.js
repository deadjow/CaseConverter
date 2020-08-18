//variables 
var input = document.getElementById("input-text");
var uppercase = document.getElementById("btn-uppercase");
var lowercase = document.getElementById("btn-lowercase");
var alternate = document.getElementById("btn-alternate");
var fword = document.getElementById("btn-f-word");
var fphrase = document.getElementById("btn-f-phrase");
var invert = document.getElementById("btn-invert");
var copy = document.getElementById("btn-copy");

//all text to uppercase
uppercase.onclick = function(){
    input.value = input.value.toUpperCase();
}

//all text to lowercase
lowercase.onclick = function(){
    input.value = input.value.toLowerCase();
}

//alternate upper and lower case
alternate.onclick = function(){      
    var temp = input.value.toLowerCase().split(""); //creates an array with a letter in each position and set all to lowercase

    for(i = 0; i < temp.length; i++){
        if(i % 2 == 0){ //even positions to uppercase
            temp[i] = temp[i].toUpperCase();            
        }
    }

    input.value = temp.join("");

}

//capitalize first letter of each word

fword.onclick = function(){
    var temp = input.value.toLowerCase().split(" ") ; //creates an array with a word in each position and set all to lowercase, except words after line breaks
    var word;
    var concatword = [];

        for(i = 0; i < temp.length; i++){         
            word = temp[i].charAt(0).toUpperCase(); //take the first letter of the word and set it to uppercase            
            if((i + 1) != temp.length){
                word = word + temp[i].slice(1) + " "; //completes the word and add space after it
            }
            else{
                word = word + temp[i].slice(1); //except if it is the last 
            }
            concatword = concatword.concat(word); //concatenate arrays    
        }   

        var tmp = concatword.join('').split("\n"); //isolate words after line breaks

        for(i = 0; i < tmp.length; i++){
            if(i + 1 != tmp.length){
                tmp[i] = tmp[i].charAt(0).toUpperCase() + tmp[i].slice(1) + "\n"; //take the first letter of the word and set it to uppercase
            }else {
                tmp[i] = tmp[i].charAt(0).toUpperCase() + tmp[i].slice(1);
            }
        }

    concatword = tmp;
    input.value = concatword.join('');

}

//capitalize first letter of each phrase
fphrase.onclick = function(){
    var temp = input.value.toLowerCase().split(". ") ; //creates an array with a word in each position and set all to lowercase, except words after line breaks
    var word;
    var concatword = [];

    for(i = 0; i < temp.length; i++){      
        word = temp[i].charAt(0).toUpperCase(); //take the first letter of the word and set it to uppercase
        if((i + 1) != temp.length){
            word = word + temp[i].slice(1) + ". "; //completes the word
        } else{
            word = word + temp[i].slice(1);
        }
        concatword = concatword.concat(word); //concatenate arrays
    }   

    var tmp = concatword.join('').split("\n"); //isolate words after line breaks

            for(i = 0; i < tmp.length; i++){
                if(i + 1 != tmp.length){
                    tmp[i] = tmp[i].charAt(0).toUpperCase() + tmp[i].slice(1) + "\n";
                }
                else{
                    tmp[i] = tmp[i].charAt(0).toUpperCase() + tmp[i].slice(1);
                }
            }

    concatword = tmp;
    input.value = concatword.join('');
}

//invert text case
invert.onclick = function(){
    var temp = input.value.split(""); //creates an array with a word in each position

    for(i = 0; i < temp.length; i++){
        if(temp[i].toUpperCase() == temp[i]){ // if uppercase
            temp[i] = temp[i].toLowerCase(); // set to lowercase     
        } else{
            temp[i] = temp[i].toUpperCase(); //otherwise set it to uppercase
        }
    }

    input.value = temp.join("");

}

//copy input value to clipboard
copy.onclick = function(){
    input.focus()
    input.select();    
    document.execCommand('copy');
    input.blur();
}