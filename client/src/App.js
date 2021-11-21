import Nav from "./components/nav";
import darkBg from './lib/images/aura-gradient.png'
import lightBg from './lib/images/aura-gradient-light.png'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Home from "./pages/home";
import Login from "./pages/Login";
import SignUp from "./pages/register";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gridView, listView } from "./store/toggleViewSlicer";

function App() {

  const darkMode = useSelector(state => state.darkMode)
  
  useEffect(() =>{
    
    if(darkMode){
      document.documentElement.classList.add('dark')
      document.documentElement.style.setProperty('--scrollbar-background', 'linear-gradient(180deg, #2D2246 0%, #674A57 52.08%, #7F3043 100%)')
    }else{
      document.documentElement.classList.remove('dark')
      document.documentElement.style.setProperty('--scrollbar-background', 'linear-gradient(180deg, #9C94B3 0%, #8FABB1 52.08%, #B69797 100%)')
    }
    
    
      
  },[darkMode])



  return (
    <Router>
    <div className='App w-screen h-screen  bg-cover bg-center bg-no-repeat overflow-hidden  flex flex-col font-Roboto transition-all duration-300' style = {{backgroundImage: darkMode? `url(${darkBg})` : `url(${lightBg})`, }} >
      
       <Nav />
       
       <Switch>
         <Route exact path = '/'>
         
           <Home />
           
         </Route>
         <Router path = '/login'>
           <Login />
         </Router>
         <Route path = '/signup'>
            <SignUp />
         </Route>
       
       </Switch>
       
    </div>
    </Router>
  );
}

export default App;
