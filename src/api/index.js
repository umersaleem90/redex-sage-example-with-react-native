const KEY = '?client_id=plJ7-nALkr0B_m3n16kFGzLgbNIko6gLcDcRnEosiA4';
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=4&page=${page}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages };
