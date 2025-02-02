const axios = require('axios');
const { isPrime, isPerfect, isArmstrong, getDigitSum } = require('../utils/mathUtils');

const classifyNumber = async (number) => {
  const properties = [];

  // Check mathematical properties
  if (isArmstrong(number)) properties.push('armstrong');
  if (number % 2 === 0) properties.push('even');
  else properties.push('odd');

  // Fetch fun fact from Numbers API
  const funFact = await getFunFact(number);

  return {
    number,
    is_prime: isPrime(number),
    is_perfect: isPerfect(number),
    properties,
    digit_sum: getDigitSum(number),
    fun_fact: funFact,
  };
};

const getFunFact = async (number) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${number}/math`);
    return response.data;
  } catch (error) {
    return 'No fun fact available for this number.';
  }
};

module.exports = { classifyNumber };