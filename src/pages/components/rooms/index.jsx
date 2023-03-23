import Room from './rooms-components';
import './style.scss';
import { RoomTypes } from './util';


function Rooms(){
    return(
        <div className='L-rooms-block'>
            <div className='L-rooms-content G-container'>
                <h3 className='L-rooms-title'>Rooms</h3>
                <p className='L-rooms-text'>Make yourself at home is our slogan. We offer the best beds in the industry. 
                Sleep well and rest well.</p>

                <div className='L-rooms-inputs'>

                    <div className='L-rooms-input-div'>
                        <label className='L-rooms-label' htmlFor="1">
                            <i className='icon-calendar'></i>
                            Check In</label>
                        <input className='L-rooms-input' id="1" type="text" placeholder='DD MM YYYY'/>
                    </div>

                    <div className='L-rooms-input-div'>
                        <label className='L-rooms-label' htmlFor="2">
                        <i className='icon-calendar'></i>
                            Check Out</label>
                        <input className='L-rooms-input' id="2" type="text" placeholder='DD MM YYYY' />
                    </div>

                    <div className='L-rooms-input-div'>
                        <label className='L-rooms-label' htmlFor="3">
                        <i className='icon-male'></i>
                            Adults</label>
                        <input className='L-rooms-input' id="3" type="number" value={1} />
                    </div>

                    <div className='L-rooms-input-div'>
                        <label className='L-rooms-label' htmlFor="4">
                        <i className='icon-child'></i>
                            Kids</label>
                        <input className='L-rooms-input' id="4" type="number" value={0}/>
                    </div>

                    <div className='L-rooms-input-div'>
                    <label className='L-rooms-label' htmlFor="5">
                    <i className='icon-search'></i>
                    Search
                    </label>
                    <button id='5' className='L-rooms-btn'> Search</button>
                    </div>

                    </div>

                    <div className='L-rooms-rooms'>
                    {RoomTypes.map(el => <Room key={el.id} room={el}/>)}

                    </div>
            </div>
            </div>
    )
}

export default Rooms