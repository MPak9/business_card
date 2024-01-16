import './App.css';
import { useState } from 'react';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="App">
      <button onClick={
        (e) => { 
          e.preventDefault();  
          setIsFlipped(prev => !prev);
        }
      }>
          FLIP!
      </button>
      <br/>
      <div className={`flippableCardContainer ${isFlipped ? 'isFlipped' : ''}`}>
        <div className={`card`}>
          <div className='frontCard'>
            <div className=''> 
              <div className='contentContainer'>a</div>
            </div>
            <div className=''> 
              <div className='contentContainer' >
                <div className='headerContainer' >a</div>
                <div >b</div>
                <div >c</div>
              </div>
            </div>
          </div>
          
          <div className='backCard'>
            <div className=''> 
              <div className='contentContainer'>a</div>
            </div>
            <div className=''> 
              <div className='contentContainer' >
                <div className='headerContainer' >a</div>
                <div >b</div>
                <div >c</div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      
    </div>
  );
}

export default App;
