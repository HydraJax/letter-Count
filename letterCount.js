function letterCounter(str){
//   go thru all the words and find the largest number
  
  function count(word) {
     var letterCount = {}, 
             greatest = 0;
     for ( var j = 0; j < word.length; j++){
          if ( letterCount.hasOwnProperty( word[j] ) ) {
// if we're in here, word[j] is a character we already encountered
             letterCount[ word[j] ]++;

          if ( letterCount[ word[j] ]  > greatest ) {
          greatest = letterCount[ word[j] ];
          }
      } else {
    // if we're in here, word[j] didnt exist in the obj

        letterCount[ word[j] ] = 1;
      }
    }
    return greatest;
  }  
  
  
  var splitted = str.split(" "),
         number,
        candidate,
       highest = 0;
  
  for ( var i = 0; i < splitted.length; i++){
      number = count(splitted[i]);
      if ( number > highest ) {
        candidate = i;
        highest = number;
      }
  }
    return ( splitted[candidate] );
}

letterCounter("the greatest gift weee");