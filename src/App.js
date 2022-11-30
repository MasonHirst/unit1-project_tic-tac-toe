import React, {useState} from 'react';
import './App.css';
import Square from './Square';


function calculateWinner(arr) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (
      arr[a] && 
      arr[a] === arr[b] && 
      arr[a] === arr[c]
    ) {
      return `${arr[a]} Won!`
    }
  }
}


function App() {
  // const propVariable = 'This is my variable'
  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', ''])
  const [player, setPlayer] = useState(true)
  
  function clickHandler() {
    setSquares(['', '', '', '', '', '', '', '', ''])
    setPlayer(true)
  }

  return (
    <div className="App">
      <span>
        {calculateWinner(squares)}
      </span>
      <div className='container'>
        {squares.map((val, index) => {
          return (
            <Square
              
              setSquares={setSquares}
              index={index}
              squareValue={val}
              squares={squares}
              player={player}
              setPlayer={setPlayer}
            />
          )
        })}
      </div>

      <button onClick={clickHandler}>Reset</button>

    </div>
  )
}


export default App;
