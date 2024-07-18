import { useParams } from 'react-router'
import Placeholder from '../assets/undraw_refreshing_beverage_td3r.svg'
import { useQuery } from '@tanstack/react-query'
import fetchPetDetail from '../utils/fetchPetDetail'

//Page that displays details of each individual pet. 

const PetDetailsPage = () => {
    const { id } = useParams()

    if (!id) {
        throw new Error("no id provided");
    }

    const results = useQuery(["details", id], fetchPetDetail)
    let petImage = Placeholder;

    if (results.isLoading) {
        return (
            <div className="flex justify-center items-center font-montserrat text-white text-xl">
                <h2 className="loader">Loading ...</h2>
            </div>
        );
    }

    const pet = results.data?.pet;

    if (!pet) {
        throw new Error("No Pets found :(")
    }

    return (
        <div className="flex justify-center items-center h-[90vh]">
            <div className="rounded overflow-hidden p-7 shadow-lg bg-slate-50 m-auto max-w-full flex flex-col max-h-[80vh] justify-center items-center">
                <img className="w-full max-h-36" src={petImage} alt="Pet" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{pet?.pet_name}</div>
                    <div className="font-bold text-lg mb-2">{pet?.primary_breed} - {pet?.species}</div>
                    <p className="text-gray-700 text-base">
                        Gender : {pet?.sex}
                    </p>
                    <p className="text-gray-700 text-base">
                        Age : {pet?.age}
                    </p>
                    <p className="text-gray-700 text-base">
                        {pet?.addr_city && <span>{pet?.addr_city}, </span>}
                        {pet?.addr_state_code && <span>{pet?.addr_state_code}</span>}
                    </p>
                    <p className="text-gray-700 text-base mb-12">
                        {pet?.color && <span>Color: {pet?.color}, </span>}
                    </p>
                    <button disabled className="text-white px-4 py-2 bg-curious-blue-600 rounded-3xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                        Adopt {pet?.pet_name}</button>
                </div>

            </div>
        </div >
    )
}

export default PetDetailsPage