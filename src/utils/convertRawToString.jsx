export const convertRawToString = (labelValue, isSub = false) => {
    if (!labelValue) return "0"; // Handle empty values
    
    const num = Math.abs(Number(labelValue)); // Fix typo: "Maths" → "Math"
    
    if (num >= 1.0e9) {
        return (num / 1.0e9).toFixed(1) + "B"; // Billions
    } else if (num >= 1.0e6) {
        return (num / 1.0e6).toFixed(1) + "M"; // Millions
    } else if (num >= 1.0e3) {
        return (num / 1.0e3).toFixed(1) + "K"; // Thousands
    } else {
        return num.toString(); // Return as-is if less than 1K
    }
};
