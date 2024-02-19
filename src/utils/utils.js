export const saveUserDataToLocalStorage = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
};

export const getUserDataFromLocalStorage = () => {
    const userDataString = localStorage.getItem('userData');
    return userDataString ? JSON.parse(userDataString) : null;
};

export const clearUserDataFromLocalStorage = () => {
    localStorage.removeItem('userData');
};

export const formatUsername = (name) => {
    name = name.replace(/ı/g, 'i')
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/İ/g, 'I')
        .replace(/Ğ/g, 'G')
        .replace(/Ü/g, 'U')
        .replace(/Ş/g, 'S')
        .replace(/Ö/g, 'O')
        .replace(/Ç/g, 'C')
        .toLowerCase()
        .replace(/\s/g, '');
    return name;
}

export const renderContent = (content) => {
    const regex = /(@\w+)|(http\S+)/g;

    const parts = content.split(regex);

    return parts.map((part, index) => {
        if (regex.test(part)) {
            return (
                <span key={index} className="text-primary">
                    {part}
                </span>
            );
        } else {
            return part;
        }
    });
};