
export const getTemperatureRating = (temperature: number): string => {
  if (temperature >= 90) return "Deadset Ripper!";
  if (temperature >= 80) return "Bloody Good Deal!";
  if (temperature >= 70) return "Not Bad, Mate";
  if (temperature >= 50) return "Fair Dinkum Bargain";
  return "Bit Ordinary, Skip";
};

export const getTemperatureColor = (temperature: number): string => {
  if (temperature >= 80) return "bg-gradient-to-r from-green-400 to-blue-500";
  if (temperature >= 60) return "bg-gradient-to-r from-yellow-400 to-red-500";
  return "bg-gradient-to-r from-blue-300 to-gray-400";
};
