import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import PetImgOne from '../assets/undraw_dog_c7i6.svg'
import PetImgTwo from '../assets/undraw_dog_walking_re_l61p.svg'
import PetImgThree from '../assets/undraw_friends_r511.svg'
import PetImgFour from '../assets/undraw_beach_day_cser.svg'
import PetImgFive from '../assets/undraw_good_doggy_re_eet7.svg'
import PetImgSix from '../assets/undraw_passing_by_0un9.svg'
import { Pet } from '../utils/interface'
import PetDetailCard from '../components/PetDetailCard'

//Main component that renders PetDetailCard for each pet found.

const PetsListPage = () => {
    let location = useLocation()

    const [petsToShow, setPetsToShow] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setPetsToShow(location.state.data.pets)
        setIsLoading(false)
    }, []) //eslint-disable-line react-hooks/exhaustive-deps


    if (location.state.data.exception) {
        return (

            <div className="text-white font-montserrat text-lg font-semibold mb-12 flex justify-center h-[80vh] items-center">
                <h1> All pets in your area have a lovely home. No matches found at this time, please check later or adjust filters.</h1>
            </div>
        )
    }


    const petImgOptions = [PetImgOne, PetImgTwo, PetImgThree, PetImgFour, PetImgFive, PetImgSix]

    return (
        <div className="m-10">
            {isLoading && <div className="flex justify-center items-center">
                Loading...
            </div>
            }

            {isLoading === false && <><h1 className="text-white font-montserrat text-2xl font-semibold mb-12">
                {!petsToShow || petsToShow.length < 0 ? `All pets in your area have a lovely home. No matches found at this time, please check later` : `Yay 🎉  We found your Pawfect matches`}
            </h1>
                <div className="flex flex-wrap justify-center gap-y-11 gap-x-12">
                    {petsToShow.map((pet: Pet, index: number) => {
                        let cardImg = petImgOptions[(Math.floor(Math.random() * 5))]
                        return (
                            <PetDetailCard key={index} pet={pet} cardImg={cardImg} />
                        )
                    })}
                </div></>}
        </div>
    )
}

export default PetsListPage