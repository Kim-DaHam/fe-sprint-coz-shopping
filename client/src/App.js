import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage'
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
