import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { Route } from 'react-router-dom';
import MainPage from "./page/mainPage";
import MemoryPage from "./page/memoryPage";
import SongsPage from "./page/SongsPage";
import MessagePage from "./page/MessagePage";
function App() {


    return (
        <div>
            <Route path="/" component={MainPage} exact/>
            <Route path="/WeLoveYou" component={MemoryPage}/>
            <Route path="/listen-to-my-message" component={MessagePage}/>
            <Route path="/congratulations-on-your-graduation" component={SongsPage}></Route>
        </div>

    );
}

export default App;
