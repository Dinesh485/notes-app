import Nav from "./components/nav";
import darkBg from './lib/images/aura-gradient.png'
import lightBg from './lib/images/aura-gradient-light.png'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from "./pages/home";
import Login from "./pages/Login";
import SignUp from "./pages/register";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


import Loading from "./components/loading";
import PopUp from "./components/popup";
import { AnimatePresence } from "framer-motion";
import PageNotFound from "./pages/notFound";
import Profile from "./pages/profile";


function App() {

  const darkMode = useSelector(state => state.darkMode)
  const loading = useSelector(state => state.loading)
  const popup = useSelector(state => state.popup)
  const auth = useSelector (state => state.isAuth)
  const [screen, setScreen] = useState(undefined)

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.style.setProperty('--scrollbar-background', 'linear-gradient(180deg, #2D2246 0%, #674A57 52.08%, #7F3043 100%)')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.setProperty('--scrollbar-background', 'linear-gradient(180deg, #9C94B3 0%, #8FABB1 52.08%, #B69797 100%)')
    }



  }, [darkMode])

 useEffect(() =>{
     const imageList = [darkBg, lightBg]
     imageList.forEach((img) =>{
        new Image().src = img
     })

 },[])
 useEffect(() =>{
      const  h = window.innerHeight
      setScreen(h)
 },[])

  return (
    <Router  >
      <div className={`App w-screen h-full  bg-cover bg-center bg-no-repeat overflow-hidden  flex flex-col font-Roboto transition-all duration-300`} style={{ backgroundImage: darkMode ? `url(${darkBg})` : `url(${lightBg})`}} >

        <Nav />

        <Switch>
          <Route exact path='/'>
             {auth ? <Home /> : <Redirect to= '/login' />}
          </Route>
          <Route path='/login'>
             {auth ? <Redirect to ='/' /> : <Login />}
          </Route>
          <Route path='/register'>
          {auth ? <Redirect to ='/' /> : <SignUp />}
          </Route>
          <Route path='/profile'>
          {auth ?   <Profile /> : <Redirect to = '/login' />}
          </Route>
          <Route path = "*" >
             <PageNotFound />
          </Route>
        </Switch>
        {loading && <Loading />}
        <AnimatePresence> 
        {popup.open && <PopUp msg = {popup.msg} />}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
