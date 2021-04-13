seq1 =()=> {
  let count = 0;
  cc =(card)=> {
  (card > 1 && card < 7) ?
  count ++:
  (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
  count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq1",cc(2) + cc(3) + cc(4)+ cc(5)+ cc(6)).textContent = result;
}
function res1(clear) {
  document.querySelector("#seq1").textContent = " ";
}


seq2 =()=> {
  let count = 0;
  cc =(card)=> {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq2",cc(7) + cc(8) + cc(9)).textContent = result;
}
function res2(clear) {
  document.querySelector("#seq2").textContent = " ";
}


seq3 =()=> {
  let count = 0;
  cc =(card)=> {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq3",cc(10) + cc('J') + cc('Q') + cc('K') + cc('A')).textContent = result;
}
function res3(clear) {
  document.querySelector("#seq3").textContent = " ";
}


seq4 =()=> {
  let count = 0;
  cc =(card)=> {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq4",cc(3) + cc(7) + cc('Q') + cc(8) + cc('A')).textContent = result;
}
function res4(clear) {
  document.querySelector("#seq4").textContent = " ";
}


seq5 =()=> {
  let count = 0;
  cc =(card)=> {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq5",cc(2) + cc('J') + cc(9) + cc(2) + cc(7)).textContent = result;
}
function res5(clear) {
  document.querySelector("#seq5").textContent = " ";
}


seq6 =()=> {
  let count = 0;
  cc =(card)=> {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq6",cc(2) + cc(2) + cc(10)).textContent = result;
}
function res6(clear) {
  document.querySelector("#seq6").textContent = " ";
}


seq7 =()=> {
  let count = 0;
  cc =(card)=> {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0)? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq7",cc(3) + cc(2) + cc("A") + cc(10) + cc("K")).textContent = result;
}
function res7(clear) {
  document.querySelector("#seq7").textContent = " ";
}