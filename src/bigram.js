

export const bigram = (input) => {
  let arr = input.split(" ");
    let obj = {};
    for (let i = 0; i < arr.length - 1; i++) {
      let bigr = arr[i] + " " + arr[i + 1];
      (obj[bigr]) ? obj[bigr]++ : obj[bigr] = 1;

    }
    console.log(obj);
    return obj;
  }
