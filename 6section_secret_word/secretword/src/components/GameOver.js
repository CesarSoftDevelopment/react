import React from 'react'
import './GameOver.css';

const GameOver = (props) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>Your ponts were : <span>{props.score}</span></h2>
      <button onClick={props.retry}>Finalizar jogo</button>
    </div>
  )
}

export default GameOver;