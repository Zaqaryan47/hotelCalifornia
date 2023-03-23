import { useState } from 'react';
import './style.scss';

const Mobileheader = ()=>{


    const  [display,setDisplay] = useState('none')

    function kg47(){
        setDisplay('block')
    }
    function gk47(){
        setDisplay('none')
    }

    return(
             
        
        <div className='L-mobile_header-block1'>

<div className='L-open-block' onClick={kg47}>
                <p className="tops"></p>
                <p className="centers"></p>
                <p className="bootoms"></p>
            </div>

<div style={{display:display}} className='L-mobile_header-block'>
            
            <div className='L-mobile_contact-links'>
                <p onClick={gk47} to={'/'} className='L-mobile_contact-link L-link1'> <i className='L-mobile_header-icon icon-bed'></i>Logo</p>
                <p onClick={gk47} to={'/rooms'} className='L-mobile_contact-link'>Rooms</p>
                <p onClick={gk47} to={'/about'} className='L-mobile_contact-link'>About</p>
                <p onClick={gk47} to={'/hotels'} className='L-mobile_contact-link'>Our Hotels</p>
                <p onClick={gk47} to={'/contact'} className='L-mobile_contact-link'>Contact</p>
    
            </div>
    
            <h3 onClick={gk47} className='L-mobile_contact-link2'>Book Now</h3>
        </div>



        </div>
    
    )
}

export default Mobileheader