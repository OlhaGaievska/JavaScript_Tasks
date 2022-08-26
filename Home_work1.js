let a = 3
let b = 5
let c = 14

if (a=>b && a>c){
  console.log(a)
}
else if (b=>c && b>a){
  console.log(b)
}
else if (c=>a && c>b){
  console.log(c)
}
else (console.log('arror'))