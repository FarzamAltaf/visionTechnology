import { Route, Routes } from 'react-router';
import './App.css'
import Home from './pages/home';
import Header from './components/header';
import Footers from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footers />
    </>
  )
}

export default App;