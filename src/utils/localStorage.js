export const loadState = () => {
    try {
        const getItem = localStorage.getItem('cart');
        if (getItem === null) {
            return undefined;
        }
        return JSON.parse(getItem);
    } catch (err) {
        console.error('Could not load state from localStorage:', err);
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const getItem = JSON.stringify(state);
        localStorage.setItem('cart', getItem);
    } catch (err) {
        console.error('Could not save state to localStorage:', err);
    }
};
