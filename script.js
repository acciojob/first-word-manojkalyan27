function firstWord(s) {
  // your code here
	let s1 = ''; 
	for (let a of s) {
		
		if(a != ' '){
			s1 = s1 + a;			
		}
		else if(a === ' '){
			return s1;
			break;
		}
	}
	return s1;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
