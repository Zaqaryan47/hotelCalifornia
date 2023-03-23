import './style.scss';
import { useState } from 'react';
import useValidation from '../../../hook/useValidation';

function Contact() {
   const {item} = useValidation()
    const [pass, setPass] = useState()
    const [emaill, setEmaill] = useState()
    return (
        <div className='L-contact-block'>
            <div className='L-contact-content G-container'>
                <h3 className='L-contact-title'>Contact</h3>
                <p className='L-contact-text'>If you have any questions, do not hesitate to ask them.</p>

                <p className='L-contact-contact'> <i className='L-contact-icon icon-location'></i> Chicago, US</p>
                <p className='L-contact-contact'> <i className='L-contact-icon icon-phone'></i> Phone: +00 151515</p>
                <p classNampasse='L-contact-contact'> <i className='L-contact-icon icon-mail-envelope-closed'></i> Chicago, US</p>

                <div className='L-contact-inputs'>
                    <input className='L-contact-input' type="text" placeholder='Name' />
                    <input className='L-contact-input' type="email" placeholder='Email'onChange={(e) => {
                        setEmaill(e.target.value)
                    }} />
                    <h3>{item.email}</h3>
                    <input className='L-contact-input' type="password" placeholder='Password' onChange={(e) => {
                        setPass(e.target.value)
                    }} />
                    <h3>{item.pass}</h3>
                    
                    <button onClick={() => {
                        item.func(pass,)
                        item.func(emaill,)
                    }} className='L-contact-btn'>SEND MESSAGE</button>
                </div>
            </div>
        </div>
    )
}

export default Contact