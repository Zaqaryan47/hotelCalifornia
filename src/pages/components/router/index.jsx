import './style.scss';
import { Route, Routes } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import Logo from '../logo';
import Rooms from '../rooms';
import About from '../about';
import Hotels from '../ourhotels';
import Contact from '../contact';

const Router = () =>(

    <div className='L-router-block'>
        <Header/>
        
        <Routes>
            <Route path='/' element={<Logo/>} index/>
            <Route path='/rooms' element={<Rooms/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/hotels' element={<Hotels/>} />
            <Route path='/contact' element={<Contact/>}/>

        </Routes>
        
        <Footer/>

    </div>
)

export default Router