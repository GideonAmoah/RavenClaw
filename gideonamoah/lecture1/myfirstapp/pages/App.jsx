import '../pages/App';
import {MyBtn} from 'component';
import { useState } from 'react';


function App() {
  const [count, setCount] =useState(0);
  return(
    <div>
  <h1>Hello Java Script</h1>
  <MyBtn />
  <button onClick={()=>(setCount)(count+1)}>increase</button>
  </div>

  )

}

export default App;
