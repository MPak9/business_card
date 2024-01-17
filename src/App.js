import './App.css';
import { useState } from 'react';
import FlippableCard from './Components/FlippableCard';
import useWindowSize from './Hooks/useWindowSize';
import BackCard from './Components/BackCard';
import FrontCard from './Components/FrontCard';

function App() {
  const {width, height} = useWindowSize();// decoupling of data

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className='App'>
        { ((width >= 600) && (height >= 600)) 
      
      ? 
        <div className='doubleLayout'>
          <div className='flippableCardContainer' >
            <div className='card'>
            <FrontCard/>
          </div>
          </div>
          <div className='flippableCardContainer'>
            <div className='card'>
              <BackCard/>
            </div>
          </div>
        </div>
      :

      <FlippableCard />

      
      
    }
    </div>
  );
}

export default App;
