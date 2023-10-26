import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [color,setColor] = useState("black")

  const changeBg =(color)=>{
    setColor(color)
  }

  useEffect(()=>{
    document.body.style.backgroundColor = color
  })
  return (
    <div style={{height:'100vh'}} className='d-flex flex-column align-items-center justify-content-center text-light'>
      <h1>Background Color Change</h1>

      <div style={{width:'20%'}} className="buttons d-flex align-items-center justify-content-around mt-3">
          <button onClick={()=>changeBg('red')} className='btn btn-light'>Red</button>
          <button onClick={()=>changeBg('blue')} className='btn btn-light'>Blue</button>
          <button onClick={()=>changeBg('green')} className='btn btn-light'>Green</button>
          <button onClick={()=>changeBg('purple')} className='btn btn-light'>Purple</button>
      </div>
    </div>
  );
}

export default App;
