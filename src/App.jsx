
import './App.css'
import Batsman from './batsman';
import Counter from './counter';

function App() {
  
  function handelClick() {
    alert('I am clicked')
  }

  const handelClick5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
     
      <h1>Vite + React</h1>


      <Batsman></Batsman>

      <Counter></Counter>
      



      <button onClick={handelClick}>Click Me</button>
      <button onClick={() => handelClick5(5)}>Click Me 5</button>
     
    </>
  )
}

export default App
