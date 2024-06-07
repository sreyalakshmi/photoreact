import logo from './logo.svg';
import './App.css';
import AddPhoto from './components/AddPhoto';
import SearchPhoto from './components/SearchPhoto';
import DeletePhoto from './components/DeletePhoto';
import ViewAll from './components/ViewAll';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddPhoto/>}/>
        <Route path="/search" element={<SearchPhoto/>}/>
        <Route path="/delete" element={<DeletePhoto/>}/>
        <Route path="/view" element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
