import logo from './logo.svg';
import './App.css';
import StartScreen from './components/StartScreen';

// REACT
import { useCallback, useEffect, useState } from 'react';

// DATA
import {wordsList} from './data/words';
import Game from './components/Game';
import GameOver from './components/GameOver';

// STAGE COMPONENTS
const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"}
];

const guessesQty = 3;


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]) 
  
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] =  useState(guessesQty);
  const [score, setScore] = useState(50)

  const pickWordAndCategory = () => {
    // object key
    const categories = Object.keys(words)

    // pick a random category
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // print the category
    console.log(category);

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    // print the word
    console.log(word)

    // return the variables
    return {word, category};
  }

  // function to start the game
  const startGame = () => {

    // pick word and pick category
    const {word, category} = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => {
      return l.toLowerCase();
    });
    
    console.log(word, category)
    console.log(wordLetters);

    setPickedWord(word)
    setPickedCategory(category);
    setGameStage(stages[1].name);
    setLetters(wordLetters);
  }

  const verifyLetter =(letter) => {
    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilezed
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    } 

    //push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    }else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
    
   
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // check if guesses ended
  useEffect(() => {
    if(guesses <= 0) {
      //reset all stages
      clearLetterStates()
      setGameStage(stages[2].name);
    }

  }, [guesses])

  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  }


  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && ( 
      <Game 
      verifyLetter={verifyLetter} 
      pickedWord={pickedWord} 
      pickedCategory={pickedCategory} 
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
      
    </div>
  );
}

export default App;
