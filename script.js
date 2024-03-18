function firstWord(s) {
    // your code here
      let s1 = ''; 
      let flag = true;

      for (let a of s) {
          
          if(a != ' '){
              s1 = s1 + a;			
          }
          else if(a === ' '){
              console.log(s1);
              break;
          }
      }
      console.log(s1);
  }

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
