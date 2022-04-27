let daysBetweenDates = (date1, date2) => {
    let timeDiff = new Date(date2).getTime() - new Date(date1).getTime();
    let daysDiff = timeDiff / (1000 * 3600 * 24);
    return Math.abs(daysDiff);
};