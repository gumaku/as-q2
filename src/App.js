import './App.css';
import FriendListView from './views/FriendListView';
import { Route, Routes, Navigate} from 'react-router-dom';
import LocationView from './views/LocationView'

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route index element={<FriendListView />} />
      <Route path='/location' element={<LocationView />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
</div>
  );
}

export default App;
