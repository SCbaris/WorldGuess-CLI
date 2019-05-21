var Letter = function(letter){
    var maskedLetter=[];
    this.letter=letter;
    for ( let i = 0 ;  i<this.letter.length;i++){
        if (this.letter.charAt(i)===" ") maskedLetter[i]= " ";
        else maskedLetter[i] = "_";
    }
    this.maskedLetter=maskedLetter; 
}
var jur = new Letter ("jurassic park");

//console.log(jur);
console.log(jur.letter);
console.log(jur.maskedLetter);
