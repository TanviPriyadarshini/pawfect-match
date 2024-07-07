import { Link } from 'react-router-dom'
import { Pet } from '../utils/interface'
import { useNavigate } from 'react-router'

type PetDetailCardProps = {
  pet: Pet,
  cardImg: string
}

// Clickable cards that display all details for each pet.

const PetDetailCard = ({ pet, cardImg }: PetDetailCardProps) => {

  const navigate = useNavigate();

  return (
    <Link to={`/pet-details/${pet.pet_id}`}
      onClick={(e) => {
        e.preventDefault()
        navigate(`/pet-details/${pet.pet_id}`, {
          state: {
            id: pet.pet_id
          }
        })
      }
      }>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg shadow-slate-50/30 bg-slate-50 m-3 px-2 py-10 col-span-1 min-w-96 h-96 transform transition duration-500 hover:scale-105">
        <img className="w-full h-40" src={cardImg} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{pet.pet_name}</div>
          <p className="text-gray-700 text-base">
            {pet.primary_breed}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {pet.addr_city}, {pet.addr_state_code}
        </div>
      </div>
    </Link >
  )
}

export default PetDetailCard