import React, { useCallback, useEffect } from "react";
import { PropTypes } from "prop-types";

export const SubBreeds = ({ breeds, selectedBreeds, loadSubBreeds }) => {
    const loadSubBreedsHandle = useCallback(
        (loadSubBreeds) => {
            const selected = selectedBreeds
                .map((breed) => {
                    return {
                        subBreed: breeds[breed],
                        breed: breed,
                    };
                })
                .flat();

            loadSubBreeds(selected);
        },
        [selectedBreeds]
    );

    useEffect(() => {
        loadSubBreedsHandle(loadSubBreeds);
    }, [loadSubBreedsHandle]);

    return <div></div>;
};

SubBreeds.propTypes = {
    breeds: PropTypes.object.isRequired,
    selectedBreeds: PropTypes.array.isRequired,
    loadSubBreeds: PropTypes.func.isRequired,
};
