const generateRandomNumber = (min, max) => Math.round(Math.random() * (min + max) + min);

const generateRandomMathSign = () => {
  const mathSigns = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * mathSigns.length);
  return mathSigns[randomIndex];
};

export { generateRandomNumber, generateRandomMathSign };
