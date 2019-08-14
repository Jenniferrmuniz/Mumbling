let mumble = "";
console.log(accum("hello"));


function accum(str){
  
  for(let i=0; i<str.length; i++){
    
    mumble = mumble.concat(partOfMumble(i,str[i]));
    if(i !== str.length-1){
      mumble = mumble.concat("-");
    }
  }
  return mumble;
}


function partOfMumble(num, letter){
  
  let str=letter.toUpperCase();
  letter = letter.toLowerCase();
  for(let i=0; i<num; i++){
    str = str.concat(letter);
  }
  return str;
}

