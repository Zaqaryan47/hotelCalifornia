import single from '../../../assets/image/room_single.jpg';
import double from '../../../assets/image/room_double.jpg';
import deluxe from '../../../assets/image/room_deluxe.jpg';

export const RoomTypes =[
    {
        id: 1,
        img: single,
        title:'Single Room',
        price:'From $99',
        bed_type:'Single bed',
        size:'15m',
        btn:'Choose Room',
        icons:['icon-bath','icon-phone','icon-connection']
    },{
        id: 2,
        img: double,
        title:'Double Room',
        price:'From $149',
        bed_type:'Queen-size bed',
        size:'25m',
        btn:'Choose Room',
        icons:['icon-bath','icon-phone','icon-connection','icon-television']
    },{
        id: 3,
        img: deluxe,
        title:'Deluxe Room',
        price:'From $199',
        bed_type:'King-size bed',
        size:'40m',
        btn:'Choose Room',
        icons:['icon-bath','icon-phone','icon-connection','icon-television','icon-glass2','icon-cutlery']
    }
]