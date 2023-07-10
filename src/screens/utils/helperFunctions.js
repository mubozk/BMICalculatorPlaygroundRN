
export const calculateBMI = (height, weight) => {
    const heightInMeters = height / 100;
    const bmi = weight / heightInMeters ** 2;
    return bmi.toFixed(2);
  };
  