const numberService = require('../services/numberService');

const classifyNumber = async (req, res) => {
  const { number } = req.query;

  // Validate input
  if (!number || isNaN(number)) {
    return res.status(400).json({
      number: number || 'alphabet',
      error: true,
    });
  }

  const num = parseInt(number, 10);

  try {
    const result = await numberService.classifyNumber(num);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { classifyNumber };