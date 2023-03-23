import About from "../components/about"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Logo from "../components/logo"
import Hotels from "../components/ourhotels"
import Rooms from "../components/rooms"
import Webheader from "./webheader/webheader"




const Webview = ()=>(

    <div>
<Webheader/>
<Logo/>
<Rooms/>
<About/>
<Hotels/>
<Contact/>
<Footer/>

    </div>
)

export default Webview