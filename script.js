function firstWord(s) {
    // your code here
      function firstWord(s) {
    // your code here
      let s1 = "'"; 
      let s2 = "'"
      let flag = true;

      for (let a of s) {
          
          if(a != ' '){
              s1 = s1 + a;			
          }
          else if(a === ' '){

              return s1 + s2;
              break;
          }
      }
      return s1 + s2;
  }

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
