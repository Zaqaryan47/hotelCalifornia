import { useWindowSize } from "usehooks-ts"




const ResponsiveView = ({mobileview,webview})=>{

const widthh = useWindowSize();
const isMobile = widthh.width <= 1024

return isMobile ? mobileview:webview

}

export default ResponsiveView