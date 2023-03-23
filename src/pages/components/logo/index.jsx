import './style.scss';
import hotel from '../../../assets/image/hotel_big_img.jpg';
import { useRef, useState } from 'react';
import useValidation from '../../../hook/useValidation';

function Logo(){
    const [inp, setInp] = useState('')
    const [inp2, setInp2] = useState('')
    const [type1, setType1] = useState('text')
    const [type2, setType2] = useState('text')
    const {item} = useValidation()
    const checkInRef = useRef()
    const checkOutRef = useRef()
    return(
        <div className='L-logo-block'>
            <div className='L-logo-content' style={{backgroundImage:`url(${hotel})`}}>
                <div className='G-container'>
                <div className='L-logo-items'>
                <h3 className='L-logo-link'> 
                <i className='L-logo-icon icon-bed'></i>Hotel Name</h3>
                <div className='L-logo-inputs'>
                    <div className='L-logo-input-div'>
                        <label className='L-logo-label' htmlFor="1" ref={checkInRef}>
                            <i className='icon-calendar'/>
                            Check In</label>
                        <input className='L-logo-input' id="1" type="text" placeholder='DD MM YYYY'onChange={(e) =>{ 
                  setInp(e.target.value)
                  setType1(e.target.type)
                  }}/>
                  {item.date}
                    </div>
                    <div className='L-logo-input-div'>
                        <label className='L-logo-label' htmlFor="2" ref={checkOutRef}>
                        <i className='icon-calendar'></i>
                            Check Out</label>

                        <input className='L-logo-input' id="2" type="text" placeholder='DD MM YYYY'onChange={(e)=> {
                  setInp2(e.target.value)
                  setType2(e.target.type)
                }}/>
                {item.date1}
                    </div>
                    <div className='L-logo-input-div'>
                        <label className='L-logo-label' htmlFor="3">
                        <i className='icon-male'></i>
                            Adults</label>
                        <input className='L-logo-input' id="3" type="number" placeholder='1' min={1} max={6} />
                    </div>
                    <div className='L-logo-input-div'>
                        <label className='L-logo-label' htmlFor="4">
                        <i className='icon-child'></i>
                            Kids</label>
                        <input className='L-logo-input' id="4" type="number" placeholder='0' min={0} max={6}/>
                    </div>
                    </div>
                        <button onClick={()=>{
                            item.func(inp,type1,checkInRef.current.outerText)
                            item.func(inp2,type2,checkOutRef.current.outerText)                        
                  }} className='L-logo-btn'> 
                        <i className='icon-search'></i>
                        Search Aviability</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Logo