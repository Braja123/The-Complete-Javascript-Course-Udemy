// write a program to display how many notes required
// for to withdraw a perticular amount
// it should take all the notes from them the ATM
// then after that check the maximum number of notes require to fulfill the withdraw amount

// acct - 2850
// withdraw - 2850

// let amount = 2900;
// let withAmt = 2900;
// let arr = [2000, 500, 200, 100, 50];

// sum = 2850
// check how many 2000 , 500, 200, 100, 50 notes are there

// if withAmt == sum
// return `2000` is 1, 500 is 1, 200 is 1, 100 is 1, 50 is 1
// else withAmt - sum = 50
// now return `2000` is 1, 500 is 1, 200 is 1, 100 is 1, 50 is 2

const practice = (withdraw) => {
  let amount = [2000, 500, 200, 100];
  let sum = amount.reduce((acc, amt) => acc + amt, 0);

  // let freq = {};
  // for (let char of amount) {
  //   freq[char] = (freq[char] || 0) + 1;
  // }
  // if (withdraw == sum) {
  //   return `2000 note is 1, 500 note is 1, 200 note is 1, 100 note is 1, 50 note is 1,`;
  // }
  let remainAmt = withdraw - sum;
  if (remainAmt === 0) {
    return true;
  } else {
    // check how many amount require to fullfill
    console.log(remainAmt);
    if (remainAmt <= amount[0]) {
      if (remainAmt <= amount[1]) {
        if (remainAmt <= amount[2]) {
          if (remainAmt === amount[3]) {
            return true;
          } else {
          }
        } else {
        }
      } else {
      }
    } else {
    }
  }
  // else {
  //   console.log("inside else");
  //   let checkAmt = withdraw - sum;
  //   console.log("checkAmt", checkAmt);
  //   for (let key in freq) {
  //     console.log(key);
  //     if (checkAmt === key) {
  //       console.log(freq[key]);
  //       freq[key] += 1;
  //     }
  //   }
  //   // console.log(freq);
  // }
  // console.log(freq);
};
console.log(practice(4000));
