import Nav from "./components/nav";
import bg from './lib/images/aura-gradient.png'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Home from "./pages/home";
import { Wrapper } from "./lib/ui/styled-components";
function App() {
  return (
    <Router>
    <div className='App w-screen h-screen  bg-cover bg-center bg-no-repeat overflow-hidden  flex flex-col ' style = {{backgroundImage: `url(${bg})`, }} >
      
       <Nav />
       
       <Home />
     
    </div>
    </Router>
  );
}

export default App;
