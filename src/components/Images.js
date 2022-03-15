import React, { useEffect, useState } from "react";
import { getImages } from "../helpers/getImages";
import { PropTypes } from "prop-types";

import "../index.css";

const allBreedsSelected = (selectedBreeds, selectedSubBreeds) => {
    const result = [];

    selectedBreeds.forEach((breed) => {
        const index = result.indexOf(breed);
        if (index === -1) {
            result.push(breed);
        }
    });

    selectedSubBreeds.forEach((subBreed) => {
        const raza = subBreed.split("/", 1)[0];
        const breedIndex = result.indexOf(raza);
        if (breedIndex !== -1) {
            result.splice(breedIndex, 1);
        }
        const subBreedIndex = result.indexOf(subBreed);
        if (subBreedIndex === -1) {
            result.push(subBreed);
        }
    });
    return result;
};

const fetchImages = async (array) => {
    const resultsArray = [];
    for (let item in array) {
        const results = await getImages(array[item]);
        resultsArray.push({ name: array[item], images: results });
    }
    return resultsArray;
};

const getImagesArray = async (selectedBreeds, selectedSubBreeds) => {
    try {
        const allBreeds = allBreedsSelected(selectedBreeds, selectedSubBreeds);
        const arrImages = await fetchImages(allBreeds);
        return arrImages.flat();
    } catch (error) {
        return error;
    }
};

export const Images = ({ selectedBreeds, selectedSubBreeds }) => {
    const [images, setImages] = useState([{ name: "", images: [] }]);

    useEffect(async () => {
        const arrayImages = await getImagesArray(
            selectedBreeds,
            selectedSubBreeds
        );
        setImages(arrayImages);
    }, [selectedBreeds, selectedSubBreeds]);

    return (
        <div>
            {images.length === 0 ? (
                <h1 className="images-placeholder">
                    {" "}
                    Aún no hay razas seleccionadas
                </h1>
            ) : (
                <div className="cards-list">
                    {images.map((breed, index) => {
                        return breed.images.map((image, index) => {
                            return (
                                <div className="card">
                                    <div className="card_image">
                                        <img
                                            src={image}
                                            alt={image}
                                            key={`${index}.${image}`}
                                        />
                                    </div>
                                    <div className="card_title title-white">
                                        <p>{breed.name}</p>
                                    </div>
                                </div>
                            );
                        });
                    })}
                </div>
            )}
        </div>
    );
};

Images.prototypes = {
    selectedBreeds: PropTypes.array.isRequired,
    selectedSubBreeds: PropTypes.array.isRequired
}