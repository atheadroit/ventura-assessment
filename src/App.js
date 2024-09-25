import { Route, Routes } from 'react-router-dom';
import './App.css';

import IpoDetailPage from './components/IpoDetailPage';
import IpoListPage from './components/IpoListPage';
import IpoNavbarFooter from './components/IpoNavbarFooter';

function App() {
  return (
    <div className="">
      <IpoNavbarFooter />
      <Routes>
      <Route path='/ipodetailpage'  element={<IpoDetailPage />} />

        <Route path='/ipolistpage'  element={<IpoListPage />} />
      </Routes>

    </div>
  );
}

export default App;
