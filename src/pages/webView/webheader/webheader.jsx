import './style.scss';
import { NavLink } from 'react-router-dom';

const Webheader = ()=>{


    return(
        <div className='L-header-block'>
            
        <div className='L-contact-links'>
            <p to={'/'} className='L-contact-link L-link1'> <i className='L-header-icon icon-bed'></i>Logo</p>
            <p to={'/rooms'} className='L-contact-link'>Rooms</p>
            <p to={'/about'} className='L-contact-link'>About</p>
            <p to={'/hotels'} className='L-contact-link'>Our Hotels</p>
            <p to={'/contact'} className='L-contact-link'>Contact</p>

        </div>

        <h3 className='L-contact-link2'>Book Now</h3>
    </div>
    )
}

export default Webheader