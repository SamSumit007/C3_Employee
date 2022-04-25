import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Men } from './components/Mens';
import { Link, Route, Routes } from 'react-router-dom';
import { Women } from './components/Women';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <div className="App">
       <Navbar/>
      
       <div className='coupon'>
         <img  src='https://www.baapoffers.com/uploads/flipkart-big-shopping-sale-fashion-sneak-peek.jpg'/>
       </div>


          <Routes>
            <Route path="/Men" element={<Men/>}></Route>
            <Route path="/women" element={<Women/>}></Route>
          </Routes>
   
    </div>
    <div className='f'>
      <Footer/>
      </div>
      </>
  );
}

export default App;