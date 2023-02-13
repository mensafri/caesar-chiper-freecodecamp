function rot13(str) {
  const abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let hasil = "";
  for(let i=0;i<str.length;i++){
    if(abjad.indexOf(str[i]) === -1){
      hasil += str[i];
    }else{
      let awal = (abjad.indexOf(str[i]) + 13) % 26;
      hasil += abjad[awal];
    }
  }
  return hasil;
}

console.log(rot13("SERR PBQR PNZC"));