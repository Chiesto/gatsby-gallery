import { dividerClasses } from "@mui/material"
import * as React from "react";
import {useState} from "react";



const IndexPage = () => {

  const [emojiArray, setEmojiArray] = useState([]);
  const [isStarted, setIsStarted] = useState(false);

  const emojiPuzzles = [
    {
      emojis: ['🍕', '🍔', '🍟'],
      answer: 'Fast food',
    },
    {
      emojis: ['🌞', '⛱️', '🏖️'],
      answer: 'Beach',
    },
    {
      emojis: ['📚', '🎓', '👩‍🎓'],
      answer: 'Education',
    },
    {
      emojis: ['🐶', '🐱', '🐰'],
      answer: 'Pets',
    },
    {
      emojis: ['🚗', '🚕', '🚌'],
      answer: 'Transportation',
    },
    {
      emojis: ['🎥', '🍿', '🎬'],
      answer: 'Movie',
    },
    {
      emojis: ['🎈', '🎉', '🎂'],
      answer: 'Celebration',
    },
    {
      emojis: ['🌈', '☔', '☀️'],
      answer: 'Weather',
    }
  ];
  
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const handleStartClick = (event)=>{
    event.preventDefault();
    const randomNumber = generateRandomNumber(0, emojiPuzzles.length-1);
    setEmojiArray(emojiPuzzles[randomNumber]);
    setIsStarted(true);
  }

  const handleFormSubmit = ()=>{

  }
  
  
  
  return (
    <div>
      <div>
        <h1>Emoji Guesser!</h1>
        <p>Guess the word based on the three emojis displayed</p>
        
        
      </div>
      <div>
        {isStarted? (
          <>
            {emojiArray?.map(item=>(
              <p>{item}</p>
            ))}
            <form onSubmit={handleFormSubmit}>
              <input type="text"/>
              <button type="submit"> Submit Answer </button>
            </form>
          </>
        ):(
          <>
            <button type="button" onClick={handleStartClick}>Start!</button>
            <p>Press Start! to begin</p>
          </>
        )}
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
