export const amountFormatter = (num: number | undefined) => {
  let amount;
  if (num) {
    amount = String(num);
    if (amount.length) {
      let num = "";
      let counter = 0;
      for (let i = amount.length - 1; i >= 0; i--) {
        counter++;
        if (counter % 3 === 0) {
          num += `${amount[i]},`;
        } else num += `${amount[i]}`;
      }
      num = num.split("").reverse().join("");
      if (num[0] === ",") {
        num = num.replace(num[0], "");
      }
      return num;
    }
    return amount;
  }
  return 0;
};
