import logo from './logo.svg';
import './App.css';
import TeamList from './Pages/TeamList/TeamList';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {store} from './store/store'
import SelectedTeam from './Pages/SelectedTeam/SelectedTeam';


function App() {
  return (
   <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TeamList/>}/>
        <Route path="/select" element={<SelectedTeam/>}/>
      </Routes>
    </BrowserRouter>
   </Provider>
  );
}

export default App;
