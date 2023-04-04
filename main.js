function calcByQuantity(quantity) {
  let total = quantity;
  let bayar = 0;
  if (total >= 35) {
    bayar = 35 * 650;
    total -= 35;
    bayar = total * 600;
  } else {
    bayar = total * 650;
  }
  let message = `Jumlah uang yang harus dibayarkan untuk order ${quantity} adalah ${bayar}!`;

  return message;
}

function calcByMoney(money) {
  let message = ``;
  let bayar = 35 * 650;
  let jumlah = 35;
  let sisaUang = money - bayar;
  if (sisaUang < 0) {
    message = `Uang sebesar ${money} tidak cukup untuk membeli barang!`;
  } else {
    if (sisaUang === 0) {
      message = `Jumlah barang yang dapat dibeli adalah 35, uang habis!`;
    } else {
      let a = parseInt(sisaUang / 600);
      sisaUang = a * 600 - sisaUang;
      message = `Jumlah barang yang dapat dibeli adalah ${jumlah}, sisa uang ${sisaUang}!`;
    }
  }
  return message;
}

function bulkOrderCalculator(type, data) {
  let message;
  if (type === "quantity") {
    message = calcByQuantity(data);
  } else if (type === "money") {
    message = calcByMoney(data);
  } else {
    message = `Invalid type!`;
  }
  return message;
}

// example test case

// console.log(bulkOrderCalculator('money', 100000)); // Jumlah barang yang dapat dibeli adalah 163, sisa uang 450!
console.log(bulkOrderCalculator("quantity", 100)); // Jumlah uang yang harus dibayarkan untuk order 100 adalah 61750!
// console.log(bulkOrderCalculator('money', 100)); // Uang sebesar 100 tidak cukup untuk membeli barang!
// console.log(bulkOrderCalculator('money', 1000)); // Jumlah barang yang dapat dibeli adalah 1, sisa uang 350!
// console.log(bulkOrderCalculator('money', 1300)); //Jumlah barang yang dapat dibeli adalah 2, uang habis!

module.exports = {
  bulkOrderCalculator,
  calcByQuantity,
  calcByMoney,
};
