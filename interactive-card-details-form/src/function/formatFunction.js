
export const formatCardNumber = (value) => {
    // Rimuove tutti gli spazi e poi aggiunge uno spazio ogni 4 cifre
    return value.replace(/\s+/g, "").replace(/(\d{4})(?!e)/g, "$1 ").trim();
};

export const formatMonthNumber = (value) => {
    if (value < 10) {
        return `0${value}`;
    } else if (value > 12) {
        return "12";
    } else {
        return value;
    }
};

export const formatYearNumber = (value) => {
    if (value < 23) {
        return `24`;
    }
};

