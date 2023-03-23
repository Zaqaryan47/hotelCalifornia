import './style.scss';


function About(){
    return(
        <div className='L-about-block'>
            <div className='G-container'>
                <div className='L-about-content'>

                <div className='L-about-texts'>
                    
                    <h3 className='L-about-title'>About</h3>
                    
                    <p className='L-about-text'>Our hotel is one of a kind. It is truely amazing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    
                    <p className='L-about-text'>We accept:
                    <i className='icon-credit-card L-about-card'></i>
                    <i className='icon-cc-mastercard L-about-card'></i>
                    <i className='icon-cc-amex L-about-card'></i>
                    <i className='icon-cc-paypal L-about-card'></i>
                    </p>

                </div>

                <div className='L-about-map'>
                <iframe className='L-map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97609.66325027744!2d44.1660207!3d40.135556699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1678954733479!5m2!1sru!2sam"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                <div className='L-about-items'>

                    <div className='L-about-contact'>
                        <i className='L-about-icon icon-location'></i>
                        423 Some adr, Chicago, US
                    </div>

                    <div className='L-about-contact'>
                        <i className='L-about-icon icon-phone'></i>
                        Phone: +00 151515
                    </div>

                    <div className='L-about-contact'>
                        <i className='L-about-icon icon-mail-envelope-closed'></i>
                        Email: mail@mail.com
                    </div>
                </div>

                <div className='L-about-demand'>
                    <i className='icon-info'></i>
                On demand, we can offer playstation, babycall, children care, dog equipment, etc.

                </div>

                </div>
                


        </div>
    )
}

export default About

