import React, { useCallback, useEffect } from "react";
import { getBreeds } from "../helpers/getBreeds";
import { PropTypes } from "prop-types";

export const Breeds = ({ loadBreeds }) => {
    const loadBreedsHandle = useCallback(async (loadBreeds) => {
        try {
            const data = await getBreeds();
            loadBreeds(data);
        } catch (error) {
            return error;
        }
    }, []);

    useEffect(() => {
        loadBreedsHandle(loadBreeds);
    }, [loadBreedsHandle]);

    return <div></div>;
};

Breeds.propTypes = {
    loadBreeds: PropTypes.func.isRequired,
};
