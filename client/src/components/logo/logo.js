import './index.css';

import kalpana_logo from '../../images/kalpana_logo.png'

const Logo = () => {
    return(
        <div className="logowrapper">
            <img src={kalpana_logo} alt='Kalpana logo' id='logoimage'/>
        </div>
    )
}

export default Logo;