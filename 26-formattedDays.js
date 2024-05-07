const formatted = (days) => {
    let years = Math.floor(days / 365);
    let months = Math.floor((days % 365) / 30);
    let daysLeft = Math.floor((days % 365) % 30);

    return `${days} days are equal to ${years} years, ${months} months & ${daysLeft} days.`
}

console.log(formatted(20920));