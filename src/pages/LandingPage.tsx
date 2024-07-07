import HeroImage from '../assets/undraw_beach_day_cser.svg'
import { useNavigate } from 'react-router'

const LandingPage = () => {
    const navigate = useNavigate()
    const handleGetStartedClick = () => {
        navigate('/home')
    }

    return (
        <div className="h-[80vh] flex items-center justify-center gap-9">
            <div className="flex bg-[#f6abb9] justify-center items-center h-[50%] w-[30%] rounded-full">
                <img className="h-[60%]" src={HeroImage} alt="main" />
            </div>

            <div className="h-[60%] w-[50%] flex flex-col gap-6 text-white rounded-lg items-start p-32 justify-center">
                <h1 className="text-3xl font-montserrat font-medium">Welcome! <br /> Your <i>Pawfect</i> match awaits</h1>
                <button onClick={handleGetStartedClick} className=" max-w-[30%] text-white px-4 py-2 bg-[#626087] rounded-lg shadow-md hover:bg-cyan-500">Get Started</button>
            </div>
        </div>
    )
}

export default LandingPage