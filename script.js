function firstWord(s) {
    // your code here
      let s1 = ""; 
	s= s.trim();
	
      for (let a of s) {
          if(a != ' '){
              s1 = s1 + a;			
          }
          else if(a === ' '){
			  return s1;
              // break;
          }
      }
      return s1;
  }
const s = prompt("Enter String:");
alert(firstWord(s));
