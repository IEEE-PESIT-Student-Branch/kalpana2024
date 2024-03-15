import { Link } from "react-router-dom"
import Logo from "../components/logo/logo"

const Home = () => {
    return(
        <div>
            <div className='signUpNavContainer'>
                <Logo/>
                <div className='signUpNav'>
                    <div>
                        <Link to="/home">Home</Link>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                    <div>
                        <Link to="/rules">Rules</Link>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="homeContainer">
                <h1 className="homeHeading">Kalpana</h1>
                <div className="homeDate">MARCH 15TH AND 16TH, 2024</div>
                <div className="homeEvent">AN IEEE PESU EC CAMPUS, WIE, SIGHT CHAPTER EVENT</div>
                <div className="homeEvent">MRD AUDITORIUM, EC CAMPUS</div>
            </div>
            <div className="homeFooter">&copy; PESIT SOUTH STUDENT BRANCH</div>
        </div>
    )
}

export default Home