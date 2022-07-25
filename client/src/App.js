import './App.css';
import {Routes, Route} from "react-router-dom"
import NewPet from './pages/NewPet';
import Main from './pages/Main';
import PetDetail from './pages/PetDetail';
import EditPet from './pages/EditPet';

function App() {
  return (
    <div className="App bg-secondary h-100">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pets/new" element={<NewPet />} />
        <Route path="/pets/:pet_id" element={<PetDetail />} />
        <Route path="/pets/edit/:pet_id" element={<EditPet />} />
      </Routes>
    </div>
  );
}

export default App;
