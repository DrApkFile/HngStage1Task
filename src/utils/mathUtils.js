const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const isPerfect = (num) => {
    if (num < 2) return false;
    let sum = 1;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        sum += i + num / i;
      }
    }
    return sum === num;
  };
  
  const isArmstrong = (num) => {
    const digits = String(num).split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === num;
  };
  
  const getDigitSum = (num) => {
    return String(num)
      .split('')
      .reduce((acc, digit) => acc + Number(digit), 0);
  };
  
  module.exports = { isPrime, isPerfect, isArmstrong, getDigitSum };