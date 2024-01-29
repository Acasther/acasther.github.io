import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import { Navbar, Footer } from './components';
import Home from './pages/Home/Home';
import Legal from './pages/Legal/Legal';
import Immigration from './pages/Immigration/Immigration';
import './App.css';

const App = () => {
  return (
  <ThemeProvider theme={theme}>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/legal' element={<Legal /> } />
      <Route path='/immigration' element={<Immigration /> } />
    </Routes>
    <Footer />
  </ThemeProvider>
  )
}

export default App;
