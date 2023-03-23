import About from "../components/about"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Logo from "../components/logo"
import Hotels from "../components/ourhotels"
import Rooms from "../components/rooms"
import Mobileheader from "./mobileheader/mobileheader"



const Mobileview = () => (

    <div>
        <Mobileheader/>
        <Logo />
        <Rooms />
        <About />
        <Hotels />
        <Contact />
        <Footer />

    </div>
)

export default Mobileview