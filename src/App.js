import logo from './logo.svg';
import './App.css';
import { Mobile } from './components/Mobile';
import { SearchBar, } from './components/SearchBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import Forgetpassword from './components/Forgetpassword';

function App() {

  return (
    <BrowserRouter>
    <div className="App ">
      <SearchBar />
      <Routes>
      {/* <Route path="/" element={<Mobile/>}/> */}
      <Route path="/mobiles" element={<Mobile/>}/>
      <Route path="/signup" element={<SignUp/>}/> 
      <Route path="/signin" element={<SignIn/>}/> 
      <Route path="/forgetpassword" element={<Forgetpassword/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    
  );
}

export default App;




