import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import FullScreenSection from './components/FullScreenSection.jsx';

import kitchenImage from './images/kitchen.jpg'
import bathImage from './images/bath.jpg'
import closetImage from './images/closet.jpg'
import ScrollSnapSection from './components/ScrollSnapSection';



function App() {
  return (
    <div className='bg-zinc-200 relative min-h-screen'>
<div className='pb-[100vh]'>

      
<Header />
{/* <LandingPage /> */}
<ScrollSnapSection />



      </div>
<Footer />
    </div>
  
  );
}

export default App;
