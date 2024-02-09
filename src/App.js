import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Insurance from './pages/Insurance/Insurance';
import Immigration from './pages/Immigration/Immigration';
import Contact from './pages/Contact/Contact';
import RealEstate from './pages/RealEstate/RealEstate';
import './App.css';

const App = () => {
  return (
  <ThemeProvider theme={theme}>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/immigration' element={<Immigration /> } />
      <Route path='/real-estate' element={<RealEstate /> } />
      <Route path='/insurance' element={<Insurance /> } />
      <Route path='/contact' element={<Contact /> } />
    </Routes>
    <Footer />
  </ThemeProvider>
  )
}

export default App;
