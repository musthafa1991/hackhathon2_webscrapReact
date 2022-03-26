import logo from './logo.svg';
import './App.css';
import { Mobile } from './components/Mobile';
import { SearchBar } from './components/SearchBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <div className="App ">
      <SearchBar />
      <Routes>
      <Route path="/" element={<Mobile/>}/>
      <Route path="/mobiles" element={<Mobile/>}/>
        
      </Routes>
      </div>
      </BrowserRouter>
    
  );
}

export default App;




