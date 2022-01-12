import './App.css';
import List from './Components/lsit'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listobb from './Components/listobb';
function App() {

  return (
    <BrowserRouter>
    <div style={{display: 'flex', maxWidth:'100vw',minHeight:'100vh',
    background:'lightgray',flexDirection:'column',
    justifyContent:'center',alignItems: 'center',overflowX:'hidden'}}>
    <Routes>
      
      <Route exact path="/list/:id" element={<Listobb />} />
      <Route exact path="/" element={<List/>} />
     
     </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
