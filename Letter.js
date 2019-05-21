var Letter = function(letter){
    var maskedLetter=[];
    var letterArr=[];
    var done=false; // done respresent to letter that already known or not. 
                    // if user find this letter, done going to turn to true.
    this.letter=letter;
    for ( let i = 0 ;  i<this.letter.length;i++){
        if (this.letter.charAt(i)===" ") maskedLetter[i]= " ";
        else maskedLetter[i] = "_";
        letterArr[i]=this.letter.charAt(i);
    }
    this.maskedLetter=maskedLetter; 
    this.letterArr=letterArr;
    this.done=done; 
    this.knownLetter=maskedLetter; // if user know one letter it will change. to true letter from letterArr.
                                   // this is only initial value.
    this.letterGuess = function(guess){
        for ( let i = 0 ;  i<this.letter.length;i++){
            if (letterArr[i]===guess) maskedLetter[i]=letterArr[i];
        }
    }
}

var jur = new Letter ("jurassic park"); // for test purpose

//console.log(jur); // for test purpose
//console.log(jur.letter); // for test purpose
console.log(jur.maskedLetter); // for test purpose
console.log(jur.letterArr);

jur.letterGuess("i");
console.log(jur.maskedLetter);

jur.letterGuess("s");
console.log(jur.maskedLetter);

jur.letterGuess("t");
console.log(jur.maskedLetter);
