export const getBreeds = async() => {
    const url = 'https://dog.ceo/api/breeds/list/all';
    const response = await fetch(url);
    const { message } = await response.json();
    return message;
}