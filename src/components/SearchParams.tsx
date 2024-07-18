import React, { useEffect, useState } from 'react'
import { MenuOptionsAvailable } from '../utils/interface'
import { useNavigate } from 'react-router'
import { get } from '../utils/adapter'
import { SpeciesSelectionResponse } from '../utils/interface'
import PetSearchForm from './PetSearchForm'

//User inputs her choice from all the inputs available and the component make a call for pets that meet the creteria and are 
//available for adoption.

let menuOptionsAvailable: MenuOptionsAvailable = {
    age: [],
    gender: [],
    geoRange: [],
    color: [],
    breed: []
}

const SearchParams = ({ apiResponse, speciesSelected }: { apiResponse: SpeciesSelectionResponse | {}, speciesSelected: string }) => {

    const navigate = useNavigate()

    const [userFormInput, setUserFormInput] = useState({
        desiredAge: "",
        desiredGender: "",
        desiredGeoRange: "35",
        desiredColor: "",
        desiredBreed: "",
        zipCode: ""
    })

    const [species, setSpecies] = useState<string>("")

    useEffect(() => {

        if (Object.keys(apiResponse).length === 0 && apiResponse.constructor === Object) {
            return
        }

        menuOptionsAvailable.age = (apiResponse as SpeciesSelectionResponse).age
        menuOptionsAvailable.gender = (apiResponse as SpeciesSelectionResponse).sex
        menuOptionsAvailable.color = (apiResponse as SpeciesSelectionResponse).color_id
        menuOptionsAvailable.breed = (apiResponse as SpeciesSelectionResponse).breed_id
        menuOptionsAvailable.geoRange = (apiResponse as SpeciesSelectionResponse).geo_range

        setSpecies(speciesSelected)
    }, [apiResponse]) //eslint-disable-line react-hooks/exhaustive-deps

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let response = await get(`https://api-staging.adoptapet.com/search/pet_search?key=${process.env.REACT_APP_API_KEY}&v=3&output=json&city_or_zip=${userFormInput.zipCode}&geo_range=${userFormInput.desiredGeoRange}&species=${species}&breed_id=${userFormInput.desiredBreed}&sex=${userFormInput.desiredGender}&age=${userFormInput.desiredAge}&color_id=${userFormInput.desiredColor}&start_number=1&end_number=50`)

        navigate('/pets-list', {
            state: {
                data: response
            }
        })
    }

    return (
        <PetSearchForm handleFormSubmit={handleFormSubmit} userFormInput={userFormInput} setUserFormInput={setUserFormInput} menuOptionsAvailable={menuOptionsAvailable} />
    )
}

export default SearchParams