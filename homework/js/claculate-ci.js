function claculateCompoundInterest(principal, rate, time) {
  return principal.map(p => {
    let amount = p;
    for (let i =1; i<=time; i++) {
      amount += amount * rate / 100;
    }
    return amount - p;
  });
}

let principal = [100, 200, 300];
let rate = 5;
let time = 2;
let interest = claculateCompoundInterest(principal, rate, time);
console.log(interest);


