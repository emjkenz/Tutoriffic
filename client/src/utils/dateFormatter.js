export const formatDueDate = (date) => {
    const dueDate = new Date(date);
    const currentDate = new Date();
    const diffTime = Math.abs(dueDate - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "today"
    else if (diffDays === 1) return "1 day"
    else if (currentDate > dueDate) return "overdue"
    else return `${diffDays} days`;
}