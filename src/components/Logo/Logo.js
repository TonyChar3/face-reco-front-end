import Tilt from 'react-parallax-tilt';
import BrainLogo from './icons8-brain-64.png'
import './Logo.css';

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width:150}}>
                <div className="pa3">
                    <img style={{paddingTop: '5px', width:'100%'}} src={BrainLogo} alt="Brain" />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;