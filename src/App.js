import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import './animation.css'
import Footer from './Components/Footer/footer';
import Navbar from './Components/Navbar/navbar';
import AboutUs from './Pages/About Us/aboutUs';
import AssetFinance from './Pages/Assest Finance/assetFinance';
import Commercial from './Pages/Commercial Loan/commercial';
import Faqs from './Pages/Faqs/faqs';
import FirstHomeBuyer from './Pages/First Home Buyer/firstHomeBuyer';
import HomeLoans from './Pages/Home Loans/homeLoans';
import Home from './Pages/Home/home';
import PersonalLoan from './Pages/Personal Loan/personalLoan';
import Refinancing from './Pages/Refinancing/refinancing';
import Smsf from './Pages/Self Managed Super Fund Lending/Smsf';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/asset-finance" element={<AssetFinance />} />
        <Route path="/commercial-loan" element={<Commercial />} />
        <Route path="/first-home-buyer" element={<FirstHomeBuyer />} />
        <Route path="/home-loans" element={<HomeLoans />} />
        <Route path="/personal-loan" element={<PersonalLoan />} />
        <Route path="/refinancing" element={<Refinancing />} />
        <Route path="/smsf" element={<Smsf />} />
      </Routes>

    <Footer/>
        
      
    </>
    
  );
}

export default App;
