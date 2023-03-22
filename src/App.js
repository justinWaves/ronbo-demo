import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import FullScreenSection from './components/FullScreenSection.jsx';

import kitchenImage from "./images/kitchen.jpg";
import bathImage from "./images/bath.jpg";
import closetImage from "./images/closet.jpg";


function App() {
  return (
    <div className='bg-zinc-200'>
      
<Header />
<LandingPage />
<div>
      <FullScreenSection image={kitchenImage} title="Kitchen" subHeader="EXPLORE THE KITCHEN COLLECTION" />
      <FullScreenSection image={bathImage} title="Bath" subHeader="EXPLORE THE BATHROOM COLLECTION" />
      <FullScreenSection image={closetImage} title="Closet" subHeader="EXPLORE THE CLOSET COLLECTION" />
    </div>
<Footer />
    </div>
  );
}

export default App;
