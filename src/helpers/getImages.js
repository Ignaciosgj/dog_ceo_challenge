export const getImages = async(breed) => {
    const url = `https://dog.ceo/api/breed/${breed}/images`;
    const response = await fetch(url);
    const images = await response.json();
    return images.message;
}