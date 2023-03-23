import './App.css';
import Mobileview from './pages/mobilleView';
import Webview from './pages/webView';
import './assets/icon/style.css'
import './assets/style/global.scss'

import ResponsiveView from './responsiveView';

function App() {
  return (
    <div className="App">
<ResponsiveView mobileview={<Mobileview/>} webview={<Webview/>} />
    </div>
  );
}

export default App;
