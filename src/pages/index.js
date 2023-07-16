
import * as React from "react";
import {useState} from "react";
import './index.css';


const IndexPage = () => {

  const [movie, setMovie] = useState({});
  const [isStarted, setIsStarted] = useState(false);
  const [display, setDisplay] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [guess, setGuess] = useState("");
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [movieList, setMovieList] = useState([]);

  
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const handleStartClick = (event)=>{
    fetchPictures();
    event.preventDefault();
    setIsSubmitted(false);
    const randomMovie = generateRandomNumber(0, movieList.length-1);
    setMovie(movieList[randomMovie]);
    console.log("Randomized Emoji Obj",movieList[randomMovie],"actual emoji obj=>",movie);
    setIsStarted(true);
    setGuess('')
  }
  
  const handleFormSubmit = (event,guess, answer)=>{
    event.preventDefault();
    const dateGuess = new Date(guess);
    const dateAnswer = new Date(answer);
    console.log('Guess=>', dateGuess, 'Answer=>', dateAnswer);
    setIsSubmitted(true);
    if(dateGuess.toDateString() === dateAnswer.toDateString()){
      setRightAnswers([...rightAnswers, guess]);
      setDisplay("YAY you Won!");
    }else{
      setWrongAnswers([...wrongAnswers, guess]);
      setDisplay("WRONG! Better luck next time :)")
      
    }
    
  }

  const fetchPictures = ()=>{
    const apiKey = '09c67d402dfdbe50f372fac244cf4528';

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results.map((movie) => {
          return {
            title: movie.title,
            release_date:movie.release_date,
            image: movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : '',
          };
        });
        console.log(movies);
        setMovieList(movies);
      })
      .catch((error) => {
        console.log(error);
      });



  }
  
  React.useEffect(()=>{
    fetchPictures();
  }, []);
  
  return (
    <div id="container">
      <div id="headerContainer">
        <h1>Guess the release date!</h1>
        <p>Guess the date this movie was released</p>
        
        
      </div>
      <div id="gameContainer">
        {isStarted? (
          <>
            <div id="emojiContainer">
              <img alt="Picture had trouble loading" src={movie.image}/>
              <h1>{movie.title}</h1>
            </div>
            <form onSubmit={(event)=>handleFormSubmit(event,guess,movie.release_date)}>
              <input value={guess} type="date" onChange={(event)=>setGuess(event.target.value)}/>
              <button id="submitBtn"type="submit"> Submit Guess </button>
            </form>
            {isSubmitted&& (
              <>
                <p>{display}</p>
                <button onClick={handleStartClick}>Try Again</button>
              </>
            )}
            <p>Wrong answers - {wrongAnswers.length}: {wrongAnswers?.map(answer=>answer+", ")}</p>
            <p>Right answers - {rightAnswers.length}: {rightAnswers?.map(answer=>answer+", ")}</p>
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
