import './style.scss';


function Room(props){

    const room = props.room
    return(
        <div className='L-room-block'>
            <div className='L-room-img' style={{backgroundImage:`url(${room.img})`}}></div>
            <div className='L-room-div'>
                <h3 className='L-room-title'>{room.title}</h3>
                <h6 className='L-room-price'>{room.price}</h6>
                <p className='L-room-type'>{room.bed_type}</p>
                <p className='L-room-size'>{room.size}
                    <sup>2</sup>
                </p>
                <div className='L-room-icons'>{room.icons.map(el => {
                    return(
                        <p className={`L-room-icon ${el}`}/>
                    )
                })}</div>

                <button className='L-room-btn'>{room.btn}</button>
            </div>
            
        </div>
    )
}

export default Room