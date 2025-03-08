export const timeSince = (date) => {
    const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);

    let interval = seconds / 31536000; // Years
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }

    interval = seconds / 2592000; // Months
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }

    interval = seconds / 86400; // Days
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }

    interval = seconds / 3600; // Hours
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }

    interval = seconds / 60; // Minutes
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }

    return Math.floor(seconds) + " seconds ago";
};
