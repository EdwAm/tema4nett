import React, {useState} from 'react'
import './App.css';
import characters from "./components/GameOfThrones";
import Character from "./components/Character";
import './components/characters.css'


const Got = () => {

    const [stateCharacters, setStateCharacters] = useState(characters.characters)
    //const [favourites, setFavourites] = useState([])
    
    //const filterCharacter = (e) => {
      //setStateCharacters(characters.filter( c => c.includes(e.target.value)))}

      const removeCharacter = (e) => {
        setStateCharacters(stateCharacters.filter( c => c.characterName !== e ))}

      // const addFavoritt = (indeks) => {
      //   setFavourites([...favourites, stateCharacters.characterName[indeks]])  
      //   console.log(favourites)
      // }


    return (
        <div className="main">
            <h1>Characters in Game Of Thrones</h1>
            <p>Trykk på bildet for å fjerne karakterer</p>
            {/* <div classname="sokeres">
                <input onInput={filterCharacter}/> 
            </div> */}
            
            <div className="characters">
                
                {stateCharacters.map( (c, index) =>
                 <Character 
                 key={index} 
                 name={c.characterName} 
                 img={c.characterImageFull} 
                 house={c.houseName}
                 actor={c.actorName} 
                 onClick={removeCharacter}
                //  onClick={addFavoritt}
                />
             )}
            </div>
        </div>
    )
}


export default Got