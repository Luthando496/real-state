import Navbar from './components/Navbar'
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import HomeDetails from './pages/HomeDetails';
import Footer from './components/Footer';
import 'swiper/css';
import HomePage from './pages/HomePage';
import Search from './pages/Search';
import 'leaflet/dist/leaflet.css';




function App() {

  return (
    <>
    <Navbar />

    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<Home />} />
    <Route path="/details/:id" element={<HomeDetails />} />
    <Route path="/results/:city" element={<Search />} />
    </Routes>

    <Footer />

    </>
  )
}

export default App
