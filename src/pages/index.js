
import * as React from "react";
import {useState} from "react";



const IndexPage = () => {

  const [emojiObj, setEmojiObj] = useState({});
  const [isStarted, setIsStarted] = useState(false);
  const [display, setDisplay] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [guess, setGuess] = useState("");

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
    setEmojiObj(emojiPuzzles[randomNumber]);
    console.log("Randomized Emoji Obj",emojiPuzzles[randomNumber],"actual emoji obj=>",emojiObj);
    setIsStarted(true);
  }
  
  const handleFormSubmit = (guess, answer)=>{

    console.log('Guess=>', guess, 'Answer=>', answer);
    setIsSubmitted(true);
    if(guess === answer){
      setDisplay("YAY you Won!");
    }else{
      setDisplay("WRONG ANSWER");
    }
    
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
            {emojiObj.emojis.map((item, i)=>(
              <p key={i}>{item}</p>
            ))}
            <form onSubmit={()=>handleFormSubmit(guess,emojiObj.answer)}>
              <input type="text" onChange={(event)=>setGuess(event.target.value)}/>
              <button type="submit"> Submit Answer </button>
            </form>
            {isSubmitted&& (<p>{display}</p>)}
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
