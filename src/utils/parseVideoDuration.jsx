export const parseVideoDuration = (duration) => {
    if (!duration) return "00:00"; // Handle empty duration cases

    const durationParts = duration
        .replace("PT", "")
        .replace("H", ":")
        .replace("M", ":")
        .replace("S", "")
        .split(":")
        .map((part) => part.padStart(2, "0")); // Ensures leading zeros

    if (durationParts.length === 3) {
        return `${durationParts[0]}:${durationParts[1].padStart(2, "0")}:${durationParts[2].padStart(2, "0")}`;
    } else if (durationParts.length === 2) {
        return `${durationParts[0]}:${durationParts[1].padStart(2, "0")}`;
    } else {
        return `00:${durationParts[0].padStart(2, "0")}`;
    }
};
