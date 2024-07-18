import { SubObject, MenuOptionsAvailable } from '../utils/interface'

type UserFormInput = {
    desiredAge: string;
    desiredGender: string;
    desiredGeoRange: string;
    desiredColor: string;
    desiredBreed: string;
    zipCode: string;
}

const PetSearchForm = ({ handleFormSubmit, userFormInput, setUserFormInput, menuOptionsAvailable }: { handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>, userFormInput: UserFormInput, setUserFormInput: React.Dispatch<React.SetStateAction<UserFormInput>>, menuOptionsAvailable: MenuOptionsAvailable }) => {
    return (
        <div className="m-2 p-6 shadow-lg min-w-[60%]">
            <form className="grid grid-cols-2 gap-3  " onSubmit={handleFormSubmit}>
                <label className="flex flex-col gap-2 text-white" htmlFor="age">
                    Age
                    <select
                        className="text-black rounded-md w-[80%] outline-none p-2"
                        onChange={(e) =>
                            setUserFormInput((prev) => ({
                                ...prev,
                                desiredAge: e.target.value
                            }))
                        }
                        id="age"
                        value={userFormInput.desiredAge}
                    >
                        {menuOptionsAvailable.age.map((age: SubObject, index: number) => (
                            <option className="text-red-600" key={index} value={age.value}>{age.label}</option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-2 text-white" htmlFor="gender">
                    Gender
                    <select
                        className="text-black rounded-md w-[80%] outline-none p-2"
                        onChange={(e) => setUserFormInput((prev) => ({
                            ...prev,
                            desiredGender: e.target.value
                        }))
                        }
                        id="gender"
                        value={userFormInput.desiredGender}
                    >
                        {menuOptionsAvailable.gender.map((gender: SubObject, index: number) => (
                            <option key={index} value={gender.value}>{gender.label}</option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-2 text-white" htmlFor="geo_range">
                    Location preference
                    <select
                        className="text-black rounded-md w-[80%] outline-none p-2"
                        onChange={(e) => setUserFormInput((prev) => ({
                            ...prev,
                            desiredGeoRange: e.target.value
                        }))
                        }
                        id="geo_range"
                        value={userFormInput.desiredGeoRange}
                    >
                        {menuOptionsAvailable.geoRange.map((geoRange: SubObject, index: number) => (
                            <option key={index} value={geoRange.value}>{geoRange.label}</option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-2 text-white" htmlFor="breeds">
                    Breeds
                    <select
                        className="text-black rounded-md w-[80%] outline-none p-2"
                        onChange={(e) => setUserFormInput((prev) => ({
                            ...prev,
                            desiredBreed: e.target.value
                        }))
                        }
                        id="breed"
                        value={userFormInput.desiredBreed}
                    >
                        {menuOptionsAvailable.breed.map((breed: SubObject, index: number) => (
                            <option key={index} value={breed.value}>{breed.label}</option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-2 text-white" htmlFor="colors">
                    Colors
                    <select
                        className="text-black rounded-md w-[80%] outline-none p-2"
                        onChange={(e) => setUserFormInput((prev) => ({
                            ...prev,
                            desiredColor: e.target.value
                        }))
                        }
                        id="color"
                        value={userFormInput.desiredColor}
                    >
                        {menuOptionsAvailable.color.map((color: SubObject, index: number) => (
                            <option key={index} value={color.value}>{color.label}</option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-2 text-white" htmlFor="zip_code">
                    US Zip Code
                    <input
                        className="text-black rounded-md w-[80%] outline-none p-2"
                        type="text"
                        placeholder="Enter your city or zip"
                        onChange={(e) => setUserFormInput((prev) => ({
                            ...prev,
                            zipCode: e.target.value
                        }))
                        }
                        id="city_or_zip"
                        value={userFormInput.zipCode}
                    />
                </label>
                <button disabled={userFormInput.zipCode === ""} type="submit" className="max-w-fit text-white px-4 py-2 bg-[#626087] rounded-lg shadow-md hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed">Find my Pawfect Match</button>
            </form>
        </div >
    )
}

export default PetSearchForm