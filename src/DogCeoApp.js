import React, { useCallback, useState } from "react";
import { Breeds } from "./components/Breeds";
import Select from "react-select";
import { SubBreeds } from "./components/SubBreeds";
import { Images } from "./components/Images";

import "./index.css";

export const DogCeoApp = () => {
    const [breeds, setBreeds] = useState({});
    const [subBreeds, setSubBreeds] = useState([]);
    const [selectedBreeds, setSelectedBreeds] = useState([]);
    const [selectedSubBreeds, setSelectedSubBreeds] = useState([]);
    const loadBreedsHandle = useCallback((breeds) => setBreeds(breeds), []);
    const loadSubBreedsHandle = useCallback((subBreeds) => setSubBreeds(subBreeds),[]);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const mainSelect = Object.keys(breeds).map((breed) => {
        return {
            value: breed,
            label: capitalizeFirstLetter(breed),
        };
    });

    const subSelect = subBreeds
        .map((a) => {
            return a.subBreed.map((b) => {
                return {
                    value: `${a.breed}/${b}`,
                    label: capitalizeFirstLetter(`${a.breed} ${b}`),
                };
            });
        })
        .flat();

    const handleChangeBreeds = (value) => {
        const selected = [];
        value.map((val) => {
            selected.push(val.value);
        });
        setSelectedBreeds(selected);
    };

    const handleChangeSubBreeds = (value) => {
        const selected = [];
        value.map((val) => {
            selected.push(val.value);
        });
        setSelectedSubBreeds(selected);
    };

    return (
        <>
            <Breeds loadBreeds={loadBreedsHandle} />

            <SubBreeds
                breeds={breeds}
                selectedBreeds={selectedBreeds}
                loadSubBreeds={loadSubBreedsHandle}
            />
            <div className="topbar-container">
                <h1 className="topbar"> DogCeoApp </h1>

                <Select
                    placeholder={"Razas"}
                    options={mainSelect}
                    isMulti
                    onChange={handleChangeBreeds}
                />

                <Select
                    placeholder={"Sub razas"}
                    noOptionsMessage={() => "No se han seleccionado razas"}
                    options={subSelect}
                    isMulti
                    onChange={handleChangeSubBreeds}
                />
            </div>

            <Images
                selectedBreeds={selectedBreeds}
                selectedSubBreeds={selectedSubBreeds}
            />
        </>
    );
};
