// import React, { Component } from 'react'
// import './Calc_style.css'
// class Calc extends Component {
//   render() {
//     return (
//       <div className='Main'>
//           <div className='Container'>
//          <form>
//           <input type='text'></input>
//          </form>
//         </div>
//         <div className='Keypad'>
//         <button className='btn0'>Clear</button>
//         <button className='btn1'>C</button>
//         <button className='btn1'>/</button><br/><br/>
//         <button className='btn1'>7</button>
//         <button className='btn1'>8</button>
//         <button className='btn1'>9</button>
//         <button className='btn1'>x</button><br/><br/>
//         <button className='btn1'>4</button>
//         <button className='btn1'>5</button>
//         <button className='btn1'>6</button>
//         <button className='btn1'>-</button><br/><br/>
//         <button className='btn1'>1</button>
//         <button className='btn1'>2</button>
//         <button className='btn1'>3</button>
//         <button className='btn1'>+</button><br/><br/>
//         <button className='btn1'>0</button>
//         <button className='btn1'>.</button>
//         <button className='btn2'>=</button>

//         </div>
      
//       </div>
//     )
//   }
// }

// export default Calc

import React,{ useState }from 'react'
import './Calc_style.css'
function Calc() {
  const [result,setResult] =useState("");
  const handleButton= (e) =>
  {
    setResult(result.concat(e.target.name));
  }
  const clear=() =>
  {
    setResult(" ");
  }
  const backspace = () =>
  {
    setResult(result.slice(0,-1));
  }
  const evaluate = () =>
  {
    try{
    setResult(eval(result).toString());
    }
    catch(err)
    {
      setResult("Error");
    }
  }
  return (
    <div className="Main">
        <div className="Container">
        <form >
            <input type="text" value={result}></input>
        </form>
        </div>
        <div className="keypad">
            <button  onClick={clear} id="clear">Clear</button>
            <button onClick={backspace} id="c">C</button>
            <button onClick={handleButton} name='/'>/</button>
            <button onClick={handleButton} name='7'>7</button>
            <button onClick={handleButton} name='8'>8</button>
            <button onClick={handleButton} name='9'>9</button>
            <button onClick={handleButton} name='*'>x</button>
            <button onClick={handleButton} name='4'>4</button>
            <button onClick={handleButton} name='5'>5</button>
            <button onClick={handleButton} name='6'>6</button>
            <button onClick={handleButton} name='-'>-</button>
            <button onClick={handleButton} name='1'>1</button>
            <button onClick={handleButton} name='2'>2</button>
            <button onClick={handleButton} name='3'>3</button>
            <button onClick={handleButton} name='+'>+</button>
            <button onClick={handleButton} name='0'>0</button>
            <button onClick={handleButton} name='.'>.</button>
            <button onClick={evaluate} id="eq">=</button>
            
        </div>

    </div>
    
  )
}

export default Calc