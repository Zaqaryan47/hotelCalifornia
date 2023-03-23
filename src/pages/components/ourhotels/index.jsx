import Hotel from './hotels-components';
import './style.scss';
import { cities } from './util';




function Hotels(){
    return(
        <div className='L-hotels-block'>
            <div className='L-hotels-content G-container'>
                <h3 className='L-hotels-title'>Our Hotels</h3>
                <p className='L-hotels-text'>You can find our hotels anywhere in the world:</p>

                <div className='L-hotels-cities'>
                {cities.map((el )=> {
                
                   return(
                    <div className='item1' key={el.id}>
                        <Hotel  hotel={el}/>
                        
                    </div>
                   )
                   
                })}
                <div className='item2'>
                    {cities[1].map(el => <Hotel hotel={el} key={el.id}/>)}
                </div>

                </div>

                <div className='L-hotels-black'>
                    <h2 className='L-hotels-title'>Get the best offers first!</h2>
                    <p className='L-hotels-text'>Join our newsletter.</p>
                    <label className='L-hotels-label' htmlFor="input1">E-mail</label>
                    <input className='L-hotels-inputs' id='input1' type="email" placeholder='Your Email address'/>
                    <button className='L-hotels-btn'>Subscribe</button>
                </div>
                </div>
                </div>
                )
    }
    export default Hotels