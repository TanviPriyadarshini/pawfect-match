import React, { useState } from 'react'
import SearchParams from '../components/SearchParams'
import useSpeciesSearchOptions from '../utils/useSpeciesSearchOptions'

// User selects the species they'd want to adopt. Using this selection, an api call is made to fetch all filter options for a more refined search
// Another component called SearchParams takes over where user can select further options and request for a list of animals available for adoption.

const HomePage = () => {
    const [speciesSelected, setSpeciesSelected] = useState<string>("")
    const [speciesSelectionResponse, status] = useSpeciesSearchOptions(speciesSelected)

    return (
        <div className="flex flex-col items-center ">
            <div className="border-10 border-[#1a1927] shadow-xl p-12 flex flex-col items-center">
                <h1 className="text-white font-montserrat font-semibold text-xl m-2">I'd like to adopt a </h1>
                <span className="flex w-full justify-center">
                    <button onClick={() => {
                        setSpeciesSelected("dog")
                    }}
                        className={`${speciesSelected === "dog" ? `text-white px-4 py-2 bg-cyan-500 rounded-lg shadow-md mr-4` : `text-white px-4 py-2 bg-[#626087] rounded-lg shadow-md hover:bg-cyan-500 mr-4`}`
                        }>
                        Furry Dog
                    </button>
                    <button onClick={() => {
                        setSpeciesSelected("cat")
                    }} className={`${speciesSelected === "cat" ? `text-white px-4 py-2 bg-cyan-500 rounded-lg shadow-md` : `text-white px-4 py-2  bg-[#626087] rounded-lg shadow-md hover:bg-cyan-500`}`}>Purry Cat</button>
                </span>
            </div>
            {status === "loading" ? <div className="flex justify-center items-center font-montserrat text-white text-xl">
                <h2>Loading ...</h2>
            </div> : (!speciesSelectionResponse || speciesSelected === "") ? "" : <SearchParams apiResponse={speciesSelectionResponse} speciesSelected={speciesSelected} />}


        </div>
    )
}

export default HomePage