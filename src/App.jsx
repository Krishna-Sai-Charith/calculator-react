import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    if (value === 'Clear') {
      setInput('');
      setResult(0);
    } else if (value === '=') {
      try {
        setResult(eval(input)); // Evaluate the expression in the input
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <div className='input-container'>
        <input type="text" value={input} style={{width: 195, height: 50}} readOnly  /> = <span>{result}</span>
        
      </div>
      <div className="row">
        <InputField value={0} onClick={() => handleClick(0)} />
        <InputField value={1} onClick={() => handleClick(1)} />
        <InputField value={2} onClick={() => handleClick(2)} />
        <InputField value={"="} onClick={() => handleClick('=')} />
      </div>
      <div className="row">
        <InputField value={3} onClick={() => handleClick(3)} />
        <InputField value={4} onClick={() => handleClick(4)} />
        <InputField value={5} onClick={() => handleClick(5)} />
        <InputField value={"+"} onClick={() => handleClick('+')} />
      </div>
      <div className="row">
        <InputField value={6} onClick={() => handleClick(6)} />
        <InputField value={7} onClick={() => handleClick(7)} />
        <InputField value={8} onClick={() => handleClick(8)} />
        <InputField value={"-"} onClick={() => handleClick('-')} />
      </div>
      <div className="row">
        <InputField value={9} onClick={() => handleClick(9)} />
        <InputField value={"*"} onClick={() => handleClick('*')} />
        <InputField value={"/"} onClick={() => handleClick('/')} />
        <InputField value={"Clear"} style={{width: 230, height: 50}} onClick={() => handleClick('Clear')} />
      </div>
    </>
  )
  
  function InputField(props) {
    return (
       <input type="button" value={props.value} style={{width: 50, height: 50, margin: 6}} onClick={props.onClick} />
    )
  }
}

export default App
