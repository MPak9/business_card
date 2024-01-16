import './App.css';
import { useState } from 'react';
import FrontCard from './Components/FrontCard';
import BackCard from './Components/BackCard';
import HeaderContainer from './Components/HeaderContainer';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="App">
      <button onClick={(e) => { 
          e.preventDefault();  
          setIsFlipped(prev => !prev);
        }
      }>
        FLIP!
      </button>

      <br/>

      <div className={`flippableCardContainer ${isFlipped ? 'isFlipped' : ''}`}>
        <div className='card'>
          <FrontCard/>
          <BackCard/>
        </div>
      </div>


    </div>
  );
}

export default App;
