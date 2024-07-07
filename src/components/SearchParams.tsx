import React, { useEffect, useState } from 'react'
import { SubObject } from '../utils/interface'
import { useNavigate } from 'react-router'
import { get } from '../utils/adapter'

//User inputs her choice from all the inputs available and the component make a call for pets that meet the creteria and are 
//available for adoption.

const SearchParams = ({ apiResponse, speciesSelected }: { apiResponse: any, speciesSelected: string }) => {
    const navigate = useNavigate()

    const [desiredAge, setDesiredAge] = useState<string>("")
    const [desiredGender, setDesiredGender] = useState<string>("")
    const [desiredGeoRange, setDesiredGeoRange] = useState<string>("35")
    const [desiredColor, setDesiredColor] = useState<string>("")
    const [desiredBreed, setDesiredBreed] = useState<string>("")
    const [cityOrZipCode, setCityOrZipCode] = useState<string>("")
    const [species, setSpecies] = useState<string>("")

    const [ageOptionsAvailable, setAgeOptionsAvailable] = useState<SubObject[]>([])
    const [genderOptionsAvailable, setGenderOptionsAvailable] = useState<SubObject[]>([])
    const [geoRangeOptionsAvailable, setGeoRangeOptionsAvailable] = useState<SubObject[]>([])
    const [colorOptionsAvailable, setColorOptionsAvailable] = useState<SubObject[]>([])
    const [breedOptionsAvailable, setBreedOptionsAvailable] = useState<SubObject[]>([])

    useEffect(() => {
        setAgeOptionsAvailable(apiResponse.age)
        setGenderOptionsAvailable(apiResponse.sex)
        setGeoRangeOptionsAvailable(apiResponse.geo_range)
        setColorOptionsAvailable(apiResponse.color_id)
        setBreedOptionsAvailable(apiResponse.breed_id)
        setSpecies(speciesSelected)
    }, [apiResponse]) //eslint-disable-line react-hooks/exhaustive-deps

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let response = await get(`https://api-staging.adoptapet.com/search/pet_search?key=${process.env.REACT_APP_API_KEY}&v=3&output=json&city_or_zip=${cityOrZipCode}&geo_range=${desiredGeoRange}&species=${species}&breed_id=${desiredBreed}&sex=${desiredGender}&age=${desiredAge}&color_id=${desiredColor}&start_number=1&end_number=50`)

        navigate('/pets-list', {
            state: {
                data: response
            }
        })
    }

    return (
        <div className="m-2 p-6 shadow-lg min-w-[60%]">
            <form className="grid grid-cols-2 gap-3  " onSubmit={handleFormSubmit}>
                <label className="flex flex-col gap-2 text-white" htmlFor="age">
                    Age
                    <select
                        className="text-black rounded-md w-[80%] outline-none p-2"
                        onChange={(e) => setDesiredAge(e.target.value)}
                        id="age"
                        value={desiredAge}
                    >
                        {apiResponse !== null && ageOptionsAvailable.map((age: SubObject, index: number) => (
                            <option className="text-red-600" key={index} value={age.value}>{age.label}</option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-2 text-white" htmlFor="gender">
                    Gender
                    <select
                        className="text-black rounded-md w-[80%] outline-none p-2"
                        onChange={(e) => setDesiredGender(e.target.value)}
                        id="gender"
                        value={desiredGender}
                    >
                        {apiResponse !== null && genderOptionsAvailable.map((gender: SubObject, index: number) => (
                            <option key={index} value={gender.value}>{gender.label}</option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-2 text-white" htmlFor="geo_range">
                    Location preference
                    <select
                        className="text-black rounded-md w-[80%] outline-none p-2"
                        onChange={(e) => setDesiredGeoRange(e.target.value)}
                        id="geo_range"
                        value={desiredGeoRange}
                    >
                        {apiResponse !== null && geoRangeOptionsAvailable.map((geoRange: SubObject, index: number) => (
                            <option key={index} value={geoRange.value}>{geoRange.label}</option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-2 text-white" htmlFor="breeds">
                    Breeds
                    <select
                        className="text-black rounded-md w-[80%] outline-none p-2"
                        onChange={(e) => setDesiredBreed(e.target.value)}
                        id="breed"
                        value={desiredBreed}
                    >
                        {apiResponse !== null && breedOptionsAvailable.map((breed: SubObject, index: number) => (
                            <option key={index} value={breed.value}>{breed.label}</option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-2 text-white" htmlFor="colors">
                    Colors
                    <select
                        className="text-black rounded-md w-[80%] outline-none p-2"
                        onChange={(e) => setDesiredColor(e.target.value)}
                        id="color"
                        value={desiredColor}
                    >
                        {apiResponse !== null && colorOptionsAvailable.map((color: SubObject, index: number) => (
                            <option key={index} value={color.value}>{color.label}</option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-2 text-white" htmlFor="city">
                    City/Zip Code
                    <input
                        className="text-black rounded-md w-[80%] outline-none p-2"
                        type="text"
                        placeholder="Enter your city or zip"
                        onChange={(e) => setCityOrZipCode(e.target.value)}
                        id="city_or_zip"
                        value={cityOrZipCode}
                    />
                </label>
                <button disabled={cityOrZipCode === ""} type="submit" className="max-w-fit text-white px-4 py-2 bg-[#626087] rounded-lg shadow-md hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed">Find my Pawfect Match</button>
            </form>

        </div >
    )
}

export default SearchParams