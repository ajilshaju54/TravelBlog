import { Route,Routes} from "react-router-dom";
import Auth from "./auth/Auth.js";
import {useSelector} from "react-redux"
import Diaries from "./diaries/Diaries";
import Header from "./header/Header.js";
import Home from "./home/Home.js";
import Profile from "./profile/Profile.js";
import  Add  from "./diaries/Add";
import DiaryUpdate from "./diaries/DiaryUpdate.js";



function App() {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <div> 
      <header>
        <Header />
        </header>
        <section>
          
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diaries" element={<Diaries />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/add" element={<Add />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/post/:id" element={<DiaryUpdate />} />
          </Routes>
               
               
          
        </section>
    </div>
  );
}

export default App;
