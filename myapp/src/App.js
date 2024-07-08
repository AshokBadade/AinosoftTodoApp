import './App.css';
import List from './Components/List';
import Navabr from './Components/Navbar';
import AddNote from './Components/AddNote';
import { useState } from 'react';


function App() {
  
  const [query, setQuery] = useState('')

  return (<>
    <Navabr setQuery={setQuery} />
    <List query={query} />
   </>);
}

export default App;
