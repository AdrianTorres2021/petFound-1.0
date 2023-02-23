import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Edit from './views/Edit';

import Home from './views/Main';
import Petsearch from './views/Petsearch';
import Register from './views/Register';
import Report from './views/Report';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" index element ={<Home/>}/>
            <Route path="/lostpets" element ={<Petsearch />}/>
            <Route path="lostpets/new" element={< Report/>}/>
            <Route path="/pet/:id/edit" element ={<Edit/>}/>
            <Route path="/register" element ={<Register/>}/>
          </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
